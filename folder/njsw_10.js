//how node JS work
// event loop--->>>>
// call stuck -> node api -> callback que
// call back -->register  one by one and then exectue register wich is execute first and then next
//node js api
// first the main funcyion run and 0 seconds wait in que after the main function the 0 seconds go to the call stuck and run and then next
console.log("starting...")
setTimeout(() => {
    console.log("2 seconds ")
    
}, 2000);
setTimeout(() => {
    console.log("0 seconds ")

}, 0);
console.log("finching...")