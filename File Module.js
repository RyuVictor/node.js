let { readFileSync, writeFileSync } = require('fs');
//let chobe = require('fs');
console.log(readFileSync('./Files/Text1.txt', 'utf8'));

writeFileSync('./Files/Text1.txt', "Sahu Topper\nSahu Topper");