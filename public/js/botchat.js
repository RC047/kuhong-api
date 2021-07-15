/* BOTCHAT.JS
 * Author: RC047
 * Description: A Simple Web Bot
 * Copyright: © 2021
 * Note: This script is free for everyone,, dont forget to give credit and the script is only work in Html or Html5!
 */

var prefix = new RegExp('^[!?#/$.]');
var baseCmd = pickRandom(['!', '?', '#', '/', '$', '.']) + pickRandom(['menu', 'help']);
var previousMessage = '';
var historyMessage = '';
var newLine = unescape('%3Cbr%3E');
var publicChat = false;
var nama = 'Guest' + Math.floor(Math.random() * 10000);
document.getElementById("no-message").innerHTML += newLine + getDate() + isTag('KuhongBot (Verified): ', true) + 'Hai ' + color(nama, 'red') + '!' + newLine + 'Silahkan ketik ' + bold('!menu') + ' untuk memulai Bot';


function sendBotMessage(message) {
var botName = isTag('KuhongBot (Verified): ', true);
var send = newLine + getDate() + botName + message;
document.getElementById("chat").innerHTML += send;
}

function color(text, color) {
   return unescape('%3Ca%20style=%22color:' + color.toLowerCase() + '%22%3E') + text + unescape('%3C/a%3E');
}

function tilt(text) {
   return unescape('%3Cvar%3E') + text + unescape('%3C/var%3E');
}

function bold(text) {
   return unescape('%3Cstrong%3E') + text + unescape('%3C/strong%3E');
}

function getNotifications() {
var isOnline = pickRandom(['Bot sedang online.', Math.floor(Math.random() * 20) + ' orang sedang online.']);
   return document.getElementById("notification").innerHTML = pickRandom([isOnline, 'Selamat bersenang2 :)', 'Mohon jangan untuk spam!', 'Jika Bot tidak membalas segera hubungi Owner okeh!', 'Ini hanya untuk bersenang-senang ok!', 'Mohon jangan saling membully', 'Dilarang untuk Toxic!']);
}

function getDate() {
var date = new Date();
   return '[' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '] ';
}

function changeName() {
nama = prompt('Silahkan ganti namamu :', nama).split(':')[0];
if (nama == null || nama == '') {
    nama = 'Guest' + Math.floor(Math.random() * 10000);
    throw false;
    } else if (nama.startsWith('Kuhong') || nama.startsWith('kuhong') || nama.startsWith('RC047')) {
    alert('Nama yang anda masukan sudah dimiliki!');
    nama = 'Guest' + Math.floor(Math.random() * 10000);
    throw false;
    } else if (nama.endsWith(')') || nama.endsWith('Verified')) {
    alert('Nama anda tidak diizinkan!');
    nama = 'Guest' + Math.floor(Math.random() * 10000);
    throw false;
    }
alert('Nama diupdate menjadi ' + nama.split(':')[0]);
}

function getRandomName() {
var guestName = 'Guest' + Math.floor(Math.random() * 10000) + ': ';
var ranName = pickRandom(['RC047 (Verified): ', 'Aliando: ', 'Saya: ', 'Bukan Saya: ', 'Bukan Bot: ', 'Cwek: ', 'Cwok: ', 'Cowok: ', 'Cewek: ', 'Doimu: ', 'Doi: ', 'Febian: ', 'Putri: ', 'Fadil: ', 'Helin: ', 'Annisa: ', 'Cantika: ', 'Rizki: ', 'Zidan: ', 'Budi: ', 'Udin: ', 'Ibnu: ', 'Samarrr: ', 'Ular: ', 'Patrick: ', 'Patung: ', 'Hayabusa: ', 'Gatotkaca: ', 'ejenali: ', 'qaqaa: ', 'xd: ', 'Arnold: ', 'Master: ', 'Chef: ', 'Orang: ', 'Mikey: ', 'Agil: ', 'Awoakakak: ', 'Helmi: ', 'Dika: ', 'Suster: ', 'Anak: ', 'Ridwan: ', 'Razz: ', 'P cari doi: ', 'Hmm: ', 'Si Manis: ', 'Kacung: ', 'sygg: ', '86: ', 'Pajar: ', 'Ardian: ', 'Septian: ', 'Jungkook: ', 'Ryan: ', 'alboOwkdiw: ', 'Y: ', 'Reza: ', 'Kang copas: ', 'Tukang Seblak: ', 'Pikri: ', 'Manusia: ', 'Wibu-Lovers: ', 'FF Burik: ', 'Ardjoena: ', 'Selfia: ', 'Kenzo: ', 'Rafli: ', 'Dean: ', 'Felita: ', 'Wili: ', 'Putra: ', 'F: ', 'Gamers: ', 'Ipin: ', 'Botak: ', 'Hehe: ', 'Gunawan: ', 'Jin: ', 'Masha: ', 'Sadboy: ', 'Sofian: ', 'Mega: ', 'Zaky: ', 'Orang Ganteng: ', 'Wildan: ', 'Dhani: ', 'Pak Eko: ', 'Dzikri: ', 'Bapak: ', 'Pak Guru: ', 'PP Mikey: ', 'Om Deddy: ', 'Mas Botak: ', 'Tirta: ', 'Gak Ada Nama: ', 'Fio: ', 'Cakra: ', 'Rull: ', 'Kemal: ', 'Rama: ', 'Nenek: ', 'Siska: ', 'Abi: ', 'Ini Saya: ', 'RRQ Lemon: ', 'EVOS ajlh: ', 'EVOS: ', '@: ', 'User: ', 'Pengguna Google: ', 'Pengguna HP: ', 'Pengguna EpEp: ', 'Bot EpEp: ']);
   return pickRandom([guestName, ranName]);
}

