const http = require('http');
// node server

function onRequest(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hey');
  res.end();
}

http.createServer(onRequest).listen(3000)

console.log("listening on port 3000")
