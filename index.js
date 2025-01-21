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
let child=document.querySelector('#fheading');
let parent=child.parentElement;
parent.removeChild(child);

let button=document.querySelector('#btn');
function changeColor(){
    button.style.backgroundColor='red';
}

button.addEventListener('click',function changeColor(){
    button.style.backgroundColor='red';
    console.log('Button clicked');
});
button.removeEventListener('click',function changeColor(){
    button.style.backgroundColor='red';
    console.log('Button not clicked');
}); 