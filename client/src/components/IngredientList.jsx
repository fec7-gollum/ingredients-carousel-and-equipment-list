import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Styles';

const IngredientList = ({ ingredients }) => (
  <styles.IngListDiv>
    <styles.IngListUl>
      {ingredients.map((ingredient) => (
        <li>
          <styles.IngListCheckbox id={ingredient.id} />
          <label htmlFor={ingredient.id}>{ingredient.description}</label>
        </li>
      ))}
    </styles.IngListUl>
  </styles.IngListDiv>
);

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf.isRequired,
};

export default IngredientList;
