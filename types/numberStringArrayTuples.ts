function sum(number1: number, number2: number) {
  return number1 + number2;
}

const n1 = 6;
const n2 = 2;
const f = sum(n1, n2);

const person: {
  name: string;
  age: number;
  hobbies: string[],
  role1: [number, string],//tuple is a special type in ts,only 2 els and the exact order
} = {
  name: "Anna",
  age: 7,
  hobbies: ["sport", "dancing"],
  role1: [9, "admin"],
}