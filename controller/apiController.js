module.exports = function(app) {
	app.get('/api/person/:id', function(req, res) {
		res.json({
			firstname: 'John', lastname: 'Doe'
		})
	})
	app.post('/api/person', jsonParser, function(req, res) {
		// save to data base
	})

	app.delete('/api/person/:id', function(req, res) {
		// delete from database
	})

	
}

