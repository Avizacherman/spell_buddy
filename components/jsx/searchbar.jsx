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
	render: function(){
		return (<div>
			<input ref={(c)=> this._searchBarInput = c}/>
			</div>
			)
	}
})

module.exports = SearchBar