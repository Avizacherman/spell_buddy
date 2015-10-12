# Spell Buddy
## Purpose
I wanted to to build a project that solved two issues: firstly, give myself a chance to play with some new APIs, namely MongoDB, Browserify and Sass and also created a search engine for Pathfinder spells. Spell Buddy accomplished both
## Underlying API
Using the CSV files provided by Paizo, I created a MongoDB based web API which is accessible at:
<spell-buddy.herokuapp.com/api/spells>
The entire database is huge and takes a long time to load so there are two ways to make it easier to search
### Name query
Adding the query string ?name=*string* will search for a spell with a matching name. 
**For example**: <https://spell-buddy.herokuapp.com/api/spells?name=fireball>
Currently if there is a partial match it will return the alphabetically most ascendant partial match
**For example**: <https://spell-buddy.herokuapp.com/api/spells?name=charm> returns Charm Animal
This will be deprecated later in favor of only exact matches
### ID query
All spells contain an id number and the API supports searching by them. 
**For example**: <https://spell-buddy.herokuapp.com/api/spells/212> returns Flare
## Known Issues
Currently there are a number of minor bugs to be fixed. Exact matching for the API is one, the other is the autocomplete for the search bar will eventually be re-written to better interact with React.js. Additionally, the responsiveness of the spell level labels needs to be adjusted to account for more than 3 labels.
