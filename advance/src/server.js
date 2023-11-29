//Demo global
const express = require('express');
const { Server } = require('socket.io');
const app = express();
const { createServer } = require('node:http');
const { fork } = require('child_process');
const server = createServer(app);
const io = new Server(server);
//Available throughout the lifetime of application
const map = {
  red: 'red',
  blue: 'blue',
  green: 'green',
};
app.locals.map = map;
global.io = io;

require('./app');
app.get('/', (req, res) => {
  const child = fork(__dirname + '/child');
  child.on('message', (message) => {
    console.log('Parent process received:', message);
    return res.status(200).json({ result: message });
  });
  child.send('START');
});

app.get('/hello', (req, res) => {
  console.log(req.app);
  return res.status(200).json({ msg: 'Hello' });
});
const port = 5000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
