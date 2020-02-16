function add(n1: number, n2: number) {
  return n1 + n2;
}
//void: the function returns nothing
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(1, 2));//Result: 3
console.log(printResult(add(1, 2)));//undefined

//functions as types
let combineValues: (a: number, b: number) => number;
//combineValues is a function, which except two parameters type number and return a number
combineValues = add;

console.log(combineValues(3, 5));

//functions and callbacks
function AddAndHandle(a: number, b: number, cb: (result: number) => void) {
  const result = a + b;
  cb(result);
}

AddAndHandle(5, 7, (result) => { console.log(result) });