
// //Object
// let obj={
//     name:"Preksha",
//     age:21,
//     weight:40,
//     greet:function(){
//         console.log("Hello, I am Preksha");
//     }
// };
// console.log(obj);
// obj.greet();

// //Arrays
// let arr=new Array(1,2,3,4,5); 
// let arr1=[1,2,3,4,5];
// console.log(arr);

// // Built-in methods 
// let arr1=[1,'Hello',3,4];
// arr1.push('World');
// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// arr1.unshift('Hey');
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// console.log(arr1.slice(1,3));
// arr1.splice(1,0,8)
// console.log(arr1);
// // console.log(arr2.sort());
// // console.log(arr2.reverse());

// //map filter reduce
// let arr2=[1,2,3,4,5];
// arr2.map((n)=>{
//     console.log(n*n);
// });

// ansArr=arr2.filter((n)=>{
//     return n%2==0;
// });
// console.log(ansArr);

// let sum=arr2.reduce((acc,curr)=>{
//     return acc+curr;
// });
// console.log(sum);

// //For each loop
// arr2.forEach((n)=>{
//     console.log("number: ",n);
// });

// //For of loop
// let arr3=["a","b","c"];
// for(value of arr3){
//     console.log(value);
// }

// //For in loop
// for(let key in obj){
//     console.log(key," ",obj[key]);
// }

// //Classes
// class Animal{
//     name;
//     #type='wild';

//     walk(){
//         console.log("Animal is walking");
//     }
//     sleep(){
//         console.log("Animal is sleeping");
//     }

//     get getTypeVal(){
//         return this.#type;
//     }

//     set setTypeVal(value){
//         this.#type=value;
//     }
// }
// let obj1=new Animal();
// obj1.name="Dog";
// console.log(obj1.name);
// // obj1.setTypeVal('pet');
// console.log(obj1.getTypeVal);


// //In-built objects
// // Math
// // Date

// //Object cloning
// let orgObj={
//     name:'Damon',
//     age:25,
// }

// //spread operator
// let copyObj={...orgObj};
// console.log(orgObj);
// console.log(copyObj);

// //assign method
// let copyObj1=Object.assign({},orgObj);
// console.log(copyObj1);
// orgObj.name='Stefan';
// console.log(orgObj);

// //iteration
// let copyObj3={};
// for(let key in orgObj){
//     let newKey=key;
//     let newVal=orgObj[key];
//     copyObj3[newKey]=newVal;
// }
// console.log(copyObj3);

//higher order functions
//map-->to tranform an array 
// let arr=[12,14,16,18];
// const ansArr=arr.map((n)=> n*2);
// console.log(ansArr);

// //filter --> to filter out elements from an array
// const ansArr1=arr.filter((n)=>n%2!=0);
// console.log(ansArr1);

// //reduce --> to reduce an array to a single value
// const ansArr2=arr.reduce((acc,curr)=> acc+curr); 
// console.log(ansArr2);


//DOM Manipulation
// let child=document.querySelector('#fheading');
// let parent=child.parentElement;
// parent.removeChild(child);


//Event
// let button=document.querySelector('#btn');
// function changeColor(){
//     button.style.backgroundColor='red';
// }

// button.addEventListener('click',function changeColor(){
//     button.style.backgroundColor='red';
//     console.log('Button clicked');
// });
// button.removeEventListener('click',function changeColor(){
//     button.style.backgroundColor='red';
//     console.log('Button not clicked');
// }); 


//Error handling
//Types of errors-->run-time errors, compile-time errors

// console.log(1; //compile-time error---syntax error
// console.log(a); //run-time error---reference error

// try{
//     let x=1;
//     console.log(x);
// }
// catch(err){
//     console.log(err);
// }
// finally{
//     console.log("I m in finally block");
// }


//Asynchronous programming
// Asynchronous code--> handle-Event Loop


//Promise--> object that returns state of aysnchronous operation--> pending, fulfilled, rejected

// let firstPromise=new Promise((resolve,reject)=>{
//     console.log("First promise");
//     setTimeout(()=>{
//         console.log("Hello, Preksha");
//     },5000);
//     let x=false;
//     if(x==true){
//         resolve();
//     }else{
//         reject();
//     }
// })

// firstPromise.then(()=>{
//     console.log("First promise resolved");
// }).then(()=>{
//     console.log("Second promise resolved");
// }).then(()=>{
//     console.log("Third promise resolved");
// }).catch((error)=>{
//     console.log("Error occured");
// })

// //Async-await

// //scenario: ftech weather data from API
// //1. url/end-point-->sync
// //2. fetch data from API-->async-->await (synchronous behavior)
// //3. process data-->sync

// async function fetchWeatherData(){
//     //fetch data from API
//     let data=await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");
//     //parse data into json data
//     let jsonData=await data.json();
//     console.log(jsonData);
// }
// fetchWeatherData();

//closures-->function with lexical environment
// function x(){
//     let num1=10;
//     function y(){
//         let num2=20;
//          function z(){
//             console.log(num1+num2);
//         }
//         num2=40;
//         z();
//     }
//     y();
// }
// x();

// window.onscroll=()=>{
// 	if((window.innerHeight+window.pageYOffset)>=document.body.offsetHeight){
// 	    // console.log("End of page");
//     }
// }

// const toTop=()=>window.scrollTo({top:0,behavior:'smooth'});

// const isDarkMode=()=>{
//     return window.matchMedia('(prefers-color-scheme: dark)').matches;
// }

//localStorage, sessionStorage and cookies
localStorage.setItem('name','Preksha');
localStorage.setItem('age',21);
console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('age'));

sessionStorage.setItem('name','Preksha');
sessionStorage.setItem('age',21);
// sessionStorage.clear();