let qr_form = document.getElementById("qrform");
let qr_content = document.getElementById("qrcontent");
let qr_code = null; // Initialize qr_code to null

function qrCodeGenerator(qrcontentInput) {
    return new QRCode('qr-code', {
        text: qrcontentInput,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

qr_form.addEventListener('submit', function(event) {
    event.preventDefault();
    let qrcontentInput = qr_content.value;
    if (qr_code === null) { // Check if qr_code is null
        qr_code = qrCodeGenerator(qrcontentInput);
    } else {
        qr_code.clear(); // Clear previous code if exists
        qr_code.makeCode(qrcontentInput);
    }
});
