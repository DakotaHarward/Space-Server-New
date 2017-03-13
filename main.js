var fs = require('fs');
var https = require('https');
var privateKey = fs.readFileSync('static/secure/space-server.key', 'utf8');
var certificate = fs.readFileSync('static/secure/space-server.crt', 'utf8');
var credentials = {
    key: privateKey,
    cert: certificate
};
var express = require('express');
var app = express();
var httpsServer = https.createServer(credentials, app);

httpsServer.listen(8080, function () {
    console.log("Now listening on port 8080 https...");
});

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/templates/index.html');
});

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/templates/index.html');
});