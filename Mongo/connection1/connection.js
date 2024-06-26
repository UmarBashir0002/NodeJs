const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/connection",{ useUnifiedTopology: true ,useNewUrlParser: true})
.then(()=>console.log("connection successful")).catch(()=>console.log("connection failed"));


/////schema

const schema = new mongoose.Schema({
    name : String,
    age : Number,
    Date :{
        type : Date,
        default : Date.now
    }
});


///////////////collections

const details = new mongoose.model("Detail",schema);
const createDocument = async()=>{
    try{

        const document = new details({
            name : "umar",
            age : 24,
        })
        const result = await document.save();
        console.log(result);
    }catch(err){
console.log(err);
    }
}
createDocument();


