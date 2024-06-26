const express = require('express');
const app = express();
const student = require("./models/student")
require("./db/conn");
app.use(express.json());

const port = process.env.port || 3030;


app.get("/",async(req,res)=>{
    try{
    const studentData = await student.find();
    console.log("student Data is ",studentData);
    res.status(200).send(studentData)
    }catch(e){
        res.status(400).send(e)
    
    }
    })
    app.get("/:name",async(req,res)=>{
        try{
            const name = req.params.name;
            const studentData = await student.find({name : name})
            if(studentData==""){
                res.status(404).send("no record")
            }else{
            res.send(studentData)}

        }catch(e){
            res.status(400).send(e)
        
        }
        })
app.post("/", (req, res) => {
    console.log(req.body);
    const user = new student(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.send(e)
    })

}),

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})