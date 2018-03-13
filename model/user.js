var firebase = require('firebase')
var data = 
{
	serviceAccount : "../config/NodeServer.json",
	databaseURL : 'https://node-e83d7.firebaseio.com/'
};

firebase.initializeApp(data)