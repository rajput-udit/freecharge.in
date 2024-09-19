    // Function to get query parameters from the URL
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        const queryParams = {};
        for (const [key, value] of params.entries()) {
            queryParams[key] = decodeURIComponent(value);
        }
        return queryParams;
    }

    function handleNaN(value) {
        if (isNaN(value)) {
          return "";
        } else {
          return value;
        }
      }

    // Populate the report with the data
    function populateReport() {
        const data = getQueryParams();
        
        document.getElementById('displayCustomerName').innerText = data.customerName;
        document.getElementById('name').innerText = data.customerName;
        document.getElementById('displayEmailId').innerText = data.emailId;
        document.getElementById('pdfName').innerText = data.transactionId;
        document.getElementById('displayInvoiceNo').innerText = data.invoiceNo;
        document.getElementById('displayMobileNo').innerText = data.mobileNo;
        document.getElementById('displayDate').innerText = data.timestamp;
        document.getElementById('displayAccountNo').innerText = data.accountNo;
        document.getElementById('displayAccountCode').innerText = data.serviceCode;
        document.getElementById('displayRecharge').innerText = data.recharge;

        // Add transaction details to the table
        const tableBody = document.getElementById('invoiceTableBody');
        tableBody.innerHTML = `
        <tr>
            <td>1</td>
            <td>Transaction Amount</td>
            <td>${data.transactionAmount}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Coupon Charges</td>
            <td>${data.couponCharges == 0 ? '' : data.couponCharges}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Platform Fee</td>
            <td>${data.platformFee}</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Taxable Value</td>
            <td>${data.taxableValue}</td>
        </tr>
        <tr>
            <td>5</td>
            <td>IGST @18%</td>
            <td>${data.igst}</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Total Transaction Amount</td>
            <td>${data.totalAmount}</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Invoice ID</td>
            <td>${data.invoiceNo}</td>
        </tr>
        <tr>
            <td>8</td>
            <td>State Code</td>
            <td>${data.stateCode}</td>
        </tr>
        <tr>
            <td>9</td>
            <td>State Name</td>
            <td>${data.stateName}</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Payment Option</td>
            <td>${data.paymentMode}</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Pin Code</td>
            <td>${data.pincode}</td>
        </tr>
        <tr>
            <td>12</td>
            <td>City</td>
            <td>${data.city}</td>
        </tr>
        <tr>
            <td colspan="2">Whether the tax is payable on reverse charge basis</td>
            <td>No</td>
        </tr>
        `;
    // Show the invoice container
    document.getElementById('invoiceContent').style.display = 'block';
};

// Call the function to populate the report when the page loads
window.onload = populateReport;
