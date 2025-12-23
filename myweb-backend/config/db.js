const Sequelize = require('sequelize');

const sequelize = new Sequelize('myblog_nodedb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
