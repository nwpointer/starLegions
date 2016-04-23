var app = require('express')();
var server = require('http').createServer(app);
var Rx = require('rx');
var io = require('socket.io')(server);

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

client.subscribe(function(obj){
	console.log(obj.action);
	obj.socket.emit('response', 'msg recieved')
});

app.get('/', function(req, res){
  res.sendFile(`${__dirname}/dumbClient.html`);
});

server.listen(3000);
