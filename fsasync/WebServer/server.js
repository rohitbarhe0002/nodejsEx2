const http = require("http");
const server = http.createServer(()=>(req,res) =>{
    console.log(req.url);
    res.end('hello from server')
} )

server.listen(8001, "127.0.0.2",() =>{
    console.log('listining to the port 80001');
})