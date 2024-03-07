const { Board, sequelize } = require('../models/Board')
const boardService = {
  create: async function (data) {
    await sequelize.sync()
    const board = await Board.create(data)
    return board
  },
  remove: async function (id) {
    await sequelize.sync()
    const result = await Board.destroy({ where: { id: id } })
    return result
  },
  update: async function (data) {
    await sequelize.sync()
    const result = await Board.update(data, { where: { id: data.id } })
    return result
  },
  get: async function (id) {
    await sequelize.sync()
    const result = await Board.findByPk(id)
    return result
  },
  getAll: async function () {
    await sequelize.sync()
    const result = await Board.findAll()
    return result
  }
}
module.exports = boardService
