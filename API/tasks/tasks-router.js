const express = require('express');
const router = express.Router({ mergeParams: true });
const dbTasks = require('./tasks-model');

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await dbTasks.getTasks();
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: 'server error' });
  }
});

router.post('/:id/tasks', async (req, res) => {
  const id = req.params.id;
  const newTask = {
    task_description: req.body.task_description,
    task_note: req.body.task_note || null,
    task_completed: req.body.task_completed || false,
    projects_id: id,
  };
  try {
    const task = await dbTasks.addTasks(newTask);
    res.status(201).json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: 'server error' });
  }
});

module.exports = router;
