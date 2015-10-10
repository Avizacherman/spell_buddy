var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var MongoLogger = require('mongodb').Logger

var spellsDB = `mongodb://TheWizard:${process.env.SPELLPW}@ds031223.mongolab.com:31223/spell_list`

router.get('/spells', function(req, res){
	MongoLogger.setLevel('debug')

	MongoClient.connect(spellsDB, function(err, db){
		if (err) res.send(err)

		var spellCollection = db.collection('spells')
		spellCollection.find({name: 'Magic Missile'}).toArray(function(err, docs){
			if (err) res.send(err)

			res.json(docs)
				db.close()
		})
	})
})

router.get('/spells/:id', function(req, res){
	MongoClient.connect(spellsDB, function(err, db){
		MongoLogger.setLevel('debug')


		if (err) res.send(err)

		var spellCollection = db.collection('spells')
		spellCollection.find({id: `${parseInt(req.params.id)}`}).toArray(function(err, docs){
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