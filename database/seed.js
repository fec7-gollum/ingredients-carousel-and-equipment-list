const faker = require('faker');
const { Recipe, Ingredient, Equipment } = require('./index.js');

let seed = () => {
  for (let x = 0; x < 10; x++) {
    for (let i = 0; i < 10; i++){
      let recipe = new Recipe({id: (i + 1) + (x * 10)})
      Recipe.create(recipe)
      .then (() => {
        for (let y = (i * 12); y < ((i * 12) + 12); y++) {
          Ingredient.create({
            description: faker.lorem.words(),
            imgUrl: 'https://max-ross-fec.s3-us-west-2.amazonaws.com/pictures/' + (y + 1),
            recipeId: recipe.dataValues.id
          })
          .then(() => {
            Equipment.create({
              description: faker.lorem.word(),
              imgUrl: 'https://max-ross-fec.s3-us-west-2.amazonaws.com/pictures/' + (y + 121),
              purchaseUrl: 'https://www.amazon.com',
              recipeId: recipe.dataValues.id
            })
          })
        }
      })
    }
  }
}
seed();