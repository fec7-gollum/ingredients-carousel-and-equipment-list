import React from 'react';
import ReactDOM from 'react-dom';
import Parse from './components/parse';
import IngredientList from './components/IngredientList';
import IngredientImgs from './components/IngredientImgs';

const handleClick = (e) => {
  e.preventDefault();
  if (e.target.value === 'IngredientImgs') {
    document.getElementById('IngredientImgs').style.visibility = 'visible';
    document.getElementById('IngredientList').style.visibility = 'hidden';
  }
  if (e.target.value === 'IngredientList') {
    document.getElementById('IngredientList').style.visibility = 'visible';
    document.getElementById('IngredientImgs').style.visibility = 'hidden';
  }
};

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
        <button type="button" onClick={(e) => handleClick(e)} id="listButton" value="IngredientList" label="List">List</button>
        <button type="button" onClick={(e) => handleClick(e)} id="imgButton" value="IngredientImgs" label="Img">Img</button>
        <IngredientList ingredients={ingredients} />
        <IngredientImgs ingredients={ingredients} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
