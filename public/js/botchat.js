/* BOTCHAT.JS
 * Author: RC047
 * Description: A Simple Web Bot
 * Copyright: © 2021
 * Note: This script is free for everyone,, dont forget to give credit and the script is only work in Html or Html5!
 */


var prefix = new RegExp('^[!?#/$.,]');
var baseCmd = pickRandom(['!', '?', '#', '/', '$', '.', ',']) + pickRandom(['menu', 'help', 'start']);
var previousMessage = '';
var historyMessage = '';
var codeInput = '';
var isVerified = false;
var publicChat = false;
var newLine = unescape('%3Cbr%3E');
var nama = 'Guest' + Math.floor(Math.random() * 10000);
var queryParam = new URL(window.location).searchParams;
console.log('Has Logged\n\nUserID: ' + nama.split('Guest')[1]);
document.getElementById("no-message").innerHTML += newLine + getDate() + isTag('KuhongBot (Verified): ', true) + 'Hai ' + color(nama, 'red') + '!' + newLine + 'Silahkan ketik ' + bold(baseCmd) + ' untuk memulai Bot';

if (!/Mobile|Android|Phone|IOS/i.test(navigator.userAgent)) {
    var params = '?platform=window';
    if (window.location.toString().includes('?')) params = '&platform=window';
    if (!(/platform/i.test(window.location) || queryParam.get('platform') == 'mobile')) window.location += params;
    document.getElementById("send").remove();
    document.querySelector("marquee").style.fontSize = '25px';

} else {
    var params = '?platform=mobile';
    if (window.location.toString().includes('?')) params = '&platform=mobile';
    if (!(/platform/i.test(window.location) || queryParam.get('platform') == 'window')) window.location += params;
}

window.setTimeout('changePlaceholder();', 500);
function changePlaceholder() {
document.getElementById("message").placeholder = 'Ketik pesan';
if (document.querySelector("input[type=file]").value !== '') document.getElementById("message").placeholder = 'Ketik caption';
window.setTimeout('changePlaceholder();', 500);
}

function secretKey(event) {
codeInput += event.keyCode;
if (codeInput.toString() == '826978688971657883') { // rendygans
    alert('Akun anda sekarang terverifikasi!');
    nama += color(' (Verified)', 'green');
    }
}

function enterKey(event) {
if (event.keyCode == 13) return sendMessage();
}

