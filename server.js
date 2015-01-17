var express = require('express')
var app = express()

app.get('/', function (req, res){
	res.send("bella")
})

app.get('/update', function (req, res) {
  res.send('UPDATE');
})

var server = app.listen(3000, function () {
	
	var host = server.address().address
	var port = server.address().port

	console.log('Connector listening at http://%s:%s', host, port)

})