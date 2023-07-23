const express = require('express');
const app = express();
const path = require('path');

//Rutas del front

// Rutas view
app.use('/', express.static(path.resolve('views','home')));
app.use('/css', express.static(path.resolve('views','css')));
app.use('/js', express.static(path.resolve('views','js')));
app.use('/img', express.static(path.resolve('views','img')));
app.use('/cv', express.static(path.resolve('views','cv')));


module.exports = app;


