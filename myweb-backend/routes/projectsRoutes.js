const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/ProjectsController');

router.post('/', ProjectsController.create);
router.get('/', ProjectsController.findAll);
router.get('/:id', ProjectsController.findOne);
router.put('/:id', ProjectsController.update);
router.delete('/:id', ProjectsController.delete);

module.exports = router;
