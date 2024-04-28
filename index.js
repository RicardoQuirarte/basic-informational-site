const http = require("http");
const fs = require("fs").promises;

// http
//   .createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname + ".html";
//     fs.readFile(filename, function (err, data) {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         return res.end("404 Not Found");
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);

const host = "localhost";
const port = 8080;

const requestListener = function (req, res) {
  switch (req.url) {
    case "/":
      fs.readFile(__dirname + "/index.html").then((content) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(content);
      });
      break;
    case "/about":
      fs.readFile(__dirname + "/about.html").then((content) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(content);
      });
      break;
    case "/contact-me":
      fs.readFile(__dirname + "/contact-me.html").then((content) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(content);
      });
      break;
    default:
      fs.readFile(__dirname + "/404.html").then((content) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(404);
        res.end(content);
      });
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
