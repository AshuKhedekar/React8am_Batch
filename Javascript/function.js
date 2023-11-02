// 1. function with no argument no return type
// function add(){
//     console.log("Hello World!");
// }
// add();

// 2. function with argumnets no return type
// function add(n){
//  console.log("n value", n);
// }
// add(10);

// function add(a,b){
//     console.log(a+b);
// }
// add(12,10);

// 3 function with no arguments and  with return type
// function add(){
//     return 12+23;
// }
// add();

// 4. function with arguments and with return type

function f1(a,b){
   return a+b;
}
f1(12,23)










function add(a,b){
    debugger
    console.log(a+b);
}
add(12,10);
 22
undefined
function add(a,b){
    debugger
    console.log(a+b);
}
add(12);
 NaN
undefined
function add(a,b){
    debugger
    console.log(a+b);
}
add(12);
 NaN
function add(a,b){
    debugger
    console.log(a+b);
}
add(12,10,23);
 22
undefined
function add(a,b,c,b){
    debugger
    console.log(a+b);
}
add(12,10,23);
 NaN
undefined
function add(a,b,c,b){
    debugger
    console.log(a+b);
}
add();
 NaN
undefined
function add(a,b,c,b){
    debugger
    console.log(a,b,c,b);
}
add();
//  undefined undefined undefined undefined
undefined
function add(){
    return 12+23;
}
add();
35
function add(){
    return 12 ,23;
}
add();
23
function add(){
    return "Hello World";
}
add();
'Hello World'
function add(a,b){
    debugger
    console.log(a+b);
}
add(12,12);
\ 24
undefined
add(34,33);
VM193:3 67
undefined
function f1(){
    let res = 12+50;
    return res;
}
f1();
62
function f1(){
    let res = 12;
    return res;
}
f1();
12
// function f1(){
//     return "hello" ,"hi";
// }
// f1();
// 'hi'
// ---------------->
// function f1(){
//     let arr = [12,34,45];
//     return arr;
// }
// f1();
// ----------------------------->
// function f1(){
//     let arr = {
//         "0":12,
//                "1":34,
//                "2":45
//               };
//     return arr;
// }
// f1();
// {0: 12, 1: 34, 2: 45}

// ----------------------------->
// function f1(a,f){
//     debugger
//     console.log(a);
//     f();
// }
// f1(12,13);
// ------------------------------------->
// function f2(){
//     debugger
//     console.log("Hello");
// }

//  12
//  Uncaught TypeError: f is not a function
    
// ---------------------------------------->
// function f1(a,f){
//     debugger
//     console.log(a);
//     f();
// }
// f1(12,13);

// ----------------------------->
// function f2(){
//     debugger
//     console.log("Hello");
// }

 12
// Uncaught TypeError: f is not a function
  
function f1(a,f){
    debugger
    console.log(a);
    f();
}
f1(12,f2);
function f2(){
    debugger
    console.log("Hello");
}

 12
 Hello
undefined
(function(){
    console.log("Hello");
})();
 Hello
undefined
function(){
    console.log("Hello");
}();
 Uncaught SyntaxError: Function statements require a function name