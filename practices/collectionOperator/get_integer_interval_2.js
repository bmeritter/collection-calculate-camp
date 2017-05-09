'use strict';

const increase = (number_a, number_b) => {
  let result = [];
  for (let i = number_a; i <= number_b; ++i) {
    result.push(i);
  }
  return result.filter(item => item %2 === 0);
};

const decrease = (number_a, number_b) => {
  let result = [];
  for (let i = number_a; i >= number_b; --i) {
    result.push(i);
  }
  return result.filter(item => item %2 === 0);
};


function get_integer_interval_2(number_a, number_b) {

  if (number_a <= number_b) {
    return increase(number_a, number_b);
  }

  return decrease(number_a, number_b);
}
module.exports = get_integer_interval_2;
