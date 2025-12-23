const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Projects = sequelize.define('Projects', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  image_path: {
    type: DataTypes.STRING,
    allowNull: true
  },
  meta: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  tableName: 'projects',
  timestamps: false
});

module.exports = Projects;
