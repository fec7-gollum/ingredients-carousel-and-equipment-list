import React from 'react';

let IngredientsImgs = (props) => {
  return (
    <div>
      {props.ingredients.map(ingredient => {
        return (<img src={ingredient.imgUrl}/>)
      })}
    </div>
  )
}

export default IngredientsImgs;