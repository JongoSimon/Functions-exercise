
// function calculateArea(width, length) {
//     return width * length;
// }

// // Run the program
// rectangleAreaCalculator();

// // Main program function
// function rectangleAreaCalculator() {
//     // Get user input
//     let width = Number(prompt("Enter the width of the rectangle:"));
//     let length = Number(prompt("Enter the length of the rectangle:"));
    
//     // Validate input
//     if (isNaN(width) || isNaN(length)) {
//         alert("Please enter valid numbers for width and length!");
//         return; // Exit the function if input is invalid
//     }
    
//     // Calculate area
//     let area = calculateArea(width, length);
    
//     // Display result
//     alert("The area of the rectangle is: " + area);
    
//     // Optional: console output
//     console.log("Rectangle dimensions: " + width + " * " + length);
//     console.log("Calculated area: " + area);
// }

// //! Exo 2. converting feets to inches

// function feetToInches(feet) {
//     return feet * 12;
// }

// //? Main program
// function convertFeetToInches() {
//     let feet = parseFloat(prompt("Enter number feet :"));

//     //? check for valid input 
//     if (isNaN(feet)){
//         alert("Please enter a valid number!");
//         return;
//     }

//     //? Calculate and display result
//     let inches = feetToInches(feet);
//     alert(`${feet} feet = ${inches} inches`);
// }

// // Run the program
// convertFeetToInches();

// //! Exo 3. Math Quiz

// function randomNum(numOne, numTwo) {
//     return (numOne + numTwo);
// }

// //? Main program
// function twoAddUp() {
//     let numOne = parseFloat(prompt("Enter first number:"));
//     let numTwo = parseFloat(prompt("Enter Second Number:"));


//     //? check if not valide
//     if (isNaN(numOne)|| isNaN(numTwo)) {
//         alert("Please enter valide number!")
//         return; 
//     }

//     let result = randomNum(numOne, numTwo);
//     alert("The sum is: "+ result);
    
// }

// //? Run the program
// twoAddUp();

// //! second part of Math Quiz

// //Generate two random numbers between 1 and 1000000
// let num1 = Math.floor(Math.random() * 1000000) + 1; 
// let num2 = Math.floor(Math.random() * 1000000) + 1;
// let correctAnswer = num1 + num2

// // Ask the question using prompt()
// let userAnswer = prompt(`What is ${num1} + ${num2}?`);

// // Check if the user clicked Cancel
// if (userAnswer === null) {
//     alert("You canceled the quiz.");
// } else {
//     // Convert the answer to a number and check it
//     userAnswer = parseInt(userAnswer);
    
//     if (userAnswer === correctAnswer) {
//         alert("Congratulations! Your answer is correct!");
//     } else {
//         alert(`Sorry, the correct answer is ${correctAnswer}.`);
//     }
// }

// function Maximum(num1, num2) {
//    if (num1 > num2) {
//     return num1;
// } else {
//     return num2;
// }
// }

// //? main Program
// let firstNumber = parseInt(prompt("Enter first number:"));
// let secondNumber = parseInt(prompt("Enter second number:"));

// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     alert("Please enter a valid number!");

//     //? valid input now
// } else {
//     let result = Maximum(firstNumber, secondNumber);
//     alert(`The greater number is: ${result}`)
// }

// //!  falling Distance

// function fallingDistance(t) {
//     const g = 9.8
//     return 0.5 * g * Math.pow(t, 2);
// }

// console.log("Time (s)\tDistance (m)");

// for (let time = 1; time <= 10; time++) {
//     let distance = fallingDistance(time);
//     console.log(`${time}\t\t${distance.toFixed(2)}`);
// }