import fs from 'fs';

fs.readFile('data.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log("Reading file...");
    let users = JSON.parse(data)
    let male_user = [];
    let female_user = [];
    users.forEach(user => {
        if(user.gender === 'male'){
            user.push(male_user)
        }
        if(user.gender === 'female'){
            user.push(female_user)
        }
        fs.writeFile('newmale.json',JSON.stringify(male_user),(err)=>{return err})
        
    });
    
})