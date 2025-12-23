const express = require('express');
const router = express.Router();
const TimelineController = require('../controllers/TimelineController');

router.post('/', TimelineController.create);
router.get('/', TimelineController.findAll);
router.put('/:id', TimelineController.update);
router.delete('/:id', TimelineController.delete);

module.exports = router;
