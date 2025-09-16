let num = prompt("Enter a number:");
num = Number(num);

if (num % 7 === 0 && num % 5 === 0 && num % 3 === 0) {
  console.log("all");
} else if (num % 7 === 0 && num % 5 === 0) {
  console.log("only 7 and 5");
} else if (num % 7 === 0 && num % 3 === 0) {
  console.log("only 7 and 3");
} else if (num % 5 === 0 && num % 3 === 0) {
  console.log("only 5 and 3");
} else if (num % 7 === 0) {
  console.log("only 7");
} else if (num % 5 === 0) {
  console.log("only 5");
} else if (num % 3 === 0) {
  console.log("only 3");
} else {
  console.log("not divisible by 7, 5, or 3");
}
