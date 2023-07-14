const dbConnection=require('./mangodb');
const insert=async ()=>{
    const db=await dbConnection();
    const result=await db.insert([
        {name:'service',shoes:'service',price:'42000',model:'ak 47',},
        {name:'calaza',shoes:'calaza',price:'30000',model:'90po',},
        {name:'indure',shoes:'indure',price:'3000',model:'infinte',}

    ])
    // console.log(result);
    if(result.acknowledged){
        console.log('data is inserted in database')
    }
}
insert();
// how to insert multiple data 
// insert multiple data using arrays