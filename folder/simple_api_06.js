const http=require("http");
const data=require("./data")
// const data= require("path");
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
    // resp.writable("you are the product of five people who spend must with you")

}).listen(5000);
