const express = require('express');
const app = new express();

app.get("/",(req,res)=>{
res.send("hello you are in home page")
});
app.get("/about",(req,res)=>{
    res.send("hello you are in about page")
});

app.listen(8080,()=>{
    console.log("listening at 8080");
})

