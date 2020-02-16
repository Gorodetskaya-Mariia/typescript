//union types
function combine(number1: number | string, number2: number | string) {
  if (typeof number1 == "number" && typeof number2 == "number") {
    return number1 + number2;
  } else {
    return number1.toString() + number2.toString();
  }
}
console.log(combine(12, 14));
console.log(combine("abc", "dvbf"));