// Automatically set the current date as the default value in the calendar
window.onload = function() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero
    const day = today.getDate().toString().padStart(2, '0'); // Add leading zero

    // Format the current date in yyyy-MM-dd format for the input field
    const formattedDate = `${year}-${month}-${day}`;

    // Set the default value of the input field
    document.getElementById('date').value = formattedDate;
};
document.getElementById('invoiceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather the form data
    const invoiceNo = 'FC' + Math.floor(1000000000000 + Math.random() * 9000000000000);
    const transactionId = 'OCMRAM2024' + Math.floor(1000000000000 + Math.random() * 9000000000000);
    // Get the selected date from the calendar input
    const selectedDate = document.getElementById('date').value;
    // If no date is selected, use the current date
    const now = new Date();
    let date = selectedDate ? new Date(selectedDate) : now;
    // Get current time (hours, minutes, seconds)
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    // Format the date as dd/MM/yyyy
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based in JavaScript
    const year = date.getFullYear();

    // Combine date and time into the required format
    const timestamp = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    const customerName = document.getElementById('customerName').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const emailId = document.getElementById('emailId').value;
    const accountNo = document.getElementById('accountNo').value;
    const serviceCode = document.getElementById('serviceCode').value;
    const recharge = document.getElementById('recharge').value;
    const paymentMode = document.getElementById('paymentMode').value;
    const stateCode = document.getElementById('stateCode').value;
    const stateName = document.getElementById('stateName').value;
    const pincode = document.getElementById('pincode').value;
    const city = document.getElementById('city').value;
    const transactionAmount = parseFloat(document.getElementById('transactionAmount').value);
    var couponCharges = parseFloat(document.getElementById('couponCharges').value) || 0;
    const platformFee = parseFloat(document.getElementById('platformFee').value) || 0;
    const igstRate = 0.18; // 18% as a decimal
    const originalAmount = transactionAmount / (1 + igstRate);

    // Properly calculate the taxable value and round to 2 decimal places
    const taxableValue = (originalAmount + couponCharges + platformFee).toFixed(2);
    
    // Convert taxableValue back to a number for further arithmetic
    const igst = (parseFloat(taxableValue) * igstRate).toFixed(2);
    const totalAmount = (parseFloat(taxableValue) + parseFloat(igst)).toFixed(2);

    // Construct URL parameters
    const urlParams = new URLSearchParams({
        customerName,
        emailId,
        mobileNo,
        accountNo,
        serviceCode,
        recharge,
        paymentMode,
        stateCode,
        stateName,
        pincode,
        city,
        transactionAmount,
        couponCharges,
        platformFee,
        taxableValue,
        igst,
        totalAmount,
        invoiceNo,
        transactionId,
        timestamp
    }).toString();

    // Redirect to the report page with the data
    window.location.href = `report.html?${urlParams}`;
});
