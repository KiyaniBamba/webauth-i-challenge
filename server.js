const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('./users/users-route');

const server = express();


server.use(helmet());
server.use(express.json()); // IMPORTANT to .json your server
server.use(cors());

server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.json({
        message: 'It is going well'
    })
});


module.exports = server;