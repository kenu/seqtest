const { sequelize, Model, DataTypes } = require('./dbconfig')

class Board extends Model {}
Board.init(
  {
    boardname: { type: DataTypes.STRING, unique: false },
    content: DataTypes.STRING(4000),
  },
  { sequelize, modelName: 'board' }
)

module.exports = {
  Board,
  sequelize,
}
