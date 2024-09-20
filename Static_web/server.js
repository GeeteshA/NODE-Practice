import http from 'http'
import fs from 'fs'
import path from 'path'

let server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === '/' || req.url === '/index'){
        fs.readFile(path.join(process.cwd(),'views','index.html'),'utf-8',(err,data)=>{
            res.end(data)
            if(err) throw err 

        })
    }
    if( req.url === '/about'){
        fs.readFile(path.join(process.cwd(),'views','about.html'),'utf-8',(err,data)=>{
            res.end(data)
        })
    }
    // if( req.url === '/Contact'){
    //     fs.readFile(path.join(process.cwd(),'views','Contact.html'),'utf-8',(err,data)=>{
    //         res.end(data)
    //     })
    // }
    // if( req.url === '/Services'){
    //     fs.readFile(path.join(process.cwd(),'views','Services.html'),'utf-8',(err,data)=>{
    //         res.end(data)
    //     })
    // }
    // if( req.url === '/Employee'){
    //     fs.readFile(path.join(process.cwd(),'views','Employee.html'),'utf-8',(err,data)=>{
    //         res.end(data)
    //     })
    // }
})
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Running: http://127.0.0.1:8080 `)
})