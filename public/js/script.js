var { exec } = require('child_process');
var fs = require('fs');

function runConsole() {
  var console = prompt('Silahkan masukan kode JavaScript untuk menjalankan Console :');
  if (console == '') alert('Masukan Kode!');
      fs.writeFileSync('./console.js', console);
      exec('node console.js', (err, stderr, stdout) => {
      var result = 'Result: ' + stderr;
      if (err) result = 'Error: ' + err;
      alert(result)
  })
}

function getNotification() {
alert(`
NOTIFICATION :

Kalo masih ada fitur yang dianggap kalian nembak,, dimohon untuk segera hubungi Owner agar fitur langsung segera diupdate!
`.trim());
}

function getChangelog() {
alert(`
CHANGELOG :

o Update Encrypt Menu!
o Some Update & Improvements!
`.trim());
}

function checkApikey() {
  var apikeyInput = prompt('Silahkan masukan Apikey yang ingin dicek :')
  if (apikeyInput == '') alert('Masukan Apikey!')
  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/cekapikey?apikey=' + apikeyInput;
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);

         alert(json.result);
         }

  xhr.open('GET', url, true);
  xhr.send();
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

function actionLogin() {

var name = prompt(`
LOGIN REQUIRED :

Silahkan masukan namamu untuk mengetahui data akun Anda :)

*Informasimu bersifat pribadi.
`.trim());
console.log(`LOGIN :\n${name} just logged in to your website`);
document.getElementById("name").innerHTML = name;

  var ranNumber = Math.floor(Math.random() * 10000000);
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
}

function getUserData() {

  var { mail, user_id, account_type, apikey } = actionLogin();
  var xhr = new XMLHttpRequest();
  var url = 'http://api.ipify.org/?format=json';
         xhr.onloadend = function() {
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
  var date = new Date();
  var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
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
