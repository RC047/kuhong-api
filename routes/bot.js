__path = process.cwd();

// Database :
var {
    saveToMedia,
    encryptHtml,
    encryptScript,
    escapeFull,
    getZodiac,
    alay,
    purba,
    stylizeText,
    tts,
    formatLogs,
    wait,
    simih,
    getBuffer,
    textWrap,
    h2k,
    getRandom,
    readMore,
    randomBytes,
    start,
    info,
    success,
    banner,
    close,
    pickRandom
} = require(__path + '/lib/functions.js');
var {
    generateID,
    generateApikey,
    generateCode,
    generatePassword,
    generateKey,
    generateHex,
    generateBase64,
    generateHash
} = require(__path + '/lib/generator.js');
var util = require('util');
var http = require('http');
var htmlToText = require('html-to-text');
var canvacord = require('canvacord');
var Shopee = require('shopee');
var bodyParser = require('body-parser');
var barcode = require('barcode');
var imgbb = require('imgbb-uploader');
var imageToBase64 = require('image-to-base64');
var upload = require(__path + '/lib/upload.js');
var upload2 = require(__path + '/lib/upload2.js');
var upload3 = require(__path + '/lib/upload3.js');
var translate = require('translate-google-api');
var tesseract = require('node-tesseract-ocr');
var googleIt = require('google-it');
var gis = require('g-i-s');
var axios = require('axios');
var formidable = require('express-formidable');
var FormData = require('form-data');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var qrcode = require('qrcode');
var qrdecode = require('node-qrdecode');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require('scrape-yt');
var gtts = require('node-gtts');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var instagramScraper = require('instagram-scraper');
var instagramGetUrl = require('instagram-url-direct');
var TikTokScraper = require('tiktok-scraper');
var yts = require('yt-search');
var fs = require('fs');
var msu = require('minecraft-server-util');
var options = require(__path + '/lib/options.js');
var {
    performance
} = require('perf_hooks');
var {
    photooxy,
    textpro,
    ephoto
} = require(__path + '/lib/scraper.js');
var {
    braillefy
} = require('img2braille');
var {
    toMP3,
    toPTT,
    toMP4
} = require(__path + '/lib/converter.js');
var {
    servers,
    yta,
    ytv
} = require(__path + '/lib/y2mate.js');
var {
    sticker
} = require(__path + '/lib/sticker.js');
var {
    fromBuffer
} = require('file-type');
var {
    removeBackgroundFromImageFile
} = require('remove.bg');
var {
    math,
    modes
} = require(__path + '/lib/math.js');
var {
    running
} = require(__path + '/lib/running.js');
var {
    JSDOM
} = require('jsdom');
var {
    createHash
} = require('crypto');
var {
    obfuscate
} = require('js-confuser');
var {
    spawn,
    spawnSync,
    exec,
    execSync
} = require('child_process');
var {
    color,
    bgcolor
} = require(__path + '/lib/color.js');
var {
    tahta
} = require(__path + '/lib/tahta.js');
var {
    fetchJson
} = require(__path + '/lib/fetcher.js');
var {
    Vokal,
    Base,
    Searchnabi,
    Gempa
} = require(__path + '/lib');
var loghandler = {
    wait: 'Mohon tunggu sebentar...',
    number: 'Teks harus berupa angka!',
    notNumber: 'Silahkan masukan angka',
    notLength: 'Silahkan masukan jumlah',
    notUrl: 'Silahkan masukan url',
    invalidLink: 'Url tidak valid',
    notText: 'Silahkan masukan text',
    notType: 'Silahkan masukan type',
    notServer: 'Silahkan masukan server',
    notQuery: 'Silahkan masukan query',
    notLang: 'Silahkan masukan kodebahasa',
    notPass: 'Silahkan masukan password',
    notMethod: 'Silahkan masukan method',
    notCaption: 'Silahkan masukan caption pada media yang akan dikirim'
}


