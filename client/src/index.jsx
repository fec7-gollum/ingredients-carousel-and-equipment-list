import React from 'react';
import ReactDOM from 'react-dom';
import Parse from './components/parse';
import IngredientList from './components/IngredientList';
import IngredientImgs from './components/IngredientImgs';
import buttons from '../dist/styles/buttons';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      listButton: buttons.list_clicked,
      imgButton: buttons.imgs_unclicked,
    };
  }

  componentDidMount() {
    Parse.getIngredients.call(this, 1)
      .then((res) => { this.setState({ ingredients: res }); });
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.value === 'IngredientImgs') {
      // document.getElementById('IngredientImgs').style.visibility = 'visible';
      // document.getElementById('IngredientList').style.visibility = 'hidden';
      document.getElementById('scroller').classList.add('slide');
      this.setState({
        listButton: buttons.list_unclicked,
        imgButton: buttons.imgs_clicked,
      });
    }
    if (e.target.value === 'IngredientList') {
      // document.getElementById('IngredientList').style.visibility = 'visible';
      // document.getElementById('IngredientImgs').style.visibility = 'hidden';
      document.getElementById('scroller').classList.remove('slide');
      this.setState({
        listButton: buttons.list_clicked,
        imgButton: buttons.imgs_unclicked,
      });
    }
  }

  render() {
    const { ingredients, listButton, imgButton } = this.state;
    return (
      <div id="inner">
        <div id="header">
          <div id="title">Ingredients</div>
          <div id="buttons">
            <input type="image" src={listButton} alt="" onClick={(e) => this.handleClick(e)} id="listButton" value="IngredientList" label="List" />
            <input type="image" src={imgButton} alt="" onClick={(e) => this.handleClick(e)} id="imgButton" value="IngredientImgs" label="Img" />
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
