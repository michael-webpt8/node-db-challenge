const express = require('express');
const router = express.Router({ mergeParams: true });
const dbResources = require('./resources-model');

router.get('/', async (req, res) => {
  try {
    const id = req.params.id;
    const resources = await dbResources.getResources(id);
    if (resources) {
      res.status(200).json(resources);
    } else {
      res.status(400).json({ message: 'cannot get resources' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: 'server error' });
  }
});

router.post('/', async (req, res) => {
  //const id = req.params.id;
  if (!req.body.resource_name) {
    res.status(400).json({ message: 'missing resource name' });
  }
  const newResource = {
    resource_name: req.body.resource_name,
    resource_description: req.body.resource_description || null,
    projects_id: req.params.id,
  };
  try {
    console.log('id', id);
    const resource = await dbResources.addResource(newResource);
    res.status(201).json(resource);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: 'server error' });
  }
});

module.exports = router;
