const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Gallery = sequelize.define('Gallery', {
  album_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image_path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  uploaded_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'gallery',
  timestamps: false
});

module.exports = Gallery;
