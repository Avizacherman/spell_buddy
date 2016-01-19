var React = require('react');
var Typeahead = require('typeahead');
var $ = require('jquery');

var SearchBar = React.createClass({
	componentDidMount: function(){
		var ta = Typeahead(this._searchBarInput, {
			source: function(query, results){
				return $.get('/api/spell_names', function(data){
					var spellNames = []
					data.forEach(function(spell){
						spellNames.push(spell.name)
					})
					return results(spellNames)
				})
			}
		})
	},
	findSpell: function(){
		var spellName = $(this._searchBarInput).val()
		this.props.updateCurrentSpell(spellName)
	},

	render: function(){
		return (<div>
		
			<input id="search-bar" ref={(c)=> this._searchBarInput = c}/>
			<button id="search-button" className="btn btn-success" onClick={this.findSpell}>Search</button>
			</div>
			)
	}
})

module.exports = SearchBar