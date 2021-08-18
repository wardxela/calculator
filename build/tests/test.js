import { calculator as c } from "../index.js";
function test(actual, expected) {
    console.log(actual === expected);
}
// Basic operations
console.log("Plus and minus");
test(c("1 + 52"), 53);
test(c("2 + 3"), 5);
test(c("331 - 59"), 272);
test(c("21 + 4 + 22 - 40"), 7);
test(c("-22 - 40"), -62);
// Multiplication
console.log("Multiplication");
test(c("12 * 4"), 48);
test(c("-22 * 3"), -66);
test(c("12 + 3 * 4 - 8"), 16);
test(c("4 + 0.5 * 2 - 1"), 4);
test(c("1 * 2 * 3 * 4"), 24);
test(c("2 * 2"), 4);
// Division
console.log("Division");
test(c("4 / 2"), 2);
test(c("6 / 2 / 2"), 1.5);
test(c("12 + 8 / 4 - 6"), 8);
test(c("10 / 5 + 4 * 3"), 14);
test(c("126 / 3"), 42);
// Long ones
console.log("Long operations");
test(c("1 * 2 * 3 * 4 * 5"), 120);
test(c("16 / 2 / 2 / 2 / 2"), 1);
// Multiplication and division after each other
console.log("Multiplication and division after each other");
test(c("2 * 6 / 3 * 5"), 20);
test(c("35 / 5 * 4 / 14"), 2);
test(c("-100 / 25 * 8 + 4"), -28);
test(c("12 * 5 / 2 + 77 - 3 - 4"), 100);
test(c("1000 - 7 * 12 / 3"), 972);
test(c("3.14 * 99.5 * 99.5"), 31086.785);
test(c("-1024 / 2 * 32 * 54.2 + 129"), -887883.8);
test(c("42 * 42 - 84 * 42 * 42 - 84"), -146496);
