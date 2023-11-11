// Q4: Check ia a number is an integer or not?
// Method 1:

let num = 20;
console.log(Number.isInteger(num));

// Method 2:

if (num % 1 === 0) {
  console.log("Integer");
} else {
  console.log("Not an integer");
}
