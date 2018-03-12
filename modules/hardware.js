//hardware.js provides CRUD hardware
var express = require('express')
var hardware = express()

hardware.route('/hardware')
.get((request, response) => response.json({hardware : 'iMac'}))
.post((request, response) => response.json({hardware : 'HTC Desire'}))
.put((request, response) => response.json({hardware : 'Toshiba Laptop'}))
.delete((request, response) => response.json({hardware : 'Mac Mini'}))

module.exports = hardware