const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/student",{useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify:false}).then(()=>{
    console.log("connection build successfully");
}).catch((e)=>{
    console.log("not connected due to", e);
})