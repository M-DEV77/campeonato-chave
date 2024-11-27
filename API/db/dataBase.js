const {Sequelize}=require('sequelize');
const sequelize = new Sequelize("dataBase", "user","pass",{
  dialect:'sqlite',
  host:'./API/db/db.sqlite'
})

module.exports = sequelize;