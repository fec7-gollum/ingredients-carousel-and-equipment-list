const express = require('express');
const path = require('path');
const { db, Recipe, Ingredient, Equipment } = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'))

app.get('/api/ingredients/:id', (req, res) => {
  id = path.basename(req.url);
  Ingredient.findAll({where: {recipeId: id}})
  .then(ingredients => {
    res.status('200')
    res.send(ingredients);
    res.end();
  })
  .catch(err => {
    console.error(err);
    res.send(err);
    res.end();
  })
})

app.get('/api/equipment/:id', (req, res) => {
  id = path.basename(req.url);
  Equipment.findAll({where: {recipeId: id}})
  .then(ingredients => {
    res.status('200')
    res.send(ingredients);
    res.end();
  })
  .catch(err => {
    console.error(err);
    res.send(err);
    res.end();
  })
})

app.listen(port, () => console.log('listening on port ' + port))