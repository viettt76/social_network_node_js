const Joi = require('joi');
const validationHandler = require('../utils/validationHandler');

const getUserInfo = (req, res, next) => {
    const correctValidation = Joi.object({
        userId: Joi.string().uuid().required(),
    });

    validationHandler(correctValidation, req.params, res, next);
};

module.exports = {
    getUserInfo,
};
