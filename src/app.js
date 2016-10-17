const React = require('react');
const ReactDOM = require('react-dom');
const Title = require('./Title.js');

const App = () => (
	<div>
		<Title />
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'))