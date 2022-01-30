const express =  require("express");
require("./db/conn")
const student = require("./models/students")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/",(req,res) =>{

})

///create a new students
app.post("/students",(req,res) => {
        console.log(req.body);
const user =  new student(req.body)
user.save().then(()=> {
    res.status(201).send(user)
}).catch((e)=>{
    res.status(400).send(e)
})

})
app.listen(port, () =>{
    console.log(`connecttion establish at ${port}`);
})