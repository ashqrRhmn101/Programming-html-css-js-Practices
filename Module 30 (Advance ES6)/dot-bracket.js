const student = {
    name: "Amu",
    1: 70,
    'home-address': 'Kochu Khet',
    mark: 50
}

// dot Notation 
const studentName = student.name;
// Bracket Notation 
const student1 = student[1];
const studentAdd = student['home-address'];

// console.log(studentName)
// console.log(student1)
// console.log(studentAdd)

for(const key in student){
    // console.log(key);  
    const value = student[key];
    console.log(value);

}