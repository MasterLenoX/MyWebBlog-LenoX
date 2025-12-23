const express = require('express');
const router = express.Router();
const SkillsController = require('../controllers/SkillsController');

router.post('/', SkillsController.create);
router.get('/', SkillsController.findAll);
router.put('/:id', SkillsController.update);
router.delete('/:id', SkillsController.delete);

module.exports = router;
