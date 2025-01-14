function generateQRCode(){
    const value = document.getElementById('qr-code-value').value;
    
    const options = {
        value: value,
        size: 200,
        level: 'H'
    }

    const qrCode = new QRious(options);
    const qrCodeImage = qrCode.toDataURL();
    console.log(qrCodeImage);

    document.getElementById('qr-text').style.display = 'none';
    const image = document.getElementById('qr-image');
    image.style.display = 'block';
    image.src = qrCodeImage;
}