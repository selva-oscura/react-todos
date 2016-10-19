import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
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
		const todo = {text: value, id: window.id++, checked:false}
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
	toggleChecked(id){
		// update data
		var todos = this.state.data;
		todos.map((todo) => {
			if(todo.id===id) todo.checked = !todo.checked;
			return todo;
		});
		this.setState({data: todos});
	}
	render(){	
		return (
		  <div>
		    <Title />
		    <TodoForm addTodo={this.addTodo.bind(this)} />
		    <TodoList 
		    	todos={this.state.data}
		    	remove={this.removeTodo.bind(this)}
		    	check={this.toggleChecked.bind(this)}
		    />
		  </div>
		)
	}
};

ReactDOM.render(<App />, document.getElementById('app'))