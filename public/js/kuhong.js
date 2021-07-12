// This script is only work in Html or Html5!

var bot = 'Kuhong';
var prefix = '!';
var baseCmd = '!menu';

async function getBotMessageWithCommand(cmd) {

var botName = isTag('KuhongBot (Verified): ', true);
function send(message) {
var send = newLine + getDate() + botName + message;
document.getElementById("chat").innerHTML += send;
}

if (cmd.startsWith('menu')) {

	var menu = `
${newLine}MENU BOT :${newLine}${newLine}
${prefix}menu${newLine}
${prefix}battery${newLine}
${prefix}alay [text]${newLine}
${prefix}reverse [text]${newLine}
${prefix}kerang [pertanyaan]${newLine}
${prefix}halah [text]${newLine}
${prefix}hilih [text]${newLine}
${prefix}huluh [text]${newLine}
${prefix}heleh [text]${newLine}
${prefix}holoh [text]${newLine}
${prefix}fetch [url]${newLine}
${prefix}time${newLine}
${prefix}ping${newLine}
`.trim()
     send(menu);

} else if (cmd.startsWith('battery')) {

Battery.getStatus(function(status, error) {
   var result = 'Bateraimu sekarang ' + Math.floor(status.level * 100) + '%';
   send(result);
   });

} else if (cmd.startsWith('time')) {

var date = new Date();
var result = 'Sekarang jam ' + date.getHours() + ' menit ke ' + date.getMinutes() + ' detik ke ' + date.getSeconds();
     send(result);

} else if (cmd.startsWith('ping')) {

var date = new Date();
var ping = 'Pong! 0.' + date.getMilliseconds() + 'ms';
     send(ping);

} else if (cmd.startsWith('fetch')) {

var url = cmd.split('fetch ')[1];
if (!url) return send('Silahkan masukan url');
var result = fetchURL(false, url);
    send(result);

} else if (cmd.startsWith('alay')) {

var text = cmd.split('alay ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/alay?text=' + text + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('reverse')) {

var text = cmd.split('reverse ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/reverse?text=' + text + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('kerang')) {

var pertanyaan = cmd.split('kerang ')[1];
if (!pertanyaan) return send('Silahkan masukan pertanyaan');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/kerang?pertanyaan=' + pertanyaan + '&apikey=' + getApikey());
    send(json.jawaban);

} else if (cmd.startsWith('halah')) {

var text = cmd.split('halah ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/halah?text=' + text.toLowerCase() + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('hilih')) {

var text = cmd.split('hilih ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/hilih?text=' + text.toLowerCase() + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('huluh')) {

var text = cmd.split('huluh ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/huluh?text=' + text.toLowerCase() + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('heleh')) {

var text = cmd.split('heleh ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/heleh?text=' + text.toLowerCase() + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('holoh')) {

var text = cmd.split('holoh ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/holoh?text=' + text.toLowerCase() + '&apikey=' + getApikey());
    send(json.result);
    } else send('Perintah tidak ditemukan! Silahkan ketik ' + bold(baseCmd) + ' untuk melihat list menu.');
}
