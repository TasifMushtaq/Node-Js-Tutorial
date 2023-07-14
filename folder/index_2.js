// console.log('All is well');
// const a=require('./app');
// console.log(a.z(50,60));
const arr=[1,5,6,44,77,3,8,2,8];
const result=arr.filter((item)=>{ //use to filter the items of array
    return item>=44;
})
console.log(result);