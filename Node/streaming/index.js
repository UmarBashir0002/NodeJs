const EventEmitter = require('events');
const fs = require('fs');
const event = new EventEmitter();
const http = require('http')

const server = http.createServer();

server.on("request",(err,res)=>{

    const stream = fs.createReadStream("../new");

    stream.on("data", (data)=> {
    res.write(data);
    });
    stream.on("end",()=>{
        res.end();
    })
});
server.listen(8080);