function usedPrefix(cmd) {
  return cmd.slice(0, 1);
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

function link(text) {
var link = text;
if (!link.startsWith('http')) link = 'https://' + text;
   return unescape('%3Ca%20href%3D%22') + link + unescape('%22%3E') + text + unescape('%3C/a%3E');
}

function getNotifications() {
var isOnline = pickRandom(['Bot sedang online.', Math.floor(Math.random() * 20) + ' orang sedang online.']);
   return document.querySelector("marquee").innerHTML = pickRandom([isOnline, 'Selamat bersenang2 :)', 'Mohon jangan untuk spam!', 'Jika Bot tidak membalas segera hubungi Owner okeh!', 'Ini hanya untuk bersenang-senang ok!', 'Mohon jangan saling membully', 'Dilarang untuk Toxic!', 'Jika web mengalami error segera hubungi owner!']);
}

function getDate() {
var date = new Date();
   return '[' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '] ';
}

function changeName() {
nama = prompt('Silahkan ganti namamu :', nama).split(':')[0];
if (nama == null || nama == '') {
    nama = 'Guest' + Math.floor(Math.random() * 10000);
    return false;
    } else if (/Kuhong|RC047/i.test(nama)) {
    alert('Nama yang anda masukan sudah dimiliki!');
    nama = 'Guest' + Math.floor(Math.random() * 10000);
    return false;
    } else if (/Verified/i.test(nama) || nama.endsWith(')')) {
    alert('Nama anda tidak diizinkan!');
    nama = 'Guest' + Math.floor(Math.random() * 10000);
    return false;
    }
alert('Nama diupdate menjadi ' + nama.split(':')[0]);
}

function getRandomName() {
var guestName = 'Guest' + Math.floor(Math.random() * 10000) + ': ';
var ranName = pickRandom(['RC047 (Verified): ', 'Aliando: ', 'Saya: ', 'Bukan Saya: ', 'Bukan Bot: ', 'Cwek: ', 'Cwok: ', 'Cowok: ', 'Cewek: ', 'Doimu: ', 'Doi: ', 'Febian: ', 'Putri: ', 'Fadil: ', 'Helin: ', 'Annisa: ', 'Cantika: ', 'Rizki: ', 'Zidan: ', 'Budi: ', 'Udin: ', 'Ibnu: ', 'Samarrr: ', 'Ular: ', 'Patrick: ', 'Patung: ', 'Hayabusa: ', 'Gatotkaca: ', 'ejenali: ', 'qaqaa: ', 'xd: ', 'Arnold: ', 'Master: ', 'Chef: ', 'Orang: ', 'Mikey: ', 'Agil: ', 'Awoakakak: ', 'Helmi: ', 'Dika: ', 'Suster: ', 'Anak: ', 'Ridwan: ', 'Razz: ', 'P cari doi: ', 'Hmm: ', 'Si Manis: ', 'Kacung: ', 'sygg: ', '86: ', 'Pajar: ', 'Ardian: ', 'Septian: ', 'Jungkook: ', 'Ryan: ', 'alboOwkdiw: ', 'Y: ', 'Reza: ', 'Kang copas: ', 'Tukang Seblak: ', 'Pikri: ', 'Manusia: ', 'Wibu-Lovers: ', 'FF Burik: ', 'Ardjoena: ', 'Selfia: ', 'Kenzo: ', 'Rafli: ', 'Dean: ', 'Felita: ', 'Wili: ', 'Putra: ', 'F: ', 'Gamers: ', 'Ipin: ', 'Botak: ', 'Hehe: ', 'Gunawan: ', 'Jin: ', 'Masha: ', 'Sadboy: ', 'Sofian: ', 'Mega: ', 'Zaky: ', 'Orang Ganteng: ', 'Wildan: ', 'Dhani: ', 'Pak Eko: ', 'Dzikri: ', 'Bapak: ', 'Pak Guru: ', 'PP Mikey: ', 'Om Deddy: ', 'Mas Botak: ', 'Tirta: ', 'Gak Ada Nama: ', 'Fio: ', 'Cakra: ', 'Rull: ', 'Kemal: ', 'Rama: ', 'Nenek: ', 'Siska: ', 'Abi: ', 'Ini Saya: ', 'RRQ Lemon: ', 'EVOS ajlh: ', 'EVOS: ', '@: ', 'User: ', 'Pengguna Google: ', 'Pengguna HP: ', 'Pengguna EpEp: ', 'Bot EpEp: ']);
   return pickRandom([guestName, ranName]);
}

function getRandomMessage(name) {
   return pickRandom([Math.floor(Math.random() * 100), previousMessage, baseCmd, baseCmd, baseCmd.slice(0, 1) + 'time', baseCmd.slice(0, 1) + 'fml', 'Gk bisa', baseCmd.slice(0, 1) + 'tolol', 'Anjasss', baseCmd.slice(0, 1) + 'kuhong', 'Kuhong', 'Kuhong', 'Kuhong', 'Kuhong', 'Kuhong', 'Kuhong', 'Kuhong', 'Ereree', 'Pansos!', 'Gaje', 'Gj', 'Press F', 'Jan sok keras!', 'Epep kuy', 'Gem burik jan sok keras', 'Buriqq', 'Kocak', 'Kocak :V', 'Woy ' + nama, 'Hai ' + bold('@' + nama) + ' :V', 'Si ' + bold('@' + nama) + ' Nyimak', 'Hai ' + bold('@' + name) + ' :V', 'Si ' + bold('@' + name) + ' Nyimak', 'Haduuuhh', 'Yaudah', 'Belom', 'Udah', 'Gak nyambung', 'Itu', 'Itu lu kali', 'Mungkin lu yg gtu', 'Jadi gini...', 'Jadi?', 'Give diamond woee', 'Anjay', 'Apa', 'Ihhhh', 'Paan', 'Apaansii', 'Ishhh', 'Mmm', '...', 'Z', 'Dibersihin_-', 'First', 'Bodoh', 'Siapa?', 'Lu?', 'Yahaha', 'Mari kita tebak angka kawan', 'Salah!', 'Lah trus apa?', 'Anj', 'Dhlah', 'Ok', 'Bot mana bot', 'Keren sih parah', 'Nahh dia bener!', 'IRI BILANG BOS', 'Bener?', 'Pacaran yuk', '--', 'Sepi kaleee', 'Njirr', 'Bjir', 'Itu bukan?', 'itu?', 'ini bukan?', 'ini?', 'Wahh', 'Pfft', 'P', 'P nyari doi super', 'P cari doi', 'P cari apikey gratis', 'Coba tanya ' + bold('@' + name.split(':')[0]) + ' aja', 'Selamat!', 'Bener tuh', 'Benar!', 'Bener?', 'Hehee', 'Iya maaf', 'Maaf', 'Mabar?', 'Kuy mabar', 'Mabar yokk', 'Bjirr', 'Tumben rame', 'Kalah ama ' + bold('@' + name.split(':')[0]), ' :v', ':v', 'Bang', 'Bang', 'Sat', 'Sat', 'Kuy', 'Yok', 'Hemm', 'Lu siapa?', 'Coba', bold('@' + nama), bold('@' + name), 'Diem aja', 'B aja', 'Woy', 'Ngopi bang?', 'F', 'Iya', 'Iy', 'Oke', 'Ok', 'G', 'Gk', 'Gak', 'Woee', 'Ajglh', 'Dicuekin lagi', 'Punten Gopud', 'Eeehh', 'Kasar bodo', 'Cuy', 'Bacot', 'Nyimak', 'Nyimak ajalh', 'Ayo', '?', '???', '!', '.', ':v', 'v:', ':V', ';v', 'Keren', 'Mari mengaduk kawan', 'Bye one?', 'Cuk', 'Sepi', 'Sepi kali', '1+1=11', 'GG', 'Anjirr', 'Parahh', 'Gileee', 'Dicuekin', 'Awoakakak', 'Gip alok', 'Knp?', 'Males', 'Enak cuk', 'Wkwwkwkwkwk', 'Bengek', 'Tes', 'Siap', 'Lahh', 'Gmn', 'Stop', 'Jan spam', 'asw', 'Asw', 'Asuu', 'Copy dulu bru paste', 'Percuma bnyk fiturnya klo pd mati', ':)', `'-'`, ':(', ':/', ':b', 'Bgi no wa', 'Yahh', 'Pliss', 'Heyy', '!!!', 'Sfx', 'WOIIIIII', 'Tayo', 'Gak lucu', 'Bot', '!help', 'Mana', 'Gak bisa', 'Lol', 'Bruhh', 'Bruhh', 'What', 'Ohh', 'O', 'Stress', 'Lu knp?', 'Mewhwhwwhee', 'Ketawa?', 'Kgk', 'Yoii', 'Skuyy', 'Bangg', 'Tante', 'Baik', 'Apa kabar', 'Kok gk bisa sihh', 'Iya iya', '--', '-', '-', 'P', 'Ppppppppppp', 'Jangan kasar!', 'Makan bang', 'Ngeteh bang', 'LOL', 'P cari guild', 'Bantu share', 'Up', 'Up', 'Apaan', 'Bego', 'Tuman!', 'Yamete kudasai', 'Anak mesum_-', 'Dasar', 'Dihh', 'Cihh', 'Wooooooo', 'Kuy nobar', 'Hayuuu', 'Bikess ihhh', 'Ada cewek gk?', 'Disini ada cewek?', 'Kwekekekekk', 'Ayam goyeng', 'Kudasai', 'Daijobu', 'Dasarr', 'Dasar Wibu_-', 'Dasar wibu', 'BAKAAA!!!', 'Urusaii!', 'Tai', 'Bgi template bang', 'Gege', 'gg gaming', 'Kok gw bisa disini', 'Kok gw bisa nyasar kesini', 'Gw dimana', 'Waww', 'UwU', 'UwU', 'UwU', 'UwU', 'UwU', 'UwU', 'UwU', ':v', ':v', ':v', 'Jan Toxic!!!', 'Jan Toxic!!!', 'Siapa?', 'Siapa coba?', 'Tebak', ':P', ':P', 'Subscribe channelku', 'Jan lupa follow ig gw', 'Follback yaa', 'Followback?', 'Okey', 'Sayang', 'Idih', 'Gay', 'Lu yang Gay!!', 'Dahlahh', 'Nanti dibantai nangis', 'Nanti dibantai nangis', 'Skrng jam brp?', 'Palsu ajg', 'Palsu', 'Yahahahahh', 'Pffftt', 'Yowess', 'Opo iki', 'Saha?', 'XD', 'XD', 'DX', ':c', ':O', ':]', ':3', ':3', ' ', 'Titik?', '?', 'Caranya?', link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), link('https://youtu.be/dQw4w9WgXcQ'), 'Stop', 'Diem woe', 'Huhh', 'Basi ajg', 'Bnyk bct', 'bcd!', 'Asuuuu']);
}

