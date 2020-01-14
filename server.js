const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const resourceRouter = require('./API/resources/resources-router');
const projectsRouter = require('./API/projects/projects-router');
const tasksRouter = require('./API/tasks/tasks-router');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/projects', tasksRouter);
server.use('/api/projects/:id/resources', resourceRouter);

server.get('/', (req, res) => {
  res.send('api is up and running');
});

module.exports = server;
