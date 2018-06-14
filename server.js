//create websocket server
var WebSocketServer = require('ws').Server;

//listen to specific port
var port = 8080;
var wss = new WebSocketServer({'port':port});

//event handler (connection)
var messages = [];
wss.on('connection', function(ws)
{
	messages.forEach(function(message){
		ws.send(message);
	});
	//add listener when message is sent
	ws.on('message', function(message){
		messages.push(message);
		console.log('Message Recived: %s',message);

		wss.clients.forEach(function(conn){
			conn.send(message);
		});
	});
});


