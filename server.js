//frameworks
var express = require('express')
var app = express()
var JSONParser = require('body-parser')

//Modulos en la carpeta modules
var users = require('./modules/user.js')
var hardware = require('./modules/hardware.js')

app.use(JSONParser.json()
app.use(JSONParser.urlencoded({ extended: true }))
app.use(users)
app.use(hardware)

app.listen(3000)

//para firebase
//https://es.coursera.org/learn/aplicaciones-android/lecture/IeLYO/ejemplo-conectando-servidor-node-js-con-base-de-datos-firebase

