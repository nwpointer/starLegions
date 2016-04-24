var fs = require('fs');
var app = require('express')();
var server = require('http').createServer(app);
var Rx = require('rx');
var io = require('socket.io')(server);

var state = JSON.parse(fs.readFileSync('./state.js', 'utf8'));
var actions = require('./actions.js')(state);
function reduce(action){
	return actions[action.type](action.data)
}

var client = Rx.Observable.create(function(observer){
	io.on('connection', function(socket){

		console.log('client connected');
		
		// register action
		socket.on('action', function(msg){
			observer.onNext({
				action: JSON.parse(msg),
				socket: socket
			})
		})
	});
});

client.subscribe(function(msg){
	console.log(msg.action);
	msg.socket.emit('response', reduce(msg.action))
});

app.get('/', function(req, res){
  res.sendFile(`${__dirname}/dumbClient.html`);
});

server.listen(3000);
