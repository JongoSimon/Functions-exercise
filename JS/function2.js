// // Get sales amount from user
// let sales = parseFloat(prompt("Enter total sales amount ($):"));

// // Check if input is valid
// if (isNaN(sales) || sales < 0) {
//     alert("Error: Please enter a positive number");
// } else {
//     // Calculate 23% profit
//     let profit = sales * 0.23;
    
//     // Show result
//     alert(`Expected profit: $${profit.toFixed(2)}`);
// }



// //? exo 2 land calculation
// // Constants
// const SQUARE_FEET_PER_ACRE = 43560;

// // Get input from user
// let squareFeet = parseFloat(prompt("Enter total square footage:"));

// // Validate input
// if (isNaN(squareFeet) || squareFeet < 0) {
//     alert("Please enter a valid positive number");
// } else {
//     // Calculate acres
//     let acres = squareFeet / SQUARE_FEET_PER_ACRE;
    
//     // Display result
//     alert(`${squareFeet} sq ft = ${acres.toFixed(2)} acres`);
// }



// exo 3 total purchase calculation

// const price1 = parseFloat(prompt("Enter Price of item 1 :"));
// const price2 = parseFloat(prompt("Enter price for item 2 :"));
// const price3 = parseFloat(prompt("Enter price for item 3 :"));
// const price4 = parseFloat(prompt("Enter price of item 4 :"));
// const price5 = parseFloat(prompt("Enter price for item 5 :"));

// // calculate the subtotal

// const subtotal = price1 + price2 + price3 + price4 + price5 ;
// // Calculate sales tax (7.2%)
// const taxRate = 0.072;
// const salesTax = subtotal * taxRate



// // calculate the total

// const total = subtotal + salesTax

// // display result

// console.log(`Sales Tax (7.2%) : $${salesTax.toFixed(2)}`);
// console.log(`subtotal : $${subtotal.toFixed(2)}`);
// console.log(`Total : $${total.toFixed(2)}`);


//! exo 4 on creating a program that as user to enter amount of a purchase

// // enter the amount
// const enterAmount = parseFloat(prompt("Enter the amount of purchase"));

// // compute salestaxe
// const stateSalesTax = 0.04;
// const countySalesTax = 0.02;

// // calcultate total amount of tax

// const salesTaxState = enterAmount * stateSalesTax;
// const salesTaxCounty = enterAmount * countySalesTax;
// const totaltaxes = salesTaxState + salesTaxCounty;

// // calcultate the total amount of purchased

// const totalPurchase = enterAmount + totaltaxes;


// // display the result

// console.log(`County total taxes: $${salesTaxCounty.toFixed(2)}`);
// console.log(`State total taxes: $${salesTaxState.toFixed(2)}`);
// console.log(`Total Purchased: $${totalPurchase.toFixed(2)}`);

// Sales tax calculator with state and county taxes

// Constants for tax rates
// const STATE_TAX_RATE = 0.04;  // 4%
// const COUNTY_TAX_RATE = 0.02; // 2%

// /**
//  * Calculates all tax amounts and totals
//  * @param {number} purchaseAmount - The original purchase amount
//  * @returns {object} An object containing all calculated values
//  */
// function calculateTax(purchaseAmount) {
//     const stateTax = purchaseAmount * STATE_TAX_RATE;
//     const countyTax = purchaseAmount * COUNTY_TAX_RATE;
//     const totalTax = stateTax + countyTax;
//     const totalAmount = purchaseAmount + totalTax;
    
//     return {
//         purchase: purchaseAmount,
//         stateTax: stateTax,
//         countyTax: countyTax,
//         totalTax: totalTax,
//         totalAmount: totalAmount
//     };
// }

// /**
//  * Displays the results in a formatted way
//  * @param {object} results - The results object from calculateTax()
//  */
// function displayResults(results) {
//     console.log("=== Sales Tax Calculation ===");
//     console.log(`Purchase Amount: $${results.purchase.toFixed(2)}`);
//     console.log(`State Tax (4%): $${results.stateTax.toFixed(2)}`);
//     console.log(`County Tax (2%): $${results.countyTax.toFixed(2)}`);
//     console.log(`Total Sales Tax: $${results.totalTax.toFixed(2)}`);
//     console.log(`Total Amount Due: $${results.totalAmount.toFixed(2)}`);
    
