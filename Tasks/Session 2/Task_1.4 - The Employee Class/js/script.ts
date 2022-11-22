class Employee {
  private id: number;
  private firstName: string;
  private lastName: string;
  private salary: number;

  constructor(id: number, firstName: string, lastName: string, salary: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  getId(): number {
    return this.id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getFullName(): string {
    let FullName = this.firstName + " " + this.lastName;
    return FullName;
  }

  setSalary(sal: number): void {
    this.salary = sal;
  }

  getSalary(): number {
    return this.salary;
  }

  getAnnualSalary(): number {
    let annual = this.salary * 12;
    return annual;
  }

  raiseSalary(percentage: number): number {
    let raise = (this.salary * percentage) / 100;
    return raise;
  }

  toString(): string {
    return `
                  Id : ${this.id}  
                  FirstName : ${this.firstName}  
                  LastName : ${this.lastName} 
                  New Salary : ${this.salary} 
                  `;
  }
}


// Employee
var emp = new Employee(1, "Ahmed", "Samir", 2000);


// Output
console.log('ID ===> ' , emp.getId());
console.log('Fisrt Name ===> ' , emp.getFirstName());
console.log('Last Name ===> ' , emp.getLastName());
console.log('Full Name ===> ' , emp.getFullName());
console.log('Initial Salary ===> ' , emp.getSalary());

// Set Salary
emp.setSalary(4000);

// Output
console.log('New Salary ===> ' , emp.getSalary());
console.log('Get Annual Salary ===> ' , emp.getAnnualSalary());
console.log('Raise Salary ===> ' , emp.raiseSalary(12));
console.log('\n all data as string with new salary \n ' , emp.toString());
