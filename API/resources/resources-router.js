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

module.exports = router;
