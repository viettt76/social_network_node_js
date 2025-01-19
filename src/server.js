require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { Server } = require('socket.io');
const http = require('http');
const { AppDataSource } = require('./data-source');
const routes = require('./routes');
const { errorHandler } = require('./utils/errorHandler');
const authMiddleware = require('./middlewares/authMiddleware');
require('express-async-errors');

AppDataSource.initialize()
    .then(async () => {
        const port = process.env.PORT || 8080;
        const app = express();

        app.use(express.json());
        app.use(
            cors({
                origin: process.env.FRONTEND_URL,
                credentials: true,
            }),
        );
        app.use(cookieParser());

        const server = http.createServer(app);
        const io = new Server(server, {
            cors: {
                origin: process.env.FRONTEND_URL,
                credentials: true,
            },
        });

        app.use(authMiddleware);

        routes(app, io);

        app.use(errorHandler);

        server.listen(port, () => {
            console.log('Server running on port ' + port);
        });
    })
    .catch((error) => console.log(error));
