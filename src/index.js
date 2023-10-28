const express = require('express');
const errorHandler = require('./error');
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res, next) {
  return res.status(200).json({
    message: 'Welcome to the server',
  });
});

app.get('*', function (req, res, next) {
  return res.status(200).json({
    message: 'Not found',
  });
});
app.use(errorHandler);
app.listen(port, '127.0.0.1', function () {
  console.log('Server running');
});
