function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}
//function never returns anything, just crushes the code
generateError("An error occurred!", 500);