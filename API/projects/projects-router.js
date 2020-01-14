const express = require('express');
const router = express.Router();
const dbProjects = require('./projects-model');

router.get('/', async (req, res) => {
  try {
    const projects = await dbProjects.getProjects();
    if (projects) {
      res.status(200).json(projects);
    } else {
      res.status(404).json({ message: 'error finding projects' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: 'server error' });
  }
});

router.post('/', async (req, res) => {
  //   const data = req.body;
  try {
    if (!req.body.project_name) {
      res.status(400).json({ message: 'need project name required' });
    }
    const newProject = {
      project_name: req.body.project_name || null,
      project_description: req.body.project_description || null,
      project_completed: req.body.project_completed || false,
    };
    const project = await dbProjects.addProject(newProject);

    res.status(201).json(project);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: 'server error' });
  }
});

module.exports = router;
