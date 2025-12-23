const Skills = require('../models/Skills');

class SkillsService {
  async create(data) {
    return await Skills.create(data);
  }

  async findAll() {
    return await Skills.findAll();
  }

  async findById(id) {
    return await Skills.findByPk(id);
  }

  async update(id, data) {
    const skill = await Skills.findByPk(id);
    if (!skill) return null;
    return await skill.update(data);
  }

  async delete(id) {
    const skill = await Skills.findByPk(id);
    if (!skill) return null;
    return await skill.destroy();
  }
}

module.exports = new SkillsService();
