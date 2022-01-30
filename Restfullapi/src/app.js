const express =  require("express");
require("./db/conn")
const student = require("./models/students")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/",(req,res) =>{

})

///create a new students
// app.post("/students",(req,res) => {
//         console.log(req.body);
// const user =  new student(req.body)
// user.save().then(()=> {
//     res.status(201).send(user)
// }).catch((e)=>{
//     res.status(400).send(e)
// })

// })

app.post("/students", async (req,res) => {

    try{
            const user =  new student(req.body)

    const createUser = await user.save()
    res.status(201).send(createUser)

    }catch(e){res.status(405).send(e)}

})

app.listen(port, () =>{
    console.log(`connecttion establish at ${port}`);
})


/////get students data////

app.get("/students", async (req,res) => {
    try{
       const studentsdata = await student.find();
       res.send(studentsdata)

    }catch(e){
      res.status(400).send(e)
    }
})

//get data for induvisuval//

app.get("/students/:id", async (req,res) => {
    try{
       const _id =  req.params.id;
     const studentdata = await  student.findById(_id)
     if(!studentdata)
     {
     res.status(400).send(e)
     }
     else{
     
       res.send(studentdata)
     }

    }catch(e){
      res.status(400).send(e)
    }
})

//deltet rquest for student

app.delete("/students/:id",async (req,res) => {
    try{
    
       const deleteStudent = await student.findByIdAndDelete(req.params.id);
       if(!req.params.id){
           return res.status(400).send()
       }
       res.send(deleteStudent)
    }catch(e){
        res.status(500).send(e)
    }
})

//update data induvisualy///

app.patch("/students/:name", async (req,res)=>{
    try{
 const _id =  req.params.id;
 const updateStudent = await student.findByIdAndUpdate(_id,req.body,{
     new:true
 })

 res.send(updateStudent)
    }catch(e){
res.status(400).send(updateStudent)
    }
})