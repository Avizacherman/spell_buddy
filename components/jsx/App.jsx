var SpellDescription = require('../../components/jsx/spelldescription.jsx')
var SearchBar = require('../../components/jsx/searchbar.jsx')

var App = React.createClass({
	getInitialState: function() {
    this.setState({spell: []})
	},
	updateCurrentSpell: function(spellName){
		
	},
	render: function(){
		return(
			<div className="text-center">
			<img id="logo" src="../img/spell-buddy.png"/>
			<h1 className="wizard-script"> 	Spell Buddy </h1>
			<SearchBar updateCurrentSpell={this.updateCurrentSpell}/>
			<SpellDescription/>
			</div>
			)
	}
})

module.exports = App