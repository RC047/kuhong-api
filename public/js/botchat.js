// Behind the Bot Chat code :v

var historyMsg = 'F';
var newLine = unescape('%3Cbr%3E');
var publicChat = false;
var nama = 'Guest' + Math.floor(Math.random() * 10000);
document.getElementById("no-message").innerHTML = newLine + getDate() + tilt('Tidak ada pesan.');

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
nama = prompt('Silahkan ganti namamu :').split(':')[0];
if (nama == null || nama == '') {
    nama = 'Guest' + Math.floor(Math.random() * 10000);
    throw false;
    } else if (nama.startsWith('Kuhong') || nama.startsWith('kuhong') || nama.startsWith('RC047')) {
    alert('Nama yang anda masukan sudah diambil!');
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
var ranName = pickRandom(['RC047 (Verified): ', 'Aliando: ', 'Saya: ', 'Bukan Saya: ', 'Bukan Bot: ', 'Cwek: ', 'Cwok: ', 'Cowok: ', 'Cewek: ', 'Doimu: ', 'Doi: ', 'Febian: ', 'Putri: ', 'Fadil: ', 'Helin: ', 'Annisa: ', 'Cantika: ', 'Rizki: ', 'Zidan: ', 'Budi: ', 'Udin: ', 'Ibnu: ', 'Samarrr: ', 'Ular: ', 'Patrick: ', 'Patung: ', 'Hayabusa: ', 'Gatotkaca: ', 'ejenali: ', 'qaqaa: ', 'xd: ', 'Arnold: ', 'Master: ', 'Chef: ', 'Orang: ', 'Mikey: ', 'Agil: ', 'Awoakakak: ', 'Helmi: ', 'Dika: ', 'Suster: ', 'Anak: ', 'Ridwan: ', 'Razz: ', 'P cari doi: ', 'Hmm: ', 'Si Manis: ', 'Kacung: ', 'sygg: ', '86: ', 'Pajar: ', 'Ardian: ', 'Septian: ', 'Jungkook: ', 'Ryan: ', 'alboOwkdiw: ', 'Y: ', 'Reza: ', 'Kang copas: ', 'Tukang Seblak: ', 'Pikri: ', 'Manusia: ', 'Wibu-Lovers: ', 'FF Burik: ', 'Ardjoena: ', 'Selfia: ', 'Kenzo: ', 'Rafli: ', 'Dean: ', 'Felita: ', 'Wili: ', 'Putra: ', 'F: ', 'Gamers: ', 'Ipin: ', 'Botak: ', 'Hehe: ', 'Gunawan: ', 'Jin: ', 'Masha: ', 'Sadboy: ', 'Sofian: ', 'Mega: ', 'Zaky: ', 'Orang Ganteng: ', 'Wildan: ', 'Dhani: ', 'Pak Eko: ', 'Dzikri: ', 'Bapak: ', 'Pak Guru: ', 'PP Mikey: ', 'Om Deddy: ', 'Mas Botak: ', 'Tirta: ', 'Gak Ada Nama: ', 'Fio: ', 'Cakra: ', 'Rull: ', 'Kemal: ', 'Rama: ', 'Nenek: ', 'Siska: ', 'Abi: ', 'Ini Saya: ', 'RRQ Lemon: ', 'EVOS ajlh: ', 'EVOS: ', '@: ']);
   return pickRandom([guestName, ranName]);
}

