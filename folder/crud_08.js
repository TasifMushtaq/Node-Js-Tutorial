// create file readfile update file delete file

const fs=require("fs");
const path=require("path");
const dirpath=path.join(__dirname,"crud");
const filepath=`${dirpath}/file.txt`;
// console.log(filepath);
// console.log(dirpath);
fs.writeFileSync(filepath,'This is file for node');
// fs.readFile(filepath,"utf8",function (err,data) {
//     console.log(data);
    
// })
// fs.appendFile(filepath,' js using the functions',function (err) {
//     if(!err){
//         console.log('cong added to your file');
//     }
    

// });
// fs.unlinkSync(filepath,(err)=>{
//     if(!err){
//         console.log('deleted file');
//     }
// })
fs.rename(filepath,`${dirpath}/apple.txt`,function (err) {
    if(!err){
                console.log('rename the file');
            }
})
//interview question
