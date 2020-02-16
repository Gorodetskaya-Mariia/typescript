class Department {
  protected employees: string[] = [];
  //protected can not be accessible outside class but can be accessible in extended classes
  //readonly can not be changed inside class or outside it
  //private accessible only inside class
  constructor(private readonly name: string){
  }

  describe(){
    console.log('Department:' + this.name);
  }

  addEmployee(employee: string){
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

let accounting = new Department('Accounting');
console.log(accounting);
accounting.addEmployee('chief');
accounting.addEmployee('waitress');
accounting.printEmployeeInformation();

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]){
    super(id);
  }

  addEmployee(employee: string){
    if(employee == 'Max') return;
    this.employees.push(employee);//we can change employees from Department class
  }
}

class FinanceDepartment extends Department {
  //private constructor
  private constructor(id: string, private bank: string){
    super(id);    
  }

  private static instance: FinanceDepartment;

  static getInstance(){
    if(FinanceDepartment.instance){
      return this.instance;
    }
    this.instance = new FinanceDepartment('d2', 'VTB');
    return this.instance;
  }

}

const finance = FinanceDepartment.getInstance();