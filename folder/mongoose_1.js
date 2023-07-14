const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-commerce');
const ProductSecma = new mongoose.Schema(
    {
        name: String,
        price: Number,
        model: Number,
        shoes: String,
    }
);

// const main = async () => {
//     // await mongoose.connect('mongodb://localhost:27017/e-commerce');
//     const ProductSecma = new mongoose.Schema(
//         {
//             name: String,
//             price:Number,
//             model:Number,
//             shoes:String
//         }
//     )
//     // const ProductModel = mongoose.model('products', ProductSecma);
//     // let data = new ProductModel({ name: 'qw3er5',price:900,model:3545,shoes:'qw44' });
//     // let result = await data.save();
//     // console.log(result);

// };


//  savedb();
// main();
//insert data in db
// const savedb=async ()=>{
//     const Product = mongoose.model('products', ProductSecma);
//     let data = new Product({ name: 'qwer75',price:9980,model:3549,shoes:'qy44' });
//     let result = await data.save();
//     console.log(result);
//  }
// savedb();
//update data in db
// const updateData = async () => {
//     const Product = mongoose.model('products', ProductSecma);
//     let data = await Product.updateMany(
//         { name: 'qwer75' },
//         {
//             $set: { name: 'qq25', price: 878 }
//         }
//     );
//     console.log(data);
// }
// updateData();
// const deleteData = async () => {
//     const Product = mongoose.model('products', ProductSecma);
//     let data = await Product.deleteOne(
//         { name: 'qq25' },
        
//     );
//     console.log(data);
// };

const findInData = async () => {
    const Product = mongoose.model('products', ProductSecma);
    let data = await Product.find({name:'qw35'});
    console.log(data);
}
findInData();