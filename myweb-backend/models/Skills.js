const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Skills = sequelize.define('Skills', {
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  meta: {
    type: DataTypes.JSON,
    allowNull: true
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'skills',
  timestamps: false
});

module.exports = Skills;
