const React = require('react');
const ReactDOM = require('react-dom');
const Title = require('./Title.js');
const TodoForm = require('./TodoForm.js');
const TodoList = require('./TodoList');

const App = () => (
	<div>
		<Title />
		<TodoForm />
		<TodoList />
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'))