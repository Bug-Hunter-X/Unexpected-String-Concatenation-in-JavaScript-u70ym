function myFunction(a, b) {
  // Convert both arguments to numbers before adding
  return Number(a) + Number(b);
}

console.log(myFunction(5, '10')); // Output: 15

//Alternative using parseInt
function myFunction2(a,b){
    return parseInt(a) + parseInt(b);
}
console.log(myFunction2(5,'10')); //Output: 15