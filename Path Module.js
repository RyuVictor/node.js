let that = require('path');
console.log(that.sep);

let MyFilePath = that.join('/Files', 'Text.txt');
console.log(MyFilePath);

//Reading File Name
let MyFile = that.basename(MyFilePath)
console.log(MyFile);

console.log(that.resolve(__dirname, 'Files', 'Text.txt'));