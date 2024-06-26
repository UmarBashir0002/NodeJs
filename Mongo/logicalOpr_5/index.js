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
   const result = await table.find({$and : [{name :"Rashid"}, {age : 27}]});
   console.log("result of and is ",result);

   const result2 = await table.find({age :{$not : {$gt : 20}}});
   console.log("result of not  is ",result2);

}catch(err){
console.log(err);
}
}
getDocument();