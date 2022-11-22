var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getFullName = function () {
        var FullName = this.firstName + " " + this.lastName;
        return FullName;
    };
    Employee.prototype.setSalary = function (sal) {
        this.salary = sal;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.getAnnualSalary = function () {
        var annual = this.salary * 12;
        return annual;
    };
    Employee.prototype.raiseSalary = function (percentage) {
        var raise = (this.salary * percentage) / 100;
        return raise;
    };
    Employee.prototype.toString = function () {
        return "\n                  Id : ".concat(this.id, "  \n                  FirstName : ").concat(this.firstName, "  \n                  LastName : ").concat(this.lastName, " \n                  New Salary : ").concat(this.salary, " \n                  ");
    };
    return Employee;
}());
// Employee
var emp = new Employee(1, "Ahmed", "Samir", 2000);
// Output
console.log('ID ===> ', emp.getId());
console.log('Fisrt Name ===> ', emp.getFirstName());
console.log('Last Name ===> ', emp.getLastName());
console.log('Full Name ===> ', emp.getFullName());
console.log('Initial Salary ===> ', emp.getSalary());
// Set Salary
emp.setSalary(4000);
// Output
console.log('New Salary ===> ', emp.getSalary());
console.log('Get Annual Salary ===> ', emp.getAnnualSalary());
console.log('Raise Salary ===> ', emp.raiseSalary(12));
console.log('\n all data as string with new salary \n ', emp.toString());