function getRandomMessage(name) {
   return pickRandom([Math.floor(Math.random() * 100), previousMessage, '!menu', '!menu', '!time', '!fml', 'Gk bisa', '!tolol', '*Anjasss*', '!kuhong', 'Kuhong', 'Kuhong', 'Kuhong', 'Kuhong', 'Kuhong', 'Kuhong', 'Kuhong', 'Ereree', 'Pansos!', 'Gaje', 'Gj', 'Press F', 'Jan sok keras!', 'Epep kuy', 'Gem burik jan sok keras', 'Buriqq', 'Kocak', 'Kocak :V', 'Woy ' + nama, 'Hai ' + bold('@' + nama) + ' :V', 'Si ' + bold('@' + nama) + ' Nyimak', 'Hai ' + bold('@' + name) + ' :V', 'Si ' + bold('@' + name) + ' Nyimak', 'Haduuuhh', 'Yaudah', 'Belom', 'Udah', 'Gak nyambung', 'Itu', 'Itu lu kali', 'Mungkin lu yg gtu', 'Jadi gini...', 'Jadi?', 'Give diamond woee', 'Anjay', 'Apa', 'Ihhhh', 'Paan', 'Apaansii', 'Ishhh', 'Mmm', '...', 'Z', 'Dibersihin_-', 'First', 'Bodoh', 'Siapa?', 'Lu?', 'Yahaha', 'Mari kita tebak angka kawan', 'Salah!', 'Lah trus apa?', 'Anj', 'Dhlah', 'Ok', 'Bot mana bot', 'Keren sih parah', 'Nahh dia bener!', 'IRI BILANG BOS', 'Bener?', 'Pacaran yuk', '-_-', 'Sepi kaleee', 'Njirr', 'Bjir', 'Itu bukan?', 'itu?', 'ini bukan?', 'ini?', 'Wahh', 'Pfft', 'P', 'P nyari doi super', 'P cari doi', 'P cari apikey gratis', 'Coba tanya ' + bold('@' + name.split(':')[0]) + ' aja', 'Selamat!', 'Bener tuh', 'Benar!', 'Bener?', 'Hehee', 'Iya maaf', 'Maaf', 'Mabar?', 'Kuy mabar', 'Mabar yokk', 'Bjirr', 'Tumben rame', 'Kalah ama ' + bold('@' + name.split(':')[0]), ' :v', ':v', 'Bang', 'Bang', 'Sat', 'Sat', 'Kuy', 'Yok', 'Hemm', 'Lu siapa?', 'Coba', bold('@' + nama), bold('@' + name), 'Diem aja', 'B aja', 'Woy', 'Ngopi bang?', 'F', 'Iya', 'Iy', 'Oke', 'Ok', 'G', 'Gk', 'Gak', 'Woee', 'Ajglh', 'Dicuekin lagi', 'Punten Gopud', 'Eeehh', 'Kasar bodo', 'Cuy', 'Bacot', 'Nyimak', 'Nyimak ajalh', 'Ayo', '?', '???', '!', '.', ':v', 'v:', ':V', ';v', 'Keren', 'Mari mengaduk kawan', 'Bye one?', 'Cuk', 'Sepi', 'Sepi kali', '1+1=11', 'GG', 'Anjirr', 'Parahh', 'Gileee', 'Dicuekin', 'Awoakakak', 'Gip alok', 'Knp?', 'Males', 'Enak cuk', 'Wkwwkwkwkwk', 'Bengek', 'Tes', 'Siap', 'Lahh', 'Gmn', 'Stop', 'Jan spam', 'asw', 'Asw', 'Asuu', 'Copy dulu bru paste', 'Percuma bnyk fiturnya klo pd mati', ':)', `'-'`, ':(', ':/', ':b', 'Bgi no wa', 'Yahh', 'Pliss', 'Heyy', '!!!', 'Sfx', 'WOIIIIII', 'Tayo', 'Gak lucu', 'Bot', '!help', 'Mana', 'Gak bisa', 'Lol', 'Bruhh', 'Bruhh', 'What', 'Ohh', 'O', 'Stress', 'Lu knp?', 'Mewhwhwwhee', 'Ketawa?', 'Kgk', 'Yoii', 'Skuyy', 'Bangg', 'Tante', 'Baik', 'Apa kabar', 'Kok gk bisa sihh', 'Iya iya', '-_-', '_-', '-_', 'P', 'Ppppppppppp', 'Jangan kasar!', 'Makan bang', 'Ngeteh bang', 'LOL', 'P cari guild', 'Bantu share', 'Up', 'Up', 'Apaan', 'Bego', 'Tuman!', 'Yamete kudasai', 'Anak mesum_-', 'Dasar', 'Dihh', 'Cihh', 'Wooooooo', 'Kuy nobar', 'Hayuuu', 'Bikess ihhh', 'Ada cewek gk?', 'Disini ada cewek?', 'Kwekekekekk', 'Ayam goyeng', 'Kudasai', 'Daijobu', 'Dasarr', 'Dasar Wibu_-', 'Dasar wibu', 'BAKAAA!!!', 'Urusaii!', 'Tai', 'Bgi template bang', 'Gege', 'gg gaming', 'Kok gw bisa disini', 'Kok gw bisa nyasar kesini', 'Gw dimana', 'Waww', 'UwU', 'UwU', 'UwU', 'UwU', 'UwU', 'UwU', 'UwU', ':v', ':v', ':v', 'Jan Toxic!!!', 'Jan Toxic!!!', 'Siapa?', 'Siapa coba?', 'Tebak', ':P', ':P', 'Subscribe channelku', 'Jan lupa follow ig gw', 'Follback yaa', 'Followback?', 'Okey', 'Sayang', 'Idih', 'Gay', 'Lu yang Gay!!', 'Dahlahh', 'Nanti dibantai nangis', 'Nanti dibantai nangis', 'Skrng jam brp?', 'Palsu ajg', 'Palsu', 'Yahahahahh', 'Pffftt', 'Yowess', 'Opo iki', 'Saha?', 'XD', 'XD', 'DX', ':c', ':O', ':]', ':3', ':3', ' ', 'Titik?', '?', 'Caranya?']);
}

function enterKey(event) {
if (event.keyCode == 13) return sendMessage();
}

function sendMessage() {
var pesan = document.getElementById("message").value;
if (pesan == '') throw false;
if (pesan.length > 500) return alert('Pesan terlalu panjang!');
var send = newLine + getDate() + color(nama + ': ', 'red') + pesan.replace(/_/g, unescape('%3Cvar%3E')).replace(/\*/g, unescape('%3Cstrong%3E'));
document.getElementById("no-message").innerHTML = '';
sendBotMessage(send);
setTimeout(() => getBotMessage(pesan), 1000);
previousMessage = pesan;
historyMessage += pesan + '\n';
document.getElementById("message").value = '';
}

function getBotMessage(pesan) {
var botName = 'KuhongBot (Verified): ';
var taggedName = isTag(botName, true);
if (publicChat == true) {
    botName = getRandomName();
    taggedName = isTag(botName);
    }
if (botName.endsWith('(Verified): ')) taggedName = isTag(botName, true);
if (!prefix.test(pesan))  {
    var xhr = new XMLHttpRequest();
    var url = 'https://kuhong-api.herokuapp.com/api/simsimi?kata=' + pesan + '&apikey=' + getApikey();
    xhr.open('GET', url, false);
    xhr.send();
    var json = JSON.parse(xhr.responseText);
    var message = json.result.replace(/_/g, unescape('%3Cvar%3E')).replace(/\*/g, unescape('%3Cstrong%3E')).replace(/SIMI/g, 'AKU').replace(/simi/g, 'aku').replace(/simsimi/g, 'aku').replace(/SIMSIMI/g, 'AKU');
    var send = newLine + getDate() + taggedName + message;
    sendBotMessage(send);
    } else getBotMessageWithCommand(pesan.slice(1));
}

function setPublic(turn) {
var delaySend = Math.floor(Math.random() * 30000);
if (turn == false) {
    alert('Mode chat berhasil diubah menjadi Private!');
    document.getElementById("no-message").innerHTML = '';
    document.getElementById("chat").innerHTML += newLine + newLine + bold('Mode chat telah diubah menjadi "' + tilt('Private') + '"');
    publicChat = false;
   }
if (turn == true) {
    alert('Mode chat berhasil diubah menjadi Public!');
    document.getElementById("no-message").innerHTML = '';
    document.getElementById("chat").innerHTML += newLine + newLine + bold('Mode chat telah diubah menjadi "' + tilt('Public') + '"');
    publicChat = true;
    setTimeout('autoSendMessage();', delaySend);
    }
}

function autoSendMessage() {
if (publicChat == false) throw false;
var delaySend = Math.floor(Math.random() * 30000);
var ranName = getRandomName();
var ranMessage = getRandomMessage(nama);
var taggedName = isTag(ranName);
if (ranName.endsWith('(Verified): ')) taggedName = isTag(ranName, true);
var sendPublic = newLine + getDate() + taggedName + ranMessage;
document.getElementById("no-message").innerHTML = '';
sendBotMessage(sendPublic);
if (prefix.test(ranMessage)) getBotMessageWithCommand(ranMessage.slice(1));
setTimeout('autoSendMessage();', delaySend);
}

function clearChat() {
var clear = confirm('Anda yakin ingin membersihkan chat?');
if (clear) {
    document.getElementById("chat").innerHTML = unescape('%3Ca%20id=%22no-message%22%3E%3C/a%3E');
    document.getElementById("no-message").innerHTML = newLine + getDate() + tilt('Tidak ada pesan.');
    alert('Chat berhasil dibersihkan!');
    } else throw false;
}

function isTag(who, verified = false) {
var result = unescape('%3Ca%20onclick=%22tagPeople(`') + who + unescape('`)%22%3E') + who + unescape('%3C/a%3E');
if (verified == true) result = who.split('(')[0] + unescape('%3Ca%20style=%22color:green%22%20onclick=%22tagPeople(`') + who.split(' (')[0] + unescape('`)%22%3E') + '(Verified)' + unescape('%3C/a%3E') + ': ';
   return result;
}

function tagPeople(target) {
   document.getElementById("message").value += '*@' + target.split(':')[0] + '*';
}

function getHistoryMessages() {
var result = historyMessage;
if (result == '') result = 'Tidak ada history';
   alert('HISTORY :\n\n' + result);
}

function getBotMessageWithCommand(cmd) {

try {
if (cmd.startsWith('menu') || cmd.startsWith('help')) {

	var menu = `
${newLine}MENU BOT :${newLine}${newLine}
${prefix}sticker [url]${newLine}
${prefix}trigger [url]${newLine}
${prefix}get [url]${newLine}
${prefix}post [url]${newLine}
${prefix}binary [text]${newLine}
${prefix}unbinary [text]${newLine}
${prefix}base64 [text]${newLine}
${prefix}unbase64 [text]${newLine}
${prefix}tinyurl [url]${newLine}
${prefix}bitly [url]${newLine}
${prefix}lock [url]${newLine}
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
     sendBotMessage(menu);

} else if (cmd.startsWith('owner')) {

window.location = 'https://wa.me/62895337278647';

} else if (cmd.startsWith('clear')) {

document.getElementById("chat").innerHTML = unescape('%3Ca%20id=%22no-message%22%3E%3C/a%3E');
document.getElementById("no-message").innerHTML = newLine + getDate() + tilt('Tidak ada pesan.');

} else if (cmd.startsWith('battery')) {

navigator.getBattery().then(status => {
   var res = Math.floor(status.level * 100) + '%';
   if (res == 'NaN%') res = 'Not Detected';
       sendBotMessage(res);
   }).catch(() => sendBotMessage('Unsupported Battery'));

} else if (cmd.startsWith('time')) {

var res = getDate().split('[')[1].split(']')[0];
     sendBotMessage(res);

} else if (cmd.startsWith('ping')) {

var date = new Date();
var old = date.getMilliseconds();
var neww = date.getMilliseconds();
var ping = `${neww - old}.${date.getMilliseconds() + 'ms'}`;
     sendBotMessage(ping);

} else if (cmd.startsWith('sticker') || cmd.startsWith('stiker')) {

var url = cmd.split('ker ')[1];
if (!url) return sendBotMessage('Silahkan masukan url');
if (!url.startsWith('http')) return sendBotMessage('Tolong masukan url yang valid!');
sendBotMessage('Sedang membuat...');
window.location = 'https://kuhong-api.herokuapp.com/api/stickerwm?url=' + url + '&packname=Sticker%20Maker&author=Kuhong%20Bot&apikey=' + getApikey();

} else if (cmd.startsWith('trigger')) {

var url = cmd.split('trigger ')[1];
if (!url) return sendBotMessage('Silahkan masukan url');
if (!url.startsWith('http')) return sendBotMessage('Tolong masukan url yang valid!');
sendBotMessage('Sedang membuat...');
window.location = 'https://kuhong-api.herokuapp.com/api/triggered?img=' + url + '&apikey=' + getApikey();

} else if (cmd.startsWith('get')) {

var url = cmd.split('get ')[1];
if (!url) return sendBotMessage('Silahkan masukan url');
if (!url.startsWith('http')) return sendBotMessage('Tolong masukan url yang valid!');
var res = fetchURL('GET', url);
if (res.status !== 200) return sendBotMessage('Failed to GET url');
    sendBotMessage(res.body);

} else if (cmd.startsWith('post')) {

var url = cmd.split('post ')[1];
if (!url) return sendBotMessage('Silahkan masukan url');
if (!url.startsWith('http')) return sendBotMessage('Tolong masukan url yang valid!');
var res = fetchURL('POST', url);
if (res.status !== 200) return sendBotMessage('Failed to POST url');
    sendBotMessage(res.body);

} else if (cmd.startsWith('ip')) {

var type = cmd.split('ip ')[1];
if (!type) return sendBotMessage('Silahkan masukan type');
if (!(type == 'local' || type == 'public')) return sendBotMessage('Pilih public/local');
if (type == 'local') {
    window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var rtc = new RTCPeerConnection({iceServers:[]});
    noop = function() {};
    rtc.createDataChannel('');
    rtc.createOffer(rtc.setLocalDescription.bind(rtc), noop);
    rtc.onicecandidate = function(ice) {
    if (!ice || !ice.candidate || !ice.candidate.candidate) return;
    var res = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
    sendBotMessage(res);
    rtc.onicecandidate = noop;
	     }
     }
if (type == 'public') {
     var res = fetchURL('GET', 'https://api.ipify.org');
     sendBotMessage(res.body);
     }

} else if (cmd.startsWith('exec')) {

var bash = cmd.split('exec ')[1];
if (!bash) return sendBotMessage('Silahkan masukan bash');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/execute?command=' + bash + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('lock')) {

var txt = cmd.split('lock ')[1];
if (!txt) return sendBotMessage('Silahkan masukan url');
if (!txt.startsWith('http')) return sendBotMessage('Tolong masukan url yang valid!');
var [url, pass] = txt.split('|');
if (!pass) return sendBotMessage('Silahkan masukan password');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/lock?url=' + url + '&pass=' + pass + '&apikey=' + getApikey());
    sendBotMessage(res.body.shorted_url);

} else if (cmd.startsWith('tinyurl')) {

var url = cmd.split('tinyurl ')[1];
if (!url) return sendBotMessage('Silahkan masukan url');
if (!url.startsWith('http')) return sendBotMessage('Tolong masukan url yang valid!');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/tinyurl?url=' + url + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('bitly')) {

var url = cmd.split('bitly ')[1];
if (!url) return sendBotMessage('Silahkan masukan url');
if (!url.startsWith('http')) return sendBotMessage('Tolong masukan url yang valid!');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/bitly?url=' + url + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('calculator')) {

var angka = cmd.split('calculator ')[1];
if (!angka) return sendBotMessage('Silahkan masukan angka');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/calculator?angka=' + angka + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('binary')) {

var text = cmd.split('binary ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/binary?encode=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('unbinary')) {

var text = cmd.split('unbinary ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/binary?decode=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);	

} else if (cmd.startsWith('base64')) {

var text = cmd.split('base64 ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = btoa(text);
    sendBotMessage(res);

} else if (cmd.startsWith('unbase64')) {

var text = cmd.split('unbase64 ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = atob(text);
    sendBotMessage(res);

} else if (cmd.startsWith('translate')) {

var args = cmd.split('translate ')[1];
if (!args) return sendBotMessage('Silahkan masukan kodebahasa (lang)');
var [lang, text] = args.split('|');
if (!text) return sendBotMessage('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/translate?lang=' + lang + '&text=' + text + '&apikey=' + getApikey());
var res = res.body.result;
if (res.body.result == undefined) res = 'Kodebahasa tidak tersedia.';
    sendBotMessage(res);

} else if (cmd.startsWith('say')) {

var text = cmd.split('say ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
     sendBotMessage(text);

} else if (cmd.startsWith('alay')) {

var text = cmd.split('alay ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/alay?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('reverse')) {

var text = cmd.split('reverse ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/reverse?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('purba')) {

var text = cmd.split('purba ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/purba?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('kerang')) {

var pertanyaan = cmd.split('kerang ')[1];
if (!pertanyaan) return sendBotMessage('Silahkan masukan pertanyaan');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/kerang?pertanyaan=' + pertanyaan + '&apikey=' + getApikey());
    sendBotMessage(res.jawaban);

} else if (cmd.startsWith('halah')) {

var text = cmd.split('halah ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/halah?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('hilih')) {

var text = cmd.split('hilih ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/hilih?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('huluh')) {

var text = cmd.split('huluh ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/huluh?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('heleh')) {

var text = cmd.split('heleh ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/heleh?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('holoh')) {

var text = cmd.split('holoh ')[1];
if (!text) return sendBotMessage('Silahkan masukan text');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/holoh?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('persen')) {

var args = cmd.split('persen ')[1];
if (!args) return sendBotMessage('Silahkan masukan type');
var [type, nama] = args.split('|');
if (!nama) return sendBotMessage('Silahkan masukan nama');
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/persen?type=' + type + '&nama=' + nama + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('iq')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/iqtest?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('dadu')) {

var res = 'Anda mendapatkan angka ' + Math.floor(Math.random() * 12) + '!';
    sendBotMessage(res);

} else if (cmd.startsWith('pantun')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/pantun?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('twister')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/twister?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('katabijak')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/katabijak?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('quotes')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/quotes?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('bucin')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/bucin?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('katailham')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/katailham?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('fml')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/fml?apikey=' + getApikey());
    sendBotMessage(res.body.result.id);

} else if (cmd.startsWith('sindiran')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/sindiran?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (cmd.startsWith('faktaunik')) {

var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/faktaunik?apikey=' + getApikey());
    sendBotMessage(res.body.result);

    } else return sendBotMessage('Perintah tidak ditemukan! Silahkan ketik ' + bold(baseCmd) + ' untuk melihat list menu.');

} catch (e) {
       console.log(e);
  sendBotMessage('Terjadi Kesalahan!');
  }
}

function getApikey() {
var res = fetchURL('GET', 'https://kuhong-api.herokuapp.com/api/getapikey');
  return res.body.free_apikey;
}

function fetchURL(method, url) {
var xhr = new XMLHttpRequest();
xhr.open(method, url, false);
xhr.send();
var body = xhr.responseText;
if (/json/.test(xhr.getAllResponseHeaders())) body = JSON.parse(xhr.responseText);
var res = {
	status: xhr.status,
	statusText: xhr.statusText,
	headers:{
		userAgent: navigator.userAgent,
		contentLength: xhr.getAllResponseHeaders().split('content-length: ')[1].split('content-type: ')[0],
		contentType: xhr.getAllResponseHeaders().split('content-type: ')[1]
	},
	url: url,
	method: method,
	body: body
  }
  return res;
}

function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)];
}

// End of botchat.js :P
