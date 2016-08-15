var express = require('express');
require("node-jsx").install();
var app = express();
var times = 0;
app.use('/static', express.static('public'));
app.use('/scripts', express.static('scripts'));
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/api/comments', function (req, res) {
  res.json(getJson());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function getJson(){
  times++;
  var json= [];
  for( var i = 0;i<times;i++)
      json.push({
          id:i,
          author: "Pete" + i,
          text: "text" + i
      })
  return json;
};
