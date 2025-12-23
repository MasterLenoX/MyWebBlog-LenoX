const Projects = require('../models/Projects');

class ProjectsService {
  async create(data) {
    return await Projects.create(data);
  }

  async findAll() {
    return await Projects.findAll();
  }

  async findById(id) {
    return await Projects.findByPk(id);
  }

  async findBySlug(slug) {
    return await Projects.findOne({ where: { slug } });
  }

  async update(id, data) {
    const project = await Projects.findByPk(id);
    if (!project) return null;
    return await project.update(data);
  }

  async delete(id) {
    const project = await Projects.findByPk(id);
    if (!project) return null;
    return await project.destroy();
  }
}

module.exports = new ProjectsService();
