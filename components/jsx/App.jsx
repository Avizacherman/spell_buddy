var SpellDescription = require('../../components/jsx/spelldescription.jsx')
var SearchBar = require('../../components/jsx/searchbar.jsx')

var App = React.createClass({
	getInitialState: function() {
    return {spell: []}
	},
	updateCurrentSpell: function(spellName){
		$.get('/api/spells', {name: spellName}, function(data){
			this.setState({spell: data})
		}.bind(this))
	},
	render: function(){
		return(
			<div className="text-center">
			<img id="logo" src="../img/spell-buddy.png"/>
			<h1 className="wizard-script"> 	Spell Buddy </h1>
			<SearchBar updateCurrentSpell={this.updateCurrentSpell}/>
			<SpellDescription currentSpell={this.state.spell}/>
			</div>
			)
	}
})

module.exports = App