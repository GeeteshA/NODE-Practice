import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path, { join } from 'path';

let app = express();

app.use(morgan('tiny'))

app.use(express.static(join(process.cwd(),'views')));


app.get('/' ,(req, res)=>{
    res.sendFile(join(process.cwd(),'views',"index.html"))
})
app.get('/Employee' ,(req, res)=>{
    res.sendFile(join(process.cwd(),'views',"Employee.html"))
})
app.get('/About' ,(req, res)=>{
    res.sendFile(join(process.cwd(),'views',"About.html"))
})
app.get('/Services' ,(req, res)=>{
    res.sendFile(join(process.cwd(),'views',"Services.html"))
})
dotenv.config({path:'./config/dev.config'})
let port = process.env.port
let host = process.env.HOSTNAME

// app.get()

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server is Running... http://${host}://${port}`);
    
})