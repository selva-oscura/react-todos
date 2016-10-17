const React = require('react');

const TodoForm = () => (
	<div className="row">
		<div className="col s9">
			<input id="new_todo" type="text" placeholder="Things to do....." />
		</div>
		<button className="btn waves-effect waves-light col s3" id="submit_todo" type="submit">
			Add
			<i className="material-icons right">send</i>
		</button>
	</div>
)

module.exports = TodoForm;