var fs = require('fs');
var url = require('url');
var http = require('http');
var talks = require('./talkList.json');

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false); // incoming url
  // required to prevent CORS error
  res.setHeader('Access-Control-Allow-Origin', 'http://colelyman.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if(urlObj.pathname.indexOf("gc") != -1) {
    var regEx = new RegExp(urlObj.query["q"]);
    var results = [];
    var Sessions = talks.Sessions;

    for(var i = 0; i < Sessions.length; i++) {
      var session = Sessions[i];
      var talkList = session.Talks;
      for(var j = 0; j < talkList.length; j++) {
        if(regEx.test(talkList[j].Title)) {
          console.log(talkList[j].Title + " matched with: " + regEx);
          results.push(talkList[j]);
        }
      }
    }

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(JSON.stringify(results));
  }
}).listen(8080);
