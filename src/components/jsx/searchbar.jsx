import React from 'react'
import Typeahead from 'typeahead'

var SearchBar = React.createClass({
	componentDidMount: function(){
		this._searchBarInput.focus()
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
	findSpell: function(e){
		e.preventDefault()
		var spellName = $(this._searchBarInput).val()
		this.props.updateCurrentSpell(spellName)
	},

	render: function(){
		return (
			<form onSubmit={this.findSpell}>
			<input id="search-bar" ref={(c)=> this._searchBarInput = c}/>
			<button id="search-button" className="btn btn-success" >Search</button>
			</form>
			)
	}
})

module.exports = SearchBar
