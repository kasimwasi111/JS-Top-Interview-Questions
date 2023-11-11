// Q6: WAF that reverse a number?

const reverseNumber = (num) => {
  let rev = Number(num.toString().split("").reverse().join(""));
  return rev;
};

console.log("Without Loop:" + reverseNumber(12345));

const reverseLoop = (num) => {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
    // num = num / 10;
  }
  return rev;
};

console.log("Using Loop:" + reverseLoop(12345));
