var $ = require('jquery');

//weird bug where declaring with var leads to React being undefined
React = require('react');
var ReactDOM = require('react-dom');
var SpellDescription = require('../../components/jsx/spelldescription.jsx')
var SearchBar = require('../../components/jsx/searchbar.jsx')


var App = require('../../components/js/App');


$(document).ready(function(){
ReactDOM.render(<App/>, document.getElementById('content'));
});
