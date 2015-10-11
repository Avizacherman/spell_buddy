var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var MongoLogger = require('mongodb').Logger

var spellsDB = `mongodb://TheWizard:${process.env.SPELLPW}@ds031223.mongolab.com:31223/spell_list`


router.get('/spells', function(req, res){
	var params = req.query.name ? {name: {$regex: req.query.name, $options: 'i'}} : false
	// MongoLogger.setLevel('debug')

	MongoClient.connect(spellsDB, function(err, db){
		if (err) res.send(err)

		var spellCollection = db.collection('spells')
		if (params) {
		spellCollection.find(params).limit(1).toArray(function(err, docs){
			if (err) res.send(err)

			res.json(docs)
				db.close()
		})
		} else {
			spellCollection.find().toArray(function(err, docs){
			if (err) res.send(err)

			res.json(docs)
				db.close()
		})
		}
	})
})

router.get('/spells/:id', function(req, res){
	var id = parseInt(req.params.id)

	MongoClient.connect(spellsDB, function(err, db){
		MongoLogger.setLevel('debug')

		if (err) res.send(err)

		var spellCollection = db.collection('spells')
		spellCollection.find({id: id}).toArray(function(err, docs){
			if (err) res.send(err)

			res.json(docs)
				db.close()
		})
	})
})

router.get('/spell_names', function(req, res){
	MongoClient.connect(spellsDB, function(err, db){
		MongoLogger.setLevel('debug')

		if (err) res.send(err)

		var spellNames = db.collection('spell_names')
		spellNames.find().toArray(function(err, docs){
			if (err) res.send(err)

			res.json(docs)
				db.close()
		})
	})
})

module.exports = router;