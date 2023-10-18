const http = require('http');
const url = require('url');
const server = http.createServer(function (req, res) {
  const q = url.parse(req.url, true).query;
  console.log(q.name);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ name: q.name }));
});

server.listen(4000, function () {
  console.log('Server running');
});
