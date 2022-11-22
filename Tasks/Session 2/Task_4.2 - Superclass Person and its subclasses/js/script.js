// Design Level
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, address) {
        this.name = name;
        this.address = address;
    }
    return Person;
}());
// Implementation Level For Student
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, address, program, year, fee) {
        var _this = _super.call(this, name, address) || this;
        _this.program = program;
        _this.year = year;
        _this.fee = fee;
        return _this;
    }
    // Override Methods
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAddress = function () {
        return this.address;
    };
    Student.prototype.setAddress = function (address) {
        this.address = address;
    };
    // Belongs To Student
    Student.prototype.getProgram = function () {
        return this.program;
    };
    Student.prototype.setProgram = function (program) {
        this.program = program;
    };
    Student.prototype.getYear = function () {
        return this.year;
    };
    Student.prototype.setYear = function (year) {
        this.year = year;
    };
    Student.prototype.getFee = function () {
        return this.fee;
    };
    Student.prototype.setFee = function (fee) {
        this.fee = fee;
    };
    // Override Method
    Student.prototype.toString = function () {
        return "\n           Name : ".concat(this.name, "\n           Address : ").concat(this.address, "\n           New Program : ").concat(this.program, "\n           New Year : ").concat(this.year, "\n           New Fee : ").concat(this.fee, "\n           ");
    };
    return Student;
}(Person));
// Implementation Level For Staff
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, address, school, pay) {
        var _this = _super.call(this, name, address) || this;
        _this.school = school;
        _this.pay = pay;
        return _this;
    }
    // Override Methods
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getAddress = function () {
        return this.address;
    };
    Staff.prototype.setAddress = function (address) {
        this.address = address;
    };
    // Belongs To Student
    Staff.prototype.getSchool = function () {
        return this.school;
    };
    Staff.prototype.setSchool = function (school) {
        this.school = school;
    };
    Staff.prototype.getPay = function () {
        return this.pay;
    };
    Staff.prototype.setPay = function (pay) {
        this.pay = pay;
    };
    // Override Method
    Staff.prototype.toString = function () {
        return "\n           Name : ".concat(this.name, "\n           Address : ").concat(this.address, "\n           New School : ").concat(this.school, "\n           New Pay : ").concat(this.pay, "\n           ");
    };
    return Staff;
}(Person));
// Student
var student = new Student("samir", "cairo", "MBA", 2022, 25000);
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
var staff = new Staff("nemo", "giza", "Cairo University", 25000);
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
