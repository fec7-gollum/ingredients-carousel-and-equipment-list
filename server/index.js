const express = require('express');
const path = require('path');
const cors = require('cors');
const { Ingredient, Equipment } = require('../database/index.js');


const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use('/:id', express.static(`${__dirname}/../client/dist`, {
  setHeaders: (res) => {
    res.set('Access-Control-Allow-Origin', '*');
  },
}));
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/ingredients/:id', (req, res) => {
  const id = path.basename(req.url);
  Ingredient.findAll({ where: { recipeId: id } })
    .then((ingredients) => {
      res.status('200');
      res.send(ingredients);
      res.end();
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
      res.end();
    });
});

app.get('/api/equipment/:id', (req, res) => {
  const id = path.basename(req.url);
  Equipment.findAll({ where: { recipeId: id } })
    .then((ingredients) => {
      res.status('200');
      res.send(ingredients);
      res.end();
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
      res.end();
    });
});

module.exports = app;

app.listen(port, () => console.log(`listening on port ${port}`));
