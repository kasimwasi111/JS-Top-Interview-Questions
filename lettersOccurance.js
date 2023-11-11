// Q 10: WAJF that counts the occurance of each letters in a string?

const lettersOccurances = (str) => {
  let occurences = {};
  str.split("").map(function (elem) {
    occurences.hasOwnProperty(elem) === false
      ? (occurences[elem] = 1)
      : occurences[elem]++;
  });
  return occurences;
};

console.log(lettersOccurances("apple"));
console.log(lettersOccurances("pappppppellla"));
