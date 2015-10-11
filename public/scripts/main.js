window.$ = window.jQuery = require('jquery');

//weird bug where declaring with var leads to React being undefined
React = require('react');
var ReactDOM = require('react-dom');
require('bootstrap-sass');

var App = require('../../components/jsx/App.jsx');


$(document).ready(function(){
ReactDOM.render(<App/>, document.getElementById('content'));
});
