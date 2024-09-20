import http from 'http'
import dotenv from 'dotenv'
dotenv.config({path:'./config/dev.config'})
 
let port = process.env.PORT
let host = process.env.HOST
let server = http.createServer((req,resp)=>{
    resp.end("Server is Running....")
})
server.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server is Running : http://${host}:${port}`)
})