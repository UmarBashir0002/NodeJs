const exp = require('constants');
const express = require('express');
const { stat } = require('fs');
const app = new express();
const path = require('path');
const staticPath = path.join(__dirname, '../public' );
console.log(staticPath);
app.use(express.static(staticPath));


app.listen(8080,()=>{
console.log("listening at port 8080");
});