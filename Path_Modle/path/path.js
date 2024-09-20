// ES-5 mathod
// const path = require('path');
// let cwd = path.join(__dirname)
// let cwf = path.join(__filename)

// ES-6 method 
import path, { dirname } from 'path'
import { cwd } from 'process';
let cwdir = path.join(process.cwd())
let cwf = getCurr


console.log(cwdir);
console.log(cwf);
