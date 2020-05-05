import React from 'react';

let IngredientList = (props) => {
  return (
  <ul>
  {props.ingredients.map(ingredient => {
      return (
      <li>
        <label>
          <input type="checkbox"/>
          {ingredient.description}
        </label>
      </li>
      )
    })}
  </ul>)
}

export default IngredientList;