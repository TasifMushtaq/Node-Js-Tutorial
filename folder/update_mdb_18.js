const dbConnection=require('./mangodb');
const updateData=async ()=>{
    let data=await dbConnection();
    let result=data.updateOne(
        {name:'calaza',shoes:'calaza',price:'30000'},
        {$set :
        {name:'new service',shoes:'cal',price:'39000'},
    },
    )

    // console.log(data);
}
updateData();
//how to update single record if we have multiple records of one name
//using updateone 
//if we update the all name of that then we call the update