// console.log("start exe...");

// setTimeout(() => {
//     console.log("wait function");
// }, 2000);

// console.log('nothing');

let a = 20;
let b = 0;

// how to use Promise

let waitingData = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve(30);
    }, 2000);
})

waitingData.then((data)=>{
    b = data;
    console.log(a + b);
})