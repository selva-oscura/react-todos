const React = require('react');
const ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  render: function () {
    return <h1>Hello {this.props.message}!</h1>;
  }
});

ReactDOM.render(<HelloMessage message="World" />, document.getElementById('app'))