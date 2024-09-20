import express from 'express'
const router = express.Router()

router.get('/read',(req,res)=>{
    res.send("User Root request")
})
router.post('/add',(req,res)=>{
    return res.json({"msg":"User Created"})
})
router.delete('/delete',(req,res)=>{
    return res.json({"msg":"User Deleted"})
})


export default router