// console.log(arguments);
// console.log(require('module').wrapper);

// module.expors
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(3, 2));

// exports
// const calc2 = require('./test-module-2');
const { add, multiply, divide } = require('./test-module-2');
console.log(multiply(3, 2));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
