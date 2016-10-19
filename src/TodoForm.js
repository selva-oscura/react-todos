import React from 'react';

const TodoForm = ({addTodo}) => {
	let input;
	return (
		<div className="row">
			<div className="col s11">
				<input 
					id="text" 
					type="text" 
					placeholder="Things to do....." 
					ref={node => {input = node;}} 
					onKeyUp={(e) => {
						if(e.keyCode===13){
							addTodo(input.value);
							input.value = "";
						}
					}
				}/>
			</div>
			<div className="col s1">
				<button 
					id="submit_todo" 
					type="submit" 
					className="btn-floating btn waves-effect waves-light right green darken-4" 
					onClick={() => {
						addTodo(input.value);
						input.value = "";
					}
				}>
					<i className="material-icons right">add</i>
				</button>
			</div>
		</div>
	);
}

module.exports = TodoForm;