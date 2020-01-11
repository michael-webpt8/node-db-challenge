const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const resourceRouter = require('./API/resources/resources-router');

const server = express();
server.use(helmet());
server.use(cors());

server.use('/api/projects/:id/resources', resourceRouter);

server.use('/', (req, res) => {
  res.send('api is up and running');
});

module.exports = server;
