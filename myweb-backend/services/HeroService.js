const Hero = require('../models/Hero');

class HeroService {
  async create(data) {
    return await Hero.create(data);
  }

  async findAll() {
    return await Hero.findAll();
  }

  async findById(id) {
    return await Hero.findByPk(id);
  }

  async update(id, data) {
    const hero = await Hero.findByPk(id);
    if (!hero) return null;
    return await hero.update(data);
  }

  async delete(id) {
    const hero = await Hero.findByPk(id);
    if (!hero) return null;
    return await hero.destroy();
  }
}

module.exports = new HeroService();
