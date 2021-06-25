var name = prompt('LOGIN REQUIRED :\n\nSilahkan masukan namamu untuk identitas dalam web ini :)\n\n*Informasimu bersifat pribadi.', 'Guest')
console.log(`LOGIN :\n${name} just logged in to your website`)
var ranNumber = Math.floor(Math.random() * 10000000)
var date = new Date()
var time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
var mail = name + '@gmail.com'
var user_id = ranNumber
var account_type = 'Free'
var apikey = 'Not Premium'
if (name == 'administrator') {
    account_type = 'Premium'
    apikey = 'KuhongRestAPIs'
    }
if (name == '' || name == 'Guest' || name == 'guest') {
    name = 'Guest'
    mail = name + ranNumber + '@gmail.com'
    user_id = 'Login First'
    account_type = 'Login First'
    apikey = 'Login First'
    }

if (date.getHours() == 20) {
var rate = confirm('Menyukai web ini?\nNilai Anda adalah semangat bagi Owner :)\n\nPilih "Oke" untuk Bagus, "Batal" untuk Tidak Bagus.')
if (rate) {
    alert('Terimakasih!')
    } else {
    var alasan = prompt('Tidak menyukai web ini?\n\nBerikan kami alasannya :')
    if (alasan !== '') alert('Terimakasih atas masukan Anda!')
    console.log('TIDAK SUKA :\n' + alasan)
    }
}

document.getElementById("name").innerHTML = name