function getRandomMessage(name) {
   return pickRandom([Math.floor(Math.random() * 100), historyMsg, 'Haduuuhh', 'Yaudah', 'Belom', 'Udah', 'Gak nyambung', 'Itu', 'Itu lu kali', 'Mungkin lu yg gtu', 'Jadi gini...', 'Jadi?', 'Give diamond woee', 'Anjay', 'Apa', 'Ihhhh', 'Paan', 'Apaansii', 'Ishhh', 'Mmm', '...', 'Z', 'Dibersihin_-', 'First', 'Bodoh', 'Siapa?', 'Lu?', 'Yahaha', 'Mari kita tebak angka kawan', 'Salah!', 'Lah trus apa?', 'Anj', 'Dhlah', 'Ok', 'Bot mana bot', 'Keren sih parah', 'Nahh dia bener!', 'IRI BILANG BOS', 'Bener?', 'Pacaran yuk', '-_-', 'Sepi kaleee', 'Njirr', 'Bjir', 'Itu bukan?', 'itu?', 'ini bukan?', 'ini?', 'Wahh', 'Pfft', 'P', 'P nyari doi super', 'P cari doi', 'P cari apikey gratis', 'Coba tanya ' + bold('@' + name.split(':')[0]) + ' aja', 'Selamat!', 'Bener tuh', 'Benar!', 'Bener?', 'Hehee', 'Iya maaf', 'Maaf', 'Mabar?', 'Kuy mabar', 'Mabar yokk', 'Bjirr', 'Tumben rame', 'Kalah ama ' + bold('@' + name.split(':')[0]), ' :v', ':v', 'Bang', 'Bang', 'Sat', 'Sat', 'Kuy', 'Yok', 'Hemm', 'Lu siapa?', 'Coba', bold('@' + nama), bold('@' + name), 'Diem aja', 'B aja', 'Woy', 'Ngopi bang?', 'F', 'Iya', 'Iy', 'Oke', 'Ok', 'G', 'Gk', 'Gak', 'Woee', 'Ajglh', 'Dicuekin lagi', 'Punten Gopud', 'Eeehh', 'Kasar bodo', 'Cuy', 'Bacot', 'Nyimak', 'Nyimak ajalh', 'Ayo', '?', '???', '!', '.', ':v', 'v:', ':V', ';v', 'Keren', 'Mari mengaduk kawan', 'Bye one?', 'Cuk', 'Sepi', 'Sepi kali', '1+1=11', 'GG', 'Anjirr', 'Parahh', 'Gileee', 'Dicuekin', 'Awoakakak', 'Gip alok', 'Knp?', 'Males', 'Enak cuk', 'Wkwwkwkwkwk', 'Bengek', 'Tes', 'Siap', 'Lahh', 'Gmn', 'Stop', 'Jan spam', 'asw', 'Asw', 'Asuu', 'Copy dulu bru paste', 'Percuma bnyk fiturnya klo pd mati', ':)', "'-'", ':(', ':/', ':b', 'Bgi no wa', 'Yahh', 'Pliss', 'Heyy', '!!!', 'Sfx', 'WOIIIIII', 'Tayo', 'Gak lucu', 'Bot', '!help', 'Mana', 'Gak bisa', 'Lol', 'Bruhh', 'Bruhh', 'What', 'Ohh', 'O', 'Stress', 'Lu knp?', 'Mewhwhwwhee', 'Ketawa?', 'Kgk', 'Yoii', 'Skuyy', 'Bangg', 'Tante', 'Baik', 'Apa kabar', 'Kok gk bisa sihh', 'Iya iya', '-_-', '_-', '-_', 'P', 'Ppppppppppp', 'Jangan kasar!', 'Makan bang', 'Ngeteh bang', 'LOL', 'P cari guild', 'Bantu share', 'Up', 'Up', 'Apaan', 'Bego', 'Tuman!', 'Yamete kudasai', 'Anak mesum_-', 'Dasar', 'Dihh', 'Cihh', 'Wooooooo', 'Kuy nobar', 'Hayuuu', 'Bikess ihhh', 'Ada cewek gk?', 'Disini ada cewek?', 'Kwekekekekk', 'Ayam goyeng', 'Kudasai', 'Daijobu', 'Dasarr', 'Dasar Wibu_-', 'Dasar wibu', 'BAKAAA!!!', 'Urusaii!', 'Tai', 'Bgi template bang', 'Gege', 'gg gaming', 'Kok gw bisa disini', 'Kok gw bisa nyasar kesini', 'Gw dimana', 'Waww', 'UwU', 'UwU', 'UwU', 'UwU', 'UwU', 'UwU', 'UwU', ':v', ':v', :v', 'Jan Toxic!!!', 'Jan Toxic!!!', 'Siapa?', 'Siapa coba?', 'Tebak', ':P', ':P', 'Subscribe channelku', 'Jan lupa follow ig gw', 'Follback yaa', 'Followback?', 'Okey', 'Sayang', 'Idih', 'Gay', 'Lu yang Gay!!', 'Dahlahh', 'Nanti dibantai nangis', 'Nanti dibantai nangis', 'Skrng jam brp?', 'Palsu ajg', 'Palsu', 'Yahahahahh', 'Pffftt', 'Yowess', 'Opo iki', 'Saha?', 'XD', 'XD', 'DX', ':c', ':O', ':]', ':3', ':3', ' ', 'Titik?', '?', 'Caranya?']);
}

function sendMessage() {
var pesan = document.getElementById("message").value;
if (pesan == '') throw false;
if (pesan.length > 500) return alert('Pesan terlalu panjang!');
var styledName = unescape('%3Ca%20style=%22color:red%22%3E') + nama + ': ' + unescape('%3C/a%3E');
var send = newLine + getDate() + styledName + pesan.replace(/_/g, unescape('%3Cvar%3E')).replace('*', unescape('%3Cstrong%3E')).replace('*', unescape('%3Cstrong%3E'));
document.getElementById("no-message").innerHTML = '';
document.getElementById("chat").innerHTML += send;
setTimeout(() => getBotMessage(pesan), 1000);
historyMsg = pesan;
document.getElementById("message").value = '';
}

function getApikey() {
var xhr = new XMLHttpRequest();
var url = 'https://kuhong-api.herokuapp.com/api/getapikey';
xhr.open('GET', url, false);
xhr.send();
var json = JSON.parse(xhr.responseText);
    return json.free_apikey;
}

function getBotMessage(pesan) {
var botName = 'Kuhong Bot ' + unescape('%3Ca%20style=%22color:green%22%3E') + '(Verified): ' + unescape('%3C/a%3E');
var taggedName = botName;
if (publicChat == true) taggedName = isTag(getRandomName());
if (taggedName.endsWith('(Verified): ')) taggedName = taggedName.split('(')[0] + unescape('%3Ca%20style=%22color:green%22%3E') + '(Verified): ' + unescape('%3C/a%3E');
var xhr = new XMLHttpRequest();
var url = 'https://kuhong-api.herokuapp.com/api/simsimi?kata=' + pesan + '&apikey=' + getApikey();
xhr.open('GET', url, false);
xhr.send();
var json = JSON.parse(xhr.responseText);
var message = json.result.replace(/SIMI/g, '').replace(/simi/g, '').replace(/simsimi/g, '').replace(/bot/g, 'orang');
var send = newLine + getDate() + taggedName + message;
document.getElementById("chat").innerHTML += send;
}

function setPublic(turn) {
var delaySend = Math.floor(Math.random() * 60000);
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
var delaySend = Math.floor(Math.random() * 60000);
var ranName = getRandomName();
var ranMsg = getRandomMessage(nama);
var taggedName = isTag(ranName);
if (ranName.endsWith('(Verified): ')) taggedName = ranName.split('(')[0] + unescape('%3Ca%20style=%22color:green%22%3E') + '(Verified): ' + unescape('%3C/a%3E');
var sendPublic = newLine + getDate() + taggedName + ranMsg;
document.getElementById("no-message").innerHTML = '';
document.getElementById("chat").innerHTML += sendPublic;
setTimeout('autoSendMessage();', delaySend);
}

function isTag(listName) {
   return unescape('%3Ca%20onclick=%22tagPeople(`') + listName + unescape('`)%22%3E') + listName + unescape('%3C/a%3E');
}

function tagPeople(name) {
   document.getElementById("message").value += '*@' + name.split(':')[0] + '*';
}

function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)];
}
