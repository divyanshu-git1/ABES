const http = require("http");
const fs = require("node:fs/promises");
const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  const filedata = await fs.readFile("./file.json", "utf-8");
  const parsedata = JSON.parse(filedata);
  res.end(filedata);
});

PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
