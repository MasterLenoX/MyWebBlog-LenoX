const Gallery = require('../models/Gallery');

class GalleryService {
  async create(data) {
    return await Gallery.create(data);
  }

  async findAll() {
    return await Gallery.findAll();
  }

  async findById(id) {
    return await Gallery.findByPk(id);
  }

  async update(id, data) {
    const item = await Gallery.findByPk(id);
    if (!item) return null;
    return await item.update(data);
  }

  async delete(id) {
    const item = await Gallery.findByPk(id);
    if (!item) return null;
    return await item.destroy();
  }
}

module.exports = new GalleryService();
