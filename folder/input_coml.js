// input from commond line
// console.log(process.argv[1]);
const fs=require('fs');
const input=process.argv;// use to save the value the user iner in commond line;
if (input[2]=='add') {
    fs.writeFileSync(input[3],input[4]);        
    
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("invalid input");
}
;