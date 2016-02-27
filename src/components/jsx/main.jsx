
//No ECMA2015 jQuery import
window.$ = window.jQuery = require('jquery');

import React from 'react'
import ReactDOM from 'react-dom'
// import 'bootstrap-sass'

var App = require('../../components/jsx/App.jsx');


$(document).ready(function(){
ReactDOM.render(<App/>, document.getElementById('content'));
});
