const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/connection", { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false})
    .then(() => console.log("connection build successfully"))
    .catch((err) => console.log(err));


const schema = new mongoose.Schema({
    name: String,
    age: Number,
    joining: Date
});
/////// if parameter is not same as we have in collection then first we set it equal to document of collection and than update it.
const table = new mongoose.model("Table", schema);
const details = new mongoose.model("Detail",schema);
const deleteDocument = async(_id)=>{
try{
    // const result = await table.deleteOne({_id})
    // console.log("deleted",result);

    const result2 = await table.findByIdAndDelete({_id})
    console.log("deleted",result2);

}catch(err){
console.log(err);
}
}
deleteDocument('63e515a3164894446e9b318f');