<?php
$servername = "localhost";
$username = "root"; // Ganti dengan username database Anda
$password = ""; // Ganti dengan password database Anda
$dbname = "uaswebsd"; // Ganti dengan nama database Anda

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Mengambil data dari form
$nama = $_POST['nama'];
$email = $_POST['email'];
$pesan = $_POST['pesan'];

// Menyimpan data ke database
$sql = "INSERT INTO kontak (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";

if ($conn->query($sql) === TRUE) {
    echo "Pesan Anda telah dikirim!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>