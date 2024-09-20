import fs from 'fs';
import path from 'path';

fs.readFile(path.join(process.cwd(),"static","data","data.json"),'utf-8',(err,data)=>{
    if(err) throw err
    let users = JSON.parse(data)
    let male_user = users.filter(user => 
       user.gender === 'Male'

    )
    console.log('male');
    
    let female_user = users.filter(user => 
         user.gender === 'Female'
    )
    
    fs.writeFile(path.join(process.cwd(),"static","male",'male.json'),JSON.stringify(male_user),(err)=>{
        if(err) throw err
        console.log('male user completed');
        
    })
    fs.writeFile(path.join(process.cwd(),"static","female",'female.json'),JSON.stringify(female_user),(err)=>{
        if(err) throw err
        console.log('female user completed');
    })
})