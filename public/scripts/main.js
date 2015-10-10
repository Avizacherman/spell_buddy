var $ = require('jquery')

//weird bug where declaring with var leads to React being undefined
React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/js/App');


$(document).ready(function(){
ReactDOM.render(React.createElement(App), document.getElementById('content'))
})