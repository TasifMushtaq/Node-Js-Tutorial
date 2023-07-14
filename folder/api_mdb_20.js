const dbConnection=require('./mangodb');
const express=require('express');
const mongodb=require('mongodb');
const app=express();
app.use(express.json());


function GetData() {
    app.get('/',async (req,resp)=>{
        let data=await dbConnection();
        data=await data.find().toArray();
        resp.send(data)
    
    })
    
}
app.post('',async (req,resp)=>{
    let data=await dbConnection();
    result=await data.insert(req.body);
    resp.send(result)

})
app.put('/',async (req,resp)=>{
    let data=await dbConnection();
    result=await data.updateOne(
        {name:'indure'},
        {$set:req.body}
    );
    console.log(result)
    // resp.result;
})
app.delete('/:id',async (req,resp)=>{
    let data=await dbConnection();
    result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)},
    )
    resp.send(result);
})
// GetData();

app.listen(5000);
//in get method we cannot pass the body
//we use express.json to get information from mango or expres postman
