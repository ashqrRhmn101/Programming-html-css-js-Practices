const employee = {
    name: "Raja rani",
    designation: "QA",
    salary: "20000",
    experience: 1
}

// const keys = Object.keys(employee);
// const values = Object.values(employee);
// const entries = Object.entries(employee);

// console.log(keys);
// console.log(values);
// console.log(entries);

for(const key in employee){
    const value = employee[key];
    console.log(value);
    console.log(hkey ,value);
}