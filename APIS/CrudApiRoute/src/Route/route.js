const express = require('express');
const app =  express();

const router = express.Router();
const student = require("../models/student");

app.use(express.json());



router.get("/students", async (req, res) => {
    try {
        const studentData = await student.find();
        console.log("student Data is ", studentData);
        res.status(200).send(studentData)
    } catch (e) {
        res.status(400).send(e)

    }
})
router.get("/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const studentData = await student.find({ name: name })
        if (studentData == "") {
            res.status(404).send("no record")
        } else {
            res.send(studentData)
        }

    } catch (e) {
        res.status(400).send(e)

    }
}),

router.patch("/students/:name", async (req, res) => {
        try {
            const name = req.params.name;
            console.log("check parms", name);
            const updateStudent = await student.findOneAndUpdate(name, req.body);
            res.status(200).send(updateStudent);
        }
        catch (e) {
            res.status(400).send(e)
        }
    }),
    router.put("/students/:name", async (req, res) => {
        try {
            const name = req.params.name;
            console.log("check parms", name);
            const updateStudent = await student.findOneAndUpdate(name, req.body);
            res.status(200).send(updateStudent);
        }
        catch (e) {
            res.status(400).send(e)
        }
    }),
    router.post("/students/", (req, res) => {
        console.log(req.body);
        const user = new student(req.body);
        user.save().then(() => {
            res.send(user);
        }).catch((e) => {
            res.send(e)
        })

    }),

    router.delete("/students/:id", async (req, res) => {
        try {
            const _id = req.params.id;
            const deleteStudent = await student.findByIdAndDelete(_id);
            if(!deleteStudent){
                res.status(400).send("not found")
            }
            else 
            res.status(200).send(deleteStudent)

        
        } catch (e) {
            res.status(400).send(e)
        }
    })

router.get("/hi",(req,res)=>{
    res.send("router is best ")
})


module.exports = router


