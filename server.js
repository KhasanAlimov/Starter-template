require('dotenv').config();
const express = require('express');
const app = express();
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const routes = require('./routes.js');

// Настройки HandleBars
app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true}));

routes(app);


try {
  app.listen(process.env.PORT, () => {
    console.log(`Сервер запущен в порту ${process.env.PORT}!`);
  });
}catch (e) {
  console.log(e);
}

