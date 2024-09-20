import express, { json, Router } from 'express'
import fs from 'fs'
import path from 'path';

let router = express.Router();
/*
Usage: create new emploee
URL: http://localhost/8080/api/create
Method:POST method
Req Fields: eid,ename.esal,location
Access type: Public
Note: we nwwd to varify if employee exist or not if not we will create now employee
*/
router.post('/create',(req,res)=>{
    let emp = req.body;
})
/*
Usage: Read emploee
URL: http://localhost/8080/api/read
Method:GET method
Req Fields: NONE
Access type: Public
Note: 
*/
router.get('/read', async(req,res)=>{

    let employees = await getEmployees()
    return res.json(employees)
})
/*
Usage: Update emploee
URL: http://localhost/8080/api/update
Method:PUT method
Req Fields: NONE
Access type: Public
Note: 
*/
router.put('/update/:id',(req,res)=>{
    let eid = req.params.id

})
/*
Usage: delete selected emploee
URL: http://localhost/8080/api/delete
Method:DELETE method
Req Fields: NONE
Access type: Public
Note: first varify if employee exist or not if yes then delete it
*/
router.delete('/delete/:id',(req,res)=>{
    let eid= req.params.id
})


let getEmployees = ()=>{
    let emp_Data = fs.readFileSync(path.join(process.cwd(),"data","test.json"),'utf-8',(err)=>{
        if(err) throw err
    })
    return JSON.parse(emp_Data)
}
export default router;