const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/connection", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection build successfully"))
    .catch((err) => console.log(err));


const schema = new mongoose.Schema({
    name: String,
    age: Number,
    joining: Date
});

const table = new mongoose.model("Table", schema);
const details = new mongoose.model("Detail",schema);
const getDocument = async()=>{
try{
    const result = await table.find({name :"Rashid",age:27}).select({name:0});
    const result2 = await details.find();
    console.log("HERE ARE THE RESULT",result);
    console.log("result of second collection",result2);

}catch(err){
console.log(err);
}
}
getDocument();