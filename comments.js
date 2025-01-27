// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var comments = [];
http.createServer(function (req, res) {
  // Parse URL
  var urlObj = url.parse(req.url, true);
  var pathName = urlObj.pathname;
  if (pathName === '/') {
    fs.readFile('./index.html', function (err, data) {
      if (err) {
        console.log(err);
        res.end('404 Not Found.');
      } else {
        res.end(data);
      }
    });
  } else if (pathName === '/addComment') {
    var comment = urlObj.query;
    comments.push(comment);
    res.end(JSON.stringify(comments));
  } else {
    fs.readFile('.' + pathName, function (err, data) {
      if (err) {
        console.log(err);
        res.end('404 Not Found.');
      } else {
        res.end(data);
      }
    });
  }
}).listen(3000, function () {
  console.log('running...');
});