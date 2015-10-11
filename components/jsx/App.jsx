var SpellDescription = require('../../components/jsx/spelldescription.jsx')
var SearchBar = require('../../components/jsx/searchbar.jsx')


var App = React.createClass({
	render: function(){
		return(
			<div>
			<img id="logo" src="../img/spell-buddy.png"/>
			<h1> Welcome to Spell Buddy, Dude </h1>
			<SearchBar/>
			<SpellDescription/>
			</div>
			)
	}
})

module.exports = App