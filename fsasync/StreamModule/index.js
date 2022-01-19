const fs = require("fs");
const { Server } = require("http");
const http = require("http");

const  server = http.createServer();

 server.on('request',(req,res) => {

    // 1st way of 

//     var fs = require('fs');
//     fs.readFile('input.txt',function(err,data){
//         if(err) return console.error(err);
//         console.log(data.toString());
const rstream =  fs.createReadStream("input.txt");

//2nd method of read data

//  rstream.on("data",(chunkdata)=>{
//      res.write(chunkdata);
//  })

//  rstream.on("end",()=>{
//      res.end();
//  })

//  rstream.on('error', (err) => {
//      console.log(err);
//      res.end("file not found")
//  } )

//// 3rd
rstream.pipe(res)
})

 server.listen(8000,"127.0.0.1");


