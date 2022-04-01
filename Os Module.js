//require('./WD9');
//console.log(typeof (myarr.myvar));
let pika = require('os');
console.log(pika.userInfo());
console.log(`The system uptime is ${pika.uptime()} seconds`);

let MyOs = {
    name: pika.type(),
    release: pika.release(),
    totalMem: pika.totalmem(),
    freeMem: pika.freemem()
}

console.log(MyOs);