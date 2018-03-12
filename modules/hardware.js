//hardware.js provides CRUD hardware
var express = require('express')
var hardware = express()

hardware.route('/hardware')
.get((request, response) => response.json({hardware : 'iMac'}))
.post((request, response) => 
	{
		response.json({hardware : 'HTC Desire'})
		console.log(request.body)
	})
.put((request, response) => 
	{
		response.json({hardware : 'Toshiba Laptop'})
		console.log(request.body)
	})
.delete((request, response) => 
	{
		response.json({hardware : 'Mac Mini'})
		console.log(request.body)
	})

module.exports = hardware