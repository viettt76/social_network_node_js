const authRouter = require('./authRouter');
const userRouter = require('./userRouter');

const routes = (app, io) => {
    app.use('/auth', authRouter);
    app.use('/user', userRouter(io));
};

module.exports = routes;
