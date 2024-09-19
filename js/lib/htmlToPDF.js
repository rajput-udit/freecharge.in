let downloadBtn = document.getElementById('download');
downloadBtn.addEventListener('click', generatePDF);

function generatePDF() {
    // Use html2canvas to convert the HTML content to an image
    let mainBody = document.getElementById('invoiceContent');

    html2canvas(mainBody).then(function(canvas) {
        // Create a new jsPDF instance
        var pdf = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true
        });

        // Add the image to the PDF
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);

        // Save the PDF
        pdf.save(document.getElementById('pdfName').innerText + `.pdf`);
    });
}