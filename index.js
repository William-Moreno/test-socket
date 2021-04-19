const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

io.on('connection', socket => {
	console.log('A user has made a connection');
});

app.listen(port, () => console.log('Server up and running on port:', port));