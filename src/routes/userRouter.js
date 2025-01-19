const express = require('express');
const userController = require('../controllers/UserController');
const userValidations = require('../validations/userValidations');

const userRouter = (io) => {
    const router = express.Router();

    router.get('/my-info', userController.getMyInfo);

    return router;
};

module.exports = userRouter;
