const dbConnection=require('./mangodb');

const deleteData=async ()=>{
    let data=await dbConnection();
    let result=await data.deleteOne(
        // {name:'bata',},
        {name:'new service',}
    )
    console.log(result);
};
deleteData();