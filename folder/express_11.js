const express=require("express");
// const { addListener } = require("nodemon");
const app=express();
app.get('',(req,resp)=>{
    resp.send("hi!Welcome this is home page")
})
app.get('/about',(req,resp)=>{
    resp.send("hi! this is about page")
})
app.get('/help',(req,resp)=>{
    resp.send("hi! this is help page")
})
app.get('/contect',(req,resp)=>{
    resp.send("hi! this is contect page")
    // resp.send(`

    //   <a href="contect us.html">click here</a>

    // `);
});
app.listen(5000);