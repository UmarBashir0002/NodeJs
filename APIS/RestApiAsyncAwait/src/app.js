const express = require('express');
const app = express();
const student = require("./models/student")
require("./db/conn");
app.use(express.json());

const port = process.env.port || 3000;


app.post("/", (req, res) => {
    console.log(req.body);
    const user = new student(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.send(e)
    })

})
app.listen(port, () => {
    console.log(`listening at port ${port}`);
})