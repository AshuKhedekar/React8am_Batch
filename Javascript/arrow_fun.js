// 1. normal function
// function_keyword function_name(){

// }       

// example--> function normalFunction(){

// }

// regular function we written into two ways :
// 1. function declaration.
// 2. function expression.


// 1. function declaration.

function add(a,b){
    return a*b;
}
add(23,12);

// 2. function expression.
 let sum = function(a,b){
    return a+b;
}
sum(2,3);

const sum1 =(a,b)=>{
    return a+b;
}


// 1. DIFFERENCE BETWEEN ARROW FUNCTION AND REGULAR FUNCTION
// 1. Syntax  
// arrow function
const sum2=(a,b)=>a+b;

// Regular function 
function add(a,b){
    return a*b;
}
add(23,12);

// 2. No arguments object in a arrow function.
// function add(){
//     console.log(arguments);
//     return Math.max(...arguments);
// }

// add(5,34,12,89,20,100);
//  Arguments(6) [5, 34, 12, 89, 20, 100, callee: ƒ, Symbol(Symbol.iterator): ƒ]0: 51: 342: 123: 894: 205: 100callee: ƒ add()length: 6Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object

// 100
// const arroeFat=()=>{
//     console.log(arguments);
// }
// arroeFat(23,45,2,54,34,67,12);
//  Uncaught ReferenceError: arguments is not defined
   
    
// const user = {
//     userName:"ABC",
//     getUserName:function(){
//         debugger
//            return this.userName;
//     },
// };
// const getName = user.getUserName;
// console.log(getName);
// console.log(getName());
// console.log(user.getUserName());

// VM1916:9 ƒ (){
//         debugger
//            return this.userName;
//     }
// VM1916:10 undefined
// VM1916:11 ABC
// undefined
// const user={
//     userName = "Jayanth",
//     getUserName:()=>{
// return this.userName;
//     },
// };
// const getName = user.getUserName;
// console.log(getName);
// console.log(getName());
// console.log(user.getUserName());
// VM2270:2 Uncaught SyntaxError: Invalid shorthand property initializer
// const user={
//     userName = "Jayanth",
//     getUserName:const a=()=>{
// return this.userName;
//     },
// };
// const getName = user.getUserName;
// console.log(getName);
// console.log(getName());
// console.log(user.getUserName());
// VM2271:2 Uncaught SyntaxError: Invalid shorthand property initializer
// const user={
//     userName :"Jayanth",
//     getUserName:()=>{
// return this.userName;
//     },
// };
// const getName = user.getUserName;
// console.log(getName);
// console.log(getName());
// console.log(user.getUserName());
// VM2272:8 ()=>{
// return this.userName;
//     }
// VM2272:9 undefined
// VM2272:10 undefined
// undefined

// ======================>
// const arrowFun = *()=>{
    
// }

// VM113:1 Uncaught SyntaxError: Unexpected token '*'
// function *f1(){
// }
// undefined

// ==================================>
// function f1(a,a,a){
//     console.log(a,a,a);
// }
// f1(12,11,45);
//  45 45 45
// undefined
// "use strict";
// function f2(b,b,b){
// }
    
// VM309:2 Uncaught SyntaxError: Duplicate parameter name not allowed in this context
// const arr1=(c,c,c)=>{
// }
// VM338:1 Uncaught SyntaxError: Duplicate parameter name not allowed in this context
// "use strict";
// const arr2=(c,c,c)=>{
// }
// VM381:2 Uncaught SyntaxError: Duplicate parameter name not allowed in this context
