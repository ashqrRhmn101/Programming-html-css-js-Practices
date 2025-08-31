const employee = {
    name: "Raja rani",
    age: 0 ,
    designation: "QA",
    salary: 20000,
    experience: 1,
    location: ""
}

// delete employee.salary;
// delete employee.name;

// Object.seal(employee); // Add 

// employee.salary = employee.salary+ 30000;
// employee.age = 40;
// employee.location = 'Dhaka';

// console.log(employee);

Object.freeze(employee); // Don't Add

employee.salary = employee.salary+ 30000;
employee.age = 40;
employee.location = 'Dhaka';

console.log(employee);