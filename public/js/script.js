$(document).ready(function() {

    $('.sub-btn').click(function() {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
    $('.menu-btn').click(function() {
        $('.side-bar').addClass('active');
        $('.menu-btn').css('visibility', 'hidden');
    });
    $('.close-btn').click(function() {
        $('.side-bar').removeClass('active');
        $('.menu-btn').css('visibility', 'visible');
    });
});

var logged = false;
var user = fetchURI('https://kuhong-api.herokuapp.com/database.json');
var ip = fetchURI('https://kuhong-api.herokuapp.com/ip');
if (user.data.name || user.data.ip == ip) {
var a = document.getElementById("login");
    logged = true;
    a.innerHTML = unescape('%3Ci%20class%3D%22fas%20fa-user%22%3E%3C/i%3EMy%20Account');
    a.onclick = function() {
      return getUserData();
    }
}

window.setTimeout('setTimes();', 1000);
function setTimes() {

    var name = fetchURI('https://kuhong-api.herokuapp.com/database.json').data.name || 'Guest';
    var date = new Date();
    var time = new Array(date.getHours(), date.getMinutes(), date.getSeconds()).join(':');
    var ucapan = 'Selamat Datang!';
    if (date.getHours() == 0 || date.getHours() == 1 || date.getHours() == 2 || date.getHours() == 3 || date.getHours() == 4 || date.getHours() == 5 || date.getHours() == 6 || date.getHours() == 7 || date.getHours() == 8 || date.getHours() == 9) ucapan = 'Selamat Pagi';
    if (date.getHours() == 10 || date.getHours() == 11 || date.getHours() == 12 || date.getHours() == 13 || date.getHours() == 14) ucapan = 'Selamat Siang';
    if (date.getHours() == 15 || date.getHours() == 16 || date.getHours() == 17) ucapan = 'Selamat Sore';
    if (date.getHours() == 18 || date.getHours() == 19 || date.getHours() == 20 || date.getHours() == 21 || date.getHours() == 22 || date.getHours() == 23) ucapan = 'Selamat Malam';
    var notif = `${ucapan} ${name}!`;

window.setTimeout('setTimes();', 1000);
document.getElementById("time").innerHTML = time;
document.getElementById("notif").innerHTML = notif;
}

function getInfo(url, param, method) {

var name = user.data.name || 'Guest';
var res = fetchURI('https://kuhong-api.herokuapp.com/api/getinfo', {
      method: 'POST',
      headers: 'application/x-www-form-urlencoded',
      body: 'name=' + name + '&url=' + url + '&param=' + encodeURIComponent(param) + '&method=' + method
});

var ok = confirm(`
${res.data.apiName} :

Status: ${res.data.status}
Url: ${res.data.pathUrl}
Parameter: ${res.data.param}
Method: ${res.data.method}
Response: ${res.data.responseType}


*Silahkan pilih "Oke" untuk mencoba.
`.trim());
if (ok) return window.open(res.data.fullUrl);
else return false;
}

function runConsole() {

  var code = prompt('RUN CONSOLE :\n\nSilahkan masukan kode NodeJS untuk menjalankan console :');
  if (code == '') alert('Masukan Kode!');
  if (!code) return false;
  if (code !== '') {
  var res = fetchURI('https://kuhong-api.herokuapp.com/api/console', {
        method: 'POST',
        headers: 'application/x-www-form-urlencoded',
        body: 'code=' + code
  });
  alert(res.data.result);
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

o Add Web Bot Chat!
o Add JavaScript Minifier!
o JavaScript Obfuscator!
o Some Improvements!
`.trim());
}

function getApikey() {
if (!logged) return alert('Login terlebih dahulu untuk mendapatkan apikey!');
var res = fetchURI('https://kuhong-api.herokuapp.com/api/getapikey');
  return prompt('GET APIKEY :\n\nSilahkan salin apikeynya disini\n\n*' + res.data.info, res.data.free_apikey);
}

function checkApikey() {

  var apikeyInput = prompt('CHECK APIKEY :\n\nSilahkan masukan Apikey yang ingin dicek :')
  if (apikeyInput == '') alert('Masukan Apikey!');
  if (!apikeyInput) return false;
  if (apikeyInput !== '') {
  var res = fetchURI('https://kuhong-api.herokuapp.com/api/cekapikey', {
        method: 'POST',
        headers: 'application/x-www-form-urlencoded',
        body: 'apikey=' + apikeyInput
  });
  alert(res.data.result);
  }
}

function redeemCode() {

  var codeInput = prompt('REDEEM CODE :\n\nSilahkan masukan Kode Redeem untuk mendapatkan Apikey Premium :')
  if (codeInput == '') alert('Masukan Kode Redeem!');
  if (!codeInput) return false;
  if (codeInput !== '') {
  var res = fetchURI('https://kuhong-api.herokuapp.com/api/redeem', {
        method: 'POST',
        headers: 'application/x-www-form-urlencoded',
        body: 'code=' + codeInput
   });
   if (res.data.result == 'Kode Redeem Tidak Valid!') alert(res.data.result)
   else prompt(res.data.result + '\n\nSilahkan salin Apikeymu.', res.data.premium_key), prompt(`Custom Apikey secara default adalah\n(${res.data.custom_key})\n\nAnda dapat mengubahnya nanti dengan cara minta kepada Owner.`, res.data.custom_key);
  }
}

function getRequest() {

    var request = prompt('REQUEST :\n\nIngin Request fitur atau semacamnya?\n\nBisa langsung kirim masukannya disini :)');
    if (request == '') alert('Request tidak boleh kosong!');
    if (!request) return false;
    if (request !== '') {
        alert('Terimakasih atas masukan Anda!');
        var res = fetchURI('https://kuhong-api.herokuapp.com/api/send', {
              method: 'POST',
              headers: 'application/x-www-form-urlencoded',
              body: 'request=' + request
        });
    }
}

function getReport() {

    var report = prompt('REPORT :\n\nAda yang ingin anda Laporkan kepada Owner secara langsung?\n\nBisa langsung kirim laporannya kesini :)');
    if (report == '') alert('Laporan tidak boleh kosong!');
    if (!report) return false;
    if (report !== '') {
        alert('Terimakasih atas laporan Anda!');
        var res = fetchURI('https://kuhong-api.herokuapp.com/api/send', {
              method: 'POST',
              headers: 'application/x-www-form-urlencoded',
              body: 'report=' + report
        });
    }
}

function getRating() {

var rating = confirm('RATING :\n\nIngin menilai website ini?\n\nSilahkan pilih "Oke" untuk memberikan 1 Bintang ke website ini :)');
if (rating) {
    alert('Terimakasih atas 1 Bintang Anda!');
    return fetchURI('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/rating');
  } else return false;
}

function actionLogin() {

if (!logged) return getUserData();
var name = prompt('Silahkan masukan nama disini untuk masuk :');
if (name == '') alert('Nama tidak boleh kosong!');
if (!name) return false;
if (name !== '') {
    alert('Selamat Datang ' + name + '!');
    var a = document.getElementById("login");
    a.innerHTML = unescape('%3Ci%20class%3D%22fas%20fa-user%22%3E%3C/i%3EMy%20Account');
    a.onclick = function() {
      return getUserData();
    }
    logged = true;

  return fetchURI('https://kuhong-api.herokuapp.com/api/login', {
     method: 'POST',
     headers: 'application/x-www-form-urlencoded',
     body: 'name=' + name
  });
 }
}

function getUserData() {

if (!logged) return actionLogin();
getIpLocal().then(ip => {
var res = fetchURI('https://kuhong-api.herokuapp.com/database.json');

alert(`
MY ACCOUNT :

Name: ${res.data.name}
Mail: ${res.data.mail}
User ID: ${res.data.userID}
Account Type: ${res.data.accountType}
Apikey: ${res.data.apikey}
Local IP: ${ip}
Public IP: ${res.data.ip}
Server ID: ${res.data.serverID}
`.trim());
  });
}

function getStatistics() {

  var date = new Date();
  var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  var res = fetchURI('https://kuhong-api.herokuapp.com/status');

alert(`
STATISTICS :

Status: ${res.data.stats.status}
App: ${res.data.stats.appName}
Platform: ${res.data.stats.platform}
Time: ${time}
Uptime: ${res.data.stats.uptime}
Users: ${res.data.total.users}
Requests: ${res.data.total.requests}
Visitors: ${res.data.total.visitors}
Stars: ${res.data.total.stars}
Features: ${res.data.total.features}
Blocked: ${res.data.total.ip_blocked}
Ping: ${res.data.stats.ping_ms}
`.trim());
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

if (buy) return window.open('https://wa.me/62895337278647');
else return false;
}

function getIpLocal() {

return new Promise(resolve => {
  window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var rtc = new RTCPeerConnection({ iceServers: [] });
  noop = function() {};
  rtc.createDataChannel('');
  rtc.createOffer(rtc.setLocalDescription.bind(rtc), noop);
  rtc.onicecandidate = function(ice) {
  var res = 'Not Located';
  if (ice.candidate !== null) res = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
  rtc.onicecandidate = noop;
      resolve(res);
  }});
}

// End of script :P
