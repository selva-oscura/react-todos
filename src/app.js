const React = require('react');
const ReactDOM = require('react-dom');
const Title = require('./Title.js');
const TodoForm = require('./TodoForm.js');
const TodoList = require('./TodoList');
window.id = 0;


class App extends React.Component{
	constructor(props){
		// pass props to parent class
		super(props);
		// set initial state
		this.state = {
			data: []
		}
	}
	// add todo handler
	addTodo(value){
		const todo = {text: value, id: window.id++}
		// update data
		this.state.data.push(todo);
		// update state
		this.setState({data: this.state.data});
	}
	// handle remove
	removeTodo(id){
		// Filter all todos except the one to be removed
		const remaining = this.state.data.filter((todo) => {
			if(todo.id !== id) return todo;
		});
		// update state with filter
		this.setState({data: remaining});
	}
	render(){	
		return (
		  <div>
		    <Title />
		    <TodoForm addTodo={this.addTodo.bind(this)} />
		    <TodoList 
		    	todos={this.state.data}
		    	remove={this.removeTodo.bind(this)}
		    />
		  </div>
		)
	}
};

ReactDOM.render(<App />, document.getElementById('app'))