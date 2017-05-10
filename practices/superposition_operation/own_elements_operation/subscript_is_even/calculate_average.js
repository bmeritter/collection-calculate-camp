'use strict';
var calculate_average = function (collection) {
  let even = collection.filter(item => item % 2 === 0);
  return even.reduce((a, b) => a + b, 0) / even.length;

};
module.exports = calculate_average;
