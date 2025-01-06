// Fungsi untuk validasi form kontak
function validateForm() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Semua field harus diisi!");
        return false;
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Email tidak valid!");
        return false;
    }

    return true;
}

// Fungsi untuk mengirim form kontak menggunakan AJAX
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah pengiriman form default

        if (validateForm()) {
            const formData = new FormData(form);

            fetch('proses_kontak.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert(data); // Menampilkan pesan dari server
                form.reset(); // Mengatur ulang form
            })
            .catch(error => console.error('Error:', error));
        }
    });
});