const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const PLUS_OR_MINUS = ["+", "-"];
const MULTIPLICATION = "*";
const DIVISION = "/";

export function calculator(expression: string): number {
  let result = 0;
  let product: null | number = null;
  let division: null | number = null;
  let currentNumber = "";

  for (let i = 0; i < expression.length; i++) {
    if (DIGITS.includes(expression[i])) {
      currentNumber += expression[i];
    }

    if (PLUS_OR_MINUS.includes(expression[i]) || i === expression.length - 1) {
      if (currentNumber) {
        if (product !== null) {
          result += product * +currentNumber;
          product = null;
        } else if (division !== null) {
          result += division / +currentNumber;
          division = null;
        } else {
          result += +currentNumber;
        }
      }
      currentNumber = expression[i];
    } else if (expression[i] === MULTIPLICATION) {
      if (division !== null) {
        product = division / +currentNumber;
        division = null;
      } else {
        product = product === null ? +currentNumber : product * +currentNumber;
      }
      currentNumber = "";
    } else if (expression[i] === DIVISION) {
      if (product !== null) {
        division = product * +currentNumber;
        product = null;
      } else {
        division =
          division === null ? +currentNumber : division / +currentNumber;
      }
      currentNumber = "";
    }
  }

  return result;
}
