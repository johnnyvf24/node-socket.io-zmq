const path = require('path');
const express = require('express');
const app = express();
var zmq = require('zmq');
var subscriber = zmq.socket('sub');
const port = process.env.port || 3000;

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, './public')));

http.listen(port, () => {
  console.log(`express server listening on port ${port}`);
});

subscriber.connect('tcp://localhost:5563');
subscriber.subscribe('B');
let count = 0;
io.on('connection', (socket) => {
  console.log(`A new client connected with id: ${socket.id}`);

  subscriber.on('message', function() {
    var msg = [];
      Array.prototype.slice.call(arguments).forEach(function(arg) {
          socket.emit('notification', {info: arg.toString(), count: count++});
      });
  });
});

process.on("uncaughtException", function(err) {
    console.log("uncaughtException:", err);
});
