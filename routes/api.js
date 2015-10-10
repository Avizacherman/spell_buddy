var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

var spellsDB = `mongodb://TheWizard:${process.env.SPELLPW}@ds031223.mongolab.com:31223/spell_list`

router.get('/spell_descs', function(req, res){
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

router.get('/spell_names', function(req, res){
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

module.exports = router;