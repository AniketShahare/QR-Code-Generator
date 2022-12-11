const input = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const qrImg = document.getElementById('img');

const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

function getQRCode() {
    let url = apiUrl + encodeURIComponent(input.value); 
    fetch(url)
    .then((response) => response)
    .then((data) => {
        qrImg.style.display = "block";
        qrImg.src = data.url;
    });

}

submitBtn.addEventListener("click", getQRCode);
