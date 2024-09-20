import fs from 'fs';
// let contact = fs.readFileSync("abc.txt",'utf-8');
fs.readFile('./abc.txt','utf-8',(err,data )=>{
    if(err) throw err
    fs.writeFile('file.txt',data,(err)=>{
        return err   
    })
})

// console.log(contact);
