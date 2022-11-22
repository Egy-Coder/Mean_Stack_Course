// Design Level

abstract class Person {
  protected name: string;
  protected address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }

  abstract getName(): string;

  abstract getAddress(): string;

  abstract setAddress(address: string): void;

  abstract toString(): string;
}

// Implementation Level For Student

class Student extends Person {
  private program: string;
  private year: number;
  private fee: number;

  constructor(
    name: string,
    address: string,
    program: string,
    year: number,
    fee: number
  ) {
    super(name, address);

    this.program = program;
    this.year = year;
    this.fee = fee;
  }

  // Override Methods

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string):void {
    this.address = address;
  }

  // Belongs To Student

  getProgram(): string {
    return this.program;
  }

  setProgram(program: string): void {
    this.program = program;
  }

  getYear(): number {
    return this.year;
  }

  setYear(year: number): void {
    this.year = year;
  }

  getFee(): number {
    return this.fee;
  }

  setFee(fee: number): void {
    this.fee = fee;
  }

  // Override Method

  toString(): string {
    return `
           Name : ${this.name}
           Address : ${this.address}
           New Program : ${this.program}
           New Year : ${this.year}
           New Fee : ${this.fee}
           `;
  }
}

// Implementation Level For Staff

class Staff extends Person {
  private school: string;
  private pay: number;

  constructor(name: string, address: string, school: string, pay: number) {
    super(name, address);

    this.school = school;
    this.pay = pay;
  }

  // Override Methods

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string):void {
    this.address = address;
  }

  // Belongs To Student

  getSchool(): string {
    return this.school;
  }

  setSchool(school: string): void {
    this.school = school;
  }

  getPay(): number {
    return this.pay;
  }

  setPay(pay: number): void {
    this.pay = pay;
  }

  // Override Method

  toString(): string {
    return `
           Name : ${this.name}
           Address : ${this.address}
           New School : ${this.school}
           New Pay : ${this.pay}
           `;
  }
}

// Student

let student = new Student("samir", "cairo", "MBA", 2022, 25000);

// Output For Student

console.log("Student Output");
console.log("===============");

console.log("Iniial Program ==> ", student.getProgram());

// Set Program
student.setProgram("Ph.D");

// Output
console.log("Initial Year ==> ", student.getYear());

// Set Year
student.setYear(2023);

console.log("Initial Fee ==> ", student.getFee());

// Set Program
student.setFee(30000);

console.log("all data as string after new setting ==> ", student.toString());

// Staff
let staff = new Staff("nemo", "giza", "Cairo University", 25000);

// Output For Staff

console.log("Staff Output");
console.log("===============");

console.log("Iniial School ==> ", staff.getSchool());

// Set Program
staff.setSchool("Ain Shams University");

// Output
console.log("Initial Pay ==> ", staff.getPay());

// Set Year
staff.setPay(30000);

console.log("all data as string after new setting ==> ", staff.toString());
