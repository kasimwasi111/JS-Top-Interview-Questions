// Q9: WAJF that accepts a string as a parameter and converts the first letter of each word of the string in uppercase?

const firstWordUpperCase = (str) => {
  return str
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(" ");
};

console.log(firstWordUpperCase("hii everybody, how are you doing?"));
