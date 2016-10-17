const React = require('react');
const ReactDOM = require('react-dom');
const Title = require('./Title.js');
const TodoList = require('./TodoList');

const App = () => (
	<div>
		<Title />
		<TodoList />
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'))