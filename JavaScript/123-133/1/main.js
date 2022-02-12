let setOfNumbers = new Set([10])
setOfNumbers.add(20).add(setOfNumbers.size)





console.log(setOfNumbers)
console.log([...setOfNumbers][2])
console.log(Array.from(setOfNumbers)[2])

let [,,first] = setOfNumbers

console.log(first)


// Needed Output
// Set(3) {10, 20, 2}
// 2