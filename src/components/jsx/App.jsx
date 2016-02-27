var React = require('react');
var SpellDescription = require('../../components/jsx/spelldescription.jsx')
var SearchBar = require('../../components/jsx/searchbar.jsx')

var App = React.createClass({
	getInitialState: function() {
    return {spell: []}
	},
	componentWillMount: function() {
	    if(location.hash != ""){
  			var hashSpell = location.hash.replace(/#/, '');
  			$.get('/api/spells', {name: hashSpell}).done((data)=>
  			this.setState({spell: data})
  		)  
  	}
	},
	updateCurrentSpell: function(spellName){
		$.get('/api/spells', {name: spellName}, function(data){
			this.setState({spell: data})
			if(data != []){
				location.hash = data[0].name		
			}
		}.bind(this))
	},
	render: function(){
		return(
			<div>
				<div className="text-center">
					<img id="logo" src="../img/spell-buddy.png"/>
					<h1 className="app-title"> 	Spell Buddy </h1>
						<SearchBar updateCurrentSpell={this.updateCurrentSpell}/>
				</div>
				<SpellDescription currentSpell={this.state.spell}/>
				
			</div>
			)
	}
})

module.exports = App