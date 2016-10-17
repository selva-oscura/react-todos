const React = require('react');
const Todo = require('./Todo.js');

const TodoList = (todos) => {
  var todoList = [];
  // todos === fake data for starting off.....
  var todos = [
    'learn React',
    'look into this.state',
    'learn Flux',
    'integrate app with Firebase',
    'overthrow small first-world country'
  ];
  for(let i = 0; i<todos.length; i++){
    todoList.push(<Todo key={i} text={todos[i]} />);
  }
  return (
    <div className="row">
      <div className="col s12">
        <ul className="collection">
          {todoList}
        </ul>
      </div>
    </div>
  )
}

module.exports = TodoList;