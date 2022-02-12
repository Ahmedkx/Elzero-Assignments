let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// Shift numbers to the top of the array
for (let i = 0; i < chars.length; i++) {
	if (typeof chars[i] === "number") chars.unshift(...chars.splice(i, 1));
}

// Find the index of first letter in the array
let firstLetterPosition = chars.findIndex((e) => typeof e === "string");

// Make needed changes
chars.copyWithin(0, firstLetterPosition, firstLetterPosition * 2);
console.log(chars);