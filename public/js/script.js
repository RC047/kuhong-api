// Bar Functions (to set all bars)
$(document).ready(function() {

    $('.sub-btn').click(function() {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    $('.menu-btn').click(function() {
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function() {
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
    });
});

// Login is required (;v)
var name = prompt(`
LOGIN REQUIRED :

Silahkan masukan namamu untuk identitas diwebsite ini :)
`.trim());
if (!name || name == '') name = 'Guest';
if (name !== '') {
console.log(`LOGIN :\n${name} just logged in to your website`);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/users', true);
xhr.send();
}

// Time Functions (to get a live online times)
window.setTimeout('setTimes();', 1000);
function setTimes() {

    var date = new Date();
    var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    var ucapan;
    if (date.getHours() == 0 || date.getHours() == 1 || date.getHours() == 2 || date.getHours() == 3 || date.getHours() == 4 || date.getHours() == 5 || date.getHours() == 6 || date.getHours() == 7 || date.getHours() == 8 || date.getHours() == 9) ucapan = 'Selamat Pagi';
    if (date.getHours() == 10 || date.getHours() == 11 || date.getHours() == 12 || date.getHours() == 13 || date.getHours() == 14) ucapan = 'Selamat Siang';
    if (date.getHours() == 15 || date.getHours() == 16 || date.getHours() == 17) ucapan = 'Selamat Sore';
    if (date.getHours() == 18 || date.getHours() == 19 || date.getHours() == 20 || date.getHours() == 21 || date.getHours() == 22 || date.getHours() == 23) ucapan = 'Selamat Malam';
    var notif = ucapan + ' ' + name + '!';
    if (notif == ucapan + ' null!') notif = ucapan + ' Guest!';
          setTimeout('setTimes();', 1000);
          document.getElementById('time').innerHTML = time;
          document.getElementById('notif').innerHTML = notif;
}

// Other Functions (more functions?)
function getInfo(url, param, method) {

  var xhr = new XMLHttpRequest();
  var url = `https://kuhong-api.herokuapp.com/api/getinfo?name=${name}&url=${url}&param=${escape(param)}&method=${method}`;
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);

var ok = confirm(`
${json.apiName} :

Status: ${json.status}
Url: ${json.pathUrl}
Parameter: ${json.param}
Method: ${json.method}
Response: ${json.responseType}


*Silahkan pilih "Oke" untuk mencoba.
`.trim())
if (ok) {
    window.location = json.fullUrl;
} else throw false;

    }
xhr.open('GET', url, true);
xhr.send();
}

function runConsole() {

  var console = prompt('RUN CONSOLE :\n\nSilahkan masukan kode JavaScript untuk menjalankan Console :');
  if (console == '') alert('Masukan Kode!');
  if (console) {
      console = console;
  } else throw false;
  if (console !== '') {
  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/run?console=' + console;
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);
         if (json.result == undefined || json.result == '' || json.result.startsWith('undefined')) {
             alert('No data can be sent')
             throw false;
         }

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

o Add More Games!
o Some Update & Improve Templates!
`.trim());
}

function getApikey() {

  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/getapikey';
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);
         prompt('GET APIKEY :\n\nSilahkan salin apikeynya disini\n\n*' + json.info, json.free_apikey);
         }

xhr.open('GET', url, true);
xhr.send();
}

function checkApikey() {

  var apikeyInput = prompt('CHECK APIKEY :\n\nSilahkan masukan Apikey yang ingin dicek :')
  if (apikeyInput == '') alert('Masukan Apikey!');
  if (apikeyInput) {
      apikeyInput = apikeyInput;
  } else throw false;
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
  if (codeInput == '') alert('Masukan Kode Redeem!');
  if (codeInput) {
      codeInput = codeInput;
  } else throw false;
  if (codeInput !== '') {
  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/redeem?code=' + codeInput;
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);
         if (json.result == 'Kode Redeem Tidak Valid!') alert(json.result)
         if (json.result == 'Kode Redeem Valid!') {
             prompt(json.result + '\n\nSilahkan salin Apikeymu.', json.premium_key)
             prompt(`Custom Apikey secara default adalah\n(${json.custom_key})\n\nAnda dapat mengubahnya nanti dengan cara minta kepada Owner.`, json.custom_key)
         }
         }

  xhr.open('GET', url, true);
  xhr.send();
  }
}

function getRequest() {

    var request = prompt('REQUEST :\n\nIngin Request fitur atau semacamnya?\n\nBisa langsung kirim masukannya disini :)');
    if (request == '') alert('Request tidak boleh kosong!');
    if (request) {
        request = request;
    } else throw false;
    if (request !== '') {
         alert('Terimakasih atas masukan Anda!');
         var message = 'REQUEST API :\n' + request;
         var xhr = new XMLHttpRequest();
         var url = 'https://api.callmebot.com/whatsapp.php?phone=+62895337278647&text=' + message + '&apikey=171698';

    xhr.open('GET', url, true);
    xhr.send();
    }
}

function getReport() {

    var report = prompt('REPORT :\n\nAda yang ingin anda Laporkan kepada Owner secara langsung?\n\nBisa langsung kirim laporannya kesini :)');
    if (report == '') alert('Laporan tidak boleh kosong!');
    if (report) {
        report = report;
    } else throw false;
    if (report !== '') {
         alert('Terimakasih atas laporan Anda!');
         var message = 'REPORT API :\n' + request;
         var xhr = new XMLHttpRequest();
         var url = 'https://api.callmebot.com/whatsapp.php?phone=+62895337278647&text=' + message + '&apikey=171698';

    xhr.open('GET', url, true);
    xhr.send();
    }
}

function getRating() {

    var rating = confirm('RATING :\n\nIngin menilai website ini?\n\nSilahkan pilih "Oke" untuk memberikan 1 Bintang ke website ini :)');
    if (rating) {
        alert('Terimakasih atas 1 Bintang Anda!');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/rating', true);
    xhr.send();
    }
}

function getUserData() {

  window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var rtc = new RTCPeerConnection({iceServers:[]}), noop = function(){};      
  rtc.createDataChannel('');
  rtc.createOffer(rtc.setLocalDescription.bind(rtc), noop);
  rtc.onicecandidate = function(ice) {
  if (!ice || !ice.candidate || !ice.candidate.candidate) return;
  var localIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
  rtc.onicecandidate = noop;
  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/login?name=' + name;
          xhr.onloadend = function() {
          var json = JSON.parse(this.responseText);

alert(`
MY ACCOUNT :

Name: ${json.name}
Mail: ${json.mail}
User ID: ${json.userID}
Account Type: ${json.accountType}
Apikey: ${json.apikey}
Local IP: ${localIP}
Public IP: ${json.publicIP}
Server ID: ${json.serverID}
`.trim());
         }

  xhr.open('GET', url, true);
  xhr.send();
  }
}

function getStatistics() {

  var date = new Date();
  var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/status';
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);
         var app;
         if (json.stats.os == 'LINUX') {
         app = 'Linux';
         } else app = json.stats.os.toLowerCase();

alert(`
STATISTICS :

Status: ${json.stats.status}
App: ${app}
Time: ${time}
Uptime: ${json.stats.uptime}
Users: ${json.total.users}
Requests: ${json.total.requests}
Visitors: ${json.total.visitors}
Stars: ${json.total.stars}
Features: ${json.total.features}
Blocked: ${json.total.ip_blocked}
Ping: ${json.stats.ping_ms}
`.trim());
         }

  xhr.open('GET', url, true);
  xhr.send();
}

function getShop() {

var buy = confirm(`
SHOPS :

Premium Apikey = 10K / Bulan
Premium Apikey = 25K / Tahun
Custom Apikey = 15K / Bulan
Custom Apikey = 30K / Tahun
Redeem Code = 25K / Bulan
Redeem Code = 50K / Tahun
Placing Ads = 10K / Bulan
Placing Ads = 20K / Tahun
Remove Ads = 15K / Bulan
Remove Ads = 30K / Tahun
All Packs = 75K / Bulan
All Packs = 150K / Tahun

*Silahkan pilih "Oke" untuk lanjut membeli.
`.trim());

   if (buy) {
       window.location = 'https://wa.me/62895337278647';
   } else throw false;
}


// End of script :P
