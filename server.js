const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getsecretdata") {
    res.end("No secret data");
  } else {
    res.end("hello world");
  }
});

server.listen(7777);
