const http = require("http");
const server = http.createServer(()=>(req,res) =>{
    console.log(req.url);
    res.end('hello from server')
} )

server.listen(8006, "127.0.0.1",() =>{
    console.log('listining to the port 8000');
})