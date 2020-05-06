import React from 'react';
import PropTypes from 'prop-types';

const IngredientImgs = ({ ingredients }) => (
  <div id="IngredientImgs">
    {ingredients.map((ingredient) => (<img src={ingredient.imgUrl} alt="" />))}
  </div>
);

IngredientImgs.propTypes = {
  ingredients: PropTypes.arrayOf.isRequired,
};

export default IngredientImgs;
