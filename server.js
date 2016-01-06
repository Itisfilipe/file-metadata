var express = require('express');
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage: storage});

var app = express();

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.post('/', upload.single('0'), function(req, res) {
  res.status(200).json({'size': req.file.size}).end();
});

app.listen(process.env.PORT || 3000);
