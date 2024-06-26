const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/connection",{useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log("connection build successfully"))
.catch((err)=>console.log(err));


const schema = new mongoose.Schema({
    name: String,
    age: Number,
    joining: Date
});

const table = new mongoose.model("Table",schema);

const addDocuments = async()=>{
try{
    const first = new table({
    name : "afzal",
    age: 20,
    joining: '2023-11-11'
})
const second = new table({
    name : "noman",
    age: 44,
    joining: '2022-11-11'
})
const third = new table({
    name : "Rana",
    age: 29,
    joining: '2022-11-11'
})
const result = await table.insertMany([first,second,third,]);
console.log(result)}
catch(err){
    console.log(err)
}
}
addDocuments();