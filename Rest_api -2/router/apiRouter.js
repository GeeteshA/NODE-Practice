import { json } from "express";
import express from 'express';
let router = express.Router();

router.post('/',(req,res)=>{
    return res.json({"msg":"User Created"})
})
router.get('/',(req,res)=>{
    return res.json({"msg":"User Fetching"})
})
router.put('/',(req,res)=>{
    return res.json({"msg":"User Updating"})
})
router.delete('/',(req,res)=>{
    return res.json({"msg":"User Deleted"})
})

export default router