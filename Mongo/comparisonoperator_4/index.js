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
   
    // const result = await table.find({age : { $ne : 24}});
    // console.log("HERE ARE THE RESULT",result);


    // const result2 = await table.find({name :  {$in :["Rashid"]}});
    // console.log("HERE ARE THE RESULT",result2);


    const result3 = await table.find({name :  {$nin :["Rashid","arbaz"]}});
    console.log("HERE ARE THE RESULT",result3);

}catch(err){
console.log(err);
}
}
getDocument();