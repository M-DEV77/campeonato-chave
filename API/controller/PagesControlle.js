
const links = require('../../views/utils/navLink');
const input = require('../../views/utils/inputs');
module.exports = class Page{

   static  async Home(req,res){
    res.render("pages/home",{links});
   }
   static  async Erro(req,res){
    res.render("pages/404",{links});
   }
   static  async CriarCampeonato(req,res){
    res.render("pages/criarCompeonato",{links,input});
   }
   
  }