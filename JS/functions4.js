

function main() {
    // Function to get and validate hourly pay rate
    function getHourlyRate() {
        let rate;
        do {
            rate = parseFloat(prompt("Enter hourly pay rate ($7.50 - $18.25):"));
            if (isNaN(rate) || rate < 7.50 || rate > 18.25) {
                alert("Invalid input! Pay rate must be between $7.50 and $18.25");
            }
        } while (isNaN(rate) || rate < 7.50 || rate > 18.25);
        return rate;
    }

    // Function to get and validate hours worked
    function getHoursWorked() {
        let hours;
        do {
            hours = parseFloat(prompt("Enter hours worked (0 - 40):"));
            if (isNaN(hours) || hours < 0 || hours > 40) {
                alert("Invalid input! Hours must be between 0 and 40");
            }
        } while (isNaN(hours) || hours < 0 || hours > 40);
        return hours;
    }

    // Calculate gross pay
    function calculateGrossPay(rate, hours) {
        return rate * hours;
    }

    // Main program logic
    const hourlyRate = getHourlyRate();
    const hoursWorked = getHoursWorked();
    const grossPay = calculateGrossPay(hourlyRate, hoursWorked);

    // Display results
    console.log(`Hourly Rate: $${hourlyRate.toFixed(2)}`);
    console.log(`Hours Worked: ${hoursWorked.toFixed(1)}`);
    console.log(`Gross Pay: $${grossPay.toFixed(2)}`);

    alert(
        `Payroll Summary:\n` +
        `Hourly Rate: $${hourlyRate.toFixed(2)}\n` +
        `Hours Worked: ${hoursWorked.toFixed(1)}\n` +
        `Gross Pay: $${grossPay.toFixed(2)}`
    );
}

// Run the program
main();