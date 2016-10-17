const React = require('react');
const Todo = require('./Todo.js');

const TodoList = (props) => {
  var todos = [];
  var fakeData = [
    'learn React',
    'look into this.state',
    'learn Flux',
    'integrate app with Firebase',
    'overthrow small first-world country'
  ];
  for(let i = 0; i<fakeData.length; i++){
    todos.push(<Todo key={i} text={fakeData[i]} />);
  }
  return (
    <div className="row">
      <div className="col s12">
        <ul className="collection">
          {todos}
        </ul>
      </div>
    </div>
  )
}

module.exports = TodoList;