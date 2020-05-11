import React from 'react';
import ReactDOM from 'react-dom';
import Parse from './components/parse';
import IngredientList from './components/IngredientList';
import IngredientImgs from './components/IngredientImgs';

const handleClick = (e) => {
  e.preventDefault();
  if (e.target.value === 'IngredientImgs') {
    // document.getElementById('IngredientImgs').style.visibility = 'visible';
    // document.getElementById('IngredientList').style.visibility = 'hidden';
    document.getElementById('scroller').classList.add('slide');
  }
  if (e.target.value === 'IngredientList') {
    // document.getElementById('IngredientList').style.visibility = 'visible';
    // document.getElementById('IngredientImgs').style.visibility = 'hidden';
    document.getElementById('scroller').classList.remove('slide');
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
      <div id="inner">
        <div id="header">
          <div id="title">Ingredients</div>
          <div id="buttons">
            <button type="button" onClick={(e) => handleClick(e)} id="listButton" value="IngredientList" label="List">List</button>
            <button type="button" onClick={(e) => handleClick(e)} id="imgButton" value="IngredientImgs" label="Img">Img</button>
          </div>
        </div>
        <div id="grid">
          <div id="cover-left"> </div>
          <div id="scroller">
            <IngredientList ingredients={ingredients} />
            <IngredientImgs ingredients={ingredients} />
          </div>
          <div id="cover-right"> </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
