let employees = [];

function Employee (name, jobTitle, salary, status = 'full time'){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){
        console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`);
    }
}


let employeeOne = new Employee('Sam', 'Boat Cleaner', '$100/hr');
let employeeTwo = new Employee('Kim', 'Boxer', '$150/hr', 'Part Time');
let employeeThree = new Employee('Sarah', 'Nurse', '$25/hr');

employeeOne.printEmployeeForm();
employeeTwo.printEmployeeForm();
employeeThree.printEmployeeForm();

let pushingEmployeesArr = function(){
    employees.push(employeeOne);
    employees.push(employeeTwo);
    employees.push(employeeThree)
}
pushingEmployeesArr();

console.log(employees);