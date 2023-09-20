const _ = require('lodash');

// Praktekan penggunaan library lodash di sini
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = _.map(numbers, (num) => num * num);
console.log(squaredNumbers);