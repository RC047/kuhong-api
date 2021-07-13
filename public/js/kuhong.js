/* KUHONG.JS
 * Author: RC047
 * Description: A Simple Web Bot
 * Copyright: © 2021
 * Note: This script is free for everyone,, dont forget to give credit and the script is only work in Html or Html5!
 */

var botName = isTag('KuhongBot (Verified): ', true);
var prefix = '!';
var baseCmd = prefix + 'menu';

async function getBotMessageWithCommand(cmd) {

function send(message) {
var send = newLine + getDate() + botName + message;
document.getElementById("chat").innerHTML += send;
}

try {
if (cmd.startsWith('menu')) {

	var menu = `
${newLine}MENU BOT :${newLine}${newLine}
${prefix}get [url]${newLine}
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
${prefix}time${newLine}
${prefix}ping${newLine}
`.trim()
     send(menu);

} else if (cmd.startsWith('battery')) {

Battery.getStatus(function(status, error) {
   var result = Math.floor(status.level * 100) + '%';
   if (result == 'NaN%') result = status.level;
   if (error) result = 'Unsupported Battery';
       send(result);
   });

} else if (cmd.startsWith('time')) {

var result = getDate().split('[')[1].split(']')[0];
     send(result);

} else if (cmd.startsWith('ping')) {

var ping = 'Pong! 0.' + new Date().getMilliseconds() + 'ms';
     send(ping);

} else if (cmd.startsWith('get')) {

var url = cmd.split('get ')[1];
if (!url) return send('Silahkan masukan url');
if (!url.startsWith('http')) return send('URL TIDAK VALID');
var result = fetchURL(false, url);
    send(result);

} else if (cmd.startsWith('tinyurl')) {

var url = cmd.split('tinyurl ')[1];
if (!url) return send('Silahkan masukan url');
if (!url.startsWith('http')) return send('URL TIDAK VALID');
var json = fetchURL(false, 'https://kuhong-api.herokuapp.com/api/tinyurl?url=' + url + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('bitly')) {

var url = cmd.split('bitly ')[1];
if (!url) return send('Silahkan masukan url');
if (!url.startsWith('http')) return send('URL TIDAK VALID');
var json = fetchURL(false, 'https://kuhong-api.herokuapp.com/api/bitly?url=' + url + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('calculator')) {

var angka = cmd.split('calculator ')[1];
if (!angka) return send('Silahkan masukan angka');
var json = fetchURL(false, 'https://kuhong-api.herokuapp.com/api/calculator?angka=' + angka + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('base64')) {

var text = cmd.split('base64 ')[1];
if (!text) return send('Silahkan masukan text');
var result = btoa(text).toString();
    send(result);

} else if (cmd.startsWith('unbase64')) {

var text = cmd.split('unbase64 ')[1];
if (!text) return send('Silahkan masukan text');
var result = atob(text).toString();
    send(result);

} else if (cmd.startsWith('translate')) {

var txt = cmd.split('translate ')[1];
var [lang, text] = txt.split('|');
if (!lang) return send('Silahkan masukan kodebahasa (lang)');
if (!text) return send('Silahkan masukan text');
var json = fetchURL(false, 'https://kuhong-api.herokuapp.com/api/translate?lang=' + lang + '&text=' + text + '&apikey=' + getApikey());
var result = json.result
if (json.result == undefined) result = 'Kodebahasa tidak tersedia.';
    send(result);

} else if (cmd.startsWith('say')) {

var text = cmd.split('say ')[1];
if (!text) return send('Silahkan masukan text');
     send(text);

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

} else if (cmd.startsWith('purba')) {

var text = cmd.split('purba ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/purba?text=' + text + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('kerang')) {

var pertanyaan = cmd.split('kerang ')[1];
if (!pertanyaan) return send('Silahkan masukan pertanyaan');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/kerang?pertanyaan=' + pertanyaan + '&apikey=' + getApikey());
    send(json.jawaban);

} else if (cmd.startsWith('halah')) {

var text = cmd.split('halah ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/halah?text=' + text + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('hilih')) {

var text = cmd.split('hilih ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/hilih?text=' + text + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('huluh')) {

var text = cmd.split('huluh ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/huluh?text=' + text + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('heleh')) {

var text = cmd.split('heleh ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/heleh?text=' + text + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('holoh')) {

var text = cmd.split('holoh ')[1];
if (!text) return send('Silahkan masukan text');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/holoh?text=' + text + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('persen')) {

var args = cmd.split('persen ')[1];
var [type, nama] = args.split('|');
if (!type) return send('Silahkan masukan type');
if (!nama) return send('Silahkan masukan nama');
var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/persen?type=' + type + '&nama=' + nama + '&apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('iq')) {

var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/iqtest?apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('dadu')) {

var result = 'Anda mendapatkan angka ' + Math.floor(Math.random() * 12) + '!';
    send(result);

} else if (cmd.startsWith('pantun')) {

var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/pantun?apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('twister')) {

var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/twister?apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('katabijak')) {

var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/katabijak?apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('quotes')) {

var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/quotes?apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('bucin')) {

var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/bucin?apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('katailham')) {

var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/katailham?apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('fml')) {

var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/fml?apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('sindiran')) {

var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/sindiran?apikey=' + getApikey());
    send(json.result);

} else if (cmd.startsWith('faktaunik')) {

var json = fetchURL(true, 'https://kuhong-api.herokuapp.com/api/faktaunik?apikey=' + getApikey());
    send(json.result);

    } else return send('Perintah tidak ditemukan! Silahkan ketik ' + bold(baseCmd) + ' untuk melihat list menu.');
} catch (e) {
	console.log(e);
  send('Error!');
  }
}

// module.exports = { getBotMessageWithCommand }
