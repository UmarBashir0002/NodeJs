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
   const result = await table.find({$or :[ {name:"Rashid"}, {age: 27} ]}).countDocuments();
   console.log("count of your query is ",result);

   const result2 = await table.find({$or :[ {name:"Rashid"}, {age: 27} ]}).sort({name:-1});
   console.log("sorting of your query is ",result2);

}catch(err){
console.log(err);
}
}
getDocument();