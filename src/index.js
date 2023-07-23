const express = require("express");
const app =require ('../app.js')
const cors = require('cors');
const mensajeRoute = require("./routes/routes");

app.use(express.json());

app.use("/MS", mensajeRoute);

app.get("/MS", (req, res) => {
    res.send("hola");
  });