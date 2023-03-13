// 1.var
let i = 0;
const fatherName = 'ARNOLD';
// 2.consditions
if (fatherName == '');
else if (i = 0);
else {
    i = o;
}
// 3.array
// index
// length.push.pop
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4.for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5.function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

// call the function
const output = multiply(35, 78);

// 6.object 
// 3 ways to access property by name in object
const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan'],
}
// 1.
console.log(student.age); // direct by property
// 2.
console.log(student['age']); // access via property name string 
// 3.
const myVariable = 'age';
console.log(student[myVariable]); // access via property name in a variable