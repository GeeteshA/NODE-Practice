import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import userRouter from './router/userRouter.js'

let app = express()
dotenv.config({path:"./config/dev.config"})
let port = process.env.PORT
let host = process.env.HOSTNAME
 app.get('/',(req,res)=>{
    res.send('first req....');
 })
 app.use('/user',userRouter)


app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server is running..http://${host}:${port}`);
    
})