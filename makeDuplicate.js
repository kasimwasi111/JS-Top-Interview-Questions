// Q5: Make this work : duplicate([1,2,3,4]);  [1,2,3,4,1,2,3,4];

function duplicate(arr) {
  return arr.concat(arr);
}
console.log(duplicate([1, 2, 3, 4]));
