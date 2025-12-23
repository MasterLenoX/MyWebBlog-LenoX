const SkillsService = require('../services/SkillsService');

exports.create = async (req, res) => {
  try {
    const data = await SkillsService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await SkillsService.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await SkillsService.update(req.params.id, req.body);
    if (!data) return res.status(404).json({ message: 'Skill not found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await SkillsService.delete(req.params.id);
    if (!data) return res.status(404).json({ message: 'Skill not found' });
    res.json({ message: 'Skill deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
