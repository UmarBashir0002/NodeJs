const mongoose = require("mongoose");
const validator = require("validator")

const Schema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 20,
        requied: true
    },
    age: {
        type: Number,
        max: 70,
    },
    email: {
        type: String,
        requied: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("email is not correct")
            }
        }
    }
})

const student = mongoose.model("student", Schema);
module.exports = student;
