"use strict";

var App = React.createClass({
	displayName: "App",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement("img", { id: "logo", src: "../img/spell-buddy.png" }),
			React.createElement(
				"h1",
				null,
				" Welcome to Spell Buddy, Dude "
			)
		);
	}
});

module.exports = App;