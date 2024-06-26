const http = require('http');
const url = require('url');


const server = http.createServer((req, res)=>{
if(req.url=="/"){
    res.end("hello you are in home ")
}else if(req.url=="/about"){
    res.end("hello you are in about us page ")
}else {
    res.writeHead(400);
    res.end("sorry page not found")
}
});
server.listen(8080,()=>{
    console.log("we are listening you at port 8080");
})