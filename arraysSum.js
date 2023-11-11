// Q 11: Loop an array and add all the numbers?

const arraySum = (arr) => {
  let sum = 0;
  arr.map(function (elem) {
    sum += elem;
  });

  //  Using Loop
  // for (let i = 0; i < arr.length; i++) {
  //     sum = sum + arr[i];
  //   }
  return sum;
};

console.log(arraySum([1, 2, 3, 12, 14, 8]));
