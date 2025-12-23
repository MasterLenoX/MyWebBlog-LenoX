const HeroService = require('../services/HeroService');

exports.create = async (req, res) => {
  try {
    const data = await HeroService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await HeroService.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await HeroService.update(req.params.id, req.body);
    if (!data) return res.status(404).json({ message: 'Hero not found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await HeroService.delete(req.params.id);
    if (!data) return res.status(404).json({ message: 'Hero not found' });
    res.json({ message: 'Hero deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
