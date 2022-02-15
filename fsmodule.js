const fs = require('fs');

// const fs = require('fs').writeFileSync; //this is used to import only writefilesync function from fs module.
fs.writeFileSync("file.txt", "this is writefilesync");
const a = fs.readFileSync("file.txt", "utf-8");
console.log(a);
console.log(__dirname, __filename);