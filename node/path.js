const path = require('path');

console.log(path.join(__filename, '/var.js'));
console.log(path.resolve(__dirname, '..', '/var.js'));