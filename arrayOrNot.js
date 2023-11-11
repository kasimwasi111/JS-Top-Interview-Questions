// Q2: Check if an Object is an Array or not?
function chekArray(elem) {
  return Array.isArray(elem);
}
console.log(chekArray({})); //false
console.log(chekArray([])); //true
