const React = require('react');
const Todo = require('./Todo.js');

const TodoList = ({todos, remove}) => {
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