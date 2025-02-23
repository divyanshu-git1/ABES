const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === "./greet") {
    const name = query.name || "Guest";
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`Hello, ${name}!`);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("page not found");
  }
});
PORT = 3000;
server.listen(PORT, () => {
  const a = server.address();
  console.log(`server is running on port http://localhost:3000/ `, a.port);
});
