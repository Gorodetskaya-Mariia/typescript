//literal type: resultConversion: "as-number" | "as-string"
function combine1(
  number1: number | string,
  number2: number | string,
  resultConversion: "as-number" | "as-string") {
    
  if (typeof number1 == "number" && typeof number2 == "number" || resultConversion == "as-number") {
    return +number1 + +number2;
  } else {
    return number1.toString() + number2.toString();
  }
}
console.log(combine1(12, 14, "as-number"));
console.log(combine1("12", "14", "as-number"));
console.log(combine1("abc", "dvbf", "as-string"));