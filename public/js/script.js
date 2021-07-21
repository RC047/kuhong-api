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

if (!name) name = 'Guest';
if (name == '') name = 'Guest';
if (name !== '') fetchURL('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/users');

// Other Functions (more functions?)
document.getElementById("run-console").onclick = function() {

  var console = prompt('RUN CONSOLE :\n\nSilahkan masukan kode JavaScript untuk menjalankan Console :');
  if (console == '') alert('Masukan Kode!');
  if (!console) return false;
  if (console !== '') {
  var res = fetchURL('https://kuhong-api.herokuapp.com/api/run', {
              method: 'POST',
              body: 'console=' + console,
              headers: 'application/x-www-form-urlencoded'
         });
  if (res.data.result == undefined || res.data.result == '' || res.data.result.startsWith('undefined')) {
       alert('No data can be sent');
       return false;
       }
  alert(res.data.result);
  }
}

document.getElementById("notification").onclick = function() {
alert(`
NOTIFICATION :

Kalo masih ada fitur yang dianggap kalian nembak,, dimohon untuk segera hubungi Owner agar fitur langsung segera diupdate!
`.trim());
}

document.getElementById("changelog").onclick = function() {
alert(`
CHANGELOG :

o Add Web Bot Chat!
o Some Improvements!
`.trim());
}

document.getElementById("get-apikey").onclick = function() {
  var res = fetchURL('https://kuhong-api.herokuapp.com/api/getapikey');
  prompt('GET APIKEY :\n\nSilahkan salin apikeynya disini\n\n*' + res.data.info, res.data.free_apikey);
}

document.getElementById("check-apikey").onclick = function() {

  var apikeyInput = prompt('CHECK APIKEY :\n\nSilahkan masukan Apikey yang ingin dicek :')
  if (apikeyInput == '') alert('Masukan Apikey!');
  if (!apikeyInput) return false;
  if (apikeyInput !== '') {
  var res = fetchURL('https://kuhong-api.herokuapp.com/api/cekapikey', {
        	  method: 'POST',
              body: 'apikey=' + apikeyInput,
              headers: 'application/x-www-form-urlencoded'
         });
  alert(res.data.result);
  }
}

document.getElementById("redeem").onclick = function() {

  var codeInput = prompt('REDEEM CODE :\n\nSilahkan masukan Kode Redeem untuk mendapatkan Apikey Premium :')
  if (codeInput == '') alert('Masukan Kode Redeem!');
  if (!codeInput) return false;
  if (codeInput !== '') {
  var res = fetchURL('https://kuhong-api.herokuapp.com/api/redeem', {
        	  method: 'POST',
              body: 'code=' + codeInput,
              headers: 'application/x-www-form-urlencoded'
         });
   if (res.data.result == 'Kode Redeem Tidak Valid!') alert(res.data.result)
   else prompt(res.data.result + '\n\nSilahkan salin Apikeymu.', res.data.premium_key), prompt(`Custom Apikey secara default adalah\n(${res.data.custom_key})\n\nAnda dapat mengubahnya nanti dengan cara minta kepada Owner.`, res.data.custom_key);
  }
}

document.getElementById("request").onclick = function() {

    var request = prompt('REQUEST :\n\nIngin Request fitur atau semacamnya?\n\nBisa langsung kirim masukannya disini :)');
    if (request == '') alert('Request tidak boleh kosong!');
    if (!request) return false;
    if (request !== '') {
        alert('Terimakasih atas masukan Anda!');
        var res = fetchURL('https://kuhong-api.herokuapp.com/api/send', {
        	  method: 'POST',
              body: 'request=' + request,
              headers: 'application/x-www-form-urlencoded'
         });
    }
}

document.getElementById("report").onclick = function() {

    var report = prompt('REPORT :\n\nAda yang ingin anda Laporkan kepada Owner secara langsung?\n\nBisa langsung kirim laporannya kesini :)');
    if (report == '') alert('Laporan tidak boleh kosong!');
    if (!report) return false;
    if (report !== '') {
        alert('Terimakasih atas laporan Anda!');
        var res = fetchURL('https://kuhong-api.herokuapp.com/api/send', {
        	  method: 'POST',
              body: 'report=' + report,
              headers: 'application/x-www-form-urlencoded'
         });
    }
}

document.getElementById("rating").onclick = function() {

    var rating = confirm('RATING :\n\nIngin menilai website ini?\n\nSilahkan pilih "Oke" untuk memberikan 1 Bintang ke website ini :)');
    if (rating) {
        alert('Terimakasih atas 1 Bintang Anda!');
        return fetchURL('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/rating');
    } else return false;
}

document.getElementById("my-account").onclick = function() {

  window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var rtc = new RTCPeerConnection({ iceServers: [] });
  if (!rtc) return alert('Account Not Found!');
  noop = function() {};
  rtc.createDataChannel('');
  rtc.createOffer(rtc.setLocalDescription.bind(rtc), noop);
  rtc.onicecandidate = function(ice) {
  var localIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
  rtc.onicecandidate = noop;
  var res = fetchURL('https://kuhong-api.herokuapp.com/api/login', {
        method: 'POST',
        body: 'name=' + name,
        headers: 'application/x-www-form-urlencoded'
   });

alert(`
MY ACCOUNT :

Name: ${res.data.name}
Mail: ${res.data.mail}
User ID: ${res.data.userID}
Account Type: ${res.data.accountType}
Apikey: ${res.data.apikey}
Local IP: ${localIP}
Public IP: ${res.data.publicIP}
Server ID: ${res.data.serverID}
`.trim());
  }
}

document.getElementById("statistics").onclick = function() {

  var date = new Date();
  var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  var res = fetchURL('https://kuhong-api.herokuapp.com/status');

alert(`
STATISTICS :

Status: ${res.data.stats.status}
App: ${res.data.stats.platform}
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

document.getElementById("shop").onclick = function() {

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

if (buy) window.location = 'https://wa.me/62895337278647';
else return false;
}


// End of script :P
