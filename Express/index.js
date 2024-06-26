const express = require('express');
const app = new express();

app.get("/",(req, res)=>{
res.send("HEY EXPRESS IS RUNNING PROPERLY")
});

app.listen(8080,()=>{
    console.log("lisening at 8080");
})