function getApikey() {
var res = fetchURL('https://kuhong-api.herokuapp.com/api/getapikey');
  return res.body.free_apikey;
}

function sendMessage() {
if (document.querySelector("input[type=file]").value !== '') return sendMediaMessage();
var pesan = document.getElementById("message").value;
if (pesan == '') return false;
if (pesan.length > 500) return alert('Pesan terlalu panjang!');
if (pesan.startsWith('http') || pesan.endsWith('com')) pesan = link(pesan);
var send = newLine + getDate() + color(nama + ': ', 'red') + pesan.replace(/_/g, unescape('%3Cvar%3E')).replace(/\*/g, unescape('%3Cstrong%3E'));
document.getElementById("no-message").innerHTML = '';
document.getElementById("chat").innerHTML += send;
setTimeout(() => getBotMessage(pesan), 1000);
previousMessage = pesan;
historyMessage += pesan + '\n';
document.getElementById("message").value = '';
}

function sendMediaMessage() {
var fr = new FileReader();
var input = document.querySelector("input[type=file]").files[0];
if (!input) return false;
var ext = input.name.slice(input.name.length - 3).toLowerCase();
    fr.onload = function() {
    var media = '';
    if (/png|jpg|jpeg|gif|webp/i.test(ext)) media = unescape('%3Cimg%20height%3D%22100%22%20src%3D%22') + fr.result + unescape('%22%3E%3C/img%3E');
    else if (/mp4|mkv|avi|webm|mov/i.test(ext)) media = unescape('%3Cvideo%20controls%20height%3D%22100%22%20src%3D%22') + fr.result + unescape('%22%3E%3C/video%3E');
    else if (/mp3|m4a|aac|wav|ogg/i.test(ext)) media = unescape('%%3Caudio%20controls%20style%3D%22width%3A100px%3Bheight%3A25px%3B%22%20src%3D%22') + fr.result + unescape('%22%3E%3C/audio%3E');
    else caption = '', media = unescape('%3Ca%20href%3D%22#download=') + input.name + unescape('%22%20onclick%3D%22downloadFile%28%27') + fr.result + unescape('%27%29%3B%22%3E%3Ci%20class%3D%22fas%20fa-file%22%3E%3C/i%3E%20') + input.name + unescape('%3C/a%3E');
    if (document.getElementById("message").value !== '') {
     	var caption = newLine + document.getElementById("message").value;
        document.getElementById("chat").innerHTML += newLine + getDate() + color(nama + ': ', 'red') + newLine + media + caption;
        document.getElementById("message").value = '';
        } else document.getElementById("chat").innerHTML += newLine + getDate() + color(nama + ': ', 'red') + newLine + media;
     }
fr.readAsDataURL(input);
document.querySelector("input[type=file]").value = '';
historyMessage += input.name + '\n';
}

