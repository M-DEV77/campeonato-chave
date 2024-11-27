const { Model, DataTypes } = require('sequelize');
class User extends Model{};
const sequelize = require('./db/dataBase');

User.init(
  {
    userName:{
      type:DataTypes.STRING
    },
    email:{
      type:DataTypes.STRING
    },
    password:{
      type:DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName:"user"
  }
);
module.exports = User;