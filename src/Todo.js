const React = require('react');

const Todo = ({todo, check, remove}) => (
  <li className='collection-item row'> 
  	<span className="col s1"
  		onClick={() => {
  			console.log('check todo.id', todo.id);
  			check(todo.id);
  		}
  	}>
  		<i className="material-icons left">
  			{todo.checked ? "check_box" : "check_box_outline_blank"}
  		</i>
  	</span>
    <span className="col s10 push">{todo.text}</span>
    <span className="col s1">
    	<button
    		className="btn-floating btn waves-effect waves-light right red"
    		onClick={() => {
    			console.log('remove todo.id', todo.id);
    			remove(todo.id);
				}
			}>
    		<i className="material-icons right">clear</i>
    	</button>
    </span>
  </li>
);

module.exports = Todo;