// 1. arraydestaturing
const numbers = [42, 65];

// old
// const x = numbers[0];
// const y = numbers[1];

// -------------------------
// main thing
// new 
// const [x, y] = [42, 65];
// ---------------------------

const [x, y] = numbers;
// function
function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}


// const [first, second] = [90, 34]
const [first, second] = boxify(90, 34);

console.log(boxify(90, 34));

const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan'],
}

const [firstMovie, secondMovie] = student.movies;

// object destructuring
const { name, age } = { name: 'alu', age: 14 };
const { name1, age1 } = { id: 12, name: 'alu', salary: 3400, age: 14 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        adderss: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'gramin',

        }
    }
};

const { machine, ide } = employee;
// optional chaining (   ?   )
const { weight, adderss } = employee?.specification;
const { brand } = employee?.specification?.watch;