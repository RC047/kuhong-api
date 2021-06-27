var request = new XMLHttpRequest();
var url = 'https://api.ipify.org/?format=json';
request.onloadend = function() {
var get = JSON.parse(this.responseText);


function timeOut(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function runConsole() {

  var console = prompt('RUN CONSOLE :\n\nSilahkan masukan kode JavaScript untuk menjalankan Console :');
  if (console == '') alert('Masukan Kode!');
  if (console !== '') {
  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/run?console=' + console;
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);

         alert(json.result);
         }

  xhr.open('GET', url, true);
  xhr.send();
  }
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

  var apikeyInput = prompt('CEK APIKEY :\n\nSilahkan masukan Apikey yang ingin dicek :')
  if (apikeyInput == '') alert('Masukan Apikey!')
  if (apikeyInput !== '') {
  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/cekapikey?apikey=' + apikeyInput;
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);

         alert(json.result);
         }

  xhr.open('GET', url, true);
  xhr.send();
  }
}

function redeemCode() {

  var codeInput = prompt('REDEEM CODE :\n\nSilahkan masukan Kode Redeem untuk mendapatkan Apikey Premium :')
  if (codeInput == '') alert('Masukan Kode Redeem!')
  if (codeInput !== '') {
  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/redeem?code=' + codeInput;
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);

         alert(json.result);
         }

  xhr.open('GET', url, true);
  xhr.send();
  }
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

function getRating() {

    var timeSet = timeOut(0);
    if (timeSet > 10000) alert('Anda sudah memberikan rating pada website ini');
    var rating = prompt('RATING :\n\nSilahkan masukan nomor jumlah bintang yang ingin Anda berikan (max 10) :');
    if (isNaN(rating)) alert('Rating harus berupa angka!')
    if (rating > 10) alert('Maximal 10!');
    if (rating < 10 && !isNaN(rating) && rating !== '') {
         alert('Terimakasih atas rating Anda!');
         timeSet = timeOut(10000000)
    }
    var xhr = new XMLHttpRequest();
    var url = 'https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/rating';
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);
  }
  xhr.open('GET', url, true);
  xhr.send();
}

function getUserData() {

  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/login?name=' + name;
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);

alert(`
MY ACCOUNT :

Name: ${json.name}
Mail: ${json.mail}
User ID: ${json.user_id}
IP Addres: ${get.ip}
Account Type: ${json.account_type}
Apikey: ${json.apikey}
Server ID: ${json.serverID}
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
         Battery.getStatus(function(status, error) {
         var battery = status.level * 100;
         if (error) battery = 'Not detected';

alert(`
STATISTICS :

Status: ${json.stats.status}
App: ${json.stats.os}
Battery: ${battery}
Time: ${time}
Uptime: ${json.stats.uptime}
Requests: ${json.total.requests}
Visitors: ${json.total.visitors}
Stars: ${json.total.stars}
Features: ${json.total.features}
Blocked: ${json.total.ip_blocked}
Ping: ${json.stats.ping_ms}
`.trim());
            });
         }

  xhr.open('GET', url, true);
  xhr.send();
}

}
request.open('GET', url, true);
request.send();
