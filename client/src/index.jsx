import React from 'react';
import ReactDOM from 'react-dom';
import Parse from './components/parse.jsx';
import IngredientList from './components/ingredientList.jsx';
import IngredientImgs from './components/IngredientImgs.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      equipment: []
    };
  }

  componentDidMount() {
    Parse.getIngredients.call(this, 1)
      .then(res => {
        this.setState({
          ingredients: res
        })
      });
    Parse.getEquipment.call(this, 1)
      .then(res => {
        this.setState({
          equipment: res
        })
      });
  }

  render() {
    return (
      <div>
      <IngredientList ingredients={this.state.ingredients}/>
      <IngredientImgs ingredients={this.state.ingredients}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));