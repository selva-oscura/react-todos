const React = require('react');
const Todo = require('./Todo.js');

const TodoList = ({todos, check, remove}) => {
  const todoList = todos.map((todo) => {
  	if(!todo.checked){
			return (<Todo todo={todo} key={todo.id} remove={remove} check={check} />);
  	}
	});
	const doneList = todos.map((todo) => {
		if(todo.checked){
			return (<Todo todo={todo} key={todo.id} remove={remove} check={check} />);
		}
	});
  return (
    <div className="row">
      <div className="col s12">
        <ul className="collection">
          {todoList}
          {doneList}
        </ul>
      </div>
    </div>
  )
}

module.exports = TodoList;