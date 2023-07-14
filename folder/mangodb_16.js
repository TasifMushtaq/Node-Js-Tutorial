const dbConnection=require('./mangodb')
dbConnection().then((resp)=>{
    resp.find().toArray().then((data)=>
    console.warn(data));
});
const main=async ()=>{
    let data=await dbConnection();
    data=await data.find().toArray();
    console.warn(data);
};
main();
//how to find where data
// find using find funcyion like find({name='tasif'})