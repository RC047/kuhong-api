/* KUHONG.JS
 * Author: RC047
 * Description: A Simple Web Bot
 * Copyright: © 2021
 * Note: This script is free for everyone,, dont forget to give credit and the script is only work in Html or Html5!
 */

var prefix = '!';
var baseCmd = prefix + 'menu';

async function getBotMessageWithCommand(cmd) {

try {
if (cmd.startsWith('menu') || cmd.startsWith('help')) {

	var menu = `
${newLine}MENU BOT :${newLine}${newLine}
${prefix}get [url]${newLine}
${prefix}post [url]${newLine}
${prefix}binary [text]${newLine}
${prefix}unbinary [text]${newLine}
${prefix}base64 [text]${newLine}
${prefix}unbase64 [text]${newLine}
${prefix}tinyurl [url]${newLine}
${prefix}bitly [url]${newLine}
${prefix}calculator [angka]${newLine}
${prefix}translate [lang|text]${newLine}
${prefix}persen [type|name]${newLine}
${prefix}iq${newLine}
${prefix}dadu${newLine}
${prefix}say [text]${newLine}
${prefix}alay [text]${newLine}
${prefix}purba [text]${newLine}
${prefix}reverse [text]${newLine}
${prefix}battery${newLine}
${prefix}kerang [pertanyaan]${newLine}
${prefix}halah [text]${newLine}
${prefix}hilih [text]${newLine}
${prefix}huluh [text]${newLine}
${prefix}heleh [text]${newLine}
${prefix}holoh [text]${newLine}
${prefix}twister${newLine}
${prefix}pantun${newLine}
${prefix}katabijak${newLine}
${prefix}katailham${newLine}
${prefix}bucin${newLine}
${prefix}quotes${newLine}
${prefix}sindiran${newLine}
${prefix}fml${newLine}
${prefix}faktaunik${newLine}
${prefix}ip [local/public]${newLine}
${prefix}time${newLine}
${prefix}ping${newLine}
${prefix}clear${newLine}
${prefix}owner${newLine}
`.trim();
     send(menu);

} else if (cmd.startsWith('owner')) {

window.location = 'https://wa.me/62895337278647';

} else if (cmd.startsWith('clear')) {

document.getElementById("chat").innerHTML = unescape('%3Ca%20id=%22no-message%22%3E%3C/a%3E');
document.getElementById("no-message").innerHTML = newLine + getDate() + tilt('Tidak ada pesan.');

} else if (cmd.startsWith('battery')) {

navigator.getBattery().then(status => {
   var res = Math.floor(status.level * 100) + '%';
   if (res == 'NaN%') res = 'Not Detected';
       send(res);
   }).catch(() => send('Unsupported Battery'));

} else if (cmd.startsWith('time')) {

var res = getDate().split('[')[1].split(']')[0];
     send(res);

} else if (cmd.startsWith('ping')) {

var date = new Date();
var old = date.getMilliseconds();
var neww = date.getMilliseconds();
var ping = `${neww - old}.${date.getMilliseconds() + 'ms'}`;
     send(ping);

} else if (cmd.startsWith('get')) {

var url = cmd.split('get ')[1];
if (!url) return send('Silahkan masukan url');
if (!url.startsWith('http')) return send('URL TIDAK VALID');
var res = fetchURL('GET', url);
if (res.status !== 200) return send('Request failed with status ' + res.status);
    send(res.body);

} else if (cmd.startsWith('post')) {

var url = cmd.split('post ')[1];
if (!url) return send('Silahkan masukan url');
if (!url.startsWith('http')) return send('URL TIDAK VALID');
var res = fetchURL('POST', url);
if (res.status !== 200) return send('Request failed with status ' + res.status);
    send(res.body);

} else if (cmd.startsWith('ip')) {

var type = cmd.split('ip ')[1];
if (!type) return send('Silahkan masukan type');
if (!(type == 'local' || type == 'public')) return send('Pilih public/local');
if (type == 'local') {
    window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var rtc = new RTCPeerConnection({iceServers:[]});
    noop = function() {};
    rtc.createDataChannel('');
    rtc.createOffer(rtc.setLocalDescription.bind(rtc), noop);
    rtc.onicecandidate = function(ice) {
    if (!ice || !ice.candidate || !ice.candidate.candidate) return;
    var res = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
    send(res);
    rtc.onicecandidate = noop;
	}
     }
if (type == 'public') {
     var res = fetchURL('GET', 'https://api.ipify.org');
     send(res.body);
     }

} else if (cmd.startsWith('tinyurl')) {

var url = cmd.split('tinyurl ')[1];
if (!url) return send('Silahkan masukan url');
if (!url.startsWith('http')) return send('URL TIDAK VALID');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/tinyurl?url=' + url + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('bitly')) {

var url = cmd.split('bitly ')[1];
if (!url) return send('Silahkan masukan url');
if (!url.startsWith('http')) return send('URL TIDAK VALID');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/bitly?url=' + url + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('calculator')) {

var angka = cmd.split('calculator ')[1];
if (!angka) return send('Silahkan masukan angka');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/calculator?angka=' + angka + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('binary')) {

var text = cmd.split('binary ')[1];
if (!text) return send('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/binary?encode=' + text + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('unbinary')) {

var text = cmd.split('unbinary ')[1];
if (!text) return send('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/binary?decode=' + text + '&apikey=' + getApikey());
    send(res.body.result);	

} else if (cmd.startsWith('base64')) {

var text = cmd.split('base64 ')[1];
if (!text) return send('Silahkan masukan text');
var res = btoa(text);
    send(res);

} else if (cmd.startsWith('unbase64')) {

var text = cmd.split('unbase64 ')[1];
if (!text) return send('Silahkan masukan text');
var res = atob(text);
    send(res);

} else if (cmd.startsWith('translate')) {

var args = cmd.split('translate ')[1];
if (!args) return send('Silahkan masukan kodebahasa (lang)');
var [lang, text] = args.split('|');
if (!text) return send('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/translate?lang=' + lang + '&text=' + text + '&apikey=' + getApikey());
var res = res.body.result;
if (res.body.result == undefined) res = 'Kodebahasa tidak tersedia.';
    send(res);

} else if (cmd.startsWith('say')) {

var text = cmd.split('say ')[1];
if (!text) return send('Silahkan masukan text');
     send(text);

} else if (cmd.startsWith('alay')) {

var text = cmd.split('alay ')[1];
if (!text) return send('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/alay?text=' + text + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('reverse')) {

var text = cmd.split('reverse ')[1];
if (!text) return send('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/reverse?text=' + text + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('purba')) {

var text = cmd.split('purba ')[1];
if (!text) return send('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/purba?text=' + text + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('kerang')) {

var pertanyaan = cmd.split('kerang ')[1];
if (!pertanyaan) return send('Silahkan masukan pertanyaan');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/kerang?pertanyaan=' + pertanyaan + '&apikey=' + getApikey());
    send(res.jawaban);

} else if (cmd.startsWith('halah')) {

var text = cmd.split('halah ')[1];
if (!text) return send('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/halah?text=' + text + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('hilih')) {

var text = cmd.split('hilih ')[1];
if (!text) return send('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/hilih?text=' + text + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('huluh')) {

var text = cmd.split('huluh ')[1];
if (!text) return send('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/huluh?text=' + text + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('heleh')) {

var text = cmd.split('heleh ')[1];
if (!text) return send('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/heleh?text=' + text + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('holoh')) {

var text = cmd.split('holoh ')[1];
if (!text) return send('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/holoh?text=' + text + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('persen')) {

var args = cmd.split('persen ')[1];
if (!args) return send('Silahkan masukan type');
var [type, nama] = args.split('|');
if (!nama) return send('Silahkan masukan nama');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/persen?type=' + type + '&nama=' + nama + '&apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('iq')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/iqtest?apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('dadu')) {

var res = 'Anda mendapatkan angka ' + Math.floor(Math.random() * 12) + '!';
    send(res);

} else if (cmd.startsWith('pantun')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/pantun?apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('twister')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/twister?apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('katabijak')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/katabijak?apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('quotes')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/quotes?apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('bucin')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/bucin?apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('katailham')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/katailham?apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('fml')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/fml?apikey=' + getApikey());
    send(res.body.result.id);

} else if (cmd.startsWith('sindiran')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/sindiran?apikey=' + getApikey());
    send(res.body.result);

} else if (cmd.startsWith('faktaunik')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/faktaunik?apikey=' + getApikey());
    send(res.body.result);

    } else return send('Perintah tidak ditemukan! Silahkan ketik ' + bold(baseCmd) + ' untuk melihat list menu.');

} catch (e) {
       console.log(e);
  send('Terjadi Kesalahan!');
  }
}

function send(message) {
var botName = isTag('KuhongBot (Verified): ', true);
var send = newLine + getDate() + botName + message;
document.getElementById("chat").innerHTML += send;
}

function fetchURL(method, url) {
var xhr = new XMLHttpRequest();
xhr.open(method.toUpperCase(), url, false);
xhr.send();
var body = xhr.responseText;
if (xhr.getAllResponseHeaders().split('content-type: ')[1] == 'application/json') body = JSON.parse(xhr.responseText);
var res = {
	status: xhr.status,
	statusText: xhr.statusText,
	headers:{
		userAgent: navigator.userAgent,
		contentLength: xhr.getAllResponseHeaders().split('content-length: ')[1].split('content-type: ')[0],
		contentType: xhr.getAllResponseHeaders().split('content-type: ')[1]
	},
	body: body
  }
  return res;
}

// module.exports = { getBotMessageWithCommand }
