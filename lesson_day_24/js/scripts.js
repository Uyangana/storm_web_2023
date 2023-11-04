console.log('Lesson Day 24 - JS Functions,JS DOM keyboard event');




function myFunction() {
    console.log('it is my function');
}


myFunction();



function addTwo(number){
    let x = number + 2;
    return x;
}

console.log(addTwo(5));
console.log(addTwo(11));
console.log(addTwo(45));



const myFunctionTwo = function () {
    console.log('it is my function expression');
}
myFunctionTwo();

const myFunctionTwoWithParameter = function (number) {
    let x = number + 2;
    return x;
}







const myArrowFunction = () => {
    console.log('it is my arrow function');
}
myArrowFunction();
const myArrowFunctionWithParameter = (number) => {
    let x = number + 2;
    return x;
}

console.log(myArrowFunctionWithParameter(5));

