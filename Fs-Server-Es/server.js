import http from 'http';

let server = http.createServer((req,res)=>{
    res.end("Hello Geetesh aheriya")
});
server.listen(8080,'localhost',(err)=>{
    if(err) throw err
    console.log("server running");
    
})