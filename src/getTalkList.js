//?Conference-ID=32 October 2014
//?SessionID=178 Saturday Morning Session
//?SessionID=179 Saturday Afternoon Session
//?SessionID=180 Priesthood Session
//?SessionID=181 Sunday Morning Session
//?SessionID=182 Sunday Afternoon Session
//?SessionID=183 General Women's Session
//http://tech.lds.org/mc/api/conference/talklist?SessionID=
var fs = require('fs');
var http = require('http');

var sessionId = 183;
talks = "";

url = "http://tech.lds.org/mc/api/conference/talklist?SessionID=" + sessionId;

var req = http.get(url, function(res) {
  res.on('data', function (data) {
    talks += data.toString();
  });
  res.on('end', function() {
    fs.writeFile("./talkList" + sessionId + ".json", talks, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was written!");
    });
  });
});
