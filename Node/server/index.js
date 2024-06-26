const http = require('http');

const server= http.createServer((req,res)=>{
    res.end("hello i am listening you");
})
server.listen(8080,()=>{
    console.log("listening at port 8080");
})