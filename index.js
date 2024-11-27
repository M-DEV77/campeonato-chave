const express = require('express');
const path = require('path');
const sequelize = require('./API/db/dataBase');
const exhpbs = require('express-handlebars');
const Pages = require('./API/routers/PageRouter');

sequelize.sync().then(() => console.log('banco de dados ok'));
const porta = 3111;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const hbs = exhpbs.create({
  partialsDir: ['views/components'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(Pages);

app.listen(porta, () => {
  console.log(`http://localhost:${port}`);
});
