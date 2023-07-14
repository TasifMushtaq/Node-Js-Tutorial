// What is mongo db --> mongo db is non sql database
//store date in collection not in tables
//collection dont have rows and coloms
//data is store in the form of form
//db.createcollection('')

const { MongoClient } = require('mongodb');
const database = ('e-commerce');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
async function dbConnection() {
    let result = await client.connect();
    db = result.db(database);
    // collection=db.collection('products')
    return db.collection('products');
    // collection = db.collection.find({ name: 'nike' })('products');
    // let data=await collection.find({name: 'nike'}).toArray()
    // let data=await collection.find({}).toArray()
    // // let responce = await collection.find({}).toArray();
    // console.log(data);

};
module.exports=dbConnection;