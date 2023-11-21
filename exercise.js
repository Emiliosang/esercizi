const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = (value) => console.log(value);



const first_sum = sum(2,4);
const second_sum = sum(5,2);
const result = divide(subtract(multiply(first_sum, second_sum),2),5);
log(result)