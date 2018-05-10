const path = require('path');
const express = require('express');
const app = express();
const port = process.env.port || 3000;

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, './public')));


http.listen(port, () => {
  console.log(`express server listening on port ${port}`);
});

io.on('connection', (socket) => {
  console.log(`A new client connected with id: ${socket.id}`);
  setInterval(() => {
    socket.emit('notification', {info: true, done: 'yup'});
  }, 1000 * 5); //update every 5 seconds
});

process.on("uncaughtException", function(err) {
    console.log("uncaughtException:", err);
});
