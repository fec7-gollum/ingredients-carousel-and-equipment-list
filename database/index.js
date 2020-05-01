const mysql = require('mysql2');
const { Sequelize, Model, DataTypes } = require('sequelize');

const db = new Sequelize('recipes', 'root', '', {
  dialect: 'mysql'
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Recipe = db.define('recipe', {})

const Ingredient = db.define('ingredient', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Ingredient.belongsTo(Recipe)

const Equipment = db.define('equipment', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  purchaseUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Equipment.belongsTo(Recipe)

Recipe.sync()
Ingredient.sync()
Equipment.sync()

module.exports = {
  db,
  Recipe,
  Ingredient,
  Equipment,
}