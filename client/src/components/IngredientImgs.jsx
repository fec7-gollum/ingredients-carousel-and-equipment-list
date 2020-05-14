import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Styles';

const IngredientImgs = ({ ingredients }) => (
  <styles.IngImgDiv>
    {ingredients.map((ingredient) => (<styles.IngImg src={ingredient.imgUrl} alt="" />))}
  </styles.IngImgDiv>
);

IngredientImgs.propTypes = {
  ingredients: PropTypes.arrayOf.isRequired,
};

export default IngredientImgs;
