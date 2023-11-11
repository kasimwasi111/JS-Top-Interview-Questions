// Q8: WAF that returns a passed string with letters in alphabetical order?

const alphabeticalOrder = (str) => {
  return str.split("").sort().join("");
};

console.log(alphabeticalOrder("kasimwasi"));
