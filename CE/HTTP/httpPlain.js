const http = require("http");
const fs = require("fs/promises");
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>hello world</h1>");
  const read = async () => {
    const data = await fs.readFile("./home.html", "utf-8");
    res.end(data);
  };
  read();
});
PORT = 3000;
server.listen(() => {
  const a = server.address();
  console.log("server is running on port ", a.port);
});
