// Q7: WAF that ckeck a number/string is palindrome or not?

// For Number
const palindromeNumber = (num) => {
  let result = Number(num.toString().split("").reverse().join(""));
  return result === num;
};

console.log(palindromeNumber(12345));
console.log(palindromeNumber(44556655665544));

// For String
const palindromeString = (str) => {
  let result = str.toString().split("").reverse().join("");
  return result === str;
};

console.log(palindromeString("kasim"));
console.log(palindromeString("racecar"));
