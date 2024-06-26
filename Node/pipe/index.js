const fs = require('fs');
const http = require('http');
const EventEmitter = require('events');
const event = new EventEmitter();


const server = http.createServer();
const stream = fs.createReadStream("../umar");
server.on("request",(req,res)=>{
    stream.pipe(res);
})
server.listen(8080,()=>{
    console.log(`listening at port 8080}`);
})
