let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output
// 210

console.log([...n1,...n2].length * Math.abs(...n2));

console.log(parseInt(`${n2.indexOf(Math.min(...n1))}${Math.min(...n1)}`));