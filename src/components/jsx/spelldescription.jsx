var React = require('react');
var sp = " ".replace(/ /g, "\u00a0")

var SpellDescription = React.createClass({
	render: function(){
		if(this.props.currentSpell[0]){
		var spell = this.props.currentSpell[0]
		

		return (
		<div className="description-box">
			<h2 className="category"> {spell.name} </h2>
			<LevelLabels spellLevels={spell.spell_level.split(', ')}/>
		<br/>
			<div className="row">
				<h4> 
					<div className="col-sm-4">
						<span className="category">
							School: {sp}
						</span>						
							{spell.school}
							{sp} {sp}
					</div>
						<Subschool spell={spell}/>
						<Descriptor spell={spell}/>
				</h4> 
			</div>
			<div className="row">
				<div className="col-sm-3">
					<span className="category"> 
						Saving Throw: {sp}
					</span> 
						{spell.saving_throw} 
						{sp} {sp}
				</div>
				<div className="col-sm-3">
				<span className="category"> 
					Spell Resistance: {sp}
				</span> 
					{spell.spell_resistence} 
				</div>
			</div>
			<div className="row">
				<div className="col-sm-3">
					<span className="category"> 
						Casting Time: {sp}
					</span> 
						{spell.casting_time} 
				</div>
				<div className="col-sm-3">
					<span className="category"> 
						Duration: {sp}
					</span> 
						{spell.duration} 
				</div>
				<div className="col-sm-6">
					<span className="category"> 
						components: {sp}
					</span> 
						{spell.components} 
				</div>			
			</div>
			<div className="row">
				<AreaOrTargets spell={spell}/>
				<div className="col-sm-6">
					<span className="category">
						range: {sp}
					</span>
						{spell.range}
				</div>
			</div>
				<div className="row">
					<br/>
					{spell.description}
				</div>
		</div>
			)
		} else {
			return null
		}
	}
})

var LevelLabels = React.createClass({
		render: function(){
		var levelLabels = this.props.spellLevels.map((spellLevel, index) => {
			if((index+1) % 3 === 0 && index > 0) {
				return <span key={`${index}LevelLabel`} className="label label-info level-label">{spellLevel} </span> 
			} else {
				return <span key={`${index}LevelLabel`} className="label label-info level-label">{spellLevel}</span>
				}
			})
		
		return(
			<span> {levelLabels} </span>
			)
	}
})

var Subschool = React.createClass({
	render: function(){
		if(this.props.spell.subschool){
			return(
				<div className="col-sm-4">
					<span className="category">
						Subschool: {sp}
					</span>
						{this.props.spell.subschool}
						{sp} {sp}
				</div>
					)
		} else {
			return null
		}
	}
})

var Descriptor = React.createClass({
	render: function(){
		if(this.props.spell.descriptor){
			return(
				<div className="col-sm-4">
					<span className="category">
						Descriptor: {sp}
					</span>
						{this.props.spell.descriptor}
						{sp} {sp}
				</div>
					)
		} else {
			return null
		}
	}
})
var AreaOrTargets = React.createClass({
	render: function(){
		if(this.props.spell.area){
			return(
				<div className="col-sm-6">
					<span className="category">
						Area: {sp}
					</span>
						{this.props.spell.area}
				</div>
			)			
		} else if (this.props.spell.targets) {
			return (
				<div className="col-sm-6">
					<span className="category">
						Targets: {sp}
					</span>
						{this.props.spell.targets}
				</div>
				)
		} else {
			return null
		}

	}
})


module.exports = SpellDescription