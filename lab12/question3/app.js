const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url === "/image" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "image/webp" });
      let data = fs.readFileSync("justdog.webp");
      res.write(data);
      res.end();
    } else if (req.url === "/pdf" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/pdf" });
      let data = fs.readFileSync("justpdf.pdf");
      res.write(data);
      res.end();
    } else if (req.url === "/about" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "plain/text" });
      let data = fs.readFileSync("justtext.txt");
      res.write(data);
      res.end();
    } else if (req.url === "/home" && req.method === "GET") {
      res.write("Welcome to my website.");
      res.end();
    } else {
      res.writeHead(404);
      res.end("not found");
    }
  })
  .listen(3000, "127.0.0.1");
