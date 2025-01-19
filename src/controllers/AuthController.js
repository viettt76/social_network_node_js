require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AppDataSource } = require('../data-source');
const { User } = require('../entity/User');
const { Not, IsNull } = require('typeorm');
const saltRounds = 10;

const userRepository = AppDataSource.getRepository(User);

class AuthController {
    // [POST] /auth/signup
    async signup(req, res) {
        const { firstName, lastName, username, password, gender } = req.body;
        const user = await userRepository.findOne({
            where: { username: username },
        });
        if (user) {
            return res.status(400).json({
                message: 'Username already exists',
            });
        } else {
            const hashPassword = bcrypt.hashSync(password, saltRounds);

            await userRepository.save({
                firstName,
                lastName,
                username,
                gender,
                password: hashPassword,
            });

            return res.status(201).json();
        }
    }

    // [POST] /auth/login
    async login(req, res, next) {
        const { username, password } = req.body;

        const user = await userRepository.findOne({
            where: { username },
        });

        if (!user) {
            const userIsDeleted = await userRepository.findOne({
                where: {
                    username,
                    deletedAt: Not(IsNull()),
                },
                withDeleted: true,
            });

            if (userIsDeleted) {
                const checkPassword = bcrypt.compareSync(password, userIsDeleted.password);

                if (checkPassword) {
                    return res.status(410).json({
                        message: 'Your account has been deleted',
                    });
                }

                return res.status(401).json({
                    error: 'Invalid credentials',
                    message: 'The username or password you entered is incorrect.',
                });
            }
            return res.status(401).json({
                error: 'Invalid credentials',
                message: 'The username or password you entered is incorrect.',
            });
        }

        const checkPassword = bcrypt.compareSync(password, user.password);

        if (checkPassword) {
            const jwtSecret = process.env.JWT_SECRET;

            const payload = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
            };

            const token = jwt.sign(payload, jwtSecret);
            const refreshToken = jwt.sign(payload, jwtSecret);

            res.cookie('token', token, {
                httpOnly: true,
                sameSite: 'None',
                secure: true,
                maxAge: 15 * 60 * 1000,
            });
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                sameSite: 'None',
                secure: true,
                maxAge: 15 * 24 * 60 * 60 * 1000,
            });
            res.status(200).json();
        } else {
            res.status(401).json({
                error: 'Invalid credentials',
                message: 'Username or password is incorrect',
            });
        }
    }

    // [POST] /auth/logout
    logout(req, res, next) {
        res.clearCookie('token');
        res.clearCookie('refreshToken');
        res.status(200).json();
    }
}

module.exports = new AuthController();
