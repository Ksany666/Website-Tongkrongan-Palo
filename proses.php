<?php
include 'koneksi.php';

$nama  = $_POST['nama'];
$email = $_POST['email'];

$query = "INSERT INTO users (nama, email) VALUES ('$nama', '$email')";

if (mysqli_query($conn, $query)) {
    echo "<script>alert('Berhasil join mabar 😎'); window.location='index.html';</script>";
} else {
    echo "Error: " . mysqli_error($conn);
}
?>