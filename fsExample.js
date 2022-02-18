const fs = require('fs');
const path = require('path');

// fs.writeFileSync('orange.txt', 'this is a apple file');
const dirpath = path.join(__dirname, 'files');
// console.warn(dirname);
for(i=0;i<6;i++) {
fs.writeFileSync(dirpath+"/orange"+i+".txt", "this is a orange files");
}

fs.readdir(dirpath,(err, files)=>{
    // console.warn(files);
    files.forEach((item)=>{
        console.log(item);
    })
})