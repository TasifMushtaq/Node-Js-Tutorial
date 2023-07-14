// show the file system lsit
const fs=require('fs');
// const { join, dirname } = require('path');
const path=require('path');
const dirpath=path.join(__dirname,"folder");
// console.log(dirpath);
// for (let i = 0; i < 5; i++) {
//     // const element = array[i];
//     // fs.writeFileSync(dirpath+'/apple"${i}".txt','this is simple txt files');    
//     // fs.writeFileSync(dirpath+"/apple"+i+".txt",'this is simple txt files');    
// }
// ;
fs.readdir(dirpath,(err,files)=>{
    // console.log(files);
    // files.forEach(item => {
    //     console.log(item);        
    // });
    // files.forEach(element => {
    //     fs.readFile('apple1.txt','utf8',function (error,data) {
    //         console.log(data);
    //     });
        
    // });
});
// question
// the files does not get the other folder 
// node is like server
