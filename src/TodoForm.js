const React = require('react');

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
				/>
			</div>
			<div className="col s1">
				<button 
					id="submit_todo" 
					type="submit" 
					className="btn-floating btn waves-effect waves-light right teal" 
					onClick={() => {
						console.log('input.value', input.value)
						addTodo(input.value);
						input.value = "";
					}}>
					<i className="material-icons right">add</i>
				</button>
			</div>
		</div>
	);
}

module.exports = TodoForm;