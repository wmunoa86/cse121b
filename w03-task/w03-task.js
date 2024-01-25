/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
};

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
};

//Click event added to the button with ID addNumbers
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function (subtract1, subtract2){
    return subtract1 - subtract2;
};

let subtractNumbers = function(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;

let multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (dividend, divisor) => dividend / divisor;

let divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotalUser = parseFloat(document.querySelector('#subtotal').value);
    let membershipChecked = document.querySelector('#member').checked;
    const memberDiscount = membershipChecked ? 0.8 : 1;
    let total = subtotalUser * memberDiscount;
    
    document.querySelector('#total').textContent = total.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
let oddsNumbers = numbersArray.filter(number => number % 2 !== 0);

document.querySelector('#odds').textContent = oddsNumbers;

/* Output Evens Only Array */
let evensNumbers = numbersArray.filter(number => number % 2 == 0);

document.querySelector('#evens').textContent = evensNumbers;
/* Output Sum of Org. Array */
let sumNumbers = numbersArray.reduce((sum, numbers) => sum + numbers);

document.querySelector('#sumOfArray').textContent = sumNumbers;
/* Output Multiplied by 2 Array */
let multipliedNumbers = numbersArray.map(numbers => numbers * 2);

document.querySelector('#multiplied').textContent = multipliedNumbers;
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedNumbers.reduce((sum, number) => sum + number);

document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;