//Middle wear is a module by using this module we access the request sand respond
const express=require('express');
const app=express();
const reqfilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send('Enter your age');
    }
    else if(req.query.age<18){
        resp.send('You are below then 18');
    }
    else{
        next();
    }


}
app.use(reqfilter);

app.get('/',(req,resp)=>{
    resp.send('Welcome to the home page')
})
app.get('/about',(req,resp)=>{
    resp.send('Welcome to the about page')
})


app.listen(8000);

//Middlewear types
// application type middlewear
