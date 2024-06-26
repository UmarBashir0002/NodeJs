const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/connection", { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false})
    .then(() => console.log("connection build successfully"))
    .catch((err) => console.log(err));


const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    age:{
        type : Number,
    max: 77,
    },
    joining: Date
});
/////// if parameter is not same as we have in collection then first we set it equal to document of collection and than update it.
const table = new mongoose.model("Table", schema);
const details = new mongoose.model("Detail",schema);
const validation = new mongoose.model("validation",schema);


const insertDocument = async()=>{
try{
    const record = new validation({
        name : "umar",
        age :55,
    })

    const result = await validation.insertMany([record]);
console.log("result is ", result);
}catch(err){
console.log(err);
}
}
insertDocument();