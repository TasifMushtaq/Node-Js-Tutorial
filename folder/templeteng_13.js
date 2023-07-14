const express=require('express');
const path=require('path');
const app=express();
const publicpath=path.join(__dirname,"public");

app.get('',(_,resp)=>{
    resp.sendFile(`${publicpath}/index.html`);
})
app.set('view engine','ejs');
app.get('/contect',(_,resp)=>{
    resp.sendFile(`${publicpath}/contect us.html`);
})
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicpath}/about.html`);
})
app.get('/profile',(_,resp)=>{
    // resp.sendFile(`${publicpath}/about.html`);
    const user={
        name:'tasif',
        email:'tasif@email.com',
        city:'lqp',
        skills:['php','css','html','java']

    }
    resp.render('profile',{user});
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicpath}/404.html`);
})
app.listen(5000);
