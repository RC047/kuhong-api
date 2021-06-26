var { generateCode } = require('../../lib/generator.js')

// Login Features
var name = prompt(`
LOGIN REQUIRED :

Silahkan masukan namamu untuk identitas dalam web ini :)

*Informasimu bersifat pribadi.
`.trim(), 'Guest');
console.log(`LOGIN :\n${name} just logged in to your website`);

var ranNumber = Math.floor(Math.random() * 10000000);
var date = new Date();
var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
var mail = name + '@gmail.com';
var user_id = ranNumber;
var account_type = 'Free';
var apikey = 'Not Premium';
if (name == 'administrator') {
    account_type = 'Premium';
    apikey = 'KuhongRestAPIs';
    }
if (name == '' || name == 'Guest' || name == 'guest') {
    name = 'Guest';
    mail = name + ranNumber + '@gmail.com';
    user_id = 'Login First';
    account_type = 'Login First';
    apikey = 'Login First';
    }

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

document.getElementById("name").innerHTML = name;

// Functions
window.setTimeout("setTimes();", 1000);
function setTimes() {
  if (document.getElementById("jam")) {
  var time = new Date();
        setTimeout("setTimes();", 1000);
        document.getElementById("jam").innerHTML = time.getHours();
        document.getElementById("menit").innerHTML = time.getMinutes();
        document.getElementById("detik").innerHTML = time.getSeconds();
        }
}

function restartWebsite() {

var code = generateCode();
var password = prompt(`
Anda ingin merestart website ini?

Silahkan masukan Password untuk mengkonfirmasi bahwa Anda adalah Owner :)
`.trim());

if (password == '') alert('Password tidak boleh Kosong!');
if (password == code) process.send('reset')
}

function getNotification() {
alert(`
NOTIFICATION :

Kalo masih ada fitur yang dianggap kalian nembak,, dimohon untuk segera hubungi Owner agar fitur langsung segera diupdate!
`.trim())
}

function getChangelog() {
alert(`
CHANGELOG :

o Some Update & Improvements
`.trim());
}

function getRequest() {
	var request = prompt('REQUEST :\n\nIngin Request fitur atau semacamnya?\n\nBisa langsung kirim masukannya disini :)');
    if (request !== '') {
         alert('Terimakasih atas masukan Anda!');
         console.log('REQUEST :\n' + request);
         }
}

function getReport() {
	var report = prompt('REPORT :\n\nAda yang ingin anda Laporkan kepada Owner secara langsung?\n\nBisa langsung kirim laporannya kesini :)');
    if (report !== '') {
         alert('Terimakasih atas laporan Anda!');
         console.log('REPORT :\n' + report);
         }
}

function getUserData() {
  var xhr = new XMLHttpRequest();
  var url = 'http://api.ipify.org/?format=json';
         xhr.onloadend = function(){
         var json = JSON.parse(this.responseText);

alert(`
MY ACCOUNT :

Name: ${mail.split('@')[0]}
Mail: ${mail.toLowerCase()}
User ID: ${user_id}
IP Addres: ${json.ip}
Account Type: ${account_type}
Apikey: ${apikey}

*Informasi Anda bersifat pribadi,, Owner tidak akan mengetahuinya.
`.trim());
         }

  xhr.open('GET', url, true);
  xhr.send();
}

function getStatistics() {
  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/status';
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);

alert(`
STATISTICS :

Status: ${json.stats.status}
Time: ${time}
Uptime: ${json.stats.uptime}
Requests: ${json.total.requests}
Visitors: ${json.total.visitors}
Features: ${json.total.features}
Blocked: ${json.total.blocked_ip}
IP Used: ${json.stats.connection.ip_used}
Port Used: ${json.stats.connection.port_used}
Ping: ${json.stats.ping_ms}
`.trim());
         }

  xhr.open('GET', url, true);
  xhr.send();
}
