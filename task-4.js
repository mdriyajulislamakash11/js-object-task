/*
task-4
Count the number of properties.
Input:
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
*/
let student = {
      name: 'Ariana Grande',
      age: 21,
      city: 'Gaibandha',
      isStudent: true
};
const count = Object.keys(student).length;
console.log(count)