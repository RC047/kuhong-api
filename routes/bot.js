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
var bra
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


var handler = async (message, user, reply, { app, sender, group_name, phone, usedPrefix, command }) => {

  var prefix = new RegExp('^[xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-]', 'gi')
  var date = new Date()
  var time = new Array(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()).join(':')
  var watermark = '```Powered By RC047```'
  var isURL = (url) => /^http(s)?:\/\/(\w+:?\w*@)?(\S+)(:\d+)?((?<=\.)\w+)+(\/([\w#!:.?+=&%@!\-/])*)?/gi.test(url)
  if (/(a(su|sw|nj(([ie])ng|([ie])r)?)|me?me?k|ko?nto?l|ba?bi|fu?ck|ta(e|i)k|bangsat|g([iueo])bl([iueo])(k|g)|g([iueo])bl([iueo])(k|g)|a(nj(ing|ir)?)su|col(i|ay)|an?jg|b([ia])ngs([ia])?t|t([iuo])l([iuo])l)/i.test(message)) return reply(`*「 ANTI TOXIC 」*\n\nPengirim: ${sender}\nPesan: ${message}\n\n_Biasakan Jangan Toxic ya!_`)
  if (!prefix.test(message)) return false

  if (/^(menu|help|start|\?)/i.test(command)) {
      var menu = `
╭─「 KUHONG LITE 」
│
│• ${sender.startsWith('+') ? 'Phone: ' + sender : 'Name: ' + sender + group_name ? '\n│• Group: ' + group_name : ''}
│• Location: ${group_name ? 'Group' : 'Private'} Chat
│• Prefix: [ ${usedPrefix} ]
│• App: ${app}
│• Time: ${time}
│• Uptime: ${muptime(process.uptime())}
│• Date: ${date.toString().split(' (')[0]}
│(${date.split(' (')[1].split(')')[0]})
╰────
${readMore}

╭─「 LIST MENU 」
│• ${usedPrefix}say <text>
│• ${usedPrefix}alay <text>
│• ${usedPrefix}purba <text>
│• ${usedPrefix}cerpen
│• ${usedPrefix}repeat <text|jumlah>
│• ${usedPrefix}reverse <text>
│• ${usedPrefix}readmore <text>
│• ${usedPrefix}spoiler <text>
│• ${usedPrefix}brainly <query>
│• ${usedPrefix}belajar <query>
│• ${usedPrefix}simsimi <chat>
│• ${usedPrefix}s <chat>
│• ${usedPrefix}artinama <nama>
│• ${usedPrefix}artimimpi <mimpi>
│• ${usedPrefix}nomorhoki <nomor hp>
│• ${usedPrefix}tggljadian <tggl>
│• ${usedPrefix}base64 <text>
│• ${usedPrefix}unbase64 <text>
│• ${usedPrefix}hex <text>
│• ${usedPrefix}unhex <text>
│• ${usedPrefix}escape <text>
│• ${usedPrefix}unescape <text>
│• ${usedPrefix}calculator <angka>
│• ${usedPrefix}minecraft <server|type>
│• ${usedPrefix}tinyurl <url>
│• ${usedPrefix}lirik <query>
│• ${usedPrefix}chord <query>
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
│• ${usedPrefix}hidetag
│• ${usedPrefix}hidetext
│• ${usedPrefix}zodiak <nama|tgl-bln-thn>
│• ${usedPrefix}font <text>
│• ${usedPrefix}style <text>
│• ${usedPrefix}monoscope <text>
│• ${usedPrefix}quotes
│• ${usedPrefix}katabijak
│• ${usedPrefix}fml
│• ${usedPrefix}pantun
│• ${usedPrefix}bucin
│• ${usedPrefix}sindiran
│• ${usedPrefix}katailham
│• ${usedPrefix}iq
│• ${usedPrefix}dadu
│• ${usedPrefix}suit <pilihan>
│• ${usedPrefix}suitjawa <pilihan>
│• ${usedPrefix}modapk
│• ${usedPrefix}ip
│• ${usedPrefix}ping
│• ${usedPrefix}time
│• ${usedPrefix}donasi
│• ${usedPrefix}owner
╰────

${watermark}
`.trim()
       return reply(menu)

} else if (/^owner/i.test(command)) {
    return reply('https://wa.me/62895337278647?text=Halo+bang+jago!')
 
  } else if (/^say/i.test(command)) {
  	var text = command.split('say ')[1]
      if (!text) return reply(loghandler.notText)
    	return reply(text)

  } else if (/^alay/i.test(command)) {
  	var text = command.split('alay ')[1]
      if (!text) return reply(loghandler.notText)
    	return reply(await alay(text))

  } else if (/^purba/i.test(command)) {
  	var text = command.split('purba ')[1]
      if (!text) return reply(loghandler.notText)
    	return reply(await purba(text))

  } else if (/^repeat/i.test(command)) {
  	var txt = command.split('repeat ')[1]
      if (!txt) return reply(loghandler.notText)
      var [text, jumlah] = txt.split('|')
      if (!jumlah) return reply(loghandler.notLength)
      if (isNaN(jumlah)) return reply(loghandler.number)
    	return reply(text.repeat(jumlah * 1))

  } else if (/^reverse/i.test(command)) {
  	var text = command.split('reverse ')[1]
    if (!text) return reply(loghandler.notText)
    var result = ''
    for (var index = text.length - 1; index >= 0; index--) result += text[index]
        return reply(result)

  } else if (/^readmore|spoiler/i.test(command)) {
  	var text = command.split('readmore ')[1] || command.split('spoiler ')[1]
    if (!text) return reply(loghandler.notText)
    var [l, r] = text.split('|')
    if (!l) l = ''
    if (!r) r = ''
    	return reply(l + readMore + r)

  } else if (/^hide(tag|text)/i.test(command)) {
    	return reply('' + readMore + '')

  } else if (/^b(rainly|elajar)/i.test(command)) {
  	var query = command.split('brainly ')[1] || command.split('belajar ')[1]
    if (!query) return reply(loghandler.notQuery)
    var json = await (await fetch('https://recoders-area.caliph.repl.co/api/brainly?q=' + query)).json()
    var result = json.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
      return reply(result)

  } else if (/^s|si(m|msimi)i/i.test(command)) {
    var text = command.split(' ')[1]
    if (!text) return reply(loghandler.notText)
    var json = await (await fetch(`https://simsumi.herokuapp.com/api?text=${text}&lang=id`)).json()
    if (json.success == '' || json.success == undefined || /Limit/i.test(json.success)) {
        json = await (await fetch(`https://api.simsimi.net/v1/?text=${text}&lang=id`)).json()
        if (json.success == undefined) return reply('Fitur Simsimi sedang error!')
     }
     var result = json.success
       return reply(result)

  } else if (/^base64/i.test(command)) {
  	var text = command.split('base64 ')[1]
      if (!text) return reply(loghandler.notText)
    	return reply(Buffer.from(text, 'UTF-8').toString('base64'))

  } else if (/^unbase64/i.test(command)) {
  	var text = command.split('unbase64 ')[1]
    if (!text) return reply(loghandler.notText)
    	return reply(Buffer.from(text, 'base64').toString())

  } else if (/^hex/i.test(command)) {
      var text = command.split('hex ')[1]
      if (!text) return reply(loghandler.notText)
        return reply(Buffer.from(text, 'UTF-8').toString('hex'))

  } else if (/^unhex/i.test(command)) {
      var text = command.split('unhex ')[1]
      if (!text) return reply(loghandler.notText)
        return reply(Buffer.from(text, 'hex').toString())

  } else if (/^escape/i.test(command)) {
  	var text = command.split('escape ')[1]
      if (!text) return reply(loghandler.notText)
    	return reply(await escapeFull(text))

  } else if (/^unescape/i.test(command)) {
  	var text = command.split('unescape ')[1]
      if (!text) return reply(loghandler.notText)
    	return reply(await unescape(text))

  } else if (/^time/i.test(command)) {
      return reply(time)

  } else if (/^iq/i.test(command)) {
  	var iq = Math.floor(Math.random() * 1000)
    	return reply('IQ Anda sebesar ' + iq + '!')

  } else if (/^dadu/i.test(command)) {
  	var dadu = Math.floor(Math.random() * 12)
    	return reply('Kamu mendapatkan angka ' + dadu + '!')

  } else if (/^ping/i.test(command)) {
      var old = performance.now()
      var neww = performance.now()
      if (isNaN(old) || isNaN(neww)) return reply(neww + old)
        return reply('Pong!\n\n' + neww - old + 'ms')

  } else if (/^ip/i.test(command)) {
  	var ip = user.ip || 'tidak ditemukan!'
        return reply('Alamat IP kamu adalah: ' + ip)

  } else if (/^minecraft/i.test(command)) {
  	var txt = command.split('minecraft ')[1]
      if (!txt) return reply(loghandler.notServer)
      var [server, type] = txt.split('|')
      if (!type) return reply(loghandler.notType)
      if (type.toLowerCase() == 'bedrock') {
      await msu.statusBedrock(server).then(res => {
      reply(`*Info Server Bedrock Edition*\n\nIP/Host: ${res.host}\nPort: ${res.port}\nVersion: ${res.version}\nProtocol Version: ${res.protocolVersion}\nGame Mode: ${res.gameMode}\nOnline Player: ${res.onlinePlayers}\nMax Player: ${res.maxPlayers}\nMotd: ${res.motdLine1.descriptionText}`)})
      } else if (type.toLowerCase() == 'java') {
      await msu.status(server).then(res => {
      reply(`*Info Server Java Edition*\n\nIP/Host: ${res.host}\nPort: ${res.port}\nVersion: ${res.version}\nProtocol Version: ${res.protocolVersion}\nOnline Player: ${res.onlinePlayers}\nMax Player: ${res.maxPlayers}\nMotd: ${res.description.descriptionText}`)})
      } else return reply('Tipe yang tersedia adalah bedrock dan java!')

  } else if (/^calculator/i.test(command)) {
  	var angka = command.split('calculator ')[1]
      if (!angka) return reply(loghandler.notNumber)
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
          return reply('Hasil: ' + result)

  } else if (/^cerpen/i.test(command)) {
        var cerita = ['cerpen-horor-hantu', 'cerpen-bahasa-inggris', 'cerpen-cinta', 'cerpen-cinta-dalam-hati-terpendam', 'cerpen-cinta-islami']
        var category = cerita[Math.floor(Math.random() * cerita.length)]
        var page = Math.floor(Math.random() * 30)
        var url = 'http://cerpenmu.com/category/' + category + '/page/' + page

        request.get({
               headers: {
                   'User-Agent':'Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0'
               },
               url: url,
        }, function(error, response, body) {
            var $ = cheerio.load(body)
            var cerpen = []
            $('article[class="post"] > h2 > a').each(function (i, e) {
            cerpen[i] = $(this).attr('href')
            })
            var nomor = Math.floor(Math.random() * 10)
            var url = cerpen[nomor]
            request.get({
                    headers: {
                        'content-type' : 'application/x-www-form-urlencoded'
                        },
                    url: url,
             }, function(error, response, body) {
                     var $ = cheerio.load(body);
                     var h = $.html().replace(/<[^>]*>?/gm, '');
                     var result = htmlToText.fromString($.html(), {
                                 noLinkBrackets: true,
                                 ignoreHref: true,
                                 ignoreImage:true
                      })
               reply(result.split('Share ke Facebook Twitter Google+')[0].split('Kontak Kami')[1])
           })
       })

  } else if (/^font|style/i.test(command)) {
  	  var text = command.split('font ')[1] || command.split('style ')[1]
      if (!text) return reply(loghandler.notText)
      var result = Object.entries(await stylizeText(text)).map(([name, value]) => `*${name}*\n${value}`).join`\n\n`
        return reply(result)

  } else if (/^monoscope/i.test(command)) {
      var text = command.split('monoscope ')[1]
      if (!text) return reply(loghandler.notText)
        return reply('```' + text + '```')

  } else if (/^tinyurl/i.test(command)) {
  	  var url = command.split('tinyurl ')[1]
      if (!url) return reply(loghandler.notUrl)
      if (!isURL(url)) return reply(loghandler.invalidLink)
  	  var result = await (await fetch('https://tinyurl.com/api-create.php?url=' + url)).text()
        return reply(result)

  } else if (/^lirik/i.test(command)) {
      var query = command.split('lirik ')[1]
      if (!query) return reply(loghandler.notQuery)
      var json = await (await fetch(`https://some-random-api.ml/lyrics?title=${query}`)).json()
        return reply(json.lyrics)

  } else if (/^chord/i.test(command)) {
      var query = command.split('chord ')[1]
      if (!query) return reply(loghandler.notQuery)
      var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/chord?q=${query}`)).json()
        return reply(json.result)

  } else if (/^md(4|5)/i.test(command)) {
      var text = command.split('md4 ')[1] || command.split('md5 ')[1]
      if (!text) return reply(loghandler.notText)
      var result = await createHash('md' + command.slice(2, 3)).update(text).digest('hex')
        return reply(result)

  } else if (/^sha(1|256|512)/i.test(command)) {
      var text = command.split('sha1 ')[1] || command.split('sha256 ')[1] || command.split('sha512 ')[1]
      if (!text) return reply(loghandler.notText)
      var result = await createHash('sha' + command.slice(3, 4)).update(text).digest('hex')
        return reply(result)

  } else if (/^h([aiueo])l\1h/i.test(command)) {
      var text = command.split('h ')[1]
      if (!text) return reply(loghandler.notText)
      var txt = command.slice(1, 2)
      var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, txt.toUpperCase())
        return reply(result)

  } else if (/^zodia(c|k)/i.test(command)) {
      var txt = command.split('zodiak ')[1] || command.split('zodiac ')[1]
      if (!txt) return reply(loghandler.notName)
      var [name, dates] = txt.split('|')
      if (!date) return reply(loghandler.notDate)
      if (!date.includes('-')) return reply('Gunakan "-" disetiap tanggalnya\n\nContoh: 27-10-04')
      var tggl = dates.split('-')[0]
      var bln = dates.split('-')[1]
      var thn = dates.split('-')[2]
      var date = new Date(tggl, bln, thn)
      if (date == 'Invalid Date') throw date
      var d = new Date()
      var [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
      var birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
      var zodiac = getZodiac(birth[1], birth[2])
      var ageD = new Date(d - date)
      var age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
      var birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
      var umur = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke ${age}!` : age
      var result = `Nama: ${nama}\nLahir: ${birth.join('-')}\nUltah: ${birthday.join('-')}\nUsia: ${umur}\nZodiak: ${zodiac}`
        return reply(result)

  } else if (/^suit|suitjawa/i.test(command)) {
      var you = command.split('suit ')[1] || command.split('suitjawa ')[1]
      var pilihan = 'gunting, kertas, batu'
      if (/jawa/i.test(command)) pilihan = 'orang, semut, gajah'
      if (!you) return reply('Silahkan masukan pilihannya :\n\n' + pilihan)
      var bot = Math.random();
      if (bot < 0.34) bot = /gunting/i.test(pilihan) ? 'batu' : 'orang'
      else if (bot > 0.34 && bot < 0.67) bot = /gunting/i.test(pilihan) ? 'gunting' : 'semut'
      else bot = /gunting/i.test(pilihan) ? 'kertas' : 'gajah'

      var hasil;
      if (you.toLowerCase() == bot) {
          hasil = `Seri!\nKamu : ${you.toLowerCase()}\nBot : ${bot}`;
      } else if (you.toLowerCase() == /gunting/i.test(pilihan) ? 'batu' : 'orang') {
          if (bot == /gunting/i.test(pilihan) ? 'gunting' : 'semut') hasil = `Kamu Menang!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`;
          else hasil = `Kamu Kalah!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`;
      } else if (you.toLowerCase() == /gunting/i.test(pilihan) ? 'gunting' : 'semut') {
          if (bot == /gunting/i.test(pilihan) ? 'kertas' : 'gajah') hasil = `Kamu Menang!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`;
          else hasil = `Kamu Kalah!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`;
      } else if (you.toLowerCase() == /gunting/i.test(pilihan) ? 'kertas' : 'gajah') {
          if (bot == /gunting/i.test(pilihan) ? 'batu' : 'orang') hasil = `Kamu Menang!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`;
          else hasil = `Kamu Kalah!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`;
      } else hasil = 'Pilihan yang tersedia : ' + pilihan;
        return reply(hasil)

  } else if (/^modapk|apkdownload/i.test(command)) {
      var str = `
╭─「 MOD APK 」
│
│• Minecraft (Original)
│https://www.mediafire.com/file/z9vqj628w494sso/Minecraft_1.17_By_RC047.apk/file
│• Geometry Dash (MOD)
│http://www.mediafire.com/file/thnoi1wpa5ex2wn/Geometry_Dash_%2528MOD%2529.apk/file
│• KineMaster (PRO)
│https://www.mediafire.com/download/eshb8rra8eg5xa3
│• KineMaster Diamond (MOD)
│https://www.mediafire.com/download/9p8wsnwupnq0lun
│• KineMaster Ruby (MOD)
│https://www.mediafire.com/download/6b2wa08cmtsr8x8
│• Adobe Photoshop (Original)
│https://www.mediafire.com/download/whfh12tj4zjpedp
│• Alight Motion (PRO)
│http://www.mediafire.com/file/tpxj2grwf8imp6i/Alight_Motion_V.3.1.4_%2528Mod%2529_By_bilqis_neha.apk/file
│• Avee Player (PRO)
│https://www.mediafire.com/download/5vkde8d1gcyk33y
│• Pixellab (PRO)
│https://www.mediafire.com/download/kxj0xyvrkc8w6h0
│• Inshot (PRO)
│https://www.mediafire.com/download/7qcmrfdy2o1ynxf
│• WavePad (PRO)
│https://www.mediafire.com/download/oif50qb8ltdoe2x
│• Vimage (PRO)
│https://www.mediafire.com/download/egjumopr2wl89tl
│• Zeotropic (PRO)
│https://www.mediafire.com/download/tw9zwj2km2tjsnh
│• 90s (PRO)
│https://www.mediafire.com/download/0y2bba69f6wakuh
╰────

╭─「 TEMPLATE 」
│
│• Template MineImator
│http://www.mediafire.com/file/cxa8io0j0i3a0x4/Mine-Imator_%2528Template_Pika_Gamer%2529_Edited.zip/file
│• 50 Template Avee Player 1
│https://realsht.mobi/teCTj
│• 50 Template Avee Player 2
│https://realsht.mobi/hhSMc
│• Template Quotes Rainbow
│https://realsht.mobi/LbmVw
│• Template Quotes 1
│https://realsht.mobi/GZuvl
│• Template Quotes 2
│https://realsht.mobi/lFLqm
│• Template Quotes 3
│https://realsht.mobi/prMyC
│• Template Quotes 4
│https://realsht.mobi/FyGha
│• Template Quotes 5
│https://realsht.mobi/LdpNd
│• Template Quotes 6
│https://realsht.mobi/BdlQe
│• Template Quotes 7
│https://realsht.mobi/fdZCs
│• Template Quotes 8
│https://realsht.mobi/YkqIk
│• Template Quotes 9
│https://realsht.mobi/BcKdr
│• Template Quotes 10
│https://realsht.mobi/MaZno
│• Template Mega Colab
│https://realsht.mobi/JinWs
│• Template Colab 1
│https://realsht.mobi/bocSM
│• Template Colab 2
│https://realsht.mobi/eJwLd
│• Template Colab 3
│https://realsht.mobi/tGMxp
│• Template Colab 4
│https://realsht.mobi/oQtWo
│• Template Colab 5
│https://realsht.mobi/rbvWQ
│• Template Wajah Orang
│https://realsht.mobi/tGMxp
│• Template Kacamata
│https://realsht.mobi/MpoKs
│• Template Unix 1
│https://realsht.mobi/dfToI
│• Template Unix 2
│https://realsht.mobi/hRMsq
│• Template Partikel
│https://realsht.mobi/wOMlc
│• Template Pistol
│https://realsht.mobi/exXCy
│• Template Solo
│https://realsht.mobi/MvYbm
╰────

╭─「 FONT 」
│
│• Kumpulan Font Untuk Quotes
│https://realsht.mobi/JkmXx
│• 800 Font Picsay/Pixelab
│https://realsht.mobi/brKhI
│• 400 Font Picsay/Pixelab
│https://realsht.mobi/gBhyt
│• 200 Font Picsay/Pixelab
│https://realsht.mobi/iJQbj
│• 100 Font Picsay/Pixelab
│https://realsht.mobi/hrTdE
╰────
`.trim()
    return reply(str)

  } else if (/^dona(te|si)/i.test(command)) {
    var str = `
╭─「 DONATION 」
│
│• SAWERIA :
│https://saweria.co/donate/RC047
│• OVO [+62895337278647]
│• TRI [+62895337278647]
│• DANA [+62895337278647]
│• GOPAY [+62895337278647]
╰────
`.trim()
    return reply(str)

  } else return reply(`Perintah tidak ditemukan!\n\nSilahkan ketik ${usedPrefix + 'menu'} untuk melihat list menu`)
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
