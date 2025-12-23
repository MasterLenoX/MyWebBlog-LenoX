const TimelineService = require('../services/TimelineService');

exports.create = async (req, res) => {
  try {
    const data = await TimelineService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await TimelineService.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await TimelineService.update(req.params.id, req.body);
    if (!data) return res.status(404).json({ message: 'Timeline entry not found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await TimelineService.delete(req.params.id);
    if (!data) return res.status(404).json({ message: 'Timeline entry not found' });
    res.json({ message: 'Timeline entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
