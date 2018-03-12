//user.js provides CRUD user
var express = require('express')
var users = express()


users.route('/')
.get((request, response) => response.json({name : 'Jose Alberto'}))
.post((request, response) => 
	{
		console.log(request.body)
		response.json({name : 'Valeria Vega'})
	})
.put((request, response) => 
	{
		console.log(request.body)
		response.json({name : 'Ari Alan'})
	})
.delete((request, response) => 
	{
		console.log(request.body)
		response.json({name : 'Nubia Michelle'})
	})

module.exports = users