import express from 'express';
import dotenv from 'dotenv';
import apiRouter from './router/apiRouter.js';
import morgan from 'morgan';

let app = express();
app.use(morgan('tiny'))
dotenv.config({path:'./config/dev.config'})

let port = process.env.PORT;
let host = process.env.HOSTNAME;


app.get('/',(req,res)=>{    
    res.send("Root request")
})
app.use('/api',apiRouter)
app.listen(port,host,(err)=>{
    if(err) throw err
    else console.log(`Server is Running on- http://${host}:${port}`);
    
})