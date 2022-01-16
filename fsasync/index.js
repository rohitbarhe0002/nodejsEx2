const fs = require ("fs");
fs .writeFile('read.txt',"today is awsome day ",(err)=>{
console.log("file is created");
});
fs.appendFile("read.txt","plz like share any subs",(err)=>{
    console.log("added");
})
const data=fs.readFileSync('read.txt',"utf-8")
console.log(data);
console.log("i am");