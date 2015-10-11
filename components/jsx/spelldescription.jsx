var SpellDescription = React.createClass({
	render: function(){
		if(this.props.currentSpell[0]){
		var spell = this.props.currentSpell[0]
		return (
		<h3> {spell.name} </h3>
			)
		} else {
			return null
		}
	}
})

module.exports = SpellDescription