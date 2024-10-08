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
router.post('/create', async(req,res)=>{
    let employee = req.body;
    console.log(employee);
    let employees = await getEmployees()
    let emp_obj = employees.find((emp)=>{
        return emp.eid == employee.eid
    })
    if(emp_obj){
        return res.status(401).json({ "msg":"Employee alrady exist"})
    }
    employees.push(employee)
    saveEmp(employees)
    return res.json({"msg":"Employee has been created"})
    
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
router.put('/update/:eid', async(req,res)=>{
    let emp_Id = req.params.eid
    let employee = req.body;
    let employees = await getEmployees();
    let emp_Data = employees.find((emp)=>{
        return emp.eid == emp_Id;
    })
    if(!emp_Data){
        return res.status(401).json({"msg":"Employee doesn't exist"})
    }
    let rem_Employee = employees.filter((emp)=>{
        return emp.eid != emp_Id
    })
    rem_Employee.unshift(employee);
    saveEmp(rem_Employee)
    return res.status(200).json({"msg":"Employee has been updated"})

})
/*
Usage: delete selected emploee
URL: http://localhost/8080/api/delete
Method:DELETE method
Req Fields: NONE
Access type: Public
Note: first varify if employee exist or not if yes then delete it
*/
router.delete('/del/:eid', async (req, res) => {
    let emp_Id = req.params.eid
    let employees = await getEmployees();
    let emp_Data = employees.find((emp)=>{
        return emp.eid == emp_Id;
    })
    console.log(emp_Data)
    if(!emp_Data){
        return res.status(401).json({"msg":"Employee doesn't exist"})
    }
    let rem_Employee = employees.filter((emp)=>{
        return emp.eid != emp_Id
    })
    saveEmp(rem_Employee)
    return res.status(200).json({"msg":"Employee has been Deleted"})
});



let getEmployees = ()=>{
    let emp_Data = fs.readFileSync(path.join(process.cwd(),"data","data.json"),'utf-8',(err)=>{
        if(err) throw err
    })
    return JSON.parse(emp_Data)
}
let saveEmp = ( employees )=>{
    fs.writeFileSync(path.join(process.cwd(),"data","data.json"),JSON.stringify(employees))
}
export default router;