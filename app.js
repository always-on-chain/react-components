
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList list={['bananas', 'tomato', 'cookies', 'milk']}/>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      'textDecoration': this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
      // <li>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => {
  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
  <ul>
    {props.list.map(item =>
      <GroceryListItem item={item}/>
    )}
  </ul>
  )
};

ReactDOM.render(<App/>, document.getElementById('app'));

