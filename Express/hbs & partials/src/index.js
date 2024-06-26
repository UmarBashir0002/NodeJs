const express = require('express');
const app = new express();
const path = require('path');
const hbs = require('hbs');
const staticPath = path.join(__dirname, '../public' );

app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, '../src/partials' ));
app.get("" , (req , res)=>{
res.render('index');
});
app.get("/about",(req,res)=>{
    res.render('about')
})


 console.log(staticPath);
 app.use(express.static(staticPath));


app.listen(8080,()=>{
console.log("listening at port 8080");
});