// Şifre kontrolü
function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "2024") {
        window.location.href = "admin.html"; // Doğru şifre girildiğinde admin sayfasına yönlendir
        return false; // Formu gönderme
    } else {
        document.getElementById("error-message").textContent = "Yanlış şifre! Lütfen tekrar deneyin.";
        return false; // Formu gönderme, hata mesajı göster
    }
}

// Hizmetler arasında arama yapma
function searchServices() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const services = document.querySelectorAll('#services-intro ul li');
    let found = false;

    services.forEach(service => {
        const text = service.textContent.toLowerCase();
        if (text.includes(input)) {
            service.style.display = 'block';
            found = true;
        } else {
            service.style.display = 'none';
        }
    });

    if (!found) {
        alert('Hizmet bulunamadı.');
    }
}
