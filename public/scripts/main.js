var $ = require('jquery')
 React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/js/App');


$(document).ready(function(){
ReactDOM.render(React.createElement(App), document.getElementById('content'))
})