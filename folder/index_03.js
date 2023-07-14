// Modules 
// The Module that we import is called non global module
const fs=require('fs');
const fs=require('fs').writeFileSync;
fs.writeFileSync("hello.txt","here is tasif and he is professional full stack developer");
console.log("->>",__dirname);


// the module that we couldnot need to import like console
// console.log('its t m tiger');


// http -> Hundle the server request and respound;
const http=require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>Thanks to join us for makeing  hand together");
    resp.end();

}).listen(4500);
// pass the full function as a parameter
// const http=require('http');
// function datacontrol(res,resp) {
//     resp.write("<h1>regert: Thanks to join us for makeing  hand together");
//     resp.end();
    
// }

// http.createServer(datacontrol).listen(6500);