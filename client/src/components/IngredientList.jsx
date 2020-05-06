import React from 'react';
import PropTypes from 'prop-types';

const IngredientList = ({ ingredients }) => (
  <div id="IngredientList">
    <ul>
      {ingredients.map((ingredient) => (
        <li>
          <input type="checkbox" id={ingredient.id} />
          <label htmlFor={ingredient.id}>{ingredient.description}</label>
        </li>
      ))}
    </ul>
  </div>
);

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf.isRequired,
};

export default IngredientList;