var handler = async (message, user, send, { app, sender, group_name, phone }) => {

  var prefix = new RegExp('^[xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-]', 'gi')
  var date = new Date()
  var time = new Array(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()).join(':')
  var command = message.slice(1)
  var usedPrefix = message.slice(0, 1)
  var readMore = String.fromCharCode(8206).repeat(4001)

  if (/(a(su|sw|nj(([ie])ng|([ie])r)?)|me?me?k|ko?nto?l|ba?bi|fu?ck|ta(e|i)k|bangsat|g([iueo])bl([iueo])(k|g)|g([iueo])bl([iueo])(k|g)|a(nj(ing|ir)?)su|col(i|ay)|an?jg|b([ia])ngs([ia])?t|t([iuo])l([iuo])l)/i.test(message)) return send(`*「 ANTI TOXIC 」*\n\nPengirim: ${sender}\nPesan: ${message}\n\n~Biasakan Jangan Toxic!`)
  if (!prefix.test(message)) return false
  if (/^(menu|help|start|\?)/i.test(command)) {
      var menu = `
╭─「 KUHONG LITE 」
│
│• Nama: ${sender} ${group_name ? '\n│(' + group_name + ')\n' : ''}
│• Location: ${group_name ? 'Group' : 'Private'} Chat
│• Prefix: [ ${usedPrefix} ]
│• App: ${app}
│• Time: ${time}
│• Uptime: ${muptime(process.uptime())}
│• Date:
│${date}
╰────
${readMore}

╭─「 LIST MENU 」
│• ${usedPrefix}say <text>
│• ${usedPrefix}alay <text>
│• ${usedPrefix}purba <text>
│• ${usedPrefix}repeat <text|jumlah>
│• ${usedPrefix}reverse <text>
│• ${usedPrefix}base64 <text>
│• ${usedPrefix}unbase64 <text>
│• ${usedPrefix}hex <text>
│• ${usedPrefix}unhex <text>
│• ${usedPrefix}escape <text>
│• ${usedPrefix}unescape <text>
│• ${usedPrefix}calculator <angka>
│• ${usedPrefix}minecraft <server|type>
│• ${usedPrefix}tinyurl <url>
│• ${usedPrefix}lirik <lagu>
│• ${usedPrefix}chord <lagu>
│• ${usedPrefix}md4 <text>
│• ${usedPrefix}md5 <text>
│• ${usedPrefix}sha1 <text>
│• ${usedPrefix}sha256 <text>
│• ${usedPrefix}sha512 <text>
│• ${usedPrefix}halah <text>
│• ${usedPrefix}hilih <text>
│• ${usedPrefix}huluh <text>
│• ${usedPrefix}heleh <text>
│• ${usedPrefix}holoh <text>
│• ${usedPrefix}iq
│• ${usedPrefix}dadu
│• ${usedPrefix}ip
│• ${usedPrefix}ping
│• ${usedPrefix}time
╰────

${'```~Powered By RC047~```'}
`.trim()
       return send(menu)

  } else if (/^say/i.test(command)) {
  	var text = command.split('say ')[1]
      if (!text) return send(loghandler.notText)
    	return send(text)

  } else if (/^alay/i.test(command)) {
  	var text = command.split('alay ')[1]
      if (!text) return send(loghandler.notText)
    	return send(await alay(text))

  } else if (/^purba/i.test(command)) {
  	var text = command.split('purba ')[1]
      if (!text) return send(loghandler.notText)
    	return send(await purba(text))

  } else if (/^repeat/i.test(command)) {
  	var txt = command.split('repeat ')[1]
      if (!txt) return send(loghandler.notText)
      var [text, jumlah] = txt.split('|')
      if (!jumlah) return send(loghandler.notLength)
      if (isNaN(jumlah)) return send(loghandler.number)
    	return send(text.repeat(jumlah * 1))

  } else if (/^reverse/i.test(command)) {
  	var text = command.split('reverse ')[1]
      if (!text) return send(loghandler.notText)
      var result = ''
      for (var index = text.length - 1; index >= 0; index--) result += text[index]
        return send(result)

  } else if (/^base64/i.test(command)) {
  	var text = command.split('base64 ')[1]
      if (!text) return send(loghandler.notText)
    	return send(Buffer.from(text, 'UTF-8').toString('base64'))

  } else if (/^unbase64/i.test(command)) {
  	var text = command.split('unbase64 ')[1]
      if (!text) return send(loghandler.notText)
    	return send(Buffer.from(text, 'base64').toString())

  } else if (/^hex/i.test(command)) {
      var text = command.split('hex ')[1]
      if (!text) return send(loghandler.notText)
        return send(Buffer.from(text, 'UTF-8').toString('hex'))

  } else if (/^unhex/i.test(command)) {
      var text = command.split('unhex ')[1]
      if (!text) return send(loghandler.notText)
        return send(Buffer.from(text, 'hex').toString())

  } else if (/^escape/i.test(command)) {
  	var text = command.split('escape ')[1]
      if (!text) return send(loghandler.notText)
    	return send(await escapeFull(text))

  } else if (/^unescape/i.test(command)) {
  	var text = command.split('unescape ')[1]
      if (!text) return send(loghandler.notText)
    	return send(await unescape(text))

  } else if (/^time/i.test(command)) {
      return send(time)

  } else if (/^iq/i.test(command)) {
  	var iq = Math.floor(Math.random() * 1000)
    	return send('IQ Anda sebesar ' + iq + '!')

  } else if (/^dadu/i.test(command)) {
  	var dadu = Math.floor(Math.random() * 12)
    	return send('Kamu mendapatkan angka ' + dadu + '!')

  } else if (/^ping/i.test(command)) {
      var old = performance.now()
      var neww = performance.now()
        return send('Pong!\n\n' + neww - old + 'ms')

  } else if (/^ip/i.test(command)) {
  	var ip = user.ip || 'Not Located'
        return send(ip)

  } else if (/^minecraft/i.test(command)) {
  	var txt = command.split('minecraft ')[1]
      if (!txt) return send(loghandler.notServer)
      var [server, type] = txt.split('|')
      if (!type) return send(loghandler.notType)
      if (type.toLowerCase() == 'bedrock') {
      await msu.statusBedrock(server).then(res => {
      send(`*Info Server Bedrock Edition*\n\nIP/Host: ${res.host}\nPort: ${res.port}\nVersion: ${res.version}\nProtocol Version: ${res.protocolVersion}\nGame Mode: ${res.gameMode}\nOnline Player: ${res.onlinePlayers}\nMax Player: ${res.maxPlayers}\nMotd: ${res.motdLine1.descriptionText}`)})
      } else if (type.toLowerCase() == 'java') {
      await msu.status(server).then(res => {
      send(`*Info Server Java Edition*\n\nIP/Host: ${res.host}\nPort: ${res.port}\nVersion: ${res.version}\nProtocol Version: ${res.protocolVersion}\nOnline Player: ${res.onlinePlayers}\nMax Player: ${res.maxPlayers}\nMotd: ${res.description.descriptionText}`)})
      } else return send('Tipe yang tersedia adalah bedrock dan java!')

  } else if (/^calculator/i.test(command)) {
  	var angka = command.split('calculator ')[1]
      if (!angka) return send(loghandler.notNumber)
      var val = angka
        .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π|pi/gi, 'Math.PI')
        .replace(/e/gi, 'Math.E')
        .replace(/\/+/g, '/')
        .replace(/\++/g, '+')
        .replace(/-+/g, '-')
     var format = val
        .replace(/Math\.PI/g, 'π')
        .replace(/Math\.E/g, 'e')
        .replace(/\//g, '÷')
        .replace(/\*×/g, '×')
        var result = (new Function('return ' + val))()
        if (!result) result = result
          return send(result)

  } else if (/^tinyurl/i.test(command)) {
  	var url = command.split('tinyurl ')[1]
      if (!url) return send(loghandler.notUrl)
  	var result = await (await fetch('https://tinyurl.com/api-create.php?url=' + url)).text()
        return send(result)

  } else if (/^lirik/i.test(command)) {
      var text = command.split('lirik ')[1]
      if (!text) return send(loghandler.notText)
      var json = await (await fetch(`https://some-random-api.ml/lyrics?title=${text}`)).json()
        return send(json.lyrics)

  } else if (/^chord/i.test(command)) {
      var text = command.split('chord ')[1]
      if (!text) return send(loghandler.notText)
      var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/chord?q=${text}`)).json()
        return send(json.result)

  } else if (/^md(4|5)/i.test(command)) {
      var text = command.split('md4 ')[1] || command.split('md5 ')[1]
      if (!text) return send(loghandler.notText)
      var result = await createHash('md' + command.slice(2, 3)).update(text).digest('hex')
        return send(result)

  } else if (/^sha(1|256|512)/i.test(command)) {
      var text = command.split('sha1 ')[1] || command.split('sha256 ')[1] || command.split('sha512 ')[1]
      if (!text) return send(loghandler.notText)
      var result = await createHash('sha' + command.slice(3, 4)).update(text).digest('hex')
        return send(result)

  } else if (/^h([aiueo])l\1h/i.test(command)) {
      var text = command.split('h ')[1]
      if (!text) return send(loghandler.notText)
      var txt = command.slice(1, 2)
      var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, txt.toUpperCase())
      send(result)

  } else return send(`Perintah tidak ditemukan!\n\nSilahkan ketik ${usedPrefix + 'menu'} untuk melihat list menu`)
}

module.exports = { handler }

function muptime(seconds) {

var hours = Math.floor(seconds / (60 * 60));
var minutes = Math.floor(seconds % (60 * 60) / 60);
var seconds = Math.floor(seconds % 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function pad(s) {
  return (s < 10 ? '0' : '') + s;
}
