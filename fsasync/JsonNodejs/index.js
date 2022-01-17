const fs = require("fs")

const biodata = {
    name:'rohit',
    age:26,
    company:'bestpeers'
}
console.log(biodata.name);
const jsonData = JSON.stringify(biodata)
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done");
})
console.log(jsonData);
fs.readFile("json1.json","utf-8",(err,data) =>{
    console.log(data);
    const orgdata = JSON.parse(data)
    console.log(orgdata);
    
})
