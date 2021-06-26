var date = new Date();
var event = Math.floor(Math.random() * 24);
if (date.getHours() == event) {
    var rate = confirm('Menyukai web ini?\nNilai Anda adalah semangat bagi Owner :)\n\nPilih "Oke" untuk Bagus, "Batal" untuk Tidak Bagus.');
    if (rate) {
        alert('Terimakasih!');
} else {
    var alasan = prompt('Tidak menyukai web ini?\n\nBerikan kami alasannya :');
    if (alasan !== '') alert('Terimakasih atas masukan Anda!');
    console.log('TIDAK SUKA :\n' + alasan);
  }
}
