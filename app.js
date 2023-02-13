const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const entreeRoute = require("./src/routes/entree_route");
const platsRoute = require("./src/routes/plats_routes");
const dessertsRoute = require("./src/routes/desserts_route");
const boissonsRoute = require("./src/routes/boissons_route");
const classiqueRoute = require("./src/routes/classique_route");
const vinsRoute = require("./src/routes/vins_route");

app.use(entreeRoute);
app.use(platsRoute);
app.use(dessertsRoute);
app.use(boissonsRoute);
app.use(classiqueRoute);
app.use(vinsRoute);


// Exemple http://localhost:3000/

app.get("/", (request, response) => {
  response.send("Hello tout va bien!");
});

module.exports = app;