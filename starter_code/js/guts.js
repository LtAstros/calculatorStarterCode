// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


// 1. divide
//    write a function named "divide" that takes in two parameters and returns their quotient
function divide(x,y) {
	return x / y;
}
console.log(divide(1,2));
// 2. multiply
// write a function named
// "multiply" that takes in two
// parameters and returns
// their product
function multiply(x,y){
 return x * y;   
}
console.log(multiply(1,2));
// 3. subtract 
//    write a function named
//    "subtract" that takes in two
// parameters and returns
// their difference
function subtract(x,y){
 return x - y;   
}
console.log(subtract(1,2));
// 4. add
//    write a function named "add" that takes in two parameters and returns their sum
function add(x,y){
 return x + y;   
}
console.log(add(1,2));
// 5. power
//    write a function named "power" that takes in two parameters and returns their result
function power(x,y){
 return Math.pow(x,y);   
}
console.log(power(3,2));
// 6. square_root
//    write a function named "square_root" that takes in one parameter and returns their result
function square_root(x){
 return Math.sqrt(x);   
}
console.log(square_root(4));
// 7. logBase10
//    write a function named "logBase10" that takes in one parameter and returns their result
function logBase10(x){
 return Math.log10(x);   
}
console.log(logBase10(100));
// 8. generateRandomNumber
//    write a function named "generateRandomNumber" that takes in no parameters and returns a random number
function generateRandomNumber(){
 return Math.random();   
}

console.log(generateRandomNumber());
// BONUS: write assertions to test whether your functions work!
// Here are some examples for divide(x,y), can you write more for the other functions?
//
// console.assert(divide(1,1) === 1, "1/1 should equal 1");
// console.assert(divide(1,2) === 0.5, "1/2 should equal 0.5");
console.assert(logBase10(1000) === 3);
