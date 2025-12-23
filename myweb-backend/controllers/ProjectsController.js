const ProjectsService = require('../services/ProjectsService');

exports.create = async (req, res) => {
  try {
    const data = await ProjectsService.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await ProjectsService.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    // Determine if slug or id
    const param = req.params.id;
    let data;
    if (isNaN(param)) {
      data = await ProjectsService.findBySlug(param);
    } else {
      data = await ProjectsService.findById(param);
    }

    if (!data) return res.status(404).json({ message: 'Project not found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await ProjectsService.update(req.params.id, req.body);
    if (!data) return res.status(404).json({ message: 'Project not found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await ProjectsService.delete(req.params.id);
    if (!data) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
