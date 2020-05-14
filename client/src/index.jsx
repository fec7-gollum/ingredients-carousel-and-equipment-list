import React from 'react';
import ReactDOM from 'react-dom';
import Parse from './components/parse';
import IngredientList from './components/IngredientList';
import IngredientImgs from './components/IngredientImgs';
import buttons from '../dist/styles/buttons';
import * as styles from './components/Styles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      isSlid: false,
      listButton: buttons.list_clicked,
      imgButton: buttons.imgs_unclicked,
    };
  }

  componentDidMount() {
    Parse.getIngredients.call(this)
      .then((res) => { this.setState({ ingredients: res }); });
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.value === 'IngredientImgs') {
      this.setState({
        isSlid: true,
        listButton: buttons.list_unclicked,
        imgButton: buttons.imgs_clicked,
      });
    }
    if (e.target.value === 'IngredientList') {
      this.setState({
        isSlid: false,
        listButton: buttons.list_clicked,
        imgButton: buttons.imgs_unclicked,
      });
    }
  }

  render() {
    const {
      ingredients,
      listButton,
      imgButton,
      isSlid,
    } = this.state;
    return (
      <styles.Inner>
        <styles.Header>
          <styles.Title>Ingredients</styles.Title>
          <div>
            <styles.TabButtons type="image" src={listButton} alt="" onClick={(e) => this.handleClick(e)} id="listButton" value="IngredientList" label="List" />
            <styles.TabButtons type="image" src={imgButton} alt="" onClick={(e) => this.handleClick(e)} id="imgButton" value="IngredientImgs" label="Img" />
          </div>
        </styles.Header>
        <styles.Grid>
          <styles.LeftCover> </styles.LeftCover>
          <styles.Scroller isSlid={isSlid}>
            <IngredientList ingredients={ingredients} />
            <IngredientImgs ingredients={ingredients} />
          </styles.Scroller>
          <styles.RightCover> </styles.RightCover>
        </styles.Grid>
      </styles.Inner>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
