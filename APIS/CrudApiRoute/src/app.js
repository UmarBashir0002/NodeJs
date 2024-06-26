const express = require('express');
const app = express();

const student = require("./models/student")
require("./db/conn");

app.use(express.json());

const router = require("./Route/route");
app.use(router)

const port = process.env.port || 3030;
app.listen(port, () => {
    console.log(`listening at port ${port}`);
})