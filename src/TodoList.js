const React = require('react');
const Todo = require('./Todo.js');

const TodoList = ({todos, remove}) => {
  // todos === fake data for starting off.....
  var todos = [
    'learn React',
    'look into this.state',
    'learn Flux',
    'integrate app with Firebase',
    'overthrow small first-world country'
  ].map((todo, index)=> { return {text:todo, id: index}})
  console.log('todos', todos);
  const todoList = todos.map((todo) => {
		return (<Todo todo={todo} key={todo.id} remove={remove} />);
	});

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