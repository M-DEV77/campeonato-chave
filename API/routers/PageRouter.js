const { Home } = require('../controller/PagesControlle');

const Page = require('../controller/PagesControlle');
const router = require('express').Router();


router.get("/",Page.Home);
router.get("/criarCampeonato",Page.CriarCampeonato);
module.exports = router