function downloadFile(url) {
var iframe = document.body.appendChild(document.createElement("iframe"));
iframe.src = url;
iframe.style.display = 'none';
iframe.click();
}

function sendBotMessage(message) {
var botName = isTag('KuhongBot (Verified): ', true);
if (message.startsWith('http') || message.endsWith('com')) message = link(message);
var send = newLine + getDate() + botName + message;
document.getElementById("chat").innerHTML += send;
}

function getBotMessage(pesan) {
var botName = 'KuhongBot (Verified): ';
var taggedName = isTag(botName, true);
if (publicChat == true) {
    botName = getRandomName();
    taggedName = isTag(botName);
    }
if (botName.endsWith('(Verified): ')) taggedName = isTag(botName, true);
if (pesan.startsWith('<')) {
    var message = getRandomMessage(nama);
    var send = newLine + getDate() + taggedName + message;
    document.getElementById("chat").innerHTML += send;
    } else if (!prefix.test(pesan))  {
    var res = fetchURL('https://kuhong-api.herokuapp.com/api/simsimi?kata=' + pesan + '&apikey=' + getApikey());
    var message = res.body.result.replace(/_/g, unescape('%3Cvar%3E')).replace(/\*/g, unescape('%3Cstrong%3E')).replace(/SIMI/g, 'AKU').replace(/simi/g, 'aku').replace(/simsimi/g, 'aku').replace(/SIMSIMI/g, 'AKU');
    var send = newLine + getDate() + taggedName + message;
    document.getElementById("chat").innerHTML += send;
    } else return getBotMessageWithCommand(pesan);
}

function sendMediaBotMessage(name, url, caption) {
if (!name) return false;
var botName = isTag('KuhongBot (Verified): ', true);
var media = '';
if (/png|jpg|jpeg|gif|webp/i.test(name)) media = unescape('%3Cimg%20height%3D%22100%22%20src%3D%22') + url + unescape('%22%3E%3C/img%3E');
else if (/mp4|mkv|avi|webm|mov/i.test(name)) media = unescape('%3Cvideo%20controls%20height%3D%22100%22%20src%3D%22') + url + unescape('%22%3E%3C/video%3E');
else if (/mp3|m4a|aac|wav|ogg/i.test(name)) media = unescape('%%3Caudio%20controls%20style%3D%22width%3A30px%3Bheight%3A75px%3B%22%20src%3D%22') + fr.result + unescape('%22%3E%3C/audio%3E');
else caption = false, media = unescape('%3Ca%20href%3D%22#download=') + name + unescape('%22%20onclick%3D%22downloadFile%28%27') + url + unescape('%27%29%3B%22%3E%3Ci%20class%3D%22fas%20fa-file%22%3E%3C/i%3E%20') + name + unescape('%3C/a%3E');
if (caption) return document.getElementById("chat").innerHTML += newLine + getDate() + botName + newLine + media + newLine + caption;
document.getElementById("chat").innerHTML += newLine + getDate() + botName + newLine + media;
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
if (publicChat == false) return false;
var delaySend = Math.floor(Math.random() * 30000);
var ranName = getRandomName();
var ranMessage = getRandomMessage(nama);
var taggedName = isTag(ranName);
if (ranName.endsWith('(Verified): ')) taggedName = isTag(ranName, true);
var sendPublic = newLine + getDate() + taggedName + ranMessage;
if (document.getElementById("no-message") !== null) document.getElementById("no-message").innerHTML = '';
document.getElementById("chat").innerHTML = sendPublic;
if (prefix.test(ranMessage)) getBotMessageWithCommand(ranMessage);
setTimeout('autoSendMessage();', delaySend);
}

function clearChat() {
var clear = confirm('Anda yakin ingin membersihkan chat?');
if (clear) {
    document.getElementById("chat").innerHTML = unescape('%3Ca%20id=%22no-message%22%3E%3C/a%3E');
    document.getElementById("no-message").innerHTML = newLine + getDate() + tilt('Tidak ada pesan.');
    alert('Chat berhasil dibersihkan!');
    } else return false;
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
if (result == '') return alert('Tidak ada history.');
   alert('HISTORY :\n\n' + result);
}

function isURL(url) {
  return /http(s)?:\/\/(\w+:?\w*@)?(\S+)(:\d+)?((?<=\.)\w+)+(\/([\w#!:.?+=&%@!\-/])*)?/gi.test(url);
}

function getBotMessageWithCommand(cmd) {

var loghandler = {
    wait: 'Mohon tunggu sebentar...',
    notUrl: 'Silahkan masukan url',
    invalidLink: 'Url tidak valid',
    notText: 'Silahkan masukan text',
    notQuery: 'Silahkan masukan query',
    notLang: 'Silahkan masukan kodebahasa',
    notPass: 'Silahkan masukan password'
}

try {
var command = cmd.slice(1);
if (/^menu|help|start/i.test(command)) {

var menu = `
${newLine}MENU BOT :${newLine}${newLine}
${usedPrefix(cmd)}intro [text]${newLine}
${usedPrefix(cmd)}image [query]${newLine}
${usedPrefix(cmd)}attp [text]${newLine}
${usedPrefix(cmd)}ttp [text]${newLine}
${usedPrefix(cmd)}sticker [url]${newLine}
${usedPrefix(cmd)}toimg [url]${newLine}
${usedPrefix(cmd)}ytmp4 [url]${newLine}
${usedPrefix(cmd)}ytmp3 [url]${newLine}
${usedPrefix(cmd)}8bit [url]${newLine}
${usedPrefix(cmd)}blur [url]${newLine}
${usedPrefix(cmd)}wasted [url]${newLine}
${usedPrefix(cmd)}burning [url]${newLine}
${usedPrefix(cmd)}trigger [url]${newLine}
${usedPrefix(cmd)}tahta [text]${newLine}
${usedPrefix(cmd)}tts [lang|text]${newLine}
${usedPrefix(cmd)}exec [bash]${newLine}
${usedPrefix(cmd)}get [url]${newLine}
${usedPrefix(cmd)}post [url]${newLine}
${usedPrefix(cmd)}put [url]${newLine}
${usedPrefix(cmd)}head [url]${newLine}
${usedPrefix(cmd)}binary [text]${newLine}
${usedPrefix(cmd)}unbinary [text]${newLine}
${usedPrefix(cmd)}base64 [text]${newLine}
${usedPrefix(cmd)}unbase64 [text]${newLine}
${usedPrefix(cmd)}tinyurl [url]${newLine}
${usedPrefix(cmd)}bitly [url]${newLine}
${usedPrefix(cmd)}lock [url]${newLine}
${usedPrefix(cmd)}calculator [angka]${newLine}
${usedPrefix(cmd)}translate [lang|text]${newLine}
${usedPrefix(cmd)}persen [type|name]${newLine}
${usedPrefix(cmd)}iq${newLine}
${usedPrefix(cmd)}dadu${newLine}
${usedPrefix(cmd)}say [text]${newLine}
${usedPrefix(cmd)}alay [text]${newLine}
${usedPrefix(cmd)}purba [text]${newLine}
${usedPrefix(cmd)}reverse [text]${newLine}
${usedPrefix(cmd)}battery${newLine}
${usedPrefix(cmd)}kerang [pertanyaan]${newLine}
${usedPrefix(cmd)}halah [text]${newLine}
${usedPrefix(cmd)}hilih [text]${newLine}
${usedPrefix(cmd)}huluh [text]${newLine}
${usedPrefix(cmd)}heleh [text]${newLine}
${usedPrefix(cmd)}holoh [text]${newLine}
${usedPrefix(cmd)}twister${newLine}
${usedPrefix(cmd)}pantun${newLine}
${usedPrefix(cmd)}katabijak${newLine}
${usedPrefix(cmd)}katailham${newLine}
${usedPrefix(cmd)}bucin${newLine}
${usedPrefix(cmd)}quotes${newLine}
${usedPrefix(cmd)}sindiran${newLine}
${usedPrefix(cmd)}fml${newLine}
${usedPrefix(cmd)}faktaunik${newLine}
${usedPrefix(cmd)}ip [local/public]${newLine}
${usedPrefix(cmd)}time${newLine}
${usedPrefix(cmd)}ping${newLine}
${usedPrefix(cmd)}clear${newLine}
${usedPrefix(cmd)}owner${newLine}
`.trim();
     sendBotMessage(menu);

} else if (/^owner/i.test(command)) {

window.location = 'https://wa.me/62895337278647';

} else if (/^clear/i.test(command)) {

document.getElementById("chat").innerHTML = unescape('%3Ca%20id=%22no-message%22%3E%3C/a%3E');
document.getElementById("no-message").innerHTML = newLine + getDate() + tilt('Tidak ada pesan.');

} else if (/^battery/i.test(command)) {

navigator.getBattery().then(status => {
   var res = status.level * 100 + '%';
       sendBotMessage(res);
   }).catch(() => sendBotMessage('Tidak Terdeteksi'));

} else if (/^time/i.test(command)) {

var res = getDate().split('[')[1].split(']')[0];
    sendBotMessage(res);

} else if (/^ping/i.test(command)) {

var date = new Date();
var old = date.getMilliseconds();
var neww = date.getMilliseconds();
var ping = `${neww - old}.${date.getMilliseconds() + 'ms'}`;
    sendBotMessage(ping);

} else if (/^intro/i.test(command)) {

var text = command.split('intro ')[1];
if (!text) return sendBotMessage(loghandler.notText);
    sendBotMessage(loghandler.wait);
    delay(5000);
    sendMediaBotMessage('intro.mp4', 'https://kuhong-api.herokuapp.com/api/intromaker?text=' + text + '&apikey=' + getApikey(), 'Nih Intronyaa');

} else if (/^image/i.test(command)) {

var query = command.split('image ')[1];
if (!query) return sendBotMessage(loghandler.notQuery);
    sendBotMessage(loghandler.wait);
    delay(5000);
    sendMediaBotMessage('image.png', 'https://kuhong-api.herokuapp.com/api/gimage?q=' + query + '&apikey=' + getApikey(), 'Hasil pencarian :' + newLine + bold(query));

} else if (/^attp/i.test(command)) {

var text = command.split('attp ')[1];
if (!text) return sendBotMessage(loghandler.notText);
    sendBotMessage(loghandler.wait);
    delay(5000);
    sendMediaBotMessage('attp.webp', 'https://kuhong-api.herokuapp.com/api/attp?text=' + text + '&apikey=' + getApikey());

} else if (/^ttp/i.test(command)) {

var text = command.split('ttp ')[1];
if (!text) return sendBotMessage(loghandler.notText);
    sendBotMessage(loghandler.wait);
    delay(5000);
    sendMediaBotMessage('ttp.webp', 'https://kuhong-api.herokuapp.com/api/ttp2?text=' + text + '&apikey=' + getApikey());

} else if (/^stic?ker/i.test(command)) {

var url = command.split('ker ')[1];
if (!url) return sendBotMessage(loghandler.notUrl);
if (!isURL(url)) return sendBotMessage(loghandler.invalidLink);
    sendBotMessage(loghandler.wait);
    delay(5000);
    sendMediaBotMessage('sticker.webp', 'https://kuhong-api.herokuapp.com/api/stickerwm?url=' + url + '&packname=Sticker%20Maker&author=Kuhong%20Bot&apikey=' + getApikey());

} else if (/^toimg/i.test(command)) {

var url = command.split('toimg ')[1];
if (!url) return sendBotMessage(loghandler.notUrl);
if (!isURL(url)) return sendBotMessage(loghandler.invalidLink);
sendBotMessage(loghandler.wait);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/toimg?webp=' + url + '&apikey=' + getApikey());
    delay(5000);
    sendMediaBotMessage('toimg.png', res.body.result, 'Berhasil dikonversi ke Gambar!');

} else if (/^ytmp(3|4)/i.test(command)) {

var url = command.slice(6);
if (!url) return sendBotMessage(loghandler.notUrl);
if (!isURL(url)) return sendBotMessage(loghandler.invalidLink);
sendBotMessage(loghandler.wait);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/' + command.slice(0, 5) + '?url=' + url + '&apikey=' + getApikey());
    delay(5000);
    sendMediaBotMessage(command.startsWith('ytmp4') ? 'video.mp4' : 'audio.mp3', res.body.result.link, 'Title: ' + res.body.result.title + newLine + 'Size: ' + res.body.result.size);

} else if (/^8bit/i.test(command)) {

var url = command.split('8bit ')[1];
if (!url) return sendBotMessage(loghandler.notUrl);
if (!isURL(url)) return sendBotMessage(loghandler.invalidLink);
    sendBotMessage(loghandler.wait);
    delay(5000);
    sendMediaBotMessage('8bit.png', 'https://kuhong-api.herokuapp.com/api/8bit?img=' + url + '&apikey=' + getApikey(), 'Awokakakk Buriqq');

} else if (/^blur/i.test(command)) {

var url = command.split('blur ')[1];
if (!url) return sendBotMessage(loghandler.notUrl);
if (!isURL(url)) return sendBotMessage(loghandler.invalidLink);
    sendBotMessage(loghandler.wait);
    delay(5000);
    sendMediaBotMessage('blur.png', 'https://kuhong-api.herokuapp.com/api/blur?img=' + url + '&apikey=' + getApikey(), 'Ngebluurrr');

} else if (/^wasted/i.test(command)) {

var url = command.split('wasted ')[1];
if (!url) return sendBotMessage(loghandler.notUrl);
if (!isURL(url)) return sendBotMessage(loghandler.invalidLink);
    sendBotMessage(loghandler.wait);
    delay(5000);
    sendMediaBotMessage('wasted.png', 'https://kuhong-api.herokuapp.com/api/wasted?img=' + url + '&apikey=' + getApikey(), 'rip');

} else if (/^burning/i.test(command)) {

var url = command.split('burning ')[1];
if (!url) return sendBotMessage(loghandler.notUrl);
if (!isURL(url)) return sendBotMessage(loghandler.invalidLink);
    sendBotMessage(loghandler.wait);
    delay(5000);
    sendMediaBotMessage('burning.gif', 'https://kuhong-api.herokuapp.com/api/burning?img=' + url + '&apikey=' + getApikey(), 'Nihh');

} else if (/^trigger/i.test(command)) {

var url = command.split('trigger ')[1];
if (!url) return sendBotMessage(loghandler.notUrl);
if (!isURL(url)) return sendBotMessage(loghandler.invalidLink);
    sendBotMessage(loghandler.wait);
    delay(5000);
    sendMediaBotMessage('trigger.gif', 'https://kuhong-api.herokuapp.com/api/triggered?img=' + url + '&apikey=' + getApikey());

} else if (/^tahta/i.test(command)) {

var text = command.split('tahta ')[1];
if (!text) return sendBotMessage(loghandler.notText);
    sendBotMessage(loghandler.wait);
    delay(5000);
    sendMediaBotMessage('tahta.png', 'https://kuhong-api.herokuapp.com/api/tahta?text=' + text + '&apikey=' + getApikey(), 'Harta tahta ' + text);

} else if (/^get|post|put|head/i.test(command)) {

var url = command.split('get ')[1] || command.split('post ')[1] || command.split('head ')[1] || command.split('put ')[1];
if (!url) return sendBotMessage(loghandler.notUrl);
if (!isURL(url)) return sendBotMessage(loghandler.invalidLink);
var res = fetchURL(url, { method: ' ' + command.split(url)[0], body: null });
if (res.status !== 200) return sendBotMessage('Failed to ' + ' ' + command.split(url)[0].toUpperCase() + ' url');
    sendBotMessage(res.body.toString());

} else if (/^ip/i.test(command)) {

var type = command.split('ip ')[1];
if (!type) return sendBotMessage('Silahkan masukan type');
if (!(type == 'local' || type == 'public')) return sendBotMessage('Pilih public/local');
if (type == 'local') {
    window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var rtc = new RTCPeerConnection({ iceServers: [] });
    noop = function() {};
    rtc.createDataChannel('');
    rtc.createOffer(rtc.setLocalDescription.bind(rtc), noop);
    rtc.onicecandidate = function(ice) {
    if (ice == null) return sendBotMessage('IP tidak ditemukan');
    var res = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
    sendBotMessage(res);
    rtc.onicecandidate = noop;
	     }
    }
if (type == 'public') {
    var res = fetchURL('https://api.ipify.org');
    sendBotMessage(res.body);
    }

} else if (/^tts/i.test(command)) {

var txt = command.split('tts ')[1];
if (!txt) return sendBotMessage(loghandler.notLang);
var [lang, text] = txt.split('|');
if (!text) return sendBotMessage(loghandler.notText);
    sendBotMediaMessage('tts.mp3', 'https://kuhong-api.herokuapp.com/api/tts?lang=' + lang + '&text=' + text + '&apikey=' + getApikey(), text);

} else if (/^exec/i.test(command)) {

var bash = command.split('exec ')[1];
if (!bash) return sendBotMessage('Silahkan masukan bash');
var res = fetchURL('https://kuhong-api.herokuapp.com/api/execute?command=' + bash + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^lock/i.test(command)) {

var txt = command.split('lock ')[1];
if (!txt) return sendBotMessage(loghandler.notUrl);
if (!txt.startsWith('http')) return sendBotMessage(loghandler.invalidLink);
var [url, pass] = txt.split('|');
if (!pass) return sendBotMessage(notPass);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/lock?url=' + url + '&pass=' + pass + '&apikey=' + getApikey());
    sendBotMessage(res.body.shorted_url);

} else if (/^tinyurl/i.test(command)) {

var url = command.split('tinyurl ')[1];
if (!url) return sendBotMessage(loghandler.notUrl);
if (!isURL(url)) return sendBotMessage(loghandler.invalidLink);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/tinyurl?url=' + url + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^bitly/i.test(command)) {

var url = command.split('bitly ')[1];
if (!url) return sendBotMessage(loghandler.notUrl);
if (!isURL(url)) return sendBotMessage(loghandler.invalidLink);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/bitly?url=' + url + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^calculator/i.test(command)) {

var angka = command.split('calculator ')[1];
if (!angka) return sendBotMessage('Silahkan masukan angka');
var res = fetchURL('https://kuhong-api.herokuapp.com/api/calculator?angka=' + angka + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^binary/i.test(command)) {

var text = command.split('binary ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/binary?encode=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^unbinary/i.test(command)) {

var text = command.split('unbinary ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/binary?decode=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);	

} else if (/^base64/i.test(command)) {

var text = command.split('base64 ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = btoa(text);
    sendBotMessage(res);

} else if (/^unbase64/i.test(command)) {

var text = command.split('unbase64 ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = atob(text);
    sendBotMessage(res);

} else if (/^translate/i.test(command)) {

var args = command.split('translate ')[1];
if (!args) return sendBotMessage('Silahkan masukan kodebahasa (lang)');
var [lang, text] = args.split('|');
if (!text) return sendBotMessage(loghandler.notText);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/translate?lang=' + lang + '&text=' + text + '&apikey=' + getApikey());
var res = res.body.result;
if (res.body.result == undefined) res = 'Kodebahasa tidak tersedia.';
    sendBotMessage(res);

} else if (/^say/i.test(command)) {

var text = command.split('say ')[1];
if (!text) return sendBotMessage(loghandler.notText);
     sendBotMessage(text);

} else if (/^alay/i.test(command)) {

var text = command.split('alay ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/alay?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^reverse/i.test(command)) {

var text = command.split('reverse ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/reverse?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^purba/i.test(command)) {

var text = command.split('purba ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/purba?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^kerang/i.test(command)) {

var pertanyaan = command.split('kerang ')[1];
if (!pertanyaan) return sendBotMessage('Silahkan masukan pertanyaan');
var res = fetchURL('https://kuhong-api.herokuapp.com/api/kerang?pertanyaan=' + pertanyaan + '&apikey=' + getApikey());
    sendBotMessage(res.jawaban);

} else if (/^halah/i.test(command)) {

var text = command.split('halah ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/halah?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^hilih/i.test(command)) {

var text = command.split('hilih ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/hilih?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^huluh/i.test(command)) {

var text = command.split('huluh ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/huluh?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^heleh/i.test(command)) {

var text = command.split('heleh ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/heleh?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^holoh/i.test(command)) {

var text = command.split('holoh ')[1];
if (!text) return sendBotMessage(loghandler.notText);
var res = fetchURL('https://kuhong-api.herokuapp.com/api/holoh?text=' + text + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^persen/i.test(command)) {

var args = command.split('persen ')[1];
if (!args) return sendBotMessage('Silahkan masukan type');
var [type, nama] = args.split('|');
if (!nama) return sendBotMessage('Silahkan masukan nama');
var res = fetchURL('https://kuhong-api.herokuapp.com/api/persen?type=' + type + '&nama=' + nama + '&apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^iq/i.test(command)) {

var res = fetchURL('https://kuhong-api.herokuapp.com/api/iqtest?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^dadu/i.test(command)) {

var res = 'Anda mendapatkan angka ' + Math.floor(Math.random() * 12) + '!';
    sendBotMessage(res);

} else if (/^pantun/i.test(command)) {

var res = fetchURL('https://kuhong-api.herokuapp.com/api/pantun?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^twister/i.test(command)) {

var res = fetchURL('https://kuhong-api.herokuapp.com/api/twister?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^katabijak/i.test(command)) {

var res = fetchURL('https://kuhong-api.herokuapp.com/api/katabijak?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^quotes/i.test(command)) {

var res = fetchURL('https://kuhong-api.herokuapp.com/api/quotes?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^bucin/i.test(command)) {

var res = fetchURL('https://kuhong-api.herokuapp.com/api/bucin?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^katailham/i.test(command)) {

var res = fetchURL('https://kuhong-api.herokuapp.com/api/katailham?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^fml/i.test(command)) {

var res = fetchURL('https://kuhong-api.herokuapp.com/api/fml?apikey=' + getApikey());
    sendBotMessage(res.body.result.id);

} else if (/^sindiran/i.test(command)) {

var res = fetchURL('https://kuhong-api.herokuapp.com/api/sindiran?apikey=' + getApikey());
    sendBotMessage(res.body.result);

} else if (/^faktaunik/i.test(command)) {

var res = fetchURL('https://kuhong-api.herokuapp.com/api/faktaunik?apikey=' + getApikey());
    sendBotMessage(res.body.result);

    } else return sendBotMessage('Perintah tidak ditemukan! Silahkan ketik ' + bold(usedPrefix(cmd) + baseCmd.slice(1)) + ' untuk melihat list menu.');
} catch (e) {
     console.error(e);
  sendBotMessage('Telah terjadi error!');
  }
}

function fetchURL(url, opts = { method: 'GET', body: null }) {
var xhr = new XMLHttpRequest();
xhr.open(opts.method.toUpperCase(), url, false);
xhr.send(opts.body);
var body = xhr.responseText;
if (/json/i.test(xhr.getAllResponseHeaders())) body = JSON.parse(xhr.responseText);
var res = {
	status: xhr.status,
	statusText: xhr.statusText,
	headers:{
		userAgent: navigator.userAgent,
		contentLength: xhr.getAllResponseHeaders().split('content-length: ')[1].split('content-type: ')[0],
		contentType: xhr.getAllResponseHeaders().split('content-type: ')[1]
	},
	url: url,
	method: opts.method,
	posted_body: opts.method == 'POST' ? opts.body : null,
	body: body
  }
  return res;
}

function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)];
}
