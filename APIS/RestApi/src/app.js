const express = require('express');
const app = express();
const student = require("./models/student")
require("./db/conn");
app.use(express.json());

const port = process.env.port || 3000;


app.post("/", async(req, res) => {
    try{
        const createStudent =await student(req.body);
        createStudent.save();
        res.status(201).send(createStudent);
    }
  catch(e){
res.status(400).send(e)
  }

})
app.listen(port, () => {
    console.log(`listening at port ${port}`);
})