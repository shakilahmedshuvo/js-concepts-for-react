// 'abc', 5, true, {}, [] -----truthy
// '', 0, false, null, undifined ------ falsy

// check 
let myVar = 5;
// check any truthy
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check nagative or falsy anything 
if (!myMoney) {

}

// 
const money = 80;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}

// ternary
let food1 = money >= 100 ? 'biryani' : 'cha biscuit';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);

// number tob string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string to number --------------------------
const input = '560';
const inputNum = +input;
console.log(inputNum);

// 
// const isActive = false;
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();
// use && {and} if the left side is true then right side will be executed  
isActive && showUser();
// 
// use || (or) if the left side is false then right side will be executed 
isActive || hideUser();

// toggle boolean
isActive = !isActive;