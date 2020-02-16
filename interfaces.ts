//interfaces allow us to define a structure of an object we can use it as a type check for objects that must have this structure

//readonly
interface Named {
  readonly name: string;
  outPutName?: string;//optional, can be but is not required
}
//extending interfaces
interface Greetable extends Named {
  greet(phrase: string): void;
}

let user1: Greetable;

user1 = {
  name: 'Anna',
  greet(phrase: string){
    console.log(phrase + ' ' + this.name);
  }
}

user1.greet('hello');
console.log('user1',user1);
//using interfaces with classes

class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string){
    this.name = n;
  }

  greet(phrase: string){
    console.log(phrase + ', ' + this.name);
  }
}

let user2 = new Person('Max');
user2.greet;
console.log('user2',user2);

//interfaces as functions
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) =>{
  return n1 + n2;
}
add(3,6);