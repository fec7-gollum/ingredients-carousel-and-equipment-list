import React from 'react';
import ReactDOM from 'react-dom';
import Parse from './components/parse.jsx';

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
      <div>you should be able to see this</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));