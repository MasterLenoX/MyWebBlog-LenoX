const express = require('express');
const router = express.Router();
const GalleryController = require('../controllers/GalleryController');

router.post('/', GalleryController.create);
router.get('/', GalleryController.findAll);
router.put('/:id', GalleryController.update);
router.delete('/:id', GalleryController.delete);

module.exports = router;
