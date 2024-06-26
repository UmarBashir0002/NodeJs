var http = require('http');
var  date = require('./myfirstmodule');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("date and time is "+date.dateAndTime())
    res.end("hello i am from other end");
}).listen(8080);

console.log(`port is listening at 8080`);
