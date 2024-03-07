const { sequelize, Model, DataTypes } = require('./dbconfig')

class User extends Model {}
User.init(
  {
    username: { type: DataTypes.STRING, unique: true },
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: 'user' }
)

module.exports = {
  User,
  sequelize,
}
