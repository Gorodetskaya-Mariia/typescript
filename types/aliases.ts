//type Aliases custom types
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";
function combine2(
  number1: Combinable,
  number2: Combinable,
  resultConversion: ConversionDescriptor) {
    
  if (typeof number1 == "number" && typeof number2 == "number" || resultConversion == "as-number") {
    return +number1 + +number2;
  } else {
    return number1.toString() + number2.toString();
  }
}
console.log(combine2(12, 14, "as-number"));
console.log(combine2("12", "14", "as-number"));
console.log(combine2("abc", "dvbf", "as-string"));

//  Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

//For example:

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
//This allows you to avoid unnecessary repetition and manage types centrally.

//For example, you can simplify this code:

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
//To:

function greet1(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder1(user: User, checkAge: number) {
  return checkAge > user.age;
}