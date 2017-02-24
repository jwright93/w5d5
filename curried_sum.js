function curriedSum(numArgs) {
  const numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce(function(acc, el) {
        return acc + el;
      }, 0);
    }
    else {
      return _curriedSum;
    }
  };
}



const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56
