import fs from 'fs';

fs.readFile('data.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log("Reading Completed...")
    let users = JSON.parse(data)
    let male_user = []
    let female_user = []
    // for(let user in users){
    //     if( user.gender === 'male'){    
    //         male_user.push(user)
    //     }
    //     if( user.gender === 'female'){
    //         female_user.push(user)
    //     }
    // }
    male_user = users.filter(user => user.male == 'male')
    female_user = users.filter(user => user.female == 'female')
        fs.writeFile('cmale.json',JSON.stringify(male_user),(err)=>{
            if(err) throw err
            console.log(' Male File Created');
        })
        fs.writeFile('cfemale.json',JSON.stringify(female_user),(err)=>{
            if(err) throw err
            console.log('Female File Created');
        })
    
})