import fs from 'fs';

fs.readFile('data.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log("Reading Completed...")
    fs.writeFile('empl.json',data,(err)=>{
        if(err) throw err
        console.log('File Created');
        
    })
    
})