import React from 'react';
import ReactDOM from 'react-dom';
import Parse from './components/parse';
import IngredientList from './components/IngredientList';
import IngredientImgs from './components/IngredientImgs';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      equipment: [],
    };
  }

  componentDidMount() {
    Parse.getIngredients.call(this, 1)
      .then((res) => { this.setState({ ingredients: res }); });
    Parse.getEquipment.call(this, 1)
      .then((res) => { this.setState({ equipment: res }); });
  }

  render() {
    const { ingredients } = this.state;
    return (
      <div>
        <IngredientList ingredients={ingredients} />
        <IngredientImgs ingredients={ingredients} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
