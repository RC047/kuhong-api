function runConsole() {

  var console = prompt('RUN CONSOLE :\n\nSilahkan masukan kode JavaScript untuk menjalankan Console :', 'var res = "examples";console.log(res);');
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

o Add Text Counter!
o Update & Fix Templates!
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

    var rating = confirm('RATING :\n\nIngin menilai website ini?\n\nSilahkan pilih "Oke" untuk memberikan 1 Bintang ke website ini :)');
    if (rating) {
        alert('Terimakasih atas 1 Bintang Anda!');

    var xhr = new XMLHttpRequest();
    var url = 'https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/rating';
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);
  }
  xhr.open('GET', url, true);
  xhr.send();
     }
}

function getUserData() {

  var request = new XMLHttpRequest();
  var ip = 'http://api.ipify.org/?format=json';
        request.onloadend = function() {
        var getData = JSON.parse(this.responseText);

  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/login?name=' + name;
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);

alert(`
MY ACCOUNT :

Name: ${json.name}
Mail: ${json.mail}
User ID: ${json.user_id}
IP Address: ${getData.ip}
Account Type: ${json.account_type}
Apikey: ${json.apikey}
Server ID: ${json.serverID}
`.trim());
         }

  xhr.open('GET', url, true);
  xhr.send();
         }

request.open('GET', ip, true);
request.send();
}

function getStatistics() {
  var date = new Date();
  var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/status';
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);
         var app = 'Cloudfare';
         if (json.stats.os == 'LINUX') {
         app = 'Linux';
         } else app = 'Unknown App';
         Battery.getStatus(function(status, error) {
         var battery = Math.floor(status.level * 100) + '%';
         if (status.charging == true || status.charging == 'true') battery = Math.floor(status.level * 100) + '% (Charging)';
         if (status.level == 'NaN%') battery = 'Not Detected';
         if (error) battery = 'Not Detected';

alert(`
STATISTICS :

Status: ${json.stats.status}
App: ${app}
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
