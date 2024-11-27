const { Model, DataTypes } = require('sequelize');
class Campeonato extends Model{};
const sequelize = require('./db/dataBase');

User.init(
  {
      campeonatoNome:
      {
        type:DataTypes.STRING
      },
      campeonatoTipo:
      {
        type:DataTypes.STRING
      },
   
  },
  {
    sequelize,
    modelName:"campeonato"
  }
);
module.exports = Campeonato;