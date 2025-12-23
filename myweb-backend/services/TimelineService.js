const Timeline = require('../models/Timeline');

class TimelineService {
  async create(data) {
    return await Timeline.create(data);
  }

  async findAll() {
    return await Timeline.findAll();
  }

  async findById(id) {
    return await Timeline.findByPk(id);
  }

  async update(id, data) {
    const entry = await Timeline.findByPk(id);
    if (!entry) return null;
    return await entry.update(data);
  }

  async delete(id) {
    const entry = await Timeline.findByPk(id);
    if (!entry) return null;
    return await entry.destroy();
  }
}

module.exports = new TimelineService();
