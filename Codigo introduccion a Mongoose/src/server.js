const express = require('express');

//Inicializacion
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
app.use(require('./routes/crud.routes'));

module.exports = app;