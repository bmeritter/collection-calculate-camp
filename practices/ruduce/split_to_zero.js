'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  while (number > 0) {
    result.push(Number(number.toFixed(1)));
    number -= interval.toFixed(1);
  }
  if (result[result.length - 1] !== 0) {
    result.push(Number(number.toFixed(1)));
  }
  return result;
}


module.exports = spilt_to_zero;
