var express = require('express')
var app = express()
var users = require('./modules/user.js')
var hardware = require('./modules/hardware.js')

app.use(users)
app.use(hardware)
app.listen(3000)


