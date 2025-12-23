const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Timeline = sequelize.define('Timeline', {
  type: {
    type: DataTypes.ENUM('work', 'education'),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company_or_school: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_from: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  date_to: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  meta: {
    type: DataTypes.JSON,
    allowNull: true
  },
  image_path: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'timeline',
  timestamps: false
});

module.exports = Timeline;
