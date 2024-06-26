const express = require('express');
const app = new express();
const hbs = require('hbs');
const path = require('path');

console.log(path.join(__dirname,'/partials'));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname,'/partials'))
app.get('/', (req, res) => {
    res.render('index');
})

app.listen(8080, () => {
    console.log("listening you at 8080")
})
