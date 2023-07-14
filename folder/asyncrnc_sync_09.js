//js is asynscrons language that cannot wait for the completion  of one task directly run the next task
//in syncronic language the usaert wait for one task and then next like php


// console.log("exe code...");
// setTimeout(() => {
//     console.log("loading the function")
// }, 2000);
// console.log("complete the last task");
let a=22;
let b=0;
let wait=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30);
    }, 2000);
})
wait.then((data)=>{
    b=data;
    console.log(a+b);
})