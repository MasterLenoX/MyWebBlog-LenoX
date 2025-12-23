const express = require('express');
const router = express.Router();
const HeroController = require('../controllers/HeroController');

router.post('/', HeroController.create);
router.get('/', HeroController.findAll);
router.put('/:id', HeroController.update);
router.delete('/:id', HeroController.delete);

module.exports = router;
