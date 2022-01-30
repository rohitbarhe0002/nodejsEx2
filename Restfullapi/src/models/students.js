const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minilength:3,
        maxlength:20
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email is already in use"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
      
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
    }
})

//we will create new collection using model//

const student = new mongoose.model('student',studentSchema);

module.exports = student;