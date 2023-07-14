// variables
// var a = 5;
// var b = 66;
// var d = a + b;
// var c=document.getElementById('a').innerHTML=d;
// console.log(a+b);
// comments
// this is single line comment
/*
this 
is 
multiple 
line 
comment */

// data types
// var str = 'hello world';
// var num1 = 555;
// var num2 = 65.55;
// console.log(str); // show the black in console
// console.log(num1); // show the blue in console

// operators in js
//arthimetic opertors
// console.log('this is a+b',a+b);
// console.log('this is a-b',a-b);
// console.log('this is a/b',a/b);
// console.log('this is a*b',a*b);
// console.log('this is a%b',a%b);

// raltional operator >> < ! = !=
// assignmet operator 
// console.log('this is a==b',a==b);
// console.log('this is a+=b',a+=b);
// console.log('this is a/=b',a/=b);
// console.log('this is a*=b',a*=b);
// console.log('this is a%=b',a%=b);

// logiacal operators
// there are two operators   true false

// var aa=true;
// var ab =false;
// console.log(aa,ab);

// functions 
// var age=17.5;
// function agechecker(){
//     if(age>=18){
//         console.log('you are able driving');
//     }else{
//         console.log('you are not able to drive');
//     }
// }
// agechecker(age);

// conditions statment
// var age=55;
// if (age >= 18 && age<50) {
//     console.log('you are able driving');
// }
// else if(age >50){
//     console.log('you are not able to drive');
// }
// else{
//     console.log('you are not able to drive the any vehical');

// };

// loops
// for loop
// var arr=[1,2,3,4,5,6];
// for (let i = 0; i < arr.length; i++) {
//     // const element = arr[i];
//     // console.log(element);
//     console.log(arr[i]);
    
// };
// while
// let i=0;
// while (i<arr.length) {
//     console.log(arr[i]);
//     i++;
    
// }
// do while 
// let i=0;
// do {
//     console.log(arr[i]); 
//     i++;
// } while (i<arr.length);
// for each/////
// array.forEach(element => {
    
// });

// for (let i = 0; i < arr.length; i++) {
//     if(i==3){
//         break
//         // continue
//     };
//     console.log(arr[i]);
//     // const element = arr[i];
    
// }
//  arrays  and arras methods
// var array=['tasif','mushtaq',34,45,true,7];
// console.log(array.length); // shows the length of aray
// array.push('tt');
// array.pop('');
// array.shift()
// array.unshift('tasifmushtaq')
// var a=array.length;
// var b=array.reverse;
// var b=array.lastIndexOf;
// console.log(b);



// strings methods to check the string
// var stri='this is tiger here and he is a little coder';
// stri.replace('tiger','tasif');
// console.log(stri);
// dom ---> document object modle
// var id=document.getElementById('click');
// id.style.background='red';
// id.style.color='white';
// id.style.border='blue 2px solid';
// console.log(id.innerText);
// var eclass=document.getElementsByClassName('con');
// console.log(eclass.innerHtml);
// console.log(eclass)
// eclass[0].style.background='yellow';
// eclass[1].style.background="red";
// eclass[0,1].style.color='white';
// eclass[0,1].style.padding='20px';
// eclass[0].style.padding='20px';
// eclass[0].style.margin='20px';
// eclass[0].classList.add('bg-primary');
// tn=document.getElementsByTagName('div');
// crele=document.createElement('p');
// crele.innerText="this is created paragraph";
// tn[0].appendChild(crele);
// crele2=document.createElement('b');
// crele2.innerText="this is created bold";
// tn[0].replaceChild(crele2,crele);
// br=document.createElement('br');
// tn[0].appendChild(br);
// let q=document.querySelectorAll('.con');
// let q=document.querySelector('.con');
// console.log(q);

// Events listener in js
// let cl=document.getElementById('click');
// cl.addEventListener('click',function clicked() {
//     cl.innerHTML="<b> Press <b/>";
//     // cl.innerText="great";

//     console.log('clicked on buton');
    
// })

// let dev=document.getElementsByClassName('con');
// function change() {
//     dev[0].style.background='black';
//     dev [0].style.color='red';
//     dev[0].style.hight='300px';
//     dev [0].style.width='50%';
//     // dev [0].style.animation='background-color:blue; left:200px; top:200px;';
// }
// arrow function
// sum=(a,b)=>{
//     return a+b;
// }

// settimeinterval,settimeout
// logkaro=()=>{

//     console.log('great');  
// }

// setInterval(logkaro(), 2000);
// setInterval(logkaro =() => {
//     console.log('you are the codder');
    
// }, 2000);
// setTimeout(logkaro,5000);

// localstorge in javascript
// localStorage.setItem('name','tasif');
// localStorage.getItem('name');


//json
// obj={name:'tasif',length:1, "a":{"this":"that"}};
// jso=JSON.stringify(obj);
// console.log(typeof(obj));
// console.log(jso);
// parsed=JSON.parse('{"name":"tasif","length":1,"a":{"this":"that"}}');
// console.log(parsed);
