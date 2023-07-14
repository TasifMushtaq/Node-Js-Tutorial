const express=require('express');
const path=require('path');
const app=express();
const publicpath=path.join(__dirname,"public");
// app.use(express.static(publicpath));
//if we did not need of extension like index.html so use this method
app.get('',(_,resp)=>{
    resp.sendFile(`${publicpath}/index.html`);
})
app.get('/contect',(_,resp)=>{
    resp.sendFile(`${publicpath}/contect us.html`);
})
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicpath}/about.html`);
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicpath}/404.html`);
})
app.listen(6200);
//interview question 
//path module is use to get the folder insidde of your project
