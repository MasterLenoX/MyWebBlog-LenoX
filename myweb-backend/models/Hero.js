const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Hero = sequelize.define('Hero', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  typewriting_text: {
    type: DataTypes.JSON,
    // Storing array of strings as JSON for typewriting effect
    allowNull: true
  },
  profile_image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'hero',
  timestamps: false // The SQL didn't specify timestamps, but usually good to have. I'll stick to SQL provided or default. 
});

module.exports = Hero;
