let num1 = 13
let num2 = 4
document.getElementById('num1-el').textContent = num1
document.getElementById('num2-el').textContent = num2
let sumEl = document.getElementById('sum-el')

function add() {
    let addition = num1 + num2
    sumEl.textContent += addition
}
function subtract() { 
    let subtraction = num1 + num2
    sumEl.textContent += subtraction
}
function divide() {
    let division = num1 / num2
    sumEl.textContent += division
}
function multiply() {
    let multiplication = num1 * num2
    sumEl.textContent += multiplication
}
