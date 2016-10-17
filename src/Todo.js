const React = require('react');

const Todo = (props) => (
	<li className='collection-item'> {props.text}</li>
);

module.exports = Todo;