// Basics 

// console.log("hello world");
// var a = 20;
// var b = 33;
// console.warn(a+b);
// if (a+b <= 50) {
//     console.log("successful");
// }else{
//     console.log("Invalid");
// }

// The way of fetching data or function from another file

// const app = require('./app');
// console.log(app);
// console.log(app.z());

// Array filter function ko kaise use kare 

const arr=[32,23,34,12,34,12];

let result = arr.filter((item) => {
    // console.log(item);
    return item===34;  
})
console.warn(result);