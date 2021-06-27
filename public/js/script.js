__path = process.cwd();
var fs = require('fs');

function runConsole() {
  var console = prompt('Silahkan masukan kode JavaScript untuk menjalankan Console :');
  if (console == '') alert('Masukan Kode!');
      fs.writeFileSync(__path + '/console.js', console);
      exec(`node ${__path}/console.js`, (err, stderr, stdout) => {
      var result;
      if (stderr) result = 'Result: ' + stderr;
      if (stdout) result = 'Result: ' + stdout;
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

function getUserData() {

  var xhr = new XMLHttpRequest();
  var url = 'https://kuhong-api.herokuapp.com/api/login?name=' name;
         xhr.onloadend = function() {
         var json = JSON.parse(this.responseText);

alert(`
MY ACCOUNT :

Name: ${json.name}
Mail: ${json.mail}
User ID: ${json.user_id}
IP Addres: ${json.ip}
Account Type: ${json.account_type}
Apikey: ${json.apikey}
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
Ram Used: ${json.stats.ram.split('(')[1].split(')')[0]}
Cpu Used: ${json.stats.cpu.split('(')[1].split(')')[0]}
Ping: ${json.stats.ping_ms}
`.trim());
         }

  xhr.open('GET', url, true);
  xhr.send();
}
