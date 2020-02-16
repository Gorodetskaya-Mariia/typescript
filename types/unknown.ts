let userInput: unknown;
let userName: string;

userInput = 6;
userInput = "Anna";

// userName = userInput :error, we should add checking
//it will work if userInput: any
if (typeof userInput == "string") {
  userName = userInput
}