const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-route');

const server = express();

const session = require('express-session');

const sessionConfig = {
    name: 'new Session',
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
};

server.use(helmet());
server.use(express.json()); // IMPORTANT to .json your server
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use(session(sessionConfig));

server.get('/', (req, res) => {
    res.json({
        message: 'It is going well'
    })
});


module.exports = server;