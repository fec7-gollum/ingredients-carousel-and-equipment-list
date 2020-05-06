import React from 'react';
import PropTypes from 'prop-types';

const IngredientList = ({ ingredients }) => (
  <ul>
    {ingredients.map((ingredient) => (
      <li>
        <input type="checkbox" id={ingredient.id} />
        <label htmlFor={ingredient.id}>{ingredient.description}</label>
      </li>
    ))}
  </ul>
);

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf.isRequired,
};

export default IngredientList;
