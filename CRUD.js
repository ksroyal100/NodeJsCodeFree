// CRUD means create , read , update, delete
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;
const filePath2 = `${dirPath}/orange.txt`;

//  Read
// fs.writeFileSync(filePath, 'this is a simple test file');
// fs.readFile(filePath,'utf-8',(err, item) =>{
//   console.log(item);
// });

//Update
// fs.appendFile(filePath,' and file name is apple.txt',(err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File is Updated!!!")
//     }
// });

//Rename
// fs.rename(filePath,filePath2, (err) =>{
//     if(!err){
//         console.log('Rename Successfully');
//     }
// })

//Delete
// fs.unlink(filePath2, (err)=>{
//     if(!err){
//     console.log('File deleted');
//     }
// })

//Buffer ka matlab temperory memory location