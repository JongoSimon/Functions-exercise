// Get sales amount from user
let sales = parseFloat(prompt("Enter total sales amount ($):"));

// Check if input is valid
if (isNaN(sales) || sales < 0) {
    alert("Error: Please enter a positive number");
} else {
    // Calculate 23% profit
    let profit = sales * 0.23;
    
    // Show result
    alert(`Expected profit: $${profit.toFixed(2)}`);
}



//? exo 2 land calculation
// Constants
const SQUARE_FEET_PER_ACRE = 43560;

// Get input from user
let squareFeet = parseFloat(prompt("Enter total square footage:"));

// Validate input
if (isNaN(squareFeet) || squareFeet < 0) {
    alert("Please enter a valid positive number");
} else {
    // Calculate acres
    let acres = squareFeet / SQUARE_FEET_PER_ACRE;
    
    // Display result
    alert(`${squareFeet} sq ft = ${acres.toFixed(2)} acres`);
}