var number1 = parseInt(prompt('first number'));
var number2 = parseInt(prompt('second number'));

var add = function addition(number1, number2){
    return number1 + number2;
}

var substract = function substraction(number1, number2) {
    return number1 - number2;
}

alert(add(number1, number2));
alert(substract(number1, number2));