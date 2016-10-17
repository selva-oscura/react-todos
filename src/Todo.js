const React = require('react');

const Todo = (props) => (
  <li className='collection-item row'> 
    <span className="col s9 push-s1">{props.text}</span>
  </li>
);

module.exports = Todo;