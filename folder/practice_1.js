const express=require('express');
const app=express();
const http=require('http')
const path=require('path');

const pathf=path.join(__dirname,'public');

app.get('',(_,resp)=> {

    resp.sendFile(`${pathf}/index.html`,)
})
app.set('view engine','ejs');


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
app.get('/about',(_,resp)=>{
    resp.sendFile(`${pathf}/about.html`)
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${pathf}/404.html`)
})
// http.createServer().
app.listen(7000);
