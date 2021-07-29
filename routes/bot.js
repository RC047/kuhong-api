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
var tiktok = require('tiktok-scraper');
var yts = require('yt-search');
var fs = require('fs');
var msu = require('minecraft-server-util');
var osu = require('node-os-utils');
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
    notDate: 'Silahkan masukan tanggal',
    notName: 'Silahkan masukan nama',
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


var handler = async (user, reply, { appPackageName, messengerPackageName, sender, message, isGroup, ruleId, usedPrefix, command }) => {

  var prefix = new RegExp('^[xzXZ/¡!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?¿&.\\-]', 'gi')
  var date = new Date()
  var time = new Array(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()).join(':')
  var watermark = '```Powered By RC047```'
  var isURL = (url) => /^http(s)?:\/\/(\w+:?\w*@)?(\S+)(:\d+)?((?<=\.)\w+)+(\/([\w#!:.?+=&%@!\-/])*)?/gi.test(url)
  var isGroupLink = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/gi
  var isToxic = /(a(s[uw]|nj(([ie])ng|([ie])r)?)|me?me?k|ko?nto?l|ba?bi|fu?ck|ta(e|i)k|bangsat|g([iueo])bl([iueo])(k|g)|g([iueo])bl([iueo])(k|g)|a(nj(ing|ir)?)su|col(i|ay)|an?jg|b([ia])ngs([ia])?t|t([iuo])l([iuo])l)/gi

try {
  if (isGroup && isGroupLink.test(message)) {
      var matched = message.match(isGroupLink).join('\n')
      return reply(`*「 ANTI LINK 」*\n\nDari: ${sender}\nLink:\n${matched}\nPesan:\n${message}\n\n_Sebelum share link mohon izin keadmin dulu ya!_`)
  } else if (isToxic.test(message)) {
      var matched = message.match(isToxic).join(', ')
      return reply(`*「 ANTI TOXIC 」*\n\nDari: ${sender}\nKata Kasar: ${matched}\nPesan:\n${message}\n\n_Biasakan Jangan Toxic ya!_`)
  } else if (/kuhong/gi.test(message)) {
      return reply('Yaa Aku Disini??\n\nIngin Memulai Bot? Ketik !help atau !menu yaa ;)')
  } else if (message.toLowerCase() == 'pesan uji') {
      return reply('Pesan dari server diterima!')
  } else if (!prefix.test(message)) return false

  if (/^menu|help|start/i.test(command)) {
      var replies = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/botreply')).json().catch(() => reply('Server Bot sedang Error!'))
      var d = new Date(new Date + 3600000)
      var weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
      var islamic = Intl.DateTimeFormat('id-TN-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' }).format(d)
      var menu = `
╭─「 KUHONG BOT 」
│
│• ${isGroup ? 'Group: ' + sender : 'Name: ' + sender}
│• Location: ${isGroup ? 'Group' : 'Private'} Chat
│• Prefix: [ ${usedPrefix} ]
│• Time: ${time}
│• Uptime: ${muptime(process.uptime())}
│• Total Reply: ${replies.value} message
│• Weton: ${weton}
│• Islamic: ${islamic}
│• Date: ${date.toString().split(' (')[0]}
│(${date.toString().split(' (')[1].split(')')[0]})
╰────

${readMore}
╭─「 LIST MENU 」
│
│• ${usedPrefix}ytmp4 <url>
│• ${usedPrefix}ytmp3 <url>
│• ${usedPrefix}tiktok <url>
│• ${usedPrefix}tiktokstalk <url>
│• ${usedPrefix}say <text>
│• ${usedPrefix}alay <text>
│• ${usedPrefix}purba <text>
│• ${usedPrefix}kerang <pertanyaan>
│• ${usedPrefix}repeat <text|jumlah>
│• ${usedPrefix}reverse <text>
│• ${usedPrefix}readmore <text>
│• ${usedPrefix}spoiler <text>
│• ${usedPrefix}nulis <text>
│• ${usedPrefix}google <query>
│• ${usedPrefix}ytsearch <query>
│• ${usedPrefix}play <query>
│• ${usedPrefix}github <query>
│• ${usedPrefix}brainly <query>
│• ${usedPrefix}belajar <query>
│• ${usedPrefix}simsimi <chat>
│• ${usedPrefix}artinama <nama>
│• ${usedPrefix}artimimpi <mimpi>
│• ${usedPrefix}cekjodoh <nama|pasangan>
│• ${usedPrefix}nomorhoki <nomor hp>
│• ${usedPrefix}tggljadian <tggl>
│• ${usedPrefix}zodiak <nama|tgl-bln-thn>
│• ${usedPrefix}spamcall <nomor hp>
│• ${usedPrefix}spamsms <nomor hp>
│• ${usedPrefix}binary <text>
│• ${usedPrefix}base64 <text>
│• ${usedPrefix}unbase64 <text>
│• ${usedPrefix}hex <text>
│• ${usedPrefix}unhex <text>
│• ${usedPrefix}escape <text>
│• ${usedPrefix}unescape <text>
│• ${usedPrefix}translate <text|lang>
│• ${usedPrefix}calculator <angka>
│• ${usedPrefix}minecraft <server|type>
│• ${usedPrefix}tinyurl <url>
│• ${usedPrefix}lirik <query>
│• ${usedPrefix}chord <query>
│• ${usedPrefix}infobmkg
│• ${usedPrefix}infocovid
│• ${usedPrefix}resep <query>
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
│• ${usedPrefix}font <text>
│• ${usedPrefix}style <text>
│• ${usedPrefix}monoscope <text>
│• ${usedPrefix}quran
│• ${usedPrefix}cerpen
│• ${usedPrefix}quotes
│• ${usedPrefix}katabijak
│• ${usedPrefix}faktaunik
│• ${usedPrefix}fml
│• ${usedPrefix}pantun
│• ${usedPrefix}puisi
│• ${usedPrefix}bucin
│• ${usedPrefix}gombal
│• ${usedPrefix}sindiran
│• ${usedPrefix}katailham
│• ${usedPrefix}bacot
│• ${usedPrefix}iq
│• ${usedPrefix}dadu
│• ${usedPrefix}slots
│• ${usedPrefix}truth
│• ${usedPrefix}dare
│• ${usedPrefix}suit <pilihan>
│• ${usedPrefix}suitjawa <pilihan>
│• ${usedPrefix}exec
│• ${usedPrefix}eval
│• ${usedPrefix}modapk
│• ${usedPrefix}time
│• ${usedPrefix}status
│• ${usedPrefix}donasi
│• ${usedPrefix}owner
╰────


${watermark}
`.trim()
       return reply(menu)

  } else if (/^owner$/i.test(command)) {
    return reply('Ngapain Chat ke Owner? inikan no Ownernya_-', 'Yaudah Klik aja nihh\nhttps://wa.me/62895337278647?text=Halo+bang+jago!')

  } else if (/^status$/i.test(command)) {
  	var ip = await (await fetch('https://kuhong-api.herokuapp.com/ip')).json()
      var NotDetect = 'Tidak Terdeteksi',
      cpu = osu.cpu,
      cpuCore = cpu.count(),
      drive = osu.drive,
      mem = osu.mem,
      netstat = osu.netstat,
      platform = osu.os.platform(),
      cpuModel = cpu.model(),
      cpuPer
      var p1 = cpu.usage().then(cpuPercentage => cpuPer = cpuPercentage).catch(() => cpuPer = NotDetect)
      var driveTotal, driveUsed, drivePer
      var p2 = drive.info().then(info => { driveTotal = (info.totalGb + ' GB'), driveUsed = info.usedGb, drivePer = (info.usedPercentage + '%') }).catch(() => driveTotal = NotDetect,  driveUsed = NotDetect, drivePer = NotDetect)
      var ramTotal, ramUsed
      var p3 = mem.info().then(info => { ramTotal = info.totalMemMb, ramUsed = info.usedMemMb }).catch(() => ramTotal = NotDetect, ramUsed = NotDetect)
      var netsIn, netsOut
      var p4 = netstat.inOut().then(info => { netsIn = (info.total.inputMb + ' MB'), netsOut = (info.total.outputMb + ' MB') }).catch(() => netsIn = NotDetect, netsOut = NotDetect)
      await Promise.all([p1, p2, p3, p4])
      var result = `
╭─「 STATUS BOT 」
│
│• Nama: Kuhong Bot
│• Device: ${user.get('User-Agent').split('(')[1].split(')')[0].replace(/[;]/g, '')}
│• Platform: ${platform.slice(0, 1).toUpperCase() + platform.slice(1)}
│• Battery: %battery%%
│• Ram: ${ramUsed} MB / ${ramTotal + ' MB'} (${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '% Used' : NotDetect})
│• Storage: ${driveUsed} GB / ${driveTotal} (${drivePer} Used)
│• CPU: ${cpuModel} - ${cpuCore} Core (${cpuPer}% Used)
│• Incoming Network: ${netsIn}
│• Outgoing Network: ${netsOut}
│• Application: Node JavaScript
│• Port: ${process.env.PORT || 8000 || 5000 || 3000}
│• IP: ${ip.result}
│• Ping:
│${(performance.now() - performance.now()).toString().replace(/[-]/g, '')}ms
╰────
`.trim()
      return reply(result)

  } else if (/^exec|eval/i.test(command)) {
  	var text = command.split('exec ')[1] || command.split('eval ')[1]
      if (!text) return reply(loghandler.notText)
      if (/^exec/i.test(command)) {
      	await exec(text, (stdout, stderr, err) => {
      	if (err) return reply(err.message)
          else if (stdout) return reply(stdout)
          else if (stderr) return reply(stderr)
          })
       } else return reply(eval(text))

  } else if (/^ytmp(3|4)/i.test(command)) {
  	var url = command.split('ytmp3 ')[1] || command.split('ytmp4 ')[1]
      if (!url) return reply(loghandler.notUrl)
      if (!isURL(url)) return reply(loghandler.invalidLink)
      var server = (url || 'id4').toLowerCase()
      var {
        dl_link,
        thumb,
        title,
        filesize,
        filesizeF
      } = /3/i.test(command) ? await yta(url, servers.includes(server) ? server : 'id4') : await ytv(url, servers.includes(server) ? server : 'id4')
      var result = `Title: ${title}\nSize: ${filesizeF}\nThumb: ${thumb}\nDownload:\n${dl_link}`
    	return reply(result)

  } else if (/^tiktok/i.test(command)) {
  	var url = command.split('tiktok ')[1]
      if (!url) return reply(loghandler.notUrl)
      if (!isURL(url)) return reply(loghandler.invalidLink)
      await tiktok.getVideoMeta(url).then(res => {
      var result = `Title: ${res.collector[0].text}\nID: ${res.collector[0].id}\nUploader: ${res.collector[0].authorMeta.nickName}\nThumb: ${res.collector[0].imageUrl}\nDownload:\n${res.collector[0].videoUrlNoWaterMark !== '' ? res.collector[0].videoUrlNoWaterMark : res.collector[0].videoUrl}`
        return reply(result)
      }).catch(() => reply('Video tidak dapat ditemukan!'))

  } else if (/^tiktokstalk/i.test(command)) {
  	var name = command.split('tiktokstalk ')[1]
      if (!name) return reply(loghandler.notName)
      await tiktok.getUserProfileInfo(name).then(res => {
      var result = `Nickname: ${res.user.nickname}\nUser ID: ${res.user.id}\nAvatar: ${res.user.avatarLarger}\nSignature: ${res.user.signature}\nFollowers: ${res.stats.followerCount}\nFollowing: ${res.stats.followingCount}\nVideos: ${res.stats.videoCount}\nVerified: ${res.user.verified}`
        return reply(result)
      }).catch(() => reply('Video tidak dapat ditemukan!'))

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

  } else if (/^simi|simsimi/i.test(command)) {
    var text = command.split('simi ')[1]
    if (!text) return reply(loghandler.notText)
    var tmp = await (await fetch(`https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/api/simsimi.json`)).json()
    var ranMessage = tmp[Math.floor(Math.random() * tmp.length)].result
    var res = await fetch(`https://simsumi.herokuapp.com/api?text=${text}&lang=id`)
    if (!/json/i.test(res.headers.get('content-type'))) {
	res = await fetch(`https://api.simsimi.net/v1/?text=${text}&lang=id`)
	if (!/json/i.test(res.headers.get('content-type'))) return reply(ranMessage)
    }
    var json = await res.json()
    if (json.success == '' || json.success == undefined || /Limit/i.test(json.success)) return reply(ranMessage)
      return reply(json.success)

  } else if (/^binary/i.test(command)) {
    var text = command.split('binary ')[1]
    if (!text) return reply(loghandler.notText)
    var result = ''
    for (var i = 0; i < text.length; i++) result += text[i].charCodeAt(0).toString(2)
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

  } else if (/^time$/i.test(command)) {
      return reply(time)

  } else if (/^iq$/i.test(command)) {
  	var iq = Math.floor(Math.random() * 1000)
    	return reply('IQ Anda sebesar ' + iq + '!')

  } else if (/^dadu$/i.test(command)) {
  	var dadu = Math.floor(Math.random() * 12)
    	return reply('Kamu mendapatkan angka ' + dadu + '!')

  } else if (/^quran$/i.test(command)) {
  	var json = await (await fetch(`https://api.banghasan.com/quran/format/json/acak`)).json()
      var ket = json.acak.id.ayat.replace(/{(.*?)}/gi, '')
      var result = `[${ket}] ${json.acak.ar.teks}\n\n${json.acak.id.teks}\n\n(QS.${json.surat.nama}, Ayat ${ket})`
        return reply(result)

  } else if (/^minecraft/i.test(command)) {
  	var txt = command.split('minecraft ')[1]
      if (!txt) return reply(loghandler.notServer)
      var [server, type] = txt.split('|')
      if (!type) return reply(loghandler.notType)
      if (/bedroc?k/i.test(command)) {
      await msu.statusBedrock(server).then(res => {
      reply(`IP/Host: ${res.host}\nPort: ${res.port}\nVersion: ${res.version}\nProtocol Version: ${res.protocolVersion}\nGame Mode: ${res.gameMode}\nOnline Player: ${res.onlinePlayers}\nMax Player: ${res.maxPlayers}\nMotd: ${res.motdLine1.descriptionText}`)})
      } else if (/java/i.test(type)) {
      await msu.status(server).then(res => {
      reply(`IP/Host: ${res.host}\nPort: ${res.port}\nVersion: ${res.version}\nProtocol Version: ${res.protocolVersion}\nOnline Player: ${res.onlinePlayers}\nMax Player: ${res.maxPlayers}\nMotd: ${res.description.descriptionText}`)})
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

  } else if (/^kerang|(?<=\S+)\?/gi/i.test(command)) {
        var text = command.split('kerang ')[1] || command.split('?')[0]
        if (!text) return reply(loghandler.notText)
        var ranName = pickRandom(['Aliando', 'Saya', 'Bukan Saya', 'Bukan Bot', 'Cwek', 'Cwok', 'Cowok', 'Cewek', 'Doimu', 'Doi', 'Febian', 'Putri', 'Fadil', 'Helin', 'Annisa', 'Cantika', 'Rizki', 'Zidan', 'Budi', 'Udin', 'Ibnu', 'Samarrr', 'Ular', 'Patrick', 'Patung', 'Hayabusa', 'Gatotkaca', 'ejenali', 'qaqaa', 'xd', 'Arnold', 'Master', 'Chef', 'Orang', 'Mikey', 'Agil', 'Awoakakak', 'Helmi', 'Dika', 'Suster', 'Anak', 'Ridwan', 'Razz', 'P cari doi', 'Hmm', 'Si Manis', 'Kacung', 'sygg', '86', 'Pajar', 'Ardian', 'Septian', 'Jungkook', 'Ryan', 'alboOwkdiw', 'Y', 'Reza', 'Kang copas', 'Tukang Seblak', 'Pikri', 'Manusia', 'Wibu-Lovers', 'FF Burik', 'Ardjoena', 'Selfia', 'Kenzo', 'Rafli', 'Dean', 'Felita', 'Wili', 'Putra', 'F', 'Gamers', 'Ipin', 'Botak', 'Hehe', 'Gunawan', 'Jin', 'Masha', 'Sadboy', 'Sofian', 'Mega', 'Zaky', 'Orang Ganteng', 'Wildan', 'Dhani', 'Pak Eko', 'Dzikri', 'Bapak', 'Pak Guru', 'PP Mikey', 'Om Deddy', 'Mas Botak', 'Tirta', 'Gak Ada Nama', 'Fio', 'Cakra', 'Rull', 'Kemal', 'Rama', 'Nenek', 'Siska', 'Abi', 'Ini Saya', 'RRQ Lemon', 'EVOS ajlh', 'EVOS', '@', 'User', 'Pengguna Google', 'Pengguna HP', 'Pengguna EpEp', 'Bot EpEp']);
        var answer
        if (!/^apa|bisa|kapan|siapa|berapa/i.test(text)) return reply('Kata tanya yang tersedia : apa, apakah, kapan, kapankah, siapa, siapakah, bisa, bisakah, berapa dan berapakah')
        else if (/^apa/i.test(text)) answer = pickRandom(['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'])
        else if (/^bisa/i.test(text)) answer = pickRandom(['Iya', 'Bisa', 'Tentu saja bisa', 'Tentu bisa', 'Sudah pasti', 'Sudah pasti bisa', 'Tidak', 'Tidak bisa', 'Tentu tidak', 'tentu tidak bisa', 'Sudah pasti tidak'])
        else if (/^kapan/i.test(text)) answer = Math.floor(Math.random() * 100) + pickRandom([' detik', ' menit', ' jam', ' hari', ' pekan', ' minggu', ' bulan', ' tahun', ' dekade', ' windu', ' abad']) + ' lagi ...'
        else if (/^siapa/i.test(text)) answer = ranName
        else if (/^berapa/i.test(text)) answer = Math.floor(Math.random() * 1000).toString()
          return reply(`Pertanyaan: ${text}\nJawaban: ${answer}`)

  } else if (/^nulis/i.test(command)) {
  	var text = command.split('nulis ')[1]
      if (!text) return reply(loghandler.notText)
      var fontPath = __path + '/lib/font/Zahraaa.ttf'
      var inputPath = __path + '/lib/kertas/nulis.jpg'
      var outputPath = __path + '/tmp/hasil.jpg'
      var fixedText = await textWrap(text, 47)
      await spawn('convert', [
                inputPath,
                '-font',
                fontPath,
                '-size',
                '700x960',
                '-pointsize',
                '30',
                '-interline-spacing',
                '-7',
                '-annotate',
                '+170+222',
                fixedText,
                outputPath
         ])
         .on('error', () => reply('Error!'))
         .on('exit', () => fs.writeFileSync(__path + '/public/media/nulis.png', fs.readFileSync(outputPath)))
           return reply('Nihh hasilnya:\n\nhttps://kuhong-api.herokuapp.com/media/nulis.png')

  } else if (/^play|yt(s|search|play)/i.test(command)) {
        var query = command.split('ytsearch ')[1] || command.split('yts ')[1] || command.split('play ')[1]
        if (!query) return reply(loghandler.notQuery)
        var res = await yts(query)
        var data = res.all.find(video => video.seconds < 3600)
        var {
            dl_link,
            thumb,
            title,
            filesize,
            filesizeF
        } = /play/i.test(command) ? await yta(data.url, 'id4') : await ytv(data.url, 'id4')
        var result = `Title: ${title}\nDuration: ${data.timestamp}\nViews: ${data.views}\nUploaded: ${data.ago}\nThumb: ${thumb}\nSource: ${data.url}\nSize: ${filesizeF}\nUploader: ${data.author.name}\nChannel Link:\n${data.author.url}\nDownload MP4:\n${dl_link}`
          return reply(result)

  } else if (/^google|search/i.test(command)) {
        var query = command.split('google ')[1] || command.split('search ')[1]
        if (!query) return reply(loghandler.notQuery)
        var search = await googleIt({ query: query })
        var result = search.map(({ title, link, snippet }) => `*${title}*\n\n${link}\n${snippet}`).join('\n\n')
          return reply(result)

  } else if (/^github|g(ithub|h)search/i.test(command)) {
  	  var query = command.split('hub ')[1] || command.split('search ')[1]
        if (!query) return reply(loghandler.notQuery)
        var json = await (await fetch(`https://api.github.com/search/repositories?q=${query}`)).json()
        var result = json.items.map((repo, index) => `
${1 + index}. *${repo.full_name}* ${repo.fork ? '(Fork)' : ''}

Url: ${repo.html_url}
Dibuat: ${formatDate(repo.created_at)}
Terakhir Update: ${formatDate(repo.updated_at)}
Watchs: ${repo.watchers}
Forks: ${repo.forks}
Stargazers: ${repo.stargazers_count}
Issue: ${repo.open_issues}
${repo.description ? `
Deskripsi:${'\n' + repo.description}` : ' Tidak Ada Deskripsi'}
Clone: \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()).join('\n\n')
          return reply(result)

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
               return reply(result.split('Share ke Facebook Twitter Google+')[0].split('Kontak Kami')[1])
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
      if (!json.lyrics) return reply('Lirik tidak ditemukan!')
        return reply(json.lyrics)

  } else if (/^chord/i.test(command)) {
      var query = command.split('chord ')[1]
      if (!query) return reply(loghandler.notQuery)
      var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/chord?q=${query}`)).json()
      if (!json.result) return reply('Chord tidak ditemukan!')
        return reply(json.result)

  } else if (/^translate/i.test(command)) {
  	  var txt = command.split('translate ')[1]
        if (!txt) return reply(loghandler.notText)
        var [text, lang] = txt.split('|')
        if (!lang) return reply(loghandler.notLang)
        var result = await translate(text, { tld: 'cn', to: lang })
      	return reply(result[0])

  } else if (/^info(covid|bmkg|gempa)/i.test(command)) {
      if (/covid/i.test(command)) {
      	var json = await (await fetch(`https://api.kawalcorona.com/indonesia`)).json()
          var result = `Positif: ${json[0].positif.replace(/[,]/g, '.')}\nSembuh: ${json[0].sembuh.replace(/[,]/g, '.')}\nMeninggal: ${json[0].meninggal.replace(/[,]/g, '.')}\nDirawat: ${json[0].dirawat.replace(/[,]/g, '.')}`
            return reply(result)
      } else {
      	await Gempa().then(json => {
      	var result = `Waktu: ${json.Waktu}\nLintang: ${json.Lintang}\nBujur: ${json.Bujur}\nMagnitudo: ${json.Magnitudo}\nKedalaman: ${json.Kedalaman}\nWilayah: ${json.Wilayah}\nMap: ${json.Map}`
            return reply(result)
          })
       }

  } else if (/^spam(call|sms)/i.test(command)) {
      var nomor = command.split('spamcall ')[1] || command.split('spamsms ')[1]
      if (!nomor) return reply(loghandler.notNumber)
      var json = {}
      if (/call/i.test(command)) json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/spamcall?no=${nomor.split('62')[1].split('0')[1]}`)).json()
      if (/sms/i.test(command)) json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/spamsms?no=${nomor.split('62')[1].split('0')[1]}&jum=20`)).json()
      if (!json.logs) return reply(json.msg)
        return reply(json.logs)

  } else if (/^md(4|5)/i.test(command)) {
      var text = command.split('md4 ')[1] || command.split('md5 ')[1]
      if (!text) return reply(loghandler.notText)
      var result = await createHash('md' + command.slice(2, 3)).update(text).digest('hex')
        return reply(result)

  } else if (/^sha(1|256|512)/i.test(command)) {
      var text = command.split('1 ')[1] || command.split('256 ')[1] || command.split('512 ')[1]
      if (!text) return reply(loghandler.notText)
      var result = await createHash('sha' + command.slice(3, 4)).update(text).digest('hex')
        return reply(result)

  } else if (/^h([aiueo])l\1h/i.test(command)) {
      var text = command.split('h ')[1]
      if (!text) return reply(loghandler.notText)
      var txt = command.slice(1, 2)
      var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, txt.toUpperCase())
        return reply(result)

  } else if (/^fml$/i.test(command)) {
      var fml = await (await fetch('https://www.fmylife.com/random')).text()
      var $ = cheerio.load(fml)
      var resultEN = $('#content article.article-panel > .panel > .article-contents > a.article-link').first().text()
      var result = await translate(resultEN, { tld: 'cn', to: 'id' })
        return reply(result[0])

  } else if (/^quotes?$/i.test(command)) {
      var data = await fs.readFileSync(__path + '/lib/scraper/quotes.json')
      var object = JSON.parse(data);
      var index = Math.floor(Math.random() * object.length);
      var json = object[index];
        return reply(json.result)

  } else if (/^sindiran$/i.test(command)) {
      var data = await fs.readFileSync(__path + '/lib/scraper/sindiran.json')
      var object = JSON.parse(data);
      var index = Math.floor(Math.random() * object.length);
      var json = object[index];
        return reply(json.result)

  } else if (/^pantun$/i.test(command)) {
      var data = await fs.readFileSync(__path + '/lib/scraper/pantun.txt').toString()
      var pantun = data.split('\n')
      var result = pantun[Math.floor(Math.random() * pantun.length)]
        return reply(result)

  } else if (/^puisi$/i.test(command)) {
  	var puisi = [
         'Sontak\n\nSetiap hendak menulis sajak sketsa wajahmu itu selalu saja merebak udara menjadi sesak penaku henti mendadak serangkaian kosakata di benakku pun luluh-lantak setiap itu pula aku tak tahu harus apa selain menunda dan menyaksikan tiap imaji yang tersisa malihrupa jadi jelaga.',
         'Menyerah\n\nMaaf, aku harus menyerah telah lama kucoba untuk bertahan namun aku semakin terluka maaf, aku harus menyerah kuat inginku untuk bertahan namun hati tak bisa lagi menerima maaf, aku harus menyerah luka ini sudah terlalu dalam hingga membuat hatiku pecah bergelimang darah maaf, aku harus menyerah menghentikan langkah menutup semua lembar kisah mimpi indah sepasang anak manusia yang bercerita tentang cinta maaf, aku menyerah…. Doaku Untukmu Selalu tersebut namamu, Diantara 7 titik kerendahan diri, Diatas lembar permadani, Berangkat semoga sampai langit untuk kembali turun kebumi sebagai karunia.',
         'Sepi\n\nTersebab, Tak mungkin bisa bersama, Maka aku selalu menuliskan syair hati, Dimana kehidupan dunia bisa diatur sesuai mauku, Lantas kau dan aku menjadi kita… Hanya bisa memanggil ingatan untuk mengusir kesunyian, Tapi ia datang tak pernah sendirian, Selalu beserta kerinduan. Terbayang suatu hari tangan kita terkait, Terlelap bersama dibawah saku langit. Sepi ini slalu menghantarkanku padamu',
         'Ini Tentangmu\n\nKatamu kau tak pandai berkata-kata, namun kata-katamu mampu membuatku terbata-bata… Bagimu kau tak terlalu suka mengungkap rasa, namun yang kau isyaratkan membuatku tak mungkin lupa… Menurutmu apa yang kau perbuat bukanlah apa-apa, namun tanpa kau sadari, bagiku kau begitu istimewa… Demikian tentangmu, dan sungguh! aku bukan sedang memujimu…',
         'Jejak Dalam Udara\n\nDan lihatlah, Sekumpulan burung-burung melintas dikotaku Dilangit senja yang perlahan pekat ditelan malam Beriringan mereka terbang pergi dan berlalu Sedang aku, Menyesap rindu dijejak-jejak yang semakin hilang Kuingin kau mencintai aku seperti udara, Meski kasat tapi kau hirup selamanya…',
         'Rasa\n\nLantas, biarlah sementara begini Tepatnya kan kubiarkan seperti ini Mungkin hati ini perlu waktu tuk menghapusnya Karena sesungguhnya aku telah terbiasa oleh keberadaanmu Dan sesungguhnya ada rindu yang mulai tertata Karenamupun, kini aku benar-benar tak sanggup mengelabui rasa',
         'Isyarat Yang Entah\n\nPada undakan anak tangga kelima Seorang perindu duduk menatap awan senja Ia tabah menunggu isyarat yang entah Tapi kau salah puan… Jika menganggapku setabah itu Justru karena tak sanggup menahan rindu Aku senantiasa mencurahkannya pada aksaraku Dan sementara di keningnya Waktu terus melukis kerut perlahan…',
         'Aku dan Hujan\n\nJalan itu menghitam,basah oleh hujan.Namun aku, muram, Kering oleh kerinduan.Gerimis ini menghapus jejak apapun,Namun kasihmu tak hilang dalam hitungan tahun.Lebih dari hancur Seperti pisau tajam yang menusuk hatitak pernah bisa dilepas lagimenusuk sampai nurani tempat aku bingkai indah namamu Aku hanyalah serpihan puing yang rapuh ingin aku ceritakan kehancuran ini tapi, kau seolah tak peduli, tak mampu kusatukan lagi kepingan hati',
         'Sudut Pandang\n\nKita lahir dari rahim yang sama Membuka mata di saat berbeda Aku menolongnya kau mencacinya Tapi kau yang jeli dan aku tertipu belaka Ini hanya masalah sudut pandang Menganggap kaya berlebihan atau miskin keterlaluan Mata rahim melihat itu semua seimbang Kita semua lahir dari rahim yang sama, rahim keadilan.',
         'Sebutir Debu\n\nAku hanya sebutir debu yang memburamkan kilau tak pantas berada diatas suci tak bisa menghindar saat angin hembuskan aku untukmu, lalu terbang Aq hanya kecewa bagai hampa mengharap udara, atau debu ditengah gersang mengharap hujan hentikan angin membawaku terbang.',
         'Kesabaran\n\nGubung bambu istana baginya, Perut yang selalu bernyanyi dalam hidupnya, Walau pahit telan untuk manis, Bersyukur kunci agar tak menangis, Melangkah kaki ini hingga membentuk garis pecahan, Duri-duri selalu menghadang raga, Wajah menahan kesakitan, Menyebut namaNya dalam jiwa.',
      ]
      var result = pickRandom(puisi)
        return reply(result)

  } else if (/^katailham$/i.test(command)) {
      var katailham = [
          'Nggak ada yang peduli denganmu di sosmed kecuali kamu cakep.',
          'Sesimpel ini deh sibuk itu palsu, semua tergantung prioritas.',
          'Dia hanya menghargaimu bukan mencintaimu.',
          'Keadilan sosial hanya berlaku bagi warna negara yang good looking.',
          'Jangan jadi pelangi untuk orang yang buta warna.',
          'Dia yang tertidur nyenyak setelah mematahkan hatimu tidak pantas untuk kamu ingat.',
          'Dia cuman bercanda, harusnya kamu ketawa, bukan malah jatuh cinta.',
          'Mencintaimu adalah seni menyakiti diri.',
          'Dia gak jahat, bapermu aja yang salah tempat.',
          'Jika tidak bisa mewarnai hidup seseorang, maka jangan pudarkan warna aslinya.',
          'Cukup tahu namaku, jangan rupaku.',
          'Sesuatu akan terasa berharga jika sudah kehilangan- kata ilham.',
          'Jangan pernah mengeluh ketika kopimu dingin, ia pernah hangat, namun kau diamkan.'
     ]
     var result = pickRandom(katailham)
       return reply(result)

  } else if (/^bucin$/i.test(command)) {
     var bucin = [
            'Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.',
            'Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.',
            'Jomblo. Mungkin itu cara Tuhan untuk mengatakan',
            'Istirahatlah dari cinta yang salah',
            'Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.',
            'Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.',
            'Pacar orang adalah jodoh kita yang tertunda.',
            'Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.',
            'Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.',
            'Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.',
            'Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.',
            'Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.',
            'Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.',
            'Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.',
            'Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.',
            'Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.',
            'Aku ingin menjadi satu-satunya, bukan salah satunya.',
            'Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.',
            'Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.',
            'Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.',
            'Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.',
            'Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.',
            'Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.',
            'Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.',
            'Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.',
            'Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.',
            'Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.',
            'Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.',
            'Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.',
            'Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.',
            'Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.',
            'Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.',
            'Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.',
            'Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.',
            'Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.',
            'Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.',
            'Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.',
            'Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.',
            'Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.',
            'PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.',
            'Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.',
            'Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.',
            'Makan apapun aku suka asal sama kamu, termasuk makan ati.',
            'Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.',
            'Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.',
            'Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...',
            'Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.',
            'Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...',
            'Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.',
            'Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.',
            'Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.',
            'Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.',
            'Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.',
            'Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..',
            'Denganmu, jatuh cinta adalah patah hati paling sengaja.',
            'Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.',
            'Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.',
            'Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.',
            'Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...',
            'Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.',
            'Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...',
            'Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.',
            'Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.',
            'Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.',
            'Kamu adalah patah hati terbaik yang gak pernah aku sesali.',
            'Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.',
            'Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.',
            'Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.',
            'Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.',
            'Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.',
            'Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...',
            'Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.',
            'Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.',
            'Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.',
            'Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.',
            'Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.',
            'Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.',
            'Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.',
            'Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.',
            'Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.',
            'Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...',
            'Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?',
            'Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.',
            'Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo',
            'Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.',
            'Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.',
            'Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.',
            'Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.',
            'Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.',
            'keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.',
            'Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.',
            'Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.',
            'Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.',
            'Aku ki wong Jowo seng ora ngerti artine',
            'I Love U. Tapi aku ngertine mek',
            'Aku tresno awakmu',
            'Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.',
            'Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.',
            'Saben dino kegowo ngimpi tapi ora biso nduweni.',
            'Ora ketemu koe 30 dino rasane koyo sewulan.',
            'Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.',
            'Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.',
            'Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.',
            'Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.',
            'Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.',
            'Kanyaah akang moal luntur najan make Bayclean.',
            'Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.',
            'Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.',
            'Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).',
            'Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.',
            'Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.',
            'Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.',
            'Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.',
            'Cukup jaringan aja yang hilang, kamu jangan.',
            'Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.',
            'Musuhku adalah mereka yang ingin memilikimu juga.',
            'Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?',
            'Jam tidurku hancur dirusak rindu.',
            'Cukup China aja yang jauh, cinta kita jangan.',
            'Yang penting itu kebahagiaan kamu, aku sih gak penting..',
            'Cuma satu keinginanku, dicintai olehmu..',
            'Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.',
            'Cukup antartika aja yang jauh. Antarkita jangan.'
      ]
      var result = pickRandom(bucin)
        return reply(result)

  } else if (/^gombal$/i.test(command)) {
      var gombal = [
     "Kamu tau gak? Kenapa kalau aku menghafal lihatnya ke atas? soalnya kalau merem langsung kebayang wajahmu.",
     "Orang kurus itu setia, makan aja tidak pernah nambah apalagi pasangan.",
     "Kamu tu kayak warteg, sederhana namun berkualitas.",
     "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
     "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
     "Kamu tau gak apa persamaannya kamu sama AC? Sama-sama bikin aku sejuk.",
     "Aku hanya ingin hidup cukup. Cukup lihat senyummu setiap hari.",
     "Aku rela ikut lomba lari keliling dunia, asalkan engkau yang menjadi garis finisnya.",
     "Kalau orang kebutuhan primernya ada tiga yaitu sandang pangan dan papan, tapi kalau aku : kamu, kamu, kamu.",
     "Cita-citaku dulu pengen jadi dokter, tapi setelah mengenalmu, berubah jadi ingin membahagiakanmu.",
     "Enak ya jadi kamu, kalau mau liat bidadari, tinggal liat di kaca.",
     "Jika kamu tanya berapa kali kamu datang ke pikiranku, jujur saja, cuma sekali. Habisnya, gak pergi-pergi sih!",
     "Jangan GR deh. Aku kangen kamu sedikit aja kok. Sedikit berlebihan maksudnya.",
     "Tanggal merah sekalipun aku tidak libur untuk memikirkan kamu.",
     "Cintaku padamu bagai diare. Tak bisa kutahan, terus keluar begitu saja.",
     "Aku ga lulus ulangan umum sayang, gara-gara di bagian essay-nya aku tulis surat cinta buat kamu.",
     "Tahu gak kenapa kita cuma bisa lihat pelangi setengah lingkaran? Sebab setengahnya lagi ada di mata kamu.",
     "Kalo kamu lagi di AS, Patung Liberty ga akan bawa obor tapi bakal bawa BUNGA!",
     "Aku rela jadi abang nasi goreng asalkan setiap malam aku bisa lewat depan rumah kamu.",
     "Aku rela dipenjara seumur hidup asalkan pelanggarannya karena mencintaimu.",
     "Kamu tau gak? Lukisan itukan makin lama makin antik, kalo kamu makin lama makin cantik",
     ]
     var result = pickRandom(gombal)
        return reply(result)

  } else if (/^katabija(k|x)$/i.test(command)) {
      var body = await (await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/katabijax.txt')).text()
      var json = body.split('\n')
      var result = json[Math.floor(Math.random() * json.length)]
        return reply(result)

  } else if (/^faktaunik$/i.test(command)) {
      var body = await (await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/faktaunix.txt')).text()
      var json = body.split('\n')
      var result = json[Math.floor(Math.random() * json.length)]
        return reply(result)

  } else if (/^truth$/i.test(command)) {
      var truth = [
        'Acara tv apa yang paling kamu benci? Berikan alasannya!',
        'Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?',
        'Apa hal paling buruk (gosip) yang pernah kamu bilang tentang temenmu?',
        'Apa hal paling memalukan dari dirimu?',
        'Apa hal paling memalukan dari temanmu?',
        'Apa hal pertama yang kamu lihat saat kamu melihat orang lain (lawan jenis)?',
        'Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?',
        'Apa hal terbodoh yang pernah kamu lakukan?',
        'Apa hal terbodoh yang pernah kamu lakukan?',
        'Apa ketakutan terbesar kamu?',
        'Apa mimpi terburuk yang pernah kamu alami?',
        'Apa mimpi terkonyol yang sampai sekarang kamu kamu ingat?',
        'Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?',
        'Apa sifat terburukmu menurut kamu?',
        'Apa sifat yang ingin kamu rubah dari dirimu?',
        'Apa sifat yang ingin kamu rubah dari temanmu?',
        'Apa yang akan kamu lakuin bila pacarmu bilang hidung atau jarimu jelek?',
        'Apa yang kamu fikirkan sebelum kamu tidur ? ex: menghayal tentang jodoh,dll.',
        'Apakah hal yang menurutmu paling menonjol dari dirimu?',
        'Bagian tubuh temanmu mana yang paling kamu sukai dan ingin kamu punya?',
        'Bagian tubuhmu mana yang paling kamu benci?',
        'Dari semua kelas yang ada di sekolah, kelas mana yang paling ingin kamu masuki dan kelas mana yang paling ingin kamu hindari?',
        'Deksripsikan teman terdekat mu!',
        'Deskripsikan dirimu dalam satu kata!',
        'Film dan lagu apa yang pernah membuat kamu menangis?',
        'Hal apa yang kamu rahasiakan sampe sekarang dan gak ada satu orangpun yang tau?',
        'Hal paling romantis apa yang seseorang (lawan jenis) pernah lakuin atau kasih ke kamu?',
        'Hal-hal menjijikan apa yang pernah kamu alami ?',
        'Jika kamu lahir kembali dan harus jadi salah satu dari temanmu, siapa yang akan kamu pilih untuk jadi dia?',
        'Jika punya kekuatan super/ super power ingin melakukan apa',
        'Jika sebentar lagi kiamat, apa yang kamu lakukan ?',
        'Kalo kamu disuruh operasi plastik dengan contoh wajah dari teman sekelasmu, wajah siapa yang akan kamu tiru?',
        'Kamu pernah mencuri sesuatu gak?',
        'Apakah kamu takut mati? kenapa?',
        'Kapan terakhir kali kamu menangis dan mengapa?',
        'Apa kemampuan spesial kamu apa?',
        'Kok bisa suka sama orang yang kamu sukai?',
        'Menurutmu, apa sifat baik teman terdekatmu yang nggak dia sadari?',
        'Orang seperti apa yang ingin kamu nikahi suatu saat nanti?',
        'Pekerjaan paling ngenes apa yang menurutmu cocok untuk teman yang sedang duduk di sebelahmu? Dan kenapa?',
        'Pengen tukeran hidup sehari dengan siapa? (teman terdekat yang kalian sama-sama tahu) dan mengapa',
        'Pernahkah kamu diam-diam berharap hubungan seseorang dengan pacarnya putus? Siapa?',
        'Pilih PACAR atau TEMAN ? why?',
        'Quote apa yang paling kamu ingat dan kamu suka?',
        'Rahasia apa yang belum pernah kamu katakan sampai sekarang kepada teman mu ?',
        'Siapa panutan yang benar-benar menjadi panutanmu?',
        'Siapa di antara temanmu yang kamu pikir matre?',
        'Siapa di antara teman-temanmu yang menurutmu potongan rambutnya paling nggak banget?',
        'Siapa diantara temen-temenmu yang paling NGGAK fotogenik dan kalo difoto lagi ketawa mukanya jelek banget?',
        'Siapa mantan terindah mu? dan mengapa kalian putus ?!',
        'Siapa nama artis yang pernah kamu bucinin diam-diam?',
        'Siapa nama guru cowok yang pernah kamu sukai dulu?',
        'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?',
        'Siapa nama orang (lawan jenis) yang menurutmu akan asyik bila dijadikan pacar?',
        'Siapa nama orang yang kamu benci, tapi kamu rasa orang itu suka sama kamu (nggak harus lawan jenis)?',
        'Siapa nama orang yang pernah kamu kepoin diam-diam?',
        'Siapa orang (lawan jenis) yang paling sering terlintas di pikiranmu?',
        'Siapa orang yang paling menjengkelkan di antara teman teman mu ? alasannya!',
        'Siapa sebenernya di antara teman-temanmu yang kamu pikir harus di make-over?',
        'Siapa yang paling mendekati tipe pasangan idealmu di sini',
        'Apa hal pertama yang akan Anda lakukan jika Anda bangun sebagai lawan jenis?',
        'Pernahkah Anda membiarkan orang lain mendapat masalah karena sesuatu yang Anda lakukan?',
        'Kapan terakhir kali Anda mengompol?',
        'Apa yang paling kamu impikan dari tidur?',
        'Jika Anda akan menghasilkan uang secara ilegal, bagaimana Anda membuatnya?',
        'Apa yang kekanak-kanakan yang masih Anda lakukan?',
        'Jika Anda buta, siapa yang akan menjadi anjing pemandu Anda?',
        'Apa yang paling mengesankan Anda?',
        'Jika Anda diizinkan untuk menggunakan hanya 3 kata untuk sisa malam mulai sekarang - yang mana itu?',
        'Jika Anda seorang diktator, hukum mana yang akan Anda undang terlebih dahulu?',
        'Jika Anda hidup selama era Nazi, siapa Anda?',
        'Apa pengalaman paling memalukan di waktu sekolah / waktu belajar / pendidikan / tahun lalu?',
        'Hewan apa yang paling cocok untukmu dan mengapa?',
        'Apa kencan terburukmu?',
        'Siapa yang ingin kamu cium sekarang?',
        'Apa rahasia kamu, fantasi gelap?',
        'Apakah Anda lebih suka tato pantat Anda atau menusuk lidah Anda?',
        'Apakah kamu selalu setia?',
        'Apakah Anda memiliki naksir remaja?',
        'Di orang mana kamu jatuh cinta?',
        'Selebritas mana yang ingin kamu kencani?',
        'Apa waasa saat paling memalukan dalam hidup Anda?'
      ]
      var result = pickRandom(truth)
        return reply(result)

  } else if (/^dare$/i.test(command)) {
      var dare = [
    "Ajak orang yg tidak kamu kenal itu selfie berdua dengan mu lalu upload ke snapgram", 
    "Ambil beberapa nomor dari kontakmu secara acak dan kirim sms 'Aku hamil' sama mereka.",
    "Ambil minuman apa saja yg ada didekat mu lalu campurkan dengan cabai dan minum!",
    "Ambil nomor secara acak dari kontakmu, telepon dia, dan bilang 'Aku mencintaimu'",
    "Beli makanan paling murah di kantin (atau beli sebotol aqua) dan bilang sambil tersedu-sedu pada teman sekelasmu 'Ini.. adalah makanan yang paling mahal yang pernah kubeli.. Hiks'",
    "Beli satu botol coca cola dan siram bunga dengan coca cola itu di depan orang banyak.",
    "Berdiri deket kulkas, tutup mata, pilih makanan secara acak didalemnya, pas makanpun mata harus tetep ditutup.",
    "Berdiri di tengah lapangan basket dan berteriak, 'AKU MENCINTAIMU PANGERANKU/PUTRIKU'",
    "Beri hormat pada seseorang di kelas, lalu bilang 'Hamba siap melayani Anda, Yang Mulia.'",
    "Berjalan sambil bertepuk tangan dan menyanyi lagu 'Selamat Ulang Tahun' dari kelas ke koridor.",
    "Berlutut satu kaki dan bilang 'Marry me?' sama orang pertama yang masuk ke ruangan.",
    "Bikin hiasan kepala absurd dari tisu, apapun itu, terus suruh pose didepan kamera, terus upload",
    "Bilang 'KAMU CANTIK BANGET NGGAK BOHONG' sama cewek yang menurutmu paling cantik di kelas ini",
    "Bilang pada seorang guru, 'Bu/Pak, baju saya terasa sempit' dengan ekspresi memelas.",
    "Bilang pada seseorang di kelas, 'Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling serius yang pernah aku katakan.'",
    "Buang buku catatan seseorang ke tempat sampah, di depan matanya, sambil bilang 'Buku ini isinya tidak ada yang bisa memahami'",
    "Cabut bulu kaki mu sendiri sebanyak 3x",
    "Chat kedua orangtuamu, katakan bahwa kamu kangen dengan mereka lengkap dengan emoticon sedih.",
    "Coba searcing google mengenai hal-hal yang mengerikan atau menggelikan seperti trypophobia, dll.",
    "Duduk relaks di tengah lapangan basket sambil berpura-pura itu adalah pantai untuk berjemur.",
    "isi mulut penuh dengan air dan harus tahan hingga dua putaran. Jika tertawa dan tumpah atau terminum, maka harus ngisi ulang dan ditambah satu putaran lagi.",
    "Jabat tangan orang pertama yang masuk ke ruangan ini dan bilang 'Selamat datang di Who Wants To Be a Millionaire!'",
    "Kirim sms pada orangtuamu 'Hai, bro! Aku baru beli majalah Playboy edisi terbaru!'",
    "Kirim sms pada orangtuamu, 'Ma, Pa, aku sudah tahu bahwa aku adalah anak adopsi dari Panti Asuhan. Jangan menyembunyikan hal ini lagi.'",
    "Kirim sms pada tiga nomor acak di kontakmu dan tulis 'Aku baru saja menjadi model majalah Playboy.'",
    "Makan 1 Sendok makan kecap manis dan kecap asin!",
    "Makan sesuatu tapi gak pake tangan.",
    "Marah-marah ketemen kamu yang gak dateng padahal udah janjian mau main 'truth or dare' bareng-bareng",
    "Mecahin telur pake kepala.",
    "Memakan makanan yang sudah dicampur-campur dan rasanya pasti aneh, namun pastikan bahwa makanan itu tidak berbahaya untuk kesehatan jangka panjang maupun jangka pendek.",
    "Menari ala Girls' Generation untuk cowok di depan kelas, atau menari ala Super Junior untuk cewek.",
    "Mengerek tiang bendera tanpa ada benderanya.",
    "Menggombali orang yang ditaksir, sahabat terdekat, lawan jenis yang tidak dikenal sama sekali dan  sejenisnya.",
    "Meniru style rambut semua temen kamu.",
    "Menyanyikan lagu HAI TAYO di depan banyak orang sambil menari",
    "Menyanyikan lagu Iwak Peyek dengan keras di ruang kelas.",
    "Minjem sesuatu ke tetangga",
    "Minta tandatangan pada seorang guru yang paling kamu benci sambil bilang 'Anda benar-benar orang yang paling saya kagumi di dunia.'",
    "Minta uang pada seseorang (random/acak) di jalan sambil bilang 'Saya tidak punya uang untuk naik angkot.'",
    "Minum sesuatu yang udah dibuat/disepakatin, tapi pastiin gak berbahaya, bisa kayak minum sirup yang digaremin terus ditambah kecap.",
    "Minum tiga teguk teh atau coke (coca-cola atau sprite) yang dicampur sambal.",
    "Ngomong ke gebetannya emoticon-Takut, ngobrol ngalurngidul apapun lah boleh ,via manapun juga bisa.",
    "Nyanyi-nyanyi lagu favorit difilm disney diluar rumah sambil teriak-teriak.",
    "Nyebutin 1 biru sampai 10 biru dengan cepat dan tidak boleh melakukan kesalahan. Jika salah maka harus diulang dari awal.",
    "Pakai mahkota tiruan dari kertas buku dan bilang sama setiap orang di ruangan 'BERI PENGHORMATAN PADA YANG MULIA RAJA' sambil menunjuk setiap orang dengan penggaris.",
    "Pake celana kebalik sampe besok paginya.",
    "Pegang bola basket, berdiri di depan kelas, dan berteriak, 'ADA YANG TAHU MENGAPA BOLA GOLF INI SANGAT BESAR? APA PABRIKNYA SALAH CETAK?'",
    "Peluk orang yang NGGAK kamu sukai di kelas dan bilang, 'Terimakasih banyak kamu sudah bersedia menjadi orang paling baik untukku.'",
    "Pergi ke lapangan yg luas, lalu berlari sekencang kencangnya sambil mengatakan 'aku gila aku gila'",
    "Petik 1 bunga lalu tancapkan bunga itu ke orang yg tidak kamu kenal (harus lawan jenis ya)",
    "Pilih orang secara acak di jalan, lalu bilang 'You don't know you're beautiful' (ala One Direction)",
    "Pura pura kerasukan ex: kerasukan macan dll",
    "Suruh bersiul pas mulutnya lagi penuh dijejelin makanan.",
    "Suruh jadi pelayan buat ngelayanin kamu sama temen-temen kamu buat makan siang.",
    "Suruh pake kaos kaki buat dijadiin sarung tangan.",
    "Suruh pake topi paling aneh/helm paling absurd selama 3 putaraann kedepan.",
    "Telpon mama kamu dan bilang 'ma, aku mau nikah secepatnya'",
    "Telpon mantan kamu dan bialng 'aku rindu kamu'",
    "Teriak 'WOI GW JACK, DENGER NIH RAUNGAN GW, ROAAAAR!' ditempat rame",
    "Tuker baju sama orang terdekat sampe ronde berikutnya.",
    "Update status di BBM, Line, WA, atau apapun itu dengan kata kata yang semuanya berawalan 'T'",
    "Upload video dia nyanyi ke youtube yang lagi nyanyiin lagu-lagu populer",
    "Warnain kuku kaki dan tangan tapi dengan warna berbeda-beda buat seminggu"
     ]
     var result = pickRandom(dare)
        return reply(result)

  } else if (/^bacot$/i.test(command)) {
      var bacot = [
        'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
        'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
        'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
        'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
        'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
        'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
        'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
        'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
        'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
        'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
        'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
        'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
        'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
        'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
        'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
        'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
        'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
        'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
        'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
        'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
        'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
        'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
        'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
        'Statusnya rohani, kelakuannya rohalus.',
        'Kegagalan bukan suatu keberhasilan.',
        'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
        'Aku juga pernah kaya, waktu gajian.',
        'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
        'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
        'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
        'Jangan terlalu berharap! nanti jatuhnya sakit!',
        'Ingat! Anda itu jomblo',
        'Gak tau mau ngetik apa',
      ]
      var result = pickRandom(bacot)
        return reply(result)

  } else if (/^artinama/i.test(command)) {
      var nama = command.split('artinama ')[1]
      if (!nama) return reply(loghandler.notName)
      request.get({
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            url: 'http://www.primbon.com/arti_nama.php?nama1=' + nama + '&proses=+Submit%21+',

        }, function(error, response, body) {
            var $ = cheerio.load(body);
            var y = $.html().split('arti:')[1];
            var t = y.split('method="get">')[1];
            var f = y.replace(t, ' ');
            var x = f.replace(/<br\s*[\/]?>/gi, '\n');
            var h = x.replace(/<[^>]*>?/gm, '');
              return reply(`Arti dari namamu adalah\n\nNama *${nama}*\n${h}`)
        })

  } else if (/^artimimpi/i.test(command)) {
      var mimpi = command.split('artimimpi ')[1]
      if (!mimpi) return reply('Silahkan masukan nama mimpi')
      request.get({
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            url: 'https://www.primbon.com/tafsir_mimpi.php?mimpi=' + mimpi + '&submit=+Submit+',

        }, function(error, response, body) {
            var $ = cheerio.load(body);
            var y = $.html().split('Hasil pencarian untuk kata kunci: ' + mimpi)[1];
            var t = y.split('method="get">')[1];
            var f = y.replace(t, ' ');
            var x = f.replace(/<br\s*[\/]?>/gi, '\n');
            var result = x.replace(/<[^>]*>?/gm, '');
              return reply(result.split('.')[0])
       })

  } else if (/^cekjodoh/i.test(command)) {
      var txt = command.split('cekjodoh ')[1]
      if (!txt) return reply(loghandler.notName)
      var [nama, pasangan] = txt.split('|')
      if (!pasangan) return reply('Silahkan masukan nama pasangan')
      request.get({
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            url: 'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1=' + nama + '&nama2=' + pasangan + '&proses=+Submit%21+',

        }, function(error, response, body) {
            var $ = cheerio.load(body);
            var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
            var t = y.split('.<br><br>')[1];
            var f = y.replace(t, ' ');
            var x = f.replace(/<br\s*[\/]?>/gi, '\n');
            var h = x.replace(/<[^>]*>?/gm, '');
            var d = h.replace('&amp;', '&')
              return reply( `Kecocokan Berdasarkan Nama :\n\n${d}`)
        })

  } else if (/^nomorhoki/i.test(command)) {
      var nomor = command.split(' ')[1]
      if (!nomor) return reply(loghandler.notNumber)
      request.post({
    	    url: 'https://www.primbon.com/no_hoki_bagua_shuzi.php',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: `nomer=${nomor}&submit=+Submit+`,
            
        }, (e, r, b) => {
            var $ = cheerio.load(b);
            var y = $.html().split('No. HP : ')[1];
            var t = y.split('method="post">')[1];
            var f = y.replace(t, ' ');
            var x = f.replace(/<br\s*[\/]?>/gi, '\n');
            var h = x.replace(/<[^>]*>?/gm, '');
            var result = h.split('(adsbygoogle')[0];
              return reply('Nomor HP ' + result)
       })

  } else if (/^tggljadian|jadian/i.test(command)) {
      var date = command.split('jadian ')[1]
      if (!date) return reply(loghandler.notDate)
      if (!date.includes('-')) return reply('Gunakan "-" disetiap tanggalnya\n\nContoh: 27-10-04')
      var tggl = dates.split('-')[0]
      var bln = dates.split('-')[1]
      var thn = dates.split('-')[2]
      request.get({
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            url: `https://www.primbon.com/tanggal_jadian_pernikahan.php?tgl=${Number(tggl)}&bln=${Number(bln)}&thn=${Number(thn)}&proses=+Submit%21+`,
            
        }, function(e, r, b) {
            var $ = cheerio.load(b);
            var y = $.html().split('MAKNA TANGGAL JADIAN, PERNIKAHAN')[1];
            var t = y.split('method="get">')[1];
            var f = y.replace(t, ' ');
            var x = f.replace(/<br\s*[\/]?>/gi, '\n');
            var h = x.replace(/<[^>]*>?/gm, '');
            var result = h.split('&lt;')[0]
              return reply(result)
       })

  } else if (/^zodia(c|k)/i.test(command)) {
      var txt = command.split('zodiak ')[1] || command.split('zodiac ')[1]
      if (!txt) return reply(loghandler.notName)
      var [nama, dates] = txt.split('|')
      if (!dates) return reply(loghandler.notDate)
      if (!dates.includes('-')) return reply('Gunakan "-" disetiap tanggalnya\n\nContoh: 27-10-04')
      var tggl = dates.split('-')[0]
      var bln = dates.split('-')[1]
      var thn = dates.split('-')[2]
      if (isNaN(tggl)) return reply(loghandler.number)
      if (isNaN(bln)) return reply(loghandler.number)
      if (isNaN(thn)) return reply(loghandler.number)
      var date = new Date(tggl, bln, thn)
      if (date == 'Invalid Date') return reply('Tanggal tidak valid')
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
      var you = command.split('suit ')[1] || command.split('jawa ')[1]
      var pilihan = 'gunting, kertas, batu'
      if (/jawa/i.test(command)) pilihan = 'orang, semut, gajah'
      if (!you) return reply('Silahkan masukan pilihannya :\n\n' + pilihan)
      var bot = Math.random()
      if (bot < 0.34) bot = /jawa/i.test(command) ? 'orang' : 'batu'
      else if (bot > 0.34 && bot < 0.67) bot = /jawa/i.test(command) ? 'semut' : 'gunting'
      else bot = /jawa/i.test(command) ? 'gajah' : 'kertas'

      var hasil
      if (you.toLowerCase() == bot) {
          hasil = `Seri!\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
      } else if (you.toLowerCase() == /jawa/i.test(command) ? 'orang' : 'batu') {
          if (bot == /jawa/i.test(command) ? 'semut' : 'gunting') hasil = `Kamu Menang!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`
          else hasil = `Kamu Kalah!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
      } else if (you.toLowerCase() == /jawa/i.test(command) ? 'semut' : 'gunting') {
          if (bot == /jawa/i.test(command) ? 'gajah' : 'kertas') hasil = `Kamu Menang!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
          else hasil = `Kamu Kalah!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
      } else if (you.toLowerCase() == /jawa/i.test(command) ? 'gajah' : 'kertas') {
          if (bot == /jawa/i.test(command) ? 'orang' : 'batu') hasil = `Kamu Menang!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`
          else hasil = `Kamu Kalah!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`
      } else if (!/gunting|kertas|batu|semut|orang|gajah/i.test(command)) hasil = 'Pilihan yang tersedia : ' + pilihan
        return reply(hasil)

  } else if (/^modapk|apkdownload$/i.test(command)) {
      var result = `
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
    return reply(result)

  } else if (/^dona(te|si)$/i.test(command)) {
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

  } else if (/^resep|masakan/i.test(command)) {
      var query = command.split('resep ')[1] || command.split('masakan ')[1]
      if (!query) return reply(loghandler.notQuery)
      await axios.get('https://masak-apa.tomorisakura.vercel.app/api/search/?q=' + query).then(async(res) => {
      var { results } = await res.data
      var random = Math.floor(Math.random() * 16)
      await axios.get('https://masak-apa.tomorisakura.vercel.app/api/recipe/' + results[random].key).then(async(result) => {
      var { results } = await result.data
      var bahannya = await results.ingredient
      var bahan = bahannya.replace(/,/g,'\n')
      var tutornya = await results.step
      var tutornih = tutornya.replace(/,/g,'\n')
      var tutor = tutornih.replace(/.,/g,'\n')
      var hasil = `Title: ${results.title}\nAuthor: ${results.author.user}\nDipublikasikan: ${results.author.datePublished}\nTingkat: ${results.dificulty}\nWaktu: ${results.times}\nPorsi: ${results.servings}\n\nBahan-bahan:\n${bahan}\n\nLangkah2:\n${tutor}`
        return reply(hasil)
        })
    })

  } else if (/^slots?$/i.test(command)) {
      var emojis = ['🍎', '🍌', '🍇', '♦️', '🥇', '💵'];
      var a = Math.floor(Math.random() * emojis.length);
      var b = Math.floor(Math.random() * emojis.length);
      var c = Math.floor(Math.random() * emojis.length);
      var x = [], y = [], z = []
      for (var i = 0; i < 3; i++) {
          x[i] = emojis[a]
          a++
          if (a == emojis.length) a = 0
      }
      for (var i = 0; i < 3; i++) {
          y[i] = emojis[b]
          b++
          if (b == emojis.length) b = 0
      }
      for (var i = 0; i < 3; i++) {
          z[i] = emojis[c]
          c++
          if (c == emojis.length) c = 0
      }
      var end, poin
      if (a == b && b == c) end = 'JACKPOT!!!', poin = 10000
      else if (a == b || a == c || b == c) end = 'Dikit Lagi!', poin = 500
      else end = 'Kamu Kalah!, Yang Sabar yaa. Anggap aja ini Ujian :)', poin = 5
        return reply(`${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <===\n${x[2]} | ${y[2]} | ${z[2]}\n\n${end}`)

  } else return reply(`*「 TIDAK DITEMUKAN 」*\n\nPerintah tidak temukan!\nSilahkan ketik *${usedPrefix}menu* untuk melihat list menu yang tersedia`)
} catch (e) {
  var err = e.message
  var urlRegex = /http(s)?:\/\/(\w+:?\w*@)?(\S+)(:\d+)?((?<=\.)\w+)+(\/([\w#!:.?+=&%@!\-/])*)?/gi
  if (urlRegex.test(err)) {
      err = e.message.replace(urlRegex, function (match) {
      var censored = ''
      for (var i = 0; i < match.length; i++) censored += '*'
      return censored
      })
   }
  return reply(util.format(err))
 }
}


module.exports = { handler }

function formatDate(n, locale = 'id') {
var d = new Date(n)
  return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
}

function muptime(seconds) {

var hours = Math.floor(seconds / (60 * 60));
var minutes = Math.floor(seconds % (60 * 60) / 60);
var seconds = Math.floor(seconds % 60);

  return new Array(pad(hours), pad(minutes), pad(seconds)).join(':')
}

function pad(s) {
  return (s < 10 ? '0' : '') + s
}
