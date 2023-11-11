// Q1: Reverse each word of a String

function reverseWord(str) {
  const result = str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
  console.log(result);
}

reverseWord("I Love My India");
