const { AppDataSource } = require('../data-source');
const { User } = require('../entity/User');
const ApiError = require('../utils/ApiError');

const userRepository = AppDataSource.getRepository(User);

class UserController {
    // [GET] /user/my-info
    async getMyInfo(req, res, next) {
        const { id } = req.userToken;

        const user = await userRepository.findOneBy({
            id,
        });

        if (user) {
            res.status(401).json({
                id: user.id,
                lastName: user.lastName,
                firstName: user.firstName,
                birthday: user.birthday,
                role: user.role,
                homeTown: user.homeTown,
                school: user.school,
                workplace: user.workplace,
                avatar: user.avatar,
                isPrivate: user.isPrivate,
            });
        } else {
            res.clearCookie('token');
            res.clearCookie('refreshToken');
            res.status(404).json({
                message: 'The user does not exist',
            });
        }
    }
}

module.exports = new UserController();
