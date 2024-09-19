document.getElementById('invoiceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather the form data
    const invoiceNo = 'FC' + Math.floor(1000000000000 + Math.random() * 9000000000000);
    const transactionId = 'OCMRAM2024' + Math.floor(1000000000000 + Math.random() * 9000000000000);
    const now = new Date();
    const timestamp = now.toLocaleString().replace(',', '');

    const customerName = document.getElementById('customerName').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const date = document.getElementById('date').value;
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
        date,
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
