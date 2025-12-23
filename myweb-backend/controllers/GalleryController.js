const GalleryService = require('../services/GalleryService');

exports.create = async (req, res) => {
  try {
    const data = await GalleryService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await GalleryService.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await GalleryService.update(req.params.id, req.body);
    if (!data) return res.status(404).json({ message: 'Gallery item not found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await GalleryService.delete(req.params.id);
    if (!data) return res.status(404).json({ message: 'Gallery item not found' });
    res.json({ message: 'Gallery item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
