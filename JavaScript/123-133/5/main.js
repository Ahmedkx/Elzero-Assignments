let theName = "Elzero";

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

console.log(Array.from(theName))

console.log(theName.split(""))

console.log([...theName])

console.log(Object.assign([], theName))

console.log(new Array(...theName))