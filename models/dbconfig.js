const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('devdb', 'devuser', 'devpass', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
})

module.exports = {
  sequelize,
  Model,
  DataTypes,
}