//     // Alternative for browser display:
//     /*
//     alert(
//         `Purchase Amount: $${results.purchase.toFixed(2)}\n` +
//         `State Tax (4%): $${results.stateTax.toFixed(2)}\n` +
//         `County Tax (2%): $${results.countyTax.toFixed(2)}\n` +
//         `Total Sales Tax: $${results.totalTax.toFixed(2)}\n` +
//         `Total Amount Due: $${results.totalAmount.toFixed(2)}`
//     );
//     */
// }

// // Main program execution
// function runSalesTaxCalculator() {
//     // Get user input
//     const purchaseAmount = parseFloat(prompt("Enter the purchase amount:"));
    
//     // Validate input
//     if (isNaN(purchaseAmount)) {
//         alert("Please enter a valid number");
//         return;
//     }
    
//     // Calculate taxes
//     const results = calculateTax(purchaseAmount);
    
//     // Display results
//     displayResults(results);
// }

// // Run the program
// runSalesTaxCalculator();

// 1. Get user input
// const foodCharge = parseFloat(prompt("Enter the food charge: $"));
// const tipPercentage = parseFloat(prompt("Enter tip percentage (e.g., 15 for 15%): "));

// // 2. Calculate tip, tax, and total
// const tipAmount = foodCharge * (tipPercentage / 100);
// const taxAmount = foodCharge * 0.07; // 7% tax
// const total = foodCharge + tipAmount + taxAmount;

// // 3. Display results
// console.log(`Food Charge: $${foodCharge.toFixed(2)}`);
// console.log(`Tip (${tipPercentage}%): $${tipAmount.toFixed(2)}`);
// console.log(`Tax (7%): $${taxAmount.toFixed(2)}`);
// console.log(`Total: $${total.toFixed(2)}`);

// // (Optional) For browser alert instead of console:
// alert(
//     `Food Charge: $${foodCharge.toFixed(2)}\n` +
//     `Tip (${tipPercentage}%): $${tipAmount.toFixed(2)}\n` +
//     `Tax (7%): $${taxAmount.toFixed(2)}\n` +
//     `Total: $${total.toFixed(2)}`
// );

// Constants
const TAX_RATE = 0.07; // 7% tax

// 1. Function to get user input (food charge & tip percentage)
function getUserInput() {
    const foodCharge = parseFloat(prompt("Enter the food charge: $"));
    const tipPercentage = parseFloat(prompt("Enter tip percentage (e.g., 15 for 15%): "));
    
    // Validate inputs
    if (isNaN(foodCharge) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers!");
        return null; // Return null if invalid
    }
    
    return { foodCharge, tipPercentage };
}

// 2. Function to calculate tip, tax, and total
function calculateBill(foodCharge, tipPercentage) {
    const tipAmount = foodCharge * (tipPercentage / 100);
    const taxAmount = foodCharge * TAX_RATE;
    const total = foodCharge + tipAmount + taxAmount;
    
    return { foodCharge, tipPercentage, tipAmount, taxAmount, total };
}

// 3. Function to display results
function displayResults(bill) {
    console.log(`Food Charge: $${bill.foodCharge.toFixed(2)}`);
    console.log(`Tip (${bill.tipPercentage}%): $${bill.tipAmount.toFixed(2)}`);
    console.log(`Tax (7%): $${bill.taxAmount.toFixed(2)}`);
    console.log(`Total: $${bill.total.toFixed(2)}`);
    
    // Optional: Alert version
    alert(
        `Food Charge: $${bill.foodCharge.toFixed(2)}\n` +
        `Tip (${bill.tipPercentage}%): $${bill.tipAmount.toFixed(2)}\n` +
        `Tax (7%): $${bill.taxAmount.toFixed(2)}\n` +
        `Total: $${bill.total.toFixed(2)}`
    );
}

// 4. Main function to run the program
function runRestaurantBillCalculator() {
    const userInput = getUserInput();
    
    if (!userInput) return; // Exit if input is invalid
    
    const { foodCharge, tipPercentage } = userInput;
    const bill = calculateBill(foodCharge, tipPercentage);
    
    displayResults(bill);
}

// Run the program
runRestaurantBillCalculator();