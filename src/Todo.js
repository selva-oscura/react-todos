import React from 'react';

const Todo = ({todo, check, remove}) => (
  <li className='collection-item row'> 
    <span className="col s2"
      onClick={() => {
        check(todo.listId, todo.todoId);
      }
    }>
      <i className="material-icons left">
        {todo.checked ? "done" : "check_box_outline_blank"}
      </i>
    </span>
    <span className="col s8">{todo.text}</span>
    <span className="col s2">
      <button
        className="btn-floating btn waves-effect waves-light right right red darken-4"
        onClick={() => {
          remove(todo.listId, todo.todoId);
        }
      }>
        <i className="material-icons">clear</i>
      </button>
    </span>
  </li>
);

module.exports = Todo;