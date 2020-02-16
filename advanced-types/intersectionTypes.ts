//intersection types allow us to combine our types
type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const el1: ElevatedEmployee = {
  name: 'Anna',
  privileges: ['create server'],
  startDate: new Date()
}

console.log(el1);