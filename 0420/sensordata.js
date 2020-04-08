var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
  var unix = Date.now();
  var d3 = unix % 10000000;
  var artistTrack = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36";
  var e = unix / 2;
  var n = 1920
  var o = 1080
  var m = 1920
  var r = 1080
  var i = 150
  var c = 866
  var b = 1220
  var z1 = parseInt((unix / (2016 * 2016)));
  var SEARCH = Math["random"]();
  var sVectors = parseInt((1000 * SEARCH / 2));
  var s = SEARCH + "";
  var y = s["slice"](0, 11) + sVectors;
  var sensordata = artistTrack + ",uaend," + 12147 + "," + 20030107 + "," + "en-US" + "," + "Gecko" + "," + 3 + "," + 0 + "," + 0 + "," + 0 + "," + z1 + "," + d3 + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + ",cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1" + "," + 8338 + "," + y + "," + e + ",loc:" + "";
  res.send(sensordata);
});

app.listen(port);