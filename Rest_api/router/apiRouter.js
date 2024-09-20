import { json } from "express";
import express from 'express';
let router = express.Router();

router.post('/add',(req,res)=>{
    return res.json({"msg":"User Created"})
})
router.get('/read',(req,res)=>{
    return res.json({"msg":"User Fetching"})
})
router.put('/update',(req,res)=>{
    return res.json({"msg":"User Updating"})
})
router.delete('/delete',(req,res)=>{
    return res.json({"msg":"User Deleted"})
})

export default router