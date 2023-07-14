//Route level MiddleWear 
//the middlewear we use in all the routers in a single or multiple router
//Applay in one group of route and all the routers of the app
const express=require('express');
const app=express();
const route=express.Router();
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
route.use(reqfilter);

app.get('/',(req,resp)=>{
    resp.send('Welcome to the home page')
})
app.get('/about',(req,resp)=>{
    resp.send('Welcome to the about page')
})
route.get('/user',(req,resp)=>{
    resp.send('Welcome to the users page')
})
route.get('/contect',reqfilter,(req,resp)=>{
    resp.send('Welcome to the contect page')
})
app.use('/',route);

app.listen(8000);