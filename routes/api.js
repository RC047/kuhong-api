__path = process.cwd();
console.log('Starting apirouter...');

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
var { handler } = require('./bot.js');
var express = require('express');
var router = express.Router();
var database = require(__path + '/lib/database.js');
var creator = pickRandom(['Rendy', 'RendyGans', 'RendyGamteng', 'RendyCraft047', 'RC047', 'Kang Rendy']);
var blocked = new RegExp(['180.249.133.59'].join('|'), 'gi');
try { var kuhong = database.get('Kuhong') } catch (e) { console.error(e) }

// Apikey :
var total_blocked = Object.keys(blocked.source.split('|')).length
var owner_apikey = '04102006' // Apikey Owner (opsional)
var free_apikey = generateApikey() // Apikey Gratis
var apikey = '8RiU6O-yrLpgVep' // Apikeymu (dibutuhkan)
var custom_apikey = generateKey() // Custom Apikey(opsional)
var blocked_apikey = 'KuhongRestAPIs' // Apikey yang sudah diblock
var vhtears_key = 'ameysbot' // Apikey VhTears (dibutuhkan)
var xteam_key = '7cac32071f2eb2ff' // Apikey Xteam (dibutuhkan)
var zeks_key = 'MIMINGANZ' // Apikey Zeks (dibutuhkan)
var melodicxt_key = 'administrator' // Apikey Melodicxt-2 (dibutuhkan)
var imgbb_key = '761ea2d5575581057a799d14e9c78e28' // Apikey Imgbb (dibutuhkan)
var removebg_key = 'HCVrssExQw8DuaWpj2vE5359' // Apikey RemoveBG (dibutuhkan)
var callmebot_key = '171698' // Apikey CallMeBot (opsional)
var redeem_code = generateCode() // Kode Redeem untuk dapatkan Apikey Premium

console.log(`
> CHECKING DATA...

Total IP Blocked: ${total_blocked}
Owner Apikey: ${owner_apikey}
Apikey: ${apikey}
Free Apikey: ${free_apikey}
Custom Apikey: ${custom_apikey}
VhTears Key: ${vhtears_key}
Xteam Key: ${xteam_key}
Zeks Key: ${zeks_key}
Melodicxt Key: ${melodicxt_key}
Imgbb Key: ${imgbb_key}
RemoveBG Key: ${removebg_key}
CallMeBot Key: ${callmebot_key}
Redeem Code: ${redeem_code}
`.trim())

// Required Modules :
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
var cookie = 'HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA';

// Handler Logger :
var loghandler = {
    notparam: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter apikey!'
    },
    nottype: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter type'
    },
    notnama: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter nama'
    },
    notimg: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter img'
    },
    notemoji: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter emoji'
    },
    notangka: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter angka'
    },
    notnomor: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter nomor'
    },
    notjumlah: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter jumlah'
    },
    notkey: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter key'
    },
    noturl: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter url'
    },
    notquery: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter query'
    },
    notaudio: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter audio'
    },
    notkata: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter kata'
    },
    notlang: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter bahasa'
    },
    nottext: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter username'
    },
    notfound: {
        status: error,
        creator: creator,
        code: 404,
        message: 'Nyasar ya? yang lu cari disini nggak ada!'
    },
    notvalue: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter value'
    },
    notheme: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Tema tidak tersedia silahkan masukkan texmaker/list atau baca dokumentasi'
    },
    invalidKey: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Apikey tidak ditemukan! Silahkan kontak Owner untuk dapatkan Apikey wa.me/62895337278647'
    },
    invalidLink: {
        status: false,
        creator: creator,
        message: 'Masukan link yang valid!'
    },
    invalidkata: {
        status: false,
        creator: creator,
        message: 'Kata tidak valid'
    },
    invalidtext: {
        status: false,
        creator: creator,
        message: 'Teks tidak valid'
    },
    longtext: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Teks terlalu panjang!'
    },
    notAddApiKey: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    notbase64: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Masukan parameter teks base64'
    },
    notfiles: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Tidak ada file yang masuk'
    },
    number: {
        status: false,
        creator: creator,
        code: 406,
        message: 'Teks harus berupa angka!'
    },
    blockedKey: {
        status: false,
        code: 406,
        creator: creator,
        message: 'Apikey ini sudah diblokir oleh Owner!',
        apiLink: 'kuhong-api.herokuapp.com'
    },
    maintenance: {
        status: false,
        code: 404,
        creator: creator,
        message: 'Fitur ini sedang dalam Perbaikan'
    },
    blocked: {
        message: 'Kamu telah diblokir oleh Owner!'
    },
    error: {
        status: false,
        code: 403,
        creator: creator,
        message: 'Error! :('
    }
}

// Respone Template :
var invalidKey = encryptHtml(fs.readFileSync(__path + '/views/invalidKey.html').toString())
var error = encryptHtml(fs.readFileSync(__path + '/views/error.html').toString())
var mtc = encryptHtml(fs.readFileSync(__path + '/views/maintenance.html').toString())
var notfound = encryptHtml(fs.readFileSync(__path + '/views/notfound.html').toString())

// Random Functions :
var len = 15
var arr = '_0123456789-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890_'
var random = '';
for (var i = len; i > 0; i--) {
    random += arr[Math.floor(Math.random() * arr.length)];
}
var lenn = 10
var random2 = '';
for (var i = lenn; i > 0; i--) {
    random2 += arr[Math.floor(Math.random() * arr.length)];
}
var randomText = random + random2;
var randomNumber = Math.floor(Math.random() * 1000000);


// Api Features :
router.get('/getmusic', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    res.sendFile(__path + '/src/music/' + pickRandom(await fs.readdirSync(__path + '/src/music')))
})

router.post('/getinfo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var name = req.body.name,
          url = req.body.url,
          param = decodeURIComponent(req.body.param),
          method = req.body.method;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!(name || url || param || method)) return res.json({ message: 'Input parameter tidak lengkap' })
        
    try {
    	var key = free_apikey
        if (name == 'CraftCoding') key = apikey
        if (param == 'false') param = 'apikey=APIKEY'
        else param = param + '&apikey=APIKEY'
        var fullUrl = `https://kuhong-api.herokuapp.com/${url}?${param.split('APIKEY')[0] + key}`
        var data = await fetch(fullUrl, { method: method.toUpperCase() })
        var entries = new URLSearchParams(param.split('&apikey=APIKEY')[0]).entries()
        var params = ''
        for (var entry of entries) {
        params += entry[0] + ', '
        }
        if (params == 'apikey, ') params = ''
        var responseType = data.headers.get('content-type').split(';')[0]
	    if (data.status !== 200) res.status(data.status)
        var status = 'Active'
        if (/html/i.test(responseType)) status = 'Error', responseType = 'Error'
        if (!/text|json/i.test(responseType)) responseType = responseType + ' (Buffer)'
        if (responseType == 'Error (Buffer)') responseType = 'Response Error'
        if (/json/i.test(responseType)) responseType = 'text/json (String)'

       res.json({
       	   status: status,
           code: data.status,
           apiName: url.split('api/')[1].toUpperCase(),
           pathUrl: url,
           fullUrl: fullUrl,
           param: params + 'apikey',
           method: method.toUpperCase(),
           responseType: responseType
       })
    } catch (e) {
   	console.error(e)
     res.status(403).send(error)
  }
})

router.post('/cekapikey', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.body.apikey;

    var name = 'Guest'
    var status = 'Active'
    var type = 'Free'
    var limit = 'Limited! (Berubah setiap saat)'
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput == owner_apikey || apikeyInput == apikey || apikeyInput == custom_apikey) {
    	 name = 'CraftCoding'
         type = 'Premium'
         limit = 'Unlimited!'
    }
    var result = `Apikey Valid!\n\nName: ${name}\nApikey: ${apikeyInput}\nStatus: ${status}\nType: ${type}\nLimit: ${limit}`
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey)) result = 'Apikey Tidak Valid!'

    res.json({ status: true, result: result })
})

router.post('/login', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/users')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var name = req.body.name;

           var mail = name.toLowerCase() + '@gmail.com'
           var userID = randomNumber
           var accountType = 'Free'
           var key = 'Not Premium'
           if (name == 'CraftCoding') {
               accountType = 'Premium'
               key = apikey
           }
           if (!name || name == '' || name == 'Guest' || name == 'GUEST' || name == 'guest' || name == null || name == 'null') {
                name = 'Guest'
                mail = 'guest' + randomNumber + '@gmail.com'
                userID = 'Login First'
                accountType = 'Login First'
                key = 'Login First'
           }

	var result = {
            name: name,
            mail: mail,
            userID: userID,
            ip: ip,
            accountType: accountType,
            apikey: key,
            serverID: randomText
        }
        await fs.writeFileSync(__path + '/database.json', JSON.stringify(result))

   res.json({ status: true, message: 'Database telah diupdate!' })
})

router.post('/redeem', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var code = req.body.code;

    if (!code) return res.json({
        message: 'Masukan parameter code'
    })

    if (code !== redeem_code) return res.json({ status: false, result: 'Kode Redeem Tidak Valid!' })
    else return res.json({ status: true, result: 'Kode Redeem Valid!', premium_key: apikey, custom_key: custom_apikey })
})

router.post('/getapikey', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)

    res.json({
        status: true,
        creator: creator,
        info: 'Apikey akan berubah secara otomatis setiap saat,, beli Premium agar apikey tidak otomatis berubah.',
        free_apikey: free_apikey
    })
})

router.post('/console', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var code = req.body.code,
          fullLogs = req.body.full;

    try {
    if (!code) return res.json({ message: 'Masukan parameter code' })

      await fs.writeFileSync('./console.js', code)
      await exec('node ./console.js', (stdout, stderr, err) => {
      var result
      if (code.length > 1000) result = 'Kode yang anda masukan terlalu panjang!'
      if (stderr) result = stderr
      if (stdout) result = stdout
      if (err) result = fullLogs == 'true' ? err.message : formatLogs(err.message)

           res.json({ result: result })
       })
    } catch (e) {
    	console.error(e)
      res.json({ result: fullLogs == 'true' ? e.message : formatLogs(e.message) })
  }
})

router.post('/send', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)

    try {
    if (!req.body) return res.json({ message: 'Masukan parameter' })
    var message
    var data = JSON.parse(await fs.readFileSync(__path + '/database.json').toString())
    if (req.body.request) message = `REQUEST :\n\nDari: ${data.name}\nIP: ${data.ip}\nAkun: ${data.accountType}\nPesan: ${req.body.request}`
    if (req.body.report) message = `REPORT :\n\nDari: ${data.name}\nIP: ${data.ip}\nAkun: ${data.accountType}\nPesan: ${req.body.report}`
    await (await fetch(`https://api.callmebot.com/whatsapp.php?phone=+62895337278647&text=${message}&apikey=${callmebot_key}`)).text()

	res.json({
	    status: true,
	    creator: creator,
	    message: '[!] Pesan telah terkirim ke Owner!'
	})
    } catch (e) {
    	console.error(e)
      res.status(403).send(error)
  }
})

router.all('/bot.js', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
    app = req.body.app,
    sender = req.body.sender,
    message = req.body.message,
    group_name = req.body.group_name,
    phone = req.body.phone;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
	if (!(app || sender || message || group_name || phone || apikeyInput)) return res.json({ status: false, creator: creator, reply: 'Input Parameter tidak lengkap' })
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey)) return res.json({ status: false, creator: creator, reply: '*「 AKSES DITOLAK 」*\n\nApikey Bot Tidak Valid!\n\nSilahkan beli apikeynya ke Owner:\nhttps://wa.me/62895337278647' })

try {
        var reply = (message) => res.json({ status: true, creator: creator, reply: message })
	var command = message.slice(1)
        var usedPrefix = message.slice(0, 1)
        await handler(message, req, reply, {
      	   app: app,
           sender: sender,
           group_name: group_name,
           phone: phone,
           usedPrefix: usedPrefix,
	   command: command
        })
} catch (e) {
    console.error(e)
  res.json({ status: true, creator: creator, reply: formatLogs(e.message) })
  }
})

router.get('/tiktok', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandler.noturl)

    TikTokScraper.getVideoMeta(url)
        .then(result => {
            res.json({
                status: true,
                creator: creator,
                result: result
            })
        })
        .catch(e => {
            res.json(loghandler.invalidLink)
        })
})

router.get('/tiktokstalk', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        username = req.query.username

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(result => {
            res.json({
                status: true,
                creator: creator,
                result: result
            })
        })
        .catch(e => {
            res.json({
                status: false,
                creator: creator,
                message: 'User tidak ditemukan!'
            })
        })
})

router.get('/quotes', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var data = fs.readFileSync(__path + '/lib/scraper/quotes.json')
        var json = JSON.parse(data);
        var index = Math.floor(Math.random() * json.length);
        var object = json[index];

        res.json({
            status: true,
            creator: creator,
            result: object.quotes
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/katabijak', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/katabijax.txt')
        .then(result => result.text())
        .then(body => {
            var json = body.split('\n')
            var result = json[Math.floor(Math.random() * json.length)]

            res.json({
                status: true,
                creator: creator,
                result: result
            })
        })
})

router.get('/infonpm', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        query = req.query.query

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!query) return res.json(loghandler.notquery)

    var result = await (await fetch(`https://registry.npmjs.org/${query}`)).json()

           res.json({
                status: true,
                creator: creator,
                result: result
           })
})

router.get('/jadwalbioskop', (req, res) => {
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    var cheerio = require('cheerio')

    axios.get('https://jadwalnonton.com/now-playing').then((result) => {
        var $ = cheerio.load(result.data)
        var title = []
        var url = []
        var img = []
        $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
            url.push($(rest).attr('href'))
        })
        $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
            title.push($(rest).attr('alt'))
        })
        $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
            img.push($(rest).attr('src'))
        })
        var result = []
        for (var i = 0; i < url.length; i++) {
            result.push({
                url: url[i],
                title: title[i],
                img: img[i]
            })
        }
        res.send({
        	status: true,
            creator: creator,
            result: result
        })
    })
})

router.get('/tinyurl', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandler.noturl)

    try {
    await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
        .then(result => result.text())
        .then(body => {

            res.json({
                status: true,
                creator: creator,
                result: body,
                message: 'succes'
            })
        })
    } catch (e) {
            console.error(e)
        res.json(loghandler.invalidLink)
     }
})

router.get('/base', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var type = req.query.type,
        encode = req.query.encode,
        decode = req.query.decode,
        apikeyInput = req.query.apikey;
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (!type) return res.json({
        status: false,
        creator,
        code: 404,
        message: 'Masukan parameter type, type yang tersedia : base4 , base32'
    })
    if (type == 'base64' && encode) {
        Base('b64enc', encode)
            .then(result => {
                res.json({
                    status: true,
                    creator: creator,
                    result
                })
            })
    } else if (type == 'base64' && decode) {
        Base('b64dec', decode)
            .then(result => {
                res.json({
                    status: true,
                    creator: creator,
                    result
                })
            })
    } else if (type == 'base32' && encode) {
        Base('b32enc', encode)
            .then(result => {
                res.json({
                    status: true,
                    creator: creator,
                    result
                })
            })
    } else if (type == 'base32' && decode) {
        Base('b32dec', decode)
            .then(result => {
                res.json({
                    status: true,
                    creator: creator,
                    result
                })
            })
    } else if (!(encode || decode)) {
        res.json({
            status: false,
            creator: creator,
            message: 'tambahkan parameter encode/decode'
        })
    } else {
        res.status(403).send(error)
    }
})

router.get('/nulis', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var fontPath = __path + '/lib/font/Zahraaa.ttf'
        var inputPath = __path + '/lib/kertas/nulis.jpg'
        var outputPath = __path + '/tmp/hasil.jpg'
        var fixedText = textWrap(text, 47)
        spawn('convert', [
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
            .on('error', () => res.status(403).send(error))
            .on('exit', () => {
                res.sendFile(outputPath)
            })
    } catch (e) {
        console.error(e);
        res.status(403).send(error)
    }
})

router.get('/nulis2', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var d = new Date
        var tgl = d.toLocaleDateString('id-Id')
        var hari = d.toLocaleDateString('id-Id', {
            weekday: 'long'
        })
        var fontPath = __path + '/lib/font/Zahraaa.ttf'
        var inputPath = __path + '/lib/kertas/nulis2.jpg'
        var outputPath = __path + '/tmp/hasil2.jpg'
        var fixedText = textWrap(text, 55)
        spawn('convert', [
                inputPath,
                '-font',
                fontPath,
                '-size',
                '1024x784',
                '-pointsize',
                '20',
                '-interline-spacing',
                '1',
                '-annotate',
                '+806+78',
                hari,
                '-font',
                fontPath,
                '-size',
                '1024x784',
                '-pointsize',
                '18',
                '-interline-spacing',
                '1',
                '-annotate',
                '+806+102',
                tgl,
                '-font',
                fontPath,
                '-size',
                '1024x784',
                '-pointsize',
                '20',
                '-interline-spacing',
                '-7.5',
                '-annotate',
                '+344+142',
                fixedText,
                outputPath
            ])
            .on('error', () => res.status(403).send(error))
            .on('exit', () => {
                res.sendFile(outputPath)
            })
    } catch (e) {
        console.error(e);
        res.status(403).send(error)
    }
})

router.get('/textmaker', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var theme = req.query.theme,
        text = req.query.text,
        text2 = req.query.text2,
        text3 = req.query.text3,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!theme) return res.json(loghandler.nottheme)
    if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
    if (!text) return res.json(loghandler.nottext)

    if (theme == 'glitch') {
        if (!text2) return res.json(loghandler.nottext2)
        try {
            request.post({
                url: 'https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnail').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h
                        fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                            .then(response => response.json())
                            .then(data => {
                                res.json({
                                    status: true,
                                    creator: creator,
                                    result: data.data.url
                                })
                            })
                    })
                }
            })
        } catch (e) {
            console.error(e);
            res.status(403).send(error)
        }
    } else if (theme == 'google-suggestion') {
        if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
        request.post({
            url: 'https://photooxy.com/other-design/make-google-suggestion-photos-238.html',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
        }, (e, r, b) => {
            if (!e) {
                $ = cheerio.load(b)
                $('.thumbnail').find('img').each(function() {
                    h = $(this).attr('src')
                    var result = 'https://photooxy.com' + h
                    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                        .then(response => response.json())
                        .then(data => {
                            var urlnya = data.data.url,
                                delete_url = data.data.delete_url;
                            res.json({
                                status: true,
                                creator: creator,
                                message: 'succes',
                                result: {
                                    url: urlnya,
                                    delete_url: delete_url,
                                    info: 'url akan hilang setelah 2 menit'
                                }
                            })
                        })
                })
            }
        })
    } else {
        res.status(403).send(error)
    }
})

router.get('/textmaker/game', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var theme = req.query.theme,
        text = req.query.text,
        text2 = req.query.text2,
        text3 = req.query.text3,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!theme) return res.json(loghandler.nottheme)
    if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
    if (!text) return res.json(loghandler.nottext)

    if (theme == 'pubg') {
        if (!text2) return rs.jso(loghandler.nottext2)
        try {
            request.post({
                url: 'https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnail').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h
                        fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                            .then(response => response.json())
                            .then(data => {
                                var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                res.json({
                                    status: true,
                                    creator: creator,
                                    message: 'succes',
                                    result: {
                                        url: urlnya,
                                        delete_url: delete_url,
                                        info: 'url akan hilang setelah 2 menit'
                                    }
                                })
                            })
                    })
                }
            })
        } catch (e) {
            console.error(e);
            res.status(403).send(error)
        }
    } else if (theme == 'battlefield') {
        if (!text2) return res.json(loghandler.nottext2)
        request.post({
            url: 'https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `text_1=${text}&text_2=${text2}&login=OK`,
        }, (e, r, b) => {
            if (!e) {
                $ = cheerio.load(b)
                $('.thumbnail').find('img').each(function() {
                    h = $(this).attr('src')
                    var result = 'https://photooxy.com' + h
                    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                        .then(response => response.json())
                        .then(data => {
                            var urlnya = data.data.url,
                                delete_url = data.data.delete_url;
                            res.json({
                                status: true,
                                creator: creator,
                                message: 'succes',
                                result: {
                                    url: urlnya,
                                    delete_url: delete_url,
                                    info: 'url akan hilang setelah 2 menit'
                                }
                            })
                        })
                })
            }
        })
    } else {
        res.status(403).send(error)
    }
})

router.get('/textmaker/senja', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var theme = req.query.theme,
        text = req.query.text,
        text2 = req.query.text2,
        text3 = req.query.text3,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!theme) return res.json(loghandler.nottheme)
    if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
    if (!text) return res.json(loghandler.nottext)

    if (theme == 'coffee-cup') {
        try {
            request.post({
                url: 'https://photooxy.com/logo-and-text-effcts/put-any-text-in-to-coffee-cup-371.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnail').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h
                        fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                            .then(response => response.json())
                            .then(data => {
                                var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                res.json({
                                    status: true,
                                    creator: creator,
                                    message: 'succes',
                                    result: {
                                        url: urlnya,
                                        delete_url: delete_url,
                                        info: 'url akan hilang setelah 2 menit'
                                    }
                                })
                            })
                    })
                }
            })
        } catch (e) {
            console.error(e);
            res.status(403).send(error)
        }
    } else if (theme == 'coffee-cup2') {
        request.post({
            url: 'https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `text_1=${text}&login=OK`,
        }, (e, r, b) => {
            if (!e) {
                $ = cheerio.load(b)
                $('.thumbnail').find('img').each(function() {
                    h = $(this).attr('src')
                    var result = 'https://photooxy.com' + h
                    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                        .then(response => response.json())
                        .then(data => {
                            var urlnya = data.data.url,
                                delete_url = data.data.delete_url;
                            res.json({
                                status: true,
                                creator: creator,
                                message: 'succes',
                                result: {
                                    url: urlnya,
                                    delete_url: delete_url,
                                    info: 'url akan hilang setelah 2 menit'
                                }
                            })
                        })
                })
            }
        })
    } else {
        res.status(403).send(error)
    }
})

router.get('/kisahnabi', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var nabi = req.query.nabi,
        apikeyInput = req.query.apikey;

    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    Searchnabi(nabi)
        .then(result => {
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            console.log('Error :', color(e, 'red'))
            res.status(403).send(error)
        })
})

router.get('/infogempa', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    Gempa()
        .then(result => {
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            console.log('Error :', color(e, 'red'))
            res.status(403).send(error)
        })
})

router.get('/hadits', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        kitab = req.query.kitab,
        nomor = req.query.nomor

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!kitab) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter kitab'
    })
    if (!nomor) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter nomor'
    })

    fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})

router.get('/quran', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        surah = req.query.surah,
        ayat = req.query.ayat

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!surah) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter surah'
    })
    if (!ayat) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter ayat'
    })

    fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/fb', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter url'
    })

    fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json(result)
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/textmaker/metallic', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var theme = req.query.theme,
        text = req.query.text,
        text2 = req.query.text2,
        text3 = req.query.text3,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!theme) return res.json(loghandler.nottheme)
    if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
    if (!text) return res.json(loghandler.nottext)

    if (theme == 'neon') {
        try {
            request.post({
                url: 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnail').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h
                        fetch(encodeURI(`https://api.imgbb.om/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                            .then(response => response.json())
                            .then(data => {
                                var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                res.json({
                                    status: true,
                                    creator: creator,
                                    message: 'succes',
                                    result: {
                                        url: urlnya,
                                        delete_url: delete_url,
                                        info: 'url akan hilang setelah 2 menit'
                                    }
                                })
                            })
                    })
                }
            })
        } catch (e) {
            console.error(e);
            res.status(403).send(error)
        }
    } else if (theme == 'glow') {
        request.post({
            url: 'https://photooxy.com/other-design/create-metallic-text-glow-online-188.html',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `text_1=${text}&login=OK`,
        }, (e, r, b) => {
            if (!e) {
                $ = cheerio.load(b)
                $('.thumbnail').find('img').each(function() {
                    h = $(this).attr('src')
                    var result = 'https://photooxy.com' + h
                    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                        .then(response => response.json())
                        .then(data => {
                            var urlnya = data.data.url,
                                delete_url = data.data.delete_url;
                            res.json({
                                status: true,
                                creator: creator,
                                message: 'succes',
                                result: {
                                    url: urlnya,
                                    delete_url: delete_url,
                                    info: 'url akan hilang setelah 2 menit'
                                }
                            })
                        })
                })
            }
        })
    } else {
        res.status(403).send(error)
    }
})

router.get('/textmaker/alam', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var theme = req.query.theme,
        text = req.query.text,
        text2 = req.query.text2,
        text3 = req.query.text3,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!theme) return res.json(loghandler.nottheme)
    if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
    if (!text) return res.json(loghandler.nottext)

    if (theme == 'summer') {
        try {
            request.post({
                url: 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnai').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h
                        fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                            .then(response => response.json())
                            .then(data => {
                                var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                res.json({
                                    status: true,
                                    creator: creator,
                                    message: 'succes',
                                    result: {
                                        url: urlnya,
                                        delete_url: delete_url,
                                        info: 'url akan hilang setelah 2 menit'
                                    }
                                })
                            })
                    })
                }
            })
        } catch (e) {
            console.error(e);
            res.status(403).send(error)
        }
    } else if (theme == 'flower') {
        request.post({
            url: 'https://photooxy.com/art-effects/flower-typography-text-effect-164.html',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `text_1=${text}&login=OK`,
        }, (e, r, b) => {
            if (!e) {
                $ = cheerio.load(b)
                $('.thumbnail').find('img').each(function() {
                    h = $(this).attr('src')
                    var result = 'https://photooxy.com' + h
                    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                        .then(response => response.json())
                        .then(data => {
                            var urlnya = data.data.url,
                                delete_url = data.data.delete_url;
                            res.json({
                                status: true,
                                creator: creator,
                                message: 'succes',
                                result: {
                                    url: urlnya,
                                    delete_url: delete_url,
                                    info: 'url akan hilang setelah 2 menit'
                                }
                            })
                        })
                })
            }
        })
    } else {
        res.status(403).send(error)
    }
})

router.get('/flaming', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
            request.post({
                url: 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnail').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h

                        res.json({
                        	status: true,
                            creator: creator,
                            result: result
                        })
                    })
                }
            })
    } catch (e) {
            console.error(e);
            res.status(403).send(error)
    }
})

router.get('/darkneon', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
            request.post({
                url: 'https://photooxy.com/logo-and-text-effects/create-glowing-neon-text-effect-343.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnail').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h

                        res.json({
                        	status: true,
                            creator: creator,
                            result: result
                        })
                    })
                }
            })
    } catch (e) {
            console.error(e);
            res.status(403).send(error)
    }
})

router.get('/muslim/tahlil', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/wirid', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/doaharian', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/niatshalat', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/niatisya', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/muslim/niatashar', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/wallpaper/cyberspace', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/wallpaper/muslim', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/wallpaper/programming', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQ-Results/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/wikipedia', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        search = req.query.search

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!search) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter search'
    })

    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})

router.get('/randomquote/muslim', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/drakorasia', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        search = req.query.searc

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!search) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter search'
    })

    fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/jadwalshalat', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        kota = req.query.kota

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!kota) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter kota'
    })

    fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/fakedata', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        country = req.query.country

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!country) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter country'
    })

    fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})

router.get('/halah', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    var txt = 'a'
    var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, txt.toUpperCase())

    res.json({
        status: true,
        creator: creator,
        result: result
    })
})

router.get('/hilih', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    var txt = 'i'
    var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, txt.toUpperCase())

    res.json({
        status: true,
        creator: creator,
        result: result
    })
})

router.get('/huluh', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    var txt = 'u'
    var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, txt.toUpperCase())

    res.json({
        status: true,
        creator: creator,
        result: result
    })
})

router.get('/heleh', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    var txt = 'e'
    var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, txt.toUpperCase())

    res.json({
        status: true,
        creator: creator,
        result: result
    })
})

router.get('/holoh', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    var txt = 'o'
    var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, txt.toUpperCase())

    res.json({
        status: true,
        creator: creator,
        result: result
    })
})

router.get('/lirik', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        lagu = req.query.lagu

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!lagu) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter kata'
    })

    var json = await (await fetch(`https://some-random-api.ml/lyrics?title=${lagu}`)).json()
    if (json.result.lirik == undefined) return res.json({ status: false, error: 'Lirik tidak ditemukan!' })
    res.json({
    	status: true,
        creator: creator,
        result: json.result.lirik
    })
})

router.get('/chord', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        lagu = req.query.lagu

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!lagu) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter kata'
    })

    var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/chord?q=${lagu}`)).json()
    if (json.result == undefined) return res.json({ status: false, error: 'Chord tidak ditemukan!' })

    res.json({
    	status: true,
        creator: creator,
        result: json.result
    })
})


router.get('/random/asmaulhusna', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/kbbi', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        kata = req.query.kata

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!kata) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter kata'
    })

    fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json(result)
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/covidindo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    var result = await (await fetch(`https://api.kawalcorona.com/indonesia`)).json()
          res.json({
          	status: true,
              creator: creator,
              result
          })
})


router.get('/covidworld', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    var result = await (await fetch(`https://api.kawalcorona.com`)).json()
          res.json({
          	status: true,
              creator: creator,
              result
              })
})


router.get('/kodepos', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        kota = req.query.kota

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!kota) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter kota'
    })

    fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/infocuaca', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        provinsi = req.query.provinsi

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!provinsi) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter provinsi'
    })
    fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/${provinsi}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/infocuaca/bandara', async (req, rs, next) => {
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/infocuaca/dunia', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/infotsunami', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
            var result = dta;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})

router.get('/quotes/kanye', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/translate', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        lang = req.query.lang,
        text = req.query.text;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!lang) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter bahasa'
    })
    if (!text) return res.json(loghandler.nottext)

    try {
        var result = await translate(text, {
            tld: 'cn',
            to: lang,
        })

        res.json({
            status: true,
            creator: creator,
            lang: lang,
            text: text,
            result: result[0]
        })
    } catch (e) {
        res.status(403).send(error)
        console.error(e)
    }
})


router.get('/anime/kusonime', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        search = req.query.search

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!search) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter search'
    })
    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/gabut', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/manga', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        search = req.query.search

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!search) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter search'
    })
    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/random/wallpaper', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/kuis/caklontong', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var data = fs.readFileSync(__path + '/lib/scraper/caklontong.json')
        var json = JSON.parse(data);
        var index = Math.floor(Math.random() * json.length);
        var object = json[index];

        res.json({
            status: true,
            creator: creator,
            soal: object.result.soal,
            jawaban: object.result.jawaban,
            desk: object.result.desc,
            poin: object.result.poin
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/kuis/tebakgambar', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var data = fs.readFileSync(__path + '/lib/scraper/tebakgambar.json')
        var json = JSON.parse(data);
        var index = Math.floor(Math.random() * json.length);
        var object = json[index];

        res.json({
            status: true,
            creator: creator,
            soal: object.result.soal,
            jawaban: object.result.jawaban,
            poin: object.result.poin
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/news/cnn', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        type = req.query.type

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!type) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter type'
    })

    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news/${type}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/news/cnbc', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        type = req.query.type

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!type) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter type'
    })

    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news/${type}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/news/republika', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        type = req.query.type

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!type) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter type'
    })

    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${type}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/news/tempo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        type = req.query.type

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!type) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter type'
    })

    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${type}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/news/antara', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        type = req.query.type

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!type) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter type'
    })

    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${type}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/news/kumparan', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/filmapik/search', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        film = req.query.film

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!film) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter film'
    })

    fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${film}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/filmapik/kategori', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        film = req.query.film

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!film) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter film'
    })

    fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/filmapik/play', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        id = req.query.id

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!id) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter id'
    })

    fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${id}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/filmapik/terbaru', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/lk21/search', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        film = req.query.film

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!film) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter film'
    })

    fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${film}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/lk21/terbaru', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/lk21/comingsoon', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/lk21/tvseries', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/lk21/year', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        tahun = req.query.tahun

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!tahun) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter tahun'
    })

    fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/year?year=${tahun}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/lk21/country', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        negara = req.query.negara

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!negara) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter negara'
    })

    fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/country?country=${negara}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/lk21/genre', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        tipe = req.query.tipe

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!tipe) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter tipe'
    })

    fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/genre?genre=${tipe}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/textmaker/random', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var theme = req.query.theme,
        text = req.query.text,
        text2 = req.query.text2,
        text3 = req.query.text3,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!theme) return res.json(loghandler.nottheme)
    if (theme != 'text-burn' && theme != 'art-quote') return res.json(loghandler.notheme)
    if (!text) return res.json(loghandler.nottext)

    if (theme == 'text-burn') {
        try {
            request.post({
                url: 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnail').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h
                        fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                            .then(response => response.json())
                            .then(data => {
                                var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                res.json({
                                    status: true,
                                    creator: creator,
                                    message: 'succes',
                                    result: {
                                        url: urlnya,
                                        delete_url: delete_url,
                                        info: 'url akan hilang setelah 2 menit'
                                    }
                                })
                            })
                    })
                }
            })
        } catch (e) {
            console.error(e);
            res.status(403).send(error)
        }
    } else if (theme == 'art-quote') {
        request.post({
            url: 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `text_1=${text}&login=OK`,
        }, (e, r, b) => {
            if (!e) {
                $ = cheerio.load(b)
                $('.thumbnail').find('img').each(function() {
                    h = $(this).attr('src')
                    var result = 'https://photooxy.com' + h
                    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                        .then(response => response.json())
                        .then(data => {
                            var urlnya = data.data.url,
                                delete_url = data.data.delete_url;
                            res.json({
                                status: true,
                                creator: creator,
                                message: 'succes',
                                result: {
                                    url: urlnya,
                                    delete_url: delete_url,
                                    info: 'url akan hilang setelah 2 menit'
                                }
                            })
                        })
                })
            }
        })
    } else {
        res.status(403).send(error)
    }
})

router.get('/textmaker/roses', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var theme = req.query.theme,
        text = req.query.text,
        text2 = req.query.text2,
        text3 = req.query.text3,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!theme) return res.json(loghandler.nottheme)
    if (theme != 'wooden-boarch' && theme != 'golden') return res.json(loghandler.notheme)
    if (!text) return res.json(loghandler.nottext)

    if (theme == 'wooden-boarch') {
        try {
            request.post({
                url: 'https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnail').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h
                        fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                            .then(response => response.json())
                            .then(data => {
                                var urlnya = data.data.url,
                                    delete_url = data.data.delete_url;
                                res.json({
                                    status: true,
                                    creator: creator,
                                    message: 'succes',
                                    result: {
                                        url: urlnya,
                                        delete_url: delete_url,
                                        info: 'url akan hilang setelah 2 menit'
                                    }
                                })
                            })
                    })
                }
            })
        } catch (e) {
            console.error(e);
            res.status(403).send(error)
        }
    } else if (theme == 'golden') {
        request.post({
            url: 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `text_1=${text}&login=OK`,
        }, (e, r, b) => {
            if (!e) {
                $ = heerio.load(b)
                $('.thumbnail').find('img').each(function() {
                    h = $(this).attr('src')
                    var result = 'https://photooxy.com' + h
                    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${result}&name=${randomText}`))
                        .then(response => response.json())
                        .then(data => {
                            var urlnya = data.data.url,
                                delete_url = data.data.delete_url;
                            res.json({
                                status: true,
                                creator: creator,
                                message: 'succes',
                                result: {
                                    url: urlnya,
                                    delete_url: delete_url,
                                    info: 'url akan hilang setelah 2 menit'
                                }
                            })
                        })
                })
            }
        })
    } else {
        res.status(403).send(error)
    }
})

router.get('/ytmp4', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandler.noturl)

    var server = (url || 'id4').toLowerCase()
    var {
        dl_link,
        thumb,
        title,
        filesize,
        filesizeF
    } = await ytv(url, servers.includes(server) ? server : 'id4')

    res.json({
        status: true,
        creator: creator,
        result: {
            title: title,
            thumb: thumb,
            size: filesizeF,
            link: dl_link
        }
    })
})


router.get('/ytmp3', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandler.noturl)

    var server = (url || 'id4').toLowerCase()
    var {
        dl_link,
        thumb,
        title,
        filesize,
        filesizeF
    } = await ytv(url, servers.includes(server) ? server : 'id4')

    res.json({
        status: true,
        creator: creator,
        result: {
            title: title,
            thumb: thumb,
            size: filesizeF,
            link: dl_link
        }
    })
})


router.get('/igstalk', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        username = req.query.username

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!username) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter username'
    })

    await instagramScraper.getUserData(username).then((result) => {
        res.json({
            status: true,
            creator: creator,
            result: result
        })
    }).catch(() => res.json({
        status: false,
        creator: creator,
        message: 'User tidak ditemukan!'
    }))
})


router.get('/maker', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker?text=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/maker2', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter text'
    })

    fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker2?text=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/maker3', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter text'
    })

    fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker3?text=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/maker4', async (rq, res, next) => {
    var apikeyInput = req.query.apikey,
        text = req.query.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter text'
    })

    fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker4?text=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/maker3d', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter text'
    })

    fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d?text=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/maker3d/no2', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter text'
    })

    fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-2?text=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/maker3d/no3', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.qery.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter text'
    })

    fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-3?text=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/maker3d/no4', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter text'
    })

    fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-4?text=${text}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                creator: creator,
                result
            })
        })
        .catch(e => {
            res.status(403).send(error)
        })
})


router.get('/ytsearch', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        q = req.query.q

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!q) return res.json(loghandler.notquery)

    var results = await yts(q)
    var data = results.all.find(video => video.seconds < 3600)
    if (!data) return res.json({
        message: `Hasil pencarian '${q}' tidak ditemukan!`
    })
    var {
        dl_link,
        thumb,
        title,
        filesize,
        filesizeF
    } = await (ytv)(data.url, 'id4')

    res.json({
        status: true,
        creator: creator,
        result: {
            title: title,
            duration: data.timestamp,
            views: `${data.views} views`,
            uploaded: data.ago,
            thumb: thumb,
            url: data.url,
            mp4_link: dl_link
        },
        channel: {
            name: data.author.name,
            link: data.author.url
        }
    })
})


router.get('/maker/special/transformer', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter text'
    })
    try {
        var json = await (await fetch(`https://textmaker-api-zahirr.herokuapp.com/api/special/transformer?text=${text}`)).json()
        var buffer = await getBuffer(json.results)
        await fs.writeFileSync(__path + '/tmp/transformer.png', buffer)

        res.sendFile(__path + '/tmp/transformer.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/maker/special/epep', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json({
        status: false,
        creator: creator,
        message: 'Masukan parameter text'
    })

    try {
        var json = await (await fetch(`https://textmaker-api-zahirr.herokuapp.com/api/special/sertifikatepep?text=${text}`)).json()
        var buffer = await getBuffer(json.results)
        await fs.writeFileSync(__path + '/tmp/epepserti.png', buffer)

        res.sendFile(__path + '/tmp/epepserti.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/tomp4', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandler.noturl)
    if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
        axios.get(`https://ezgif.com/webp-to-mp4?url=${url}`).then((data) => {
            var $ = cheerio.load(data.data)
            var bodyFormThen = new FormData()
            var file = $('input[name="file"]').attr('value')
            var token = $('input[name="token"]').attr('value')
            var convert = $('input[name="file"]').attr('value')
            var gotdata = {
                file: file,
                token: token,
                convert: convert
            }
            bodyFormThen.append('file', gotdata.file)
            bodyFormThen.append('token', gotdata.token)
            bodyFormThen.append('convert', gotdata.convert)
            axios({
                method: 'post',
                url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                data: bodyFormThen,
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
                }
            }).then((data2) => {
                var $ = cheerio.load(data2.data)
                var result = 'https:' + $('div#output > p.outfile > video > source').attr('src')

                res.json({
                    status: true,
                    creator: creator,
                    message: 'succes',
                    result: result
                })
            })
        })

    } catch (e) {
        console.error(e);
        res.status(403).send(error)
    }
})

router.get('/ocr', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        img = req.query.img;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!img) return res.json(loghandler.notimg)
    if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

    var buffer = await getBuffer(img)
    await fs.writeFileSync(__path + '/tmp/ocr.png', buffer)
    var media = __path + '/tmp/ocr.png'
    await tesseract.recognize(media, { lang: 'eng+ind', oem: 1, psm: 3 })
          .then(result => {

            res.json({
                status: true,
                creator: creator,
                result: result.trim()
            })
        })
        .catch(error => {
            res.status(403).send(error)
            console.log(error.message)
        })
})

router.get('/removebg', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        img = req.query.img;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var media = await getBuffer(img)
        await fs.writeFileSync(__path + '/tmp/nobg_tmp.png', media)
        var inputPath = __path + '/tmp/nobg_tmp.png'
        var outputPath = __path + '/tmp/nobg.png'
        await removeBackgroundFromImageFile({
            path: inputPath,
            apiKey: removebg_key,
            size: 'auto',
            type: 'auto',
            outputPath
        }).then((result) => {
            var hasil = Buffer.from(result.base64img, 'base64')
            fs.writeFileSync(__path + '/tmp/nobg.png', hasil)

            res.sendFile(__path + '/tmp/nobg.png')
        })
    } catch (e) {
        console.error(e);
        res.status(403).send(error)
    }
})

router.get('/simsimi', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var kata = req.query.kata,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!kata) return res.json(loghandler.notkata)

    try {
        var json = await (await fetch(`https://simsumi.herokuapp.com/api?text=${kata}&lang=id`)).json()
        if (json.success == '' || json.success == undefined || /Limit/i.test(json.success)) {
            json = await (await fetch(`https://api.simsimi.net/v1/?text=${kata}&lang=id`)).json()
            if (json.success == undefined) return res.status(403).send(error)
        }

        res.json({
            status: true,
            creator: creator,
            result: json.success
        })
    } catch (e) {
    	console.error(e)
    res.status(403).send(error)
  }
})

router.get('/binary', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.encode

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var result = ''
        for (var i = 0; i < text.length; i++) {
            result += text[i].charCodeAt(0).toString(2)
        }

        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        res.status(403).send(error)
    }
})

router.get('/binary', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.decode;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var json = await (await fetch(`https://some-random-api.ml/binary?decode=${text}`)).json()

        res.json({
            status: true,
            creator: creator,
            result: json.text
        })
    } catch (e) {
        res.status(403).send(error)
    }
})

router.get('/tobase64', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        img = req.query.img;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!img) return res.json(loghandler.notimg)

    try {
        var result = await imageToBase64(img)
        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        res.status(403).send(error)
    }
})

router.get('/tomedia', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        base64 = req.query.base64;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!base64) return res.json(loghandler.notbase64)
    if (base64.startsWith('data')) return res.json({
        message: `Gunakan teks base64 tanpa data:image/jpeg!`
    })

    try {
        var result = Buffer.from(base64, 'base64')
        res.sendFile(result)
    } catch (e) {
        res.status(403).send(error)
    }
})

router.get('/ttp', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var json = await (await fetch(`https://api.areltiyan.site/sticker_maker?text=${text}`)).json()
        var hasil = json.base64.split`,` [1]
        await fs.writeFileSync(__path + '/tmp/ttp.png', hasil, 'base64')

        res.sendFile(__path + '/tmp/ttp.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/dadu', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    var random = Math.floor(Math.random() * 6) + 1
    var hasil = 'https://www.random.org/dice/dice' + random + '.png'
    var data = await (await fetch(hasil)).buffer()

    await fs.writeFileSync(__path + '/tmp/dadu.png', data)
    res.sendFile(__path + '/tmp/dadu.png')
})

router.get('/repeat', (req, res, next) => {
    var text = req.query.text,
        jumlah = req.query.jumlah,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)
    if (!jumlah) return res.json(loghandler.notjumlah)
    if (isNaN(jumlah)) return res.json(loghandler.number)
    if (jumlah > 10000) return res.json({
        message: `Maximal 10rb Kali!`
    })

    var repeat = (text, total) => {
        return text.repeat(total)
    }
    var result = repeat(text, jumlah)
    res.json({
        status: true,
        creator: creator,
        result: result
    })
})

router.get('/reverse', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
    var result = ''
    for (var index = text.length - 1; index >= 0; index--) {
        result += text[index]
    }

        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        res.status(403).send(error)
    }
})

router.get('/spamcall', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var nomor = req.query.nomor,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!nomor) return res.json(loghandler.notnomor)
    if (isNaN(nomor)) return res.json(loghandler.number)

    try {
        var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/spamcall?no=${nomor}`)).json()
        res.json(json)

    } catch (e) {
        res.status(403).send(error)
    }
})

router.get('/spamsms', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var nomor = req.query.nomor,
        jumlah = req.query.jumlah,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!nomor) return res.json(loghandler.notnomor)
    if (isNaN(nomor)) return res.json(loghandler.number)
    if (!jumlah) return res.json(loghandler.notjumlah)
    if (isNaN(jumlah)) return res.json(loghandler.number)
    if (jumlah > 20) return res.json({
        message: 'Maximal 20 Bang'
    })

    try {
        var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/spamsms?no=${nomor}&jum=${jumlah}`)).json()
        res.json(json)

    } catch (e) {
        res.status(403).send(error)
    }
})

router.get('/porno', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/pussy`)).json()
        var hasil = await getBuffer(json.result)
        await fs.writeFileSync(__path + '/tmp/porno.png', hasil)

        res.sendFile(__path + '/tmp/porno.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/gimage', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var q = req.query.q,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!q) return res.json(loghandler.notquery)

    try {
        var gimage = util.promisify(gis)
        var result = await gimage(q)
        var { url } = pickRandom(result)
        if (url == undefined) return res.json({ status: false, message: 'Gambar tidak ditemukan!' })
        var hasil = await getBuffer(url)
        await fs.writeFileSync(__path + '/tmp/gimage.png', hasil)

        res.sendFile(__path + '/tmp/gimage.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/pinterest', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var q = req.query.q,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!q) return res.json(loghandler.notquery)

    try {
        var pinterest = util.promisify(gis)
        var result = await pinterest(q)
        var { url } = pickRandom(result.url)
        if (url == undefined) return res.json({ status: false, message: 'Gambar tidak ditemukan!' })
        var hasil = await getBuffer(url)
        await fs.writeFileSync(__path + '/tmp/pinterest.png', hasil)

        res.sendFile(__path + '/tmp/pinterest.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/say', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    res.json({
        status: true,
        creator: creator,
        result: text.toString()
    })
})

router.get('/md5', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    var result = await createHash('md5').update(text).digest('hex')

    res.json({
        status: true,
        creator: creator,
        result: result
    })
})

router.get('/tahta', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    var hasil = await tahta('HARTA', 'TAHTA', text.toUpperCase())
    await fs.writeFileSync(__path + '/tmp/tahta.png', hasil)

    res.sendFile(__path + '/tmp/tahta.png')
})

router.get('/customtahta', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    var fixedText = textWrap(text, 8)
    var hasil = await tahta('', text.toUpperCase(), '')
    await fs.writeFileSync(__path + '/tmp/cstahta.png', hasil)

    res.sendFile(__path + '/tmp/cstahta.png')
})

router.get('/anime/random', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/anime/random.txt')
            .then(result => result.text())
            .then(body => {
                var json = body.split('\n')
                var anime = json[Math.floor(Math.random() * json.length)]
                var buffer = imageToBase64(anime)
                var media = Buffer.from(buffer, 'base64')
                fs.writeFileSync(__path + '/tmp/anime.png', media)

                res.sendFile(__path + '/tmp/anime.png')
            })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/anime/husbu', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/anime/husbu.txt')
            .then(result => result.text())
            .then(body => {
                var json = body.split('\n')
                var anime = json[Math.floor(Math.random() * json.length)]
                var buffer = imageToBase64(anime)
                var media = Buffer.from(buffer, 'base64')
                fs.writeFileSync(__path + '/tmp/husbu.png', media)

                res.sendFile(__path + '/tmp/husbu.png')
            })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/kpop/random', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var type = pickRandom(['bts', 'exo', 'blackpink'])
        await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/kpop/' + type + '.txt')
            .then(result => result.text())
            .then(body => {
                var json = body.split('\n')
                var kpop = json[Math.floor(Math.random() * json.length)]
                var buffer = imageToBase64(kpop)
                var media = Buffer.from(buffer, 'base64')
                fs.writeFileSync(__path + '/tmp/kpop.png', media)

                res.sendFile(__path + '/tmp/kpop.png')
            })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/kpop/bts', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/kpop/bts.txt')
            .then(result => result.text())
            .then(body => {
                var json = body.split('\n')
                var kpop = json[Math.floor(Math.random() * json.length)]
                var buffer = imageToBase64(kpop)
                var media = Buffer.from(buffer, 'base64')
                fs.writeFileSync(__path + '/tmp/bts.png', media)

                res.sendFile(__path + '/tmp/bts.png')
            })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/kpop/exo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/kpop/exo.txt')
            .then(result => result.text())
            .then(body => {
                var json = body.split('\n')
                var kpop = json[Math.floor(Math.random() * json.length)]
                var buffer = imageToBase64(kpop)
                var media = Buffer.from(buffer, 'base64')
                fs.writeFileSync(__path + '/tmp/exo.png', media)

                res.sendFile(__path + '/tmp/exo.png')
            })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/kpop/blackpink', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/kpop/blackpink.txt')
            .then(result => result.text())
            .then(body => {
                var json = body.split('\n')
                var kpop = json[Math.floor(Math.random() * json.length)]
                var buffer = imageToBase64(kpop)
                var media = Buffer.from(buffer, 'base64')
                fs.writeFileSync(__path + '/tmp/blackpink.png', media)

                res.sendFile(__path + '/tmp/blackpink.png')
            })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/manga/random', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var search = util.promisify(gis)
        var result = await search('manga')
        var { url } = pickRandom(result)
        if (url == undefined) return res.json({ status: false, message: 'Manga tidak ditemukan!' })
        var hasil = await getBuffer(url)
        await fs.writeFileSync(__path + '/tmp/manga.png', hasil)

        res.sendFile(__path + '/tmp/manga.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/anime/kusonime', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var search = util.promisify(gis)
        var result = await search('kusonime')
        var { url } = pickRandom(result)
        if (url == undefined) return res.json({ status: false, message: 'Kusonime tidak ditemukan!' })
        var hasil = await getBuffer(url)
        await fs.writeFileSync(__path + '/tmp/kusonime.png', hasil)

        res.sendFile(__path + '/tmp/kusonime.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/triggered', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!img) return res.json(loghandler.notimg)
    if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
        var trigger = await canvacord.Canvas.trigger(img);
        await fs.writeFileSync(__path + '/tmp/trigger.gif', trigger)

        res.sendFile(__path + '/tmp/trigger.gif')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/emojitopng', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        emoji = req.query.emoji;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!emoji) return res.json(loghandler.notemoji)

        var hasil = await getBuffer(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(emoji)}&type=apple`)
        await fs.writeFileSync(__path + '/tmp/emojitopng.png', hasil)

        res.sendFile(__path + '/tmp/emojitopng.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/brainly', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        soal = req.query.soal;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!soal) return res.json({
            message: 'Masukan parameter soal'
        })

    try {
        var json = await (await fetch(`https://recoders-area.caliph.repl.co/api/brainly?q=${soal}`)).json()
        if (json.data == undefined) return res.json({ status: false, message: 'Soal tidak ditemukan!' })

           res.json({
            	status: true,
                creator: creator,
                result: json.data
           })

    } catch (e) {
   console.log(error)
      res.status(403).send(error)
   }
})

router.get('/pantun', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

       var data = await fs.readFileSync(__path + '/lib/scraper/pantun.txt').toString()
       var pantun = data.split('\n')
       var result = pantun[Math.floor(Math.random() * pantun.length)]

                res.json({
                    status: true,
                    creator: creator,
                    result: result
                })

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/memeindo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var data = fs.readFileSync(__path + '/lib/scraper/memeindo.json')
        var object = JSON.parse(data);
        var index = Math.floor(Math.random() * object.length);
        var json = object[index]
        var enc = await imageToBase64(json.result)
        var result = Buffer.from(enc, 'base64')
        await fs.writeFileSync(__path + '/tmp/memeindo.png', result)

        res.sendFile(__path + '/tmp/memeindo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/artinama', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        nama = req.query.nama;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!nama) return res.json(loghandler.notnama)

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

            var result = `Arti dari namamu adalah\n\nNama *${nama}*\n${h}`
            res.json({
                status: true,
                creator: creator,
                result: result
            })
        })

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/cekjodoh', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        nama = req.query.nama,
        pasangan = req.query.pasangan;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!nama) return res.json(loghandler.notnama)
        if (!pasangan) return res.json({
            message: `Masukan nama pacarmu,, ehh pasangan :v`
        })

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

            var result = `Kecocokan Berdasarkan Nama :\n\n${d}`
            res.json({
                status: true,
                creator: creator,
                result: result
            })
        })

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/kuis/family100', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var data = fs.readFileSync(__path + '/lib/scraper/family100.json')
        var json = JSON.parse(data);
        var index = Math.floor(Math.random() * json.length);
        var object = json[index];

        res.json({
            status: true,
            creator: creator,
            soal: object.result.soal,
            jawaban: object.result.jawaban,
            poin: 35000
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/asupan', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var data = fs.readFileSync(__path + '/lib/scraper/asupan.json')
        var object = JSON.parse(data);
        var index = Math.floor(Math.random() * object.length);
        var json = object[index]
        var enc = await imageToBase64(json.result)
        var result = Buffer.from(enc, 'base64')
        await fs.writeFileSync(__path + '/tmp/asupan.mp4', result)

        res.sendFile(__path + '/tmp/asupan.mp4')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/cerpen', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
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

              res.json({
                   status: true,
                   creator: creator,
                   result: result.split('Share ke Facebook Twitter Google+')[0].split('Kontak Kami')[1]
              })
           })
       })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/mediafire', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.noturl)
        if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

        var result = await (await fetch(`https://api.zeks.xyz/api/mediafire?apikey=${zeks_key}&url=${url}`)).json()
        res.json({
            creator: creator,
            result
        })

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/tts', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        lang = req.query.lang,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)
    if (text.length > 200) return res.json(loghandler.longtext)
    if (!lang) return res.json(loghandler.notlang)
    if (lang.length > 4) return res.json({
        error: `Kode bahasa tidak valid!`
    })

    try {
        var google = await tts(text, lang)
        await fs.writeFileSync(__path + '/tmp/tts.mp3', google)

        res.sendFile(__path + '/tmp/tts.mp3')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/darkjokes', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var data = fs.readFileSync(__path + '/lib/scraper/darkjokes.json')
        var object = JSON.parse(data);
        var index = Math.floor(Math.random() * object.length);
        var json = object[index]
        var enc = await imageToBase64(json.result)
        var result = Buffer.from(enc, 'base64')
        await fs.writeFileSync(__path + '/tmp/darkjokes.png', result)

        res.sendFile(__path + '/tmp/darkjokes.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/splaybutton', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var hasil = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${text}&apikey=${zeks_key}`)
        await fs.writeFileSync(__path + '/tmp/playbutton.png', hasil)

        res.sendFile(__path + '/tmp/playbutton.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/gplaybutton', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var hasil = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${text}&apikey=${zeks_key}`)
        await fs.writeFileSync(__path + '/tmp/playbutton2.png', hasil)

        res.sendFile(__path + '/tmp/playbutton2.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/textpantai', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/sand-engraved-3d-text-effect-989.html', text)
        var hasil = await getBuffer(result)
        await fs.writeFileSync(__path + '/tmp/pantai.png', hasil)

        res.sendFile(__path + '/tmp/pantai.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/textsalju', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        t1 = req.query.t1,
        t2 = req.query.t2;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!t1) return res.json(loghandler.nottext)
        if (!t2) return res.json(loghandler.nottext2)

        var json = await (await fetch(`https://api.zeks.xyz/api/snowwrite?text1=${t1}&text2=${t2}&apikey=${zeks_key}`)).json()
        await fs.writeFileSync(__path + '/tmp/salju.png', await getBuffer(json.result))

        res.sendFile(__path + '/tmp/salju.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/alay', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await alay(text.toLowerCase())

        res.json({
            status: true,
            creator: creator,
            result: result
        })

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/firework', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/firework-sparkle-text-effect-930.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/firework.png', hasil)

        res.sendFile(__path + '/tmp/firework.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/retro', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        t1 = req.query.t1,
        t2 = req.query.t2,
        t3 = req.query.t3;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!t1) return res.json(loghandler.nottext)
        if (!t2) return res.json(loghandler.nottext2)
        if (!t3) return res.json(loghandler.nottext3)

        var json = await (await fetch(`https://api.zeks.xyz/api/retro?text1=${t1}&text2=${t2}&text3=${t3}&apikey=${zeks_key}`)).json()
        await fs.writeFileSync(__path + '/tmp/retro.png', await getBuffer(json.result))

        res.sendFile(__path + '/tmp/retro.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/matrix', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/matrix-style-text-effect-online-884.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/matrix.png', hasil)

        res.sendFile(__path + '/tmp/matrix.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/text3d', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/3d-box-text-effect-online-880.html', text)

       res.json({
       	status: true,
           creator: creator,
           result: result
       })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/phlogo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        t1 = req.query.t1,
        t2 = req.query.t2;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!t1) return res.json(loghandler.nottext)
        if (!t2) return res.json(loghandler.nottext2)

        var result = await textpro('https://textpro.me/pornhub-style-logo-online-generator-free-977.html', [t1], [t2])
        var hasil = await getBuffer(await upload3(result, false))
              await fs.writeFileSync(__path + '/tmp/phlogo.png', hasil)

  res.sendFile(__path + '/tmp/phlogo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/marvel', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        t1 = req.query.t1,
        t2 = req.query.t2;
    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!t1) return res.json(loghandler.nottext)
        if (!t2) return res.json(loghandler.nottext2)

        var result = await textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', [t1], [t2])
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/marvel.png', hasil)

        res.sendFile(__path + '/tmp/marvel.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/blackpink', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/bplogo.png', hasil)

        res.sendFile(__path + '/tmp/bplogo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/avengers', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        t1 = req.query.t1,
        t2 = req.query.t2;
    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!t1) return res.json(loghandler.nottext)
        if (!t2) return res.json(loghandler.nottext2)

        var result = await textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', [t1], [t2])

      res.json({
      	status: true,
          creator: creator,
          result: result
      })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/thunder', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        text = req.query.text;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/create-thunder-text-effect-online-881.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/thunder.png', hasil)

        res.sendFile(__path + '/tmp/thunder.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/news', async (req, res) => {
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    res.json({
        status: true,
        result: [{
                jenis: 'cnn',
                type: ['nasional', 'internasional', 'ekonomi', 'olahraga', 'teknologi', 'hiburan', 'gaya-hidup'],
                example: 'https://kuhong-api.herokuapp.com/api/news/cnn?type=teknologi&apikey=APIKEY',
                author: creator
            },
            {
                jenis: 'cnbc',
                type: ['market', 'investment', 'news', 'entrepreneur', 'syariah', 'tech', 'lifestyle'],
                example: 'https://kuhong-api.herokuapp.com/api/news/cnbc?type=syariah&apikey=APIKEY',
                author: creator
            },
            {
                jenis: 'republika',
                type: ['news', 'nusantara', 'khazanah', 'islam-digest', 'internasional', 'ekonomi', 'sepakbola', 'leisure'],
                example: 'https://kuhong-api.herokuapp.com/api/news/republika?type=ekonomi&apikey=APIKEY',
                author: creator
            },
            {
                jenis: 'tempo',
                type: ['nasional', 'bisnis', 'metro', 'dunia', 'bola', 'sport', 'cantik', 'tekno', 'otomotif', 'nusantara'],
                example: 'https://kuhong-api.herokuapp.com/api/news/tempo?type=bisnis&apikey=APIKEY',
                author: creator
            },
            {
                jenis: 'antara',
                type: ['terkini', 'top-news', 'politik', 'hukum', 'ekonomi', 'metro', 'sepakbola', 'olahraga', 'humaniora', 'lifestyle', 'hiburan', 'dunia', 'infografik', 'tekno', 'otomotif', 'warta-bumi', 'rilis-pers'],
                example: 'https://kuhong-api.herokuapp.com/api/news/tempo?type=olahraga&apikey=APIKEY',
                author: creator
            },
            {
                jenis: 'kumparan',
                type: 'gak ada',
                example: 'https://kuhong-api.herokuapp.com/api/news/kumparan?&apikey=APIKEY',
                author: creator
            }
        ]
    })
})

router.get('/ssweb', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.noturl)
        if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await getBuffer(`http://nurutomo.herokuapp.com/api/ssweb?url=${url}`)
        await fs.writeFileSync(__path + '/tmp/screenshot.png', hasil)

        res.sendFile(__path + '/tmp/screenshot.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/calculator', async (req, res) => {
    var angka = req.query.angka,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!angka) return res.json(loghanlder.notangka)

    try {
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

        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        if (e == undefined) res.json({
            error: 'Upss.. terjadi kesalahan!'
        })
        res.json({
            message: 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
        })
    }
})

router.get('/hd', async (req, res) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!img) return res.json(loghandler.notimg)
    if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
        var encmedia = await imageToBase64(img)
        var media = Buffer.from(encmedia, 'base64')
        await fs.writeFileSync(__path + '/tmp/hd_tmp.png', media)
        var path = fs.readFileSync(__path + '/tmp/hd_tmp.png')
        var body = new FormData
        body.append('image', media, 'image')
        var result = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
            method: 'POST',
            body
        })
        if (result.status !== 200) return await res.json(result)
        await fs.writeFileSync(__path + '/tmp/hd.png', await result.buffer())

        res.sendFile(__path + '/tmp/hd.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/dare', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

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

        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/quotemaker', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var quote = req.query.quote,
        author = req.query.author,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!quote) return res.json({
            message: `Masukan parameter quote (kata quotes)`
        })
        if (!author) return res.json({
            message: `Masukan parameter author`
        })

        var json = await (await fetch(`https://terhambar.com/aw/qts/?kata=${quote}&author=${author}&tipe=random`)).json()
        await fs.writeFileSync(__path + '/tmp/quotemaker.png', await getBuffer(json.result))

        res.sendFile(__path + '/tmp/quotemaker.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/attp', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var result = await imageToBase64(`https://api.xteam.xyz/attp?file&text=${text}`)
        var hasil = Buffer.from(result, 'base64')
        await fs.writeFileSync(__path + '/tmp/attp.webp', hasil)

        res.sendFile(__path + '/tmp/attp.webp')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/ttp2', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var result = await imageToBase64(`https://api.xteam.xyz/ttp?file&text=${text}`)
        var hasil = Buffer.from(result, 'base64')
        await fs.writeFileSync(__path + '/tmp/ttp.webp', hasil)

        res.sendFile(__path + '/tmp/ttp.webp')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/futureneon', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/futureneon.png', hasil)

        res.sendFile(__path + '/tmp/futureneon.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/spotify', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        q = req.query.q;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!q) return res.json(loghandler.notquery)

        var result = await (await fetch(`https://api.zeks.xyz/api/spotify?apikey=${zeks_key}&q=${q}`)).json()

        res.json({
            creator: creator,
            result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/instagram', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.noturl)
        if (!url.startsWith('http')) return res.json(logahndler.invalidLink)

        var data = await instagramGetUrl(url)

        res.json({
            status: true,
            creator: creator,
            data
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/towebp', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.noturl)
        if (!url.startsWith('http')) return res.json(logahndler.invalidLink)

        var buffer = await imageToBase64(url)
              await fs.writeFileSync(__path + '/tmp/towebp.webp', buffer, 'base64')
              var sticker = await fs.readFileSync(__path + '/tmp/towebp.webp')
              var result = await saveToMedia(sticker)

                res.json({
                    status: true,
                    creator: creator,
                    message: 'succes',
                    result: result
                })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/math', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        mode = req.query.mode;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!mode) return res.json({
            message: `Masukan parameter mode`
        })
        if (!(mode in modes)) return res.json({
            status: false,
            creator: creator,
            message: 'Mode yang tersedia ' + Object.keys(modes).join(', ')
        })
        var data = await math(mode)

        res.json({
            status: true,
            creator: creator,
            soal: data.str,
            jawaban: data.result.toString(),
            poin: data.bonus
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/math2', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var json = await (await fetch(`https://salism3api.pythonanywhere.com/math`)).json()

        res.json({
            status: true,
            creator: creator,
            soal: json.image,
            jawaban: json.answer,
            poin: 50000
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/toimg', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var webp = req.query.webp,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!webp) return res.json(loghandler.notimg)
        if (!webp.startsWith('http')) return res.json(loghandler.invalidLink)

        var convert = await imageToBase64(webp)
        var img = Buffer.from(convert, 'base64')
        await fs.writeFileSync(__path + '/tmp/toimg.png', img)
                   var image = await fs.readFileSync(__path +'/tmp/toimg.png')
                   var result = await saveToMedia(image)

      res.json({
      	status: true,
          creator: creator,
          result: result
      })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/qrcode', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var qr = await qrcode.toDataURL(text.slice(0, 2048), {
            scale: 8
        })
        var hasil = qr.split`,` [1]
        await fs.writeFileSync(__path + '/tmp/qr.png', hasil, 'base64')
        res.sendFile(__path + '/tmp/qr.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/imgbb', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.noturl)
        if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

        var json = await (await fetch(`https://api.imgbb.com/1/upload?expiration=180&key=${imgbb_key}&image=${url}&name=imgbb-uploader`)).json()

        res.json({
            status: true,
            creator: creator,
            info: 'url otomatis akan hilang dalam 3 menit',
            url: json.data.url,
            delete_url: json.data.delete_url
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/createcode', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var len = Math.floor(Math.random() * 25)
        var arr = '_0123456789-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890_'
        var code_start = '';
        for (var i = len; i > 0; i--) {
            code_start += arr[Math.floor(Math.random() * arr.length)];
        }
        var lenn = Math.floor(Math.random() * 10)
        var code_end = '';
        for (var i = lenn; i > 0; i--) {
            code_end += arr[Math.floor(Math.random() * arr.length)];
        }

        var result = code_start + code_end
        res.json({
            status: true,
            creator: creator,
            text: text,
            code: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/bucin', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

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

        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/memegen', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        t1 = req.query.t1,
        t2 = req.query.t2,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!t1) return res.json(loghandler.nottext)
        if (!t2) return res.json(loghandler.nottext2)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await (await fetch(`https://api.memegen.link/images/custom/${t1}/${t2}.png?background=${img}`)).buffer()
        await fs.writeFileSync(__path + '/tmp/memegen.png', hasil)

        res.sendFile(__path + '/tmp/memegen.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/slot', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    var emojis = ['🍎', '🍌', '🍇', '♦️', '🥇', '💵'];
    var a = Math.floor(Math.random() * emojis.length);
    var b = Math.floor(Math.random() * emojis.length);
    var c = Math.floor(Math.random() * emojis.length);
    var x = [],
        y = [],
        z = [];
    for (var i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (var i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (var i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    var end;
    var poin;
    if (a == b && b == c) {
        end = 'JACKPOT!!!';
        poin = 10000;

    } else if (a == b || a == c || b == c) {
        end = 'Dikit Lagi!',
            poin = 500;
    } else {
        end = 'Kamu Kalah!, Yang Sabar yaa. Anggap aja ini Ujian :)';
        poin = '5';
    }
    res.json({
        status: true,
        creator: creator,
        hasil: `${end}\n\n${x[0]} ${y[0]} ${z[0]}\n${x[1]} ${y[1]} ${z[1]}\n${x[2]} ${y[2]} ${z[2]}`,
        poin: poin
    })
})

router.get('/joox', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        q = req.query.q;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!q) return res.json(loghandler.notquery)

        var json = await (await fetch(`http://nzcha-apii.herokuapp.com/joox?q=${q}`)).json()
        if (json.data == undefined) return res.json({ status: false, message: 'Lagu tidak ditemukan!' })

        res.json({
            status: true,
            creator: creator,
            result: json.data
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/joox/lirik', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        q = req.query.q;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!q) return res.json(loghandler.notquery)

        var json = await (await fetch(`https://api.xteam.xyz/search/jooxlyrics?q=${q}&APIKEY=${xteam_key}`)).json()

        res.json({
            status: true,
            creator: creator,
            result: json.result.data
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/gdrive', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.noturl)
        if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

        var result = await (await fetch(`https://api.zeks.xyz/api/gdbypass?url=${url}&apikey=${zeks_key}`)).json()

        res.json({
            status: true,
            creator: creator,
            result: result.data
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/soundcloud', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.noturl)
        if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

        var result = await (await fetch(`https://api.zeks.xyz/api/soundcloud?apikey=${zeks_key}&url=${url}`)).json()

        res.json({
            status: true,
            creator: creator,
            result: result.result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/igstory', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        username = req.query.username;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!username) return res.json(loghandler.notnama)

        await instagramScraper.getUserPosts(username).then((result) => {
            res.json({
                status: true,
                creator: creator,
                result: result
            })
        }).catch(() => res.json({
            status: false,
            creator: creator,
            message: 'Stories tidak ditemukan!'
        }))
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/nickff', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var result = await (await fetch(`https://api.zeks.xyz/api/nickepep?apikey=${zeks_key}`)).json()

        res.json({
            status: true,
            creator: creator,
            result: result.result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/murothal', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var json = await (await fetch(`https://api.zeks.xyz/api/randomquran?apikey=${zeks_key}`)).json()

        res.json({
            status: true,
            creator: creator,
            result: json.result.audio
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/randomquran', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var json = await (await fetch(`https://api.banghasan.com/quran/format/json/acak`)).json()

        res.json({
           status: true,
           creator: creator,
           result: json.acak
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/ninja', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        nama = req.query.nama;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!nama) return res.json(loghandler.notnama)


        var json = await (await fetch(`https://api.terhambar.com/ninja?nama=${nama}`)).json()

        res.json({
        	status: true,
            creator: creator,
            result: json.result.ninja
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/resep', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        q = req.query.q;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!q) return res.json(loghandler.notquery)

        var json = await (await fetch(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${q}`)).json()

        res.json({
            status: true,
            creator: creator,
            result: json.results
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/readqr', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.noturl)
        if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

        var buffer = await getBuffer(url)
        await fs.writeFileSync(__path + '/tmp/qr-reader.png', buffer)
        var result = await qrdecode(__path + '/tmp/qr-reader.png')

        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/sticker', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        q = req.query.q;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!q) return res.json(loghandler.notquery)

        var result = await (await fetch(`https://api.zeks.xyz/api/searchsticker?apikey=${zeks_key}&q=${q}`)).json()

        res.json({
            status: true,
            creator: creator,
            result: result.sticker
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/tebakanime', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var json = await (await fetch(`http://zekais-api.herokuapp.com/tebakanime`)).json()

        res.json(json)
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/ytcomment', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        username = req.query.username,
        comment = req.query.comment,
    apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!username) return res.json(loghandler.notnama)
        if (!comment) return res.json({
            message: `Masukan parameter komentar`
        })
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var isDark = pickRandom(true, false)
        var hasil = await canvacord.Canvas.youtube({ username: username, content: comment, avatar: img, dark: isDark })
        await fs.writeFileSync(__path + '/tmp/ytcomment.png', hasil)

        res.sendFile(__path + '/tmp/ytcomment.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/ytplay', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        q = req.query.q;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!q) return res.json(loghandler.notquery)

        var results = await yts(q)
        var vid = results.all.find(video => video.seconds < 3600)
        if (!vid) return res.json({
            message: 'Video/Audio tidak ditemukan!'
        })
        var {
            dl_link,
            thumb,
            title,
            filesize,
            filesizeF
        } = await yta(vid.url, 'id4')

        res.json({
            status: true,
            creator: creator,
            result: {
                title: title,
                duration: vid.timestamp,
                views: `${vid.views} views`,
                uploaded: vid.ago,
                thumb: thumb,
                source: vid.url,
                size: filesizeF,
                audio: dl_link
            }
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/wait', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.url;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.noturl)
        if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

        var base64 = await imageToBase64(url)
        var anime = `data:image/jpeg;base64,${base64}`
        var response = await fetch('https://trace.moe/api/search', {
            method: 'POST',
            body: JSON.stringify({
                image: anime
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) return res.json({
            error: `Saya tidak tau ini anime apa`
        })
        var result = await response.json()
        var {
            is_adult,
            title,
            title_chinese,
            title_romaji,
            title_english,
            episode,
            season,
            similarity,
            filename,
            at,
            tokenthumb,
            anilist_id
        } = result.docs[0]
        var link = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`

        res.json({
            status: true,
            creator: creator,
            result: {
                title: title,
                title_chinese: title_chinese,
                title_romaji: title_romaji,
                similarity: `${(similarity * 100).toFixed(1)}%`,
                episode: episode.toString(),
                season: season.toString(),
                echi: is_adult ? 'yes' : 'no',
                url: link
            }
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/wasted', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.wasted(img);
        await fs.writeFileSync(__path + '/tmp/wasted.png', hasil)

        res.sendFile(__path + '/tmp/wasted.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/rainbow', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.rainbow(img);
        await fs.writeFileSync(__path + '/tmp/rainbow.png', hasil)

        res.sendFile(__path + '/tmp/rainbow.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/glass', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await (await fetch(`https://some-random-api.ml/canvas/glass?avatar=${img}`)).buffer()
        await fs.writeFileSync(__path + '/tmp/glass.png', hasil)

        res.sendFile(__path + '/tmp/glass.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/readmore', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    var [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''

    res.json({
        status: true,
        creator: creator,
        readmore: l + readMore + r,
        note: `Gunakan whatsapp/telegram agar teks terlihat baca selengkapnya.`
    })
})

router.get('/8bit', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.pixelate(img);
        await fs.writeFileSync(__path + '/tmp/8bit.png', hasil)

        res.sendFile(__path + '/tmp/8bit.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/wanted', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.wanted(img);
        await fs.writeFileSync(__path + '/tmp/wanted.png', hasil)

        res.sendFile(__path + '/tmp/wanted.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/githubstalk', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
          username = req.query.username;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!username) return res.json(loghandler.notusername)

    try {
        var result = await (await fetch(`https://api.github.com/users/${username}`)).json()
        res.json({
        	     status: true,
                 creator: creator,
                 result
        })
    } catch (e) {
        console.error(e)
        res.json({ status: false, error: 'User tidak ditemukan!' })
    }
})

router.get('/telegraph', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        file = req.query.file_url;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!file) return res.json({
        message: `Masukan parameter file_url`
    })
    if (!file.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
        var encmedia = await imageToBase64(file)
        var media = Buffer.from(encmedia, 'base64')
        var { ext } = await fromBuffer(media)
        await fs.writeFileSync(__path + '/tmp/file_uploader.' + ext, media)
        var file_result = fs.readFileSync(__path + '/tmp/file_uploader.' + ext)
        var result = await upload(file_result)

        res.json({
            status: true,
            creator: creator,
            ext: `${ext} (${ext.toUpperCase()})`,
            filesize: media.length + ' byte(s)',
            result: result
        })
    } catch (e) {
        res.json({
            error: e
        })
        console.error(e)
    }
})

router.get('/fileio', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        url = req.query.file_url;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandler.noturl)
    if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
        var encmedia = await imageToBase64(url)
        var media = Buffer.from(encmedia, 'base64')
        var { ext } = await fromBuffer(media)
        await fs.writeFileSync(__path + '/tmp/file_io.' + ext, media)
        var file_result = fs.readFileSync(__path + '/tmp/file_io.' + ext)
        var result = await upload2(file_result)

        res.json({
            status: true,
            creator: creator,
            ext: `${ext} (${ext.toUpperCase()})`,
            filesize: media.length + ' byte(s)',
            result: result
        })
    } catch (e) {
        res.json({
            error: e
        })
        console.error(e)
    }
})

router.get('/shopee', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        query = req.query.query;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!query) return res.json(loghandler.notquery)

    try {
        var shopee = new Shopee(Shopee.BASE_URL.INDONESIA)
        var result = await shopee.search({
            query: query,
            orderBy: Shopee.SEARCH.ORDER_BY.PRICE,
            orderType: Shopee.SEARCH.ORDER_TYPE.ASC,
            shippings: [
                Shopee.SEARCH.SHIPPING.JNE_REGULAR,
                Shopee.SEARCH.SHIPPING.SI_CEPAT_REG
            ],
            locations: ['Bandung', 'Jakarta', 'Jawa Barat', 'Jabodetabek', 'Kalimantan', 'Sumatra'],
            priceMax: 30000000
        })

        res.json({
            status: true,
            creator: creator,
            result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/happymod', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        query = req.query.query;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!query) return res.json(loghandler.notquery)

    try {
        var result = await (await fetch(`https://api.zeks.xyz/api/happymod?apikey=${zeks_key}&q=${query}`)).json()
        res.json({
            creator: creator,
            result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/faktaunik', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/faktaunix.txt')
            .then(result => result.text())
            .then(body => {
                var json = body.split('\n')
                var fakta = json[Math.floor(Math.random() * json.length)]

                res.json({
                    status: true,
                    creator: creator,
                    fakta: fakta
                })
            })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/artimimpi', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        mimpi = req.query.mimpi;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!mimpi) return res.json({
        message: 'Masukan parameter mimpi'
    })

    try {
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

          res.json({
              status: true,
              creator: creator,
              result: result.split`.`[0]
          })
       })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/tggljadian', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        tggl = req.query.tggl,
        bln = req.query.bln,
        thn = req.query.thn;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!tggl) return res.json({
        message: 'Masukan parameter tanggal'
    })
    if (!bln) return res.json({
        message: 'Masukan parameter bulan'
    })
    if (!thn) return res.json({
        message: 'Masukan parameter tahun'
    })
    if (isNaN(tggl)) return res.json(loghandler.number)
    if (isNaN(bln)) return res.json(loghandler.number)
    if (isNaN(thn)) return res.json(loghandler.number)

    try {
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
            var result = h.split`&lt;`[0]

          res.json({
              status: true,
              creator: creator,
              result: result
          })
       })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/zodiak', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey,
        nama = req.query.nama,
        tggl = req.query.tggl,
        bln = req.query.bln,
        thn = req.query.thn;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!nama) return res.json(loghandler.notnama)
    if (!tggl) return res.json({
        message: 'Masukan parameter tanggal'
    })
    if (!bln) return res.json({
        message: 'Masukan parameter bulan'
    })
    if (!thn) return res.json({
        message: 'Masukan parameter tahun'
    })
    if (isNaN(tggl)) return res.json(loghandler.number)
    if (isNaN(bln)) return res.json(loghandler.number)
    if (isNaN(thn)) return res.json(loghandler.number)

    try {
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

    res.json({
    	   status: true,
           creator: creator,
           result:{
           	nama: nama,
           	lahir: birth.join('-'),
               ultah: birthday.join('-'),
               usia: umur.toString(),
               zodiak: zodiac
               }
      })

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/spamgmail', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var email = req.query.email,
        subjek = req.query.subjek,
        pesan = req.query.pesan,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!email) return res.json({
        message: 'Masukan parameter email'
    })
    if (!email.endsWith('@gmail.com')) return res.json({
        message: 'Email tidak valid'
    })
    if (!subjek) return res.json({
        message: 'Masukan parameter subjek'
    })
    if (subjek.length > 15) return res.json({
        message: 'Subjek kepanjangan!'
    })
    if (!pesan) return res.json({
        message: 'Masukan parameter pesan'
    })


    try {
        var json = await (await fetch(`https://videfikri.com/api/spamemail/?email=${email}&subjek=${subjek}&pesan=${pesan}`)).json()
        res.json({
            status: true,
            creator: creator,
            result: json.result.log_lengkap
        })

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/smoke', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

    try {
            request.post({
                url: 'https://photooxy.com/other-design/create-a-smoke-text-effect-online-free-390.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnail').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h

                        res.json({
                        	status: true,
                            creator: creator,
                            result: result
                        })
                    })
                }
            })
    } catch (e) {
            console.error(e);
            res.status(403).send(error)
    }
})

router.get('/phcomment', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        username = req.query.username,
        comment = req.query.comment,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!username) return res.json(loghandler.notusername)
        if (!comment) return res.json({
            message: 'Masukan parameter komentar'
        })
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.phub({ username: username, message: comment, image: img });
        await fs.writeFileSync(__path + '/tmp/phcomment.png', hasil)

        res.sendFile(__path + '/tmp/phcomment.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/barcode', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var code = await barcode('code39', {
            data: text,
            width: 400,
            height: 100
        })
        var outputPath = __path + '/tmp/barcode.png'
        await code.saveImage(outputPath, function(err) {
            if (err) throw err

            res.sendFile(outputPath)
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/dropwater', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/dropwater-text-effect-872.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/dropwater.png', hasil)

        res.sendFile(__path + '/tmp/dropwater.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/advancedglow', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/free-advanced-glow-text-effect-873.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/advancedglow.png', hasil)

        res.sendFile(__path + '/tmp/advancedglow.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/neonlight', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/neonlight.png', hasil)

        res.sendFile(__path + '/tmp/neonlight.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/wolflogo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var t1 = req.query.text,
        t2 = req.query.text2,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!t1) return res.json(loghandler.nottext)
        if (!t2) return res.json(loghandler.nottext2)

        var result = await textpro('https://textpro.me/create-wolf-logo-galaxy-online-936.html', [t1], [t2])
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/wolflogo.png', hasil)

        res.sendFile(__path + '/tmp/wolflogo.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/breakwall', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/break-wall-text-effect-871.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/breakwall.png', hasil)

        res.sendFile(__path + '/tmp/breakwall.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/naruto', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

    try {
            request.post({
                url: 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnail').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h

                        res.json({
                        	status: true,
                            creator: creator,
                            result: result
                        })
                    })
                }
            })
    } catch (e) {
            console.error(e);
            res.status(403).send(error)
    }
})

router.get('/cloud', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html', text)
        
        res.json({
        	status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/jokerlogo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/create-logo-joker-online-934.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/jokerlogo.png', hasil)

        res.sendFile(__path + '/tmp/jokerlogo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/lionlogo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var t1 = req.query.text,
        t2 = req.query.text2,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!t1) return res.json(loghandler.nottext)
        if (!t2) return res.json(loghandler.nottext2)

        var result = await textpro('https://textpro.me/create-lion-logo-mascot-online-938.html', [t1], [t2])
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/lionlogo.png', hasil)

        res.sendFile(__path + '/tmp/lionlogo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/ninjalogo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var t1 = req.query.text,
        t2 = req.query.text2,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!t1) return res.json(loghandler.nottext)
        if (!t2) return res.json(loghandler.nottext2)

        var result = await textpro('https://textpro.me/create-ninja-logo-online-935.html', [t1], [t2])
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/ninjalogo.png', hasil)

        res.sendFile(__path + '/tmp/ninjalogo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/blood', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/blood-text-on-the-frosted-glass-941.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/blood.png', hasil)

        res.sendFile(__path + '/tmp/blood.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/lava', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/lava-text-effect-online-914.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/lava.png', hasil)

        res.sendFile(__path + '/tmp/lava.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/1917', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/1917-style-text-effect-online-980.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/1917.png', hasil)

        res.sendFile(__path + '/tmp/1917.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/skeleton', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await textpro('https://textpro.me/skeleton-text-effect-online-929.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/skeleton.png', hasil)

        res.sendFile(__path + '/tmp/skeleton.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/crossfire', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var result = await photooxy('https://photooxy.com/fps-game-effect/make-crossfire-facebook-cover-photo-137.html', text)
        var hasil = await getBuffer(await upload3(result, false))
        await fs.writeFileSync(__path + '/tmp/crossfire.png', hasil)

        res.sendFile(__path + '/tmp/crossfire.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/deltrash', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.delete(img);
        await fs.writeFileSync(__path + '/tmp/deltrash.png', hasil)

        res.sendFile(__path + '/tmp/deltrash.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/rotate', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await (await fetch(`http://zekais-api.herokuapp.com/rotate?url=${img}`)).buffer()
        await fs.writeFileSync(__path + '/tmp/rotate.png', hasil)

        res.sendFile(__path + '/tmp/rotate.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/jail', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.jail(img);
        await fs.writeFileSync(__path + '/tmp/jail.png', hasil)

        res.sendFile(__path + '/tmp/jail.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/continue', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await (await fetch(`http://zekais-api.herokuapp.com/tobecontinue?url=${img}`)).buffer()
        await fs.writeFileSync(__path + '/tmp/continue.png', hasil)

        res.sendFile(__path + '/tmp/continue.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/rip', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.rip(img);
        await fs.writeFileSync(__path + '/tmp/rip.png', hasil)

        res.sendFile(__path + '/tmp/rip.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/spongebob', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var hasil = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${text}`)
        await fs.writeFileSync(__path + '/tmp/sb_burn.png', hasil)

        res.sendFile(__path + '/tmp/sb_burn.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/ttp3', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var hasil = await getBuffer(`https://leyscoders-api.herokuapp.com/api/textto-image?text=${text}`)
        await fs.writeFileSync(__path + '/tmp/ttp3.png', hasil)

        res.sendFile(__path + '/tmp/ttp3.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/ttp4', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        color = req.query.color,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)
        if (!color) return res.json({
            message: `Masukan parameter warna`
        })

        var hasil = await getBuffer(`http://zekais-api.herokuapp.com/text2png?text=${text}&color=${color}`)
        await fs.writeFileSync(__path + '/tmp/ttp4.png', hasil)

        res.sendFile(__path + '/tmp/ttp4.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/fml', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var fml = await (await fetch('https://www.fmylife.com/random')).text()
        var $ = cheerio.load(fml)
        var resultEN = $('#content article.article-panel > .panel > .article-contents > a.article-link').first().text()
        var resultID = await translate(resultEN, {
            tld: 'cn',
            to: 'id',
        })

        res.json({
            status: true,
            creator: creator,
            result:{
            	en: resultEN,
                id: resultID[0]
                }
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/estetik', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var estetik = await (await fetch(`https://api.zeks.xyz/api/estetikpic?apikey=${zeks_key}`)).buffer()
        await fs.writeFileSync(__path + '/tmp/aesthetic_pic.png', estetik)

        res.sendFile(__path + '/tmp/aesthetic_pic.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/html-viewer', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
    var result = await (await fetch(url)).text()

     res.json({
         status: true,
         creator: creator,
         result: result
     })
    } catch (e) {
    	console.error(e)
    res.status(403).send(error)
  }
})

router.get('/invert', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.invert(img);
        await fs.writeFileSync(__path + '/tmp/invert.png', hasil)

        res.sendFile(__path + '/tmp/invert.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/style', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var style = await stylizeText(text)
        var result = Object.entries(style).map(([name, value]) => `*${name}*\n${value}`).join`\n\n`

        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/carbon', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var code = req.query.code,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!code) return res.json({
            message: `Masukan parameter code`
        })

        var hasil = await getBuffer(`http://zekais-api.herokuapp.com/carbon?code=${code}`)
        await fs.writeFileSync(__path + '/tmp/carbon_code.png', hasil)

        res.sendFile(__path + '/tmp/carbon_code.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/maps', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var q = req.query.query,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!q) return res.json(loghandler.notquery)

    try {
        var json = await (await fetch(`https://mnazria.herokuapp.com/api/maps?search=${q}`)).json()
        var result = await (await fetch(`https://api.imgbb.com/1/upload?expiration=120&key=${imgbb_key}&image=${json.gambar}&name=kuhong-api-storage---maps`)).json()
        await fs.writeFileSync(__path + '/tmp/maps.png', await getBuffer(result.data.url))

        res.sendFile(__path + '/tmp/maps.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/search-giphy', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var q = req.query.query,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!q) return res.json(loghandler.notquery)

    try {
        var json = await (await fetch(`https://mnazria.herokuapp.com/api/gif?search=${q}`)).json()

        res.json(json)
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/ipcheck', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var ip = req.query.ip,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!ip) return res.json({
        message: `Masukan parameter ip`
    })

    try {
        var json = await (await fetch(`https://mnazria.herokuapp.com/api/check?ip=${ip}`)).json()

        res.json(json)
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/nsfw/hentai', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
    	var nime = pickRandom(['waifu', 'neko'])
        var json = await (await fetch(`https://api.waifu.pics/nsfw/${nime}`)).json()
        var result = await getBuffer(json.url)
               await fs.writeFileSync(__path + '/tmp/hentai.png', result) 

  res.sendFile(__path + '/tmp/hentai.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/nsfw/neko', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var json = await (await fetch('https://api.waifu.pics/nsfw/neko')).json()
        var result = await getBuffer(json.url)
               await fs.writeFileSync(__path + '/tmp/nsfw_neko.png', result) 

  res.sendFile(__path + '/tmp/nsfw_neko.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/nsfw/waifu', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var json = await (await fetch('https://api.waifu.pics/nsfw/waifu')).json()
        var result = await getBuffer(json.url)
               await fs.writeFileSync(__path + '/tmp/nsfw_waifu.png', result) 

  res.sendFile(__path + '/tmp/nsfw_waifu.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/nulis3', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        arah = req.query.arah,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)
    if (!arah) return res.json({
        message: `Masukan parameter arah, kanan/kiri.`
    })

    try {
        if (arah == 'kanan' || arah == 'kiri') {
            var hasil = await (await fetch(`http://zekais-api.herokuapp.com/buku${arah}?text=${text}`)).buffer()
            await fs.writeFileSync(__path + '/tmp/nulis3_${arah}.png', hasil)

            res.sendFile(__path + '/tmp/nulis3_${arah}.png')
        } else res.json({
            message: `Pilih kiri atau kanan udin!`
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/suit', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.pilihan,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json({
        message: 'Masukan pilihan suitmu'
    })

    var miss = 'Pilihan yang tersedia gunting, kertas, batu'
    var poin = 5000
    var suit = Math.random()

    if (suit < 0.34) {
        suit = 'batu'
    } else if (suit > 0.34 && suit < 0.67) {
        suit = 'gunting'
    } else {
        suit = 'kertas'
    }

    if (text == suit) {
        res.json({
            status: true,
            creator: creator,
            message: 'Seri!',
            kamu: text,
            bot: suit
        })
    } else if (text == 'batu') {
        if (suit == 'gunting') {
            res.json({
                status: true,
                creator: creator,
                message: 'Kamu Menang!',
                kamu: text,
                bot: suit,
                poin: poin
            })
        } else {
            res.json({
                status: false,
                creator: creator,
                message: 'Kamu Kalah!',
                kamu: text,
                bot: suit
            })
        }
    } else if (text == 'gunting') {
        if (suit == 'kertas') {
            res.json({
                status: true,
                creator: creator,
                message: 'Kamu Menang!',
                kamu: text,
                bot: suit,
                poin: poin
            })
        } else {
            res.json({
                status: false,
                creator: creator,
                message: 'Kamu Kalah!',
                kamu: text,
                bot: suit
            })
        }
    } else if (text == 'kertas') {
        if (suit == 'batu') {
            res.json({
                status: true,
                creator: creator,
                message: 'Kamu Menang!',
                kamu: text,
                bot: suit,
                poin: poin
            })
        } else {
            res.json({
                status: false,
                creator: creator,
                message: 'Kamu Kalah!',
                kamu: text,
                bot: suit
            })
        }
    } else {
        res.json({
            status: false,
            creator: creator,
            message: miss
        })
    }
})

router.get('/suitjawa', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.pilihan,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json({
        message: 'Masukan pilihan suitmu'
    })

    var miss = 'Pilihan yang tersedia semut, gajah, orang'
    var poin = 5000
    var suit = Math.random()

    if (suit < 0.34) {
        suit = 'orang'
    } else if (suit > 0.34 && suit < 0.67) {
        suit = 'semut'
    } else {
        suit = 'gajah'
    }

    if (text == suit) {
        res.json({
            status: true,
            creator: creator,
            message: 'Seri!',
            kamu: text,
            bot: suit
        })
    } else if (text == 'orang') {
        if (suit == 'semut') {
            res.json({
                status: true,
                creator: creator,
                message: 'Kamu Menang!',
                kamu: text,
                bot: suit,
                poin: poin
            })
        } else {
            res.json({
                status: false,
                creator: creator,
                message: 'Kamu Kalah!',
                kamu: text,
                bot: suit
            })
        }
    } else if (text == 'semut') {
        if (suit == 'gajah') {
            res.json({
                status: true,
                creator: creator,
                message: 'Kamu Menang!',
                kamu: text,
                bot: suit,
                poin: poin
            })
        } else {
            res.json({
                status: false,
                creator: creator,
                message: 'Kamu Kalah!',
                kamu: text,
                bot: suit
            })
        }
    } else if (text == 'gajah') {
        if (suit == 'orang') {
            res.json({
                status: true,
                creator: creator,
                message: 'Kamu Menang!',
                kamu: text,
                bot: suit,
                poin: poin
            })
        } else {
            res.json({
                status: false,
                creator: creator,
                message: 'Kamu Kalah!',
                kamu: text,
                bot: suit
            })
        }
    } else {
        res.json({
            status: false,
            creator: creator,
            message: miss
        })
    }
})

router.get('/sid', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandler.noturl)
    if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
        var json = await (await fetch(`https://api.xteam.xyz/shorturl/sid?url=${url}&APIKEY=${xteam_key}`)).json()

        res.json({
        	status: true,
            creator: creator,
            result: json.result.shorturl
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/bitly', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandler.noturl)
    if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
        var json = await (await fetch(`https://api.xteam.xyz/shorturl/bitly?url=${url}&APIKEY=${xteam_key}`)).json()

        res.json({
        	status: true,
            creator: creator,
            result: json.result.link
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/jadwaltv', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var channel = req.query.channel,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!channel) return res.json({
        message: `Masukan parameter channel`
    })

    try {
        var result = await (await fetch(`https://api.zeks.xyz/api/jadwaltv?channel=${channel}&apikey=${zeks_key}`)).json()

        res.json({
            creator: creator,
            result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/sha1', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var result = await createHash('sha1').update(text).digest('hex')

        res.json({
            status: true,
            creator: creator,
            text: text,
            sha1: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/sha256', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var result = await createHash('sha256').update(text).digest('hex')

        res.json({
            status: true,
            creator: creator,
            text: text,
            sha256: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/sha512', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var result = await createHash('sha512').update(text).digest('hex')

        res.json({
            status: true,
            creator: creator,
            text: text,
            sha512: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/gaminglogo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

        var hasil = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${text}`)
        await fs.writeFileSync(__path + '/tmp/gaminglogo.png', hasil)

        res.sendFile(__path + '/tmp/gaminglogo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/blur', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.blur(img);
        await fs.writeFileSync(__path + '/tmp/blur.png', hasil)

        res.sendFile(__path + '/tmp/blur.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/sepia', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.sepia(img);
        await fs.writeFileSync(__path + '/tmp/sepia.png', hasil)

        res.sendFile(__path + '/tmp/sepia.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/grey', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.greyscale(img);
        await fs.writeFileSync(__path + '/tmp/grey.png', hasil)

        res.sendFile(__path + '/tmp/grey.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/welcome', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var nama_mem = req.query.nama_mem,
        avatar = req.query.avatar,
        bg = req.query.bg,
        nama_gc = req.query.nama_gc,
        jumlah_mem = req.query.jumlah_mem,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!nama_mem) return res.json({
            message: `Masukan parameter nama member`
        })
        if (!avatar) return res.json({
            message: `Masukan parameter avatar`
        })
        if (!bg) return res.json({
            message: `Masukan parameter bg`
        })
        if (!bg.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!avatar.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!nama_gc) return res.json({
            message: `Masukan parameter nama group`
        })
        if (isNaN(jumlah_mem)) return res.json(loghandler.number)
        if (!jumlah_mem) return res.json({
            message: `Masukan parameter jumlah member`
        })

        var card = new canvacord.Welcomer()
            .setUsername(nama_mem)
            .setDiscriminator('000' + Math.floor(Math.random() * 9))
            .setMemberCount(Number(jumlah_mem))
            .setGuildName(nama_gc)
            .setAvatar(avatar)
            .setBackground(bg)
            .setText(`Welcome to ${nama_gc}`)

        card.build().then(result => {
            fs.writeFileSync(__path + '/tmp/welcome.png', result)

            res.sendFile(__path + '/tmp/welcome.png')
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/bye', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var nama_mem = req.query.nama_mem,
        avatar = req.query.avatar,
        bg = req.query.bg,
        nama_gc = req.query.nama_gc,
        jumlah_mem = req.query.jumlah_mem,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!nama_mem) return res.json({
            message: `Masukan parameter nama member`
        })
        if (!avatar) return res.json({
            message: `Masukan parameter avatar`
        })
        if (!avatar.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!bg) return res.json({
            message: `Masukan parameter background`
        })
        if (!bg.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!nama_gc) return res.json({
            message: `Masukan parameter nama group`
        })
        if (!jumlah_mem) return res.json({
            message: `Masukan parameter jumlah member`
        })

        var card = new canvacord.Leaver()
            .setUsername(nama_mem)
            .setDiscriminator('000' + Math.floor(Math.random() * 9))
            .setMemberCount(Number(jumlah_mem))
            .setGuildName(nama_gc)
            .setAvatar(avatar)
            .setBackground(bg)
            .setText(`Leave to ${nama_gc}`)

        card.build().then(result => {
            fs.writeFileSync(__path + '/tmp/bye.png', result)

            res.sendFile(__path + '/tmp/bye.png')
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/linesticker', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandler.noturl)
    if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
        var result = await (await fetch(`https://api.zeks.xyz/api/linesticker?link=${url}&apikey=${zeks_key}`)).json()

        res.json({
            creator: creator,
            result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/kerang', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var pertanyaan = req.query.pertanyaan,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    var nama_acak = await (await fetch(`https://kuhong-api.herokuapp.com/api/fakedata?country=en&apikey=${apikey}`)).json()
    var answer = 'Tidak ada pertanyaan yang dapat dijawab'
    if (!pertanyaan) answer = answer
    if (!pertanyaan.startsWith('apa') || !pertanyaan.startsWith('apakah') || !pertanyaan.startsWith('bisakah') || !pertanyaan.startsWith('bisa') || !pertanyaan.startsWith('kapan') || !pertanyaan.startsWith('siapakah') || !pertanyaan.startsWith('berapa') || !pertanyaan.startsWith('berapakah')) answer = 'Kata tanya yang tersedia : apa, apakah, kapan, kapankah, siapa, siapakah, bisa, bisakah, berapa, berapakah'
    if (pertanyaan.startsWith('apakah')) answer = pickRandom(['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'])
    if (pertanyaan.startsWith('apa')) answer = pickRandom(['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'])
    if (pertanyaan.startsWith('bisakah')) answer = pickRandom(['Iya', 'Bisa', 'Tentu saja bisa', 'Tentu bisa', 'Sudah pasti', 'Sudah pasti bisa', 'Tidak', 'Tidak bisa', 'Tentu tidak', 'tentu tidak bisa', 'Sudah pasti tidak'])
    if (pertanyaan.startsWith('bisa')) answer = pickRandom(['Iya', 'Bisa', 'Tentu saja bisa', 'Tentu bisa', 'Sudah pasti', 'Sudah pasti bisa', 'Tidak', 'Tidak bisa', 'Tentu tidak', 'tentu tidak bisa', 'Sudah pasti tidak'])
    if (pertanyaan.startsWith('kapankah')) answer = Math.floor(Math.random() * 100) + pickRandom([' detik', ' menit', ' jam', ' hari', ' pekan', ' minggu', ' bulan', ' tahun', ' dekade', ' windu', ' abad']) + ' lagi ...'
    if (pertanyaan.startsWith('kapan')) answer = Math.floor(Math.random() * 100) + pickRandom([' detik', ' menit', ' jam', ' hari', ' pekan', ' minggu', ' bulan', ' tahun', ' dekade', ' windu', ' abad']) + ' lagi ...'
    if (pertanyaan.startsWith('siapakah')) answer = nama_acak.result.name
    if (pertanyaan.startsWith('siapa')) answer = nama_acak.result.name
    if (pertanyaan.startsWith('berapakah')) answer = Math.floor(Math.random() * 1000).toString()
    if (pertanyaan.startsWith('berapa')) answer = Math.floor(Math.random() * 1000).toString()

    res.json({
        status: true,
        cretor: creator,
        pertanyaan: pertanyaan,
        jawaban: answer
    })
})

router.get('/google', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var q = req.query.query,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!q) return res.json(loghandler.notquery)

    try {
        var search = await googleIt({
            query: q
        })
        var result = search.map(({
            title,
            link,
            snippet
        }) => {
            return `*${title}*\n\n${link}\n${snippet}`
        }).join`\n\n`

        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/nulis4', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var json = await (await fetch(`https://videfikri.com/api/nulis/?query=${text}`)).json()
        await fs.writeFileSync(__path + '/tmp/nulis4.png', json.result.images)

        res.sendFile(__path + '/tmp/nulis4.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/url2image', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandle.notimg)
    if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

    var media = await getBuffer(url)
    await fs.writeFileSync(__path + '/tmp/image.png', media)

    res.sendFile(__path + '/tmp/image.png')
})

router.get('/stickerwm', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        pkg = req.query.packname,
        wm = req.query.author,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandle.noturl)
    if (!url.startsWith('http')) return res.json(loghandler.invalidLink)
    if (!pkg) return res.json({
        message: `Masukan parameter packname`
    })
    if (!wm) return res.json({
        message: `Masukan parameter author`
    })

    var stk = await sticker(false, url, pkg, wm)
    await fs.writeFileSync(__path + '/tmp/stickerwm.webp', stk)

    res.sendFile(__path + '/tmp/stickerwm.webp')
})

router.get('/underwater', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
            request.post({
                url: 'https://photooxy.com/logo-and-text-effects/creating-text-underwater-ocean-363.html',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
            }, (e, r, b) => {
                if (!e) {
                    $ = cheerio.load(b)
                    $('.thumbnail').find('img').each(function() {
                        h = $(this).attr('src')
                        var result = 'https://photooxy.com' + h

                        res.json({
                        	status: true,
                            creator: creator,
                            result: result
                        })
                    })
                }
            })
    } catch (e) {
            console.error(e);
            res.status(403).send(error)
    }
})

router.get('/catlogo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var hasil = await getBuffer(`https://dynamic.brandcrowd.com/asset/logo/065b4535-d123-4261-accb-2f21e3eac3cf/logo?v=4&text=${text}`)
        await fs.writeFileSync(__path + '/tmp/catlogo.png', hasil)

        res.sendFile(__path + '/tmp/catlogo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/arcade', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var hasil = await getBuffer(`https://dynamic.brandcrowd.com/asset/logo/065b4535-d123-4261-accb-2f21e3eac3cf/logo?v=4&text=${text}`)
        await fs.writeFileSync(__path + '/tmp/arcade.png', hasil)

        res.sendFile(__path + '/tmp/arcade.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/foxlogo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var hasil = await getBuffer(`https://dynamic.brandcrowd.com/asset/logo/6458e177-55ec-4b2d-8be7-4094431378ad/logo?v=4&text=${text}`)
        await fs.writeFileSync(__path + '/tmp/foxlogo.png', hasil)

        res.sendFile(__path + '/tmp/foxlogo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/glitchlogo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var hasil = await getBuffer(`https://dynamic.brandcrowd.com/asset/logo/afa0be93-d4ae-46d5-b741-64bd3b4b6148/logo?v=4&text=${text}`)
        await fs.writeFileSync(__path + '/tmp/glitchlogo.png', hasil)

        res.sendFile(__path + '/tmp/glitchlogo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/bearlogo', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var hasil = await getBuffer(`https://dynamic.brandcrowd.com/asset/logo/0c963355-e735-4cdd-bec8-1373ba2a222e/logo?v=4&text=${text}`)
        await fs.writeFileSync(__path + '/tmp/bearlogo.png', hasil)

        res.sendFile(__path + '/tmp/bearlogo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/freefire', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var hasil = await getBuffer(`https://api.zeks.xyz/api/epep?text=${text}&apikey=${zeks_key}`)
        await fs.writeFileSync(__path + '/tmp/fflogo.png', hasil)

        res.sendFile(__path + '/tmp/fflogo.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/spammer/pizzahut', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var nomor = req.query.nomor,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!nomor) return res.json(loghandler.notnomor)
    if (isNaN(nomor)) return res.json(loghandler.number)

    try {
        var json = await (await fetch(`https://api.xteam.xyz/spammer/pizzahut?no=${nomor}&APIKEY=${xteam_key}`)).json()

        res.json({
            status: true,
            creator: creator,
            logs: json.result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/spammer/olx', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var nomor = req.query.nomor,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!nomor) return res.json(loghandler.notnomor)
    if (isNaN(nomor)) return res.json(loghandler.number)

    try {
        var json = await (await fetch(`https://api.xteam.xyz/spammer/olx?no=${nomor}&APIKEY=${xteam_key}`)).json()

        res.json({
            status: true,
            creator: creator,
            logs: json.result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/spammer/danacinta', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var nomor = req.query.nomor,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!nomor) return res.json(loghandler.notnomor)
    if (isNaN(nomor)) return res.json(loghandler.number)

    try {
        var json = await (await fetch(`https://api.xteam.xyz/spammer/danacinta?no=${nomor}&APIKEY=${xteam_key}`)).json()

        res.json({
            status: true,
            creator: creator,
            logs: json.result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/persen', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var type = req.query.type,
        nama = req.query.nama,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!nama) return res.json(loghandler.notnama)
    if (!type) return res.json(loghandler.nottype)
    if (type == 'baper' || type == 'gay' || type == 'tolol' || type == 'bucin' || type == 'sange' || type == 'gila' || type == 'pintar' || type == 'bodoh' || type == 'ganteng' || type == 'cantik' || type == 'stres' || type == 'sad') {

        var result = nama + ' itu ' + Math.floor(Math.random() * 101) + '% ' + type

        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } else return res.json({
        status: false,
        result: `Tipe yang tersedia : baper, gay, tolol, bucin, sange, gila, pintar, bodoh, ganteng, cantik, stres, sad`
    })

})

router.get('/wattpad', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var id = req.query.id,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!id) return res.json({
        message: `Masukan parameter id`
    })

    try {
        var result = await (await fetch(`https://api.wattpad.com/api/v3/stories/${id}`)).json()

        res.json({
            status: true,
            creator: creator,
            result
        })
    } catch (e) {
        console.error(e)
        res.json({
            error: 'id stories tidak valid'
        })
    }
})

router.get('/jedagjedug', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var theme = req.query.theme,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!theme) return res.json(loghandler.nottheme)
    if (!(theme == 'ff' || theme == 'ml' || theme == 'beatvn')) return res.json({
        error: `Tema yang tersedia : ff, ml, beatvn`
    })

    try {
        var buffer = await fs.readFileSync(__path + '/src/jedagjedug/' + theme + '/' + Math.floor(Math.random() * 11) + '.mp4')
        await fs.writeFileSync(__path + '/tmp/jedag_jedug.mp4', buffer)

        res.sendFile(__path + '/tmp/jedag_jedug.mp4')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/getvn', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var query = req.query.query,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!query) return res.json(loghandler.notquery)
    if (!(query == 'papale' || query == 'anjay' || query == 'pota' || query == 'padepap' || query == 'iri' || query == 'ara' || query == 'bila' || query == 'cidro' || query == 'kiminoto' || query == 'baby' || query == 'bernyanyi' || query == 'umbrella' || query == 'enak' || query == 'wes' || query == 'kokoro' || query == 'bambam' || query == 'booma' || query == 'tapi' || query == 'siul' || query == 'masha')) return res.json({
        status: false,
        list_theme: [`anjay, ara, bila, baby, bambam, booma, bernyanyi, cidro, enak, iri, masha, padepap, papale, pota, kiminoto, kokoro, siul, tapi, umbrella, wes`]
    })

    try {
        var getvn = await fs.readFileSync(__path + '/src/getvn/' + query + '.opus')
        await fs.writeFileSync(__path + '/tmp/getvn.mp3', getvn)

        res.sendFile(__path + '/tmp/getvn.mp3')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/masadepan', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var nama = req.query.nama,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!nama) return res.json(loghandler.notnama)

    var result = 'Menurut Ramalan...\n\nMasa Depan ' + pickRandom([`${nama} akan menjadi orang yang Kaya, keluarga yang harmonis, memiliki 2 memiliki anak, memiliki 4 memiliki kendaraan, memiliki 2 rumah`, `${nama} akan menjadi orang yang Sederhana, keluarga yang harmonis, memiliki 3 memiliki anak, memiliki 1 memiliki kendaraan, memiliki 1 rumah`, `${nama} akan menjadi orang yang Miskin, keluarga yang Sederhana, memiliki 1 anak, tidak memiliki kendaraan, rumah ngontrak`, `${nama} akan menjadi orang yang Sederhana, keluarga yang dicerai, memiliki 5 anak, memiliki 2 kendaraan, memiliki 2 rumah`, `${nama} akan menjadi orang yang Sederhana, keluarga yang Sederhana, memiliki 2 anak, memiliki 2 kendaraan, memiliki 1 rumah`, `${nama} akan menjadi orang yang Miskin, keluarga yang dicerai memiliki 2 anak, memiliki 1 kendaraan, memiliki 1 rumah`, `${nama} akan menjadi orang yang Kaya, keluarga yang Sederhana, memiliki 1 anak, memiliki 1 kendaraan, memiliki 2 rumah`, `${nama} akan menjadi orang yang Sederhana, keluarga yang Harmonis, memiliki 1 anak, memiliki 3 kendaraan, memiliki 1 rumah`, `${nama} akan menjadi orang yang Miskin, tidak memiliki keluarga (jomblo), tidak memiliki anak, tidak memiliki kendaraan, tidak memiliki rumah`, `${nama} akan menjadi orang yang Sederhana, keluarga yang Sederhana, memiliki 4 anak, memiliki 1 kendaraan, memiliki 2 rumah`, `${nama} akan menjadi orang yang Sederhana, keluarga yang kacau, tidak memiliki anak (Gugur), memiliki 2 kendaraan, memiliki 1 rumah`, `${nama} akan menjadi orang yang Sangat Kaya, keluarga yang Sangat Harmonis, memiliki 5 anak, memiliki 7 kendaraan, memiliki 9 rumah`, `${nama} akan menjadi orang yang Sangat Miskin, keluarga yang Sederhana, memiliki 9 anak, tidak memiliki kendaraan, rumah ngontrak`, `${nama} akan menjadi orang yang Kaya, keluarga yang Pelit, memiliki 2 anak, memiliki 2 kendaraan, memiliki 2 rumah`, `${nama} akan menjadi orang yang Sederhana, keluarga yang Pelit, memiliki 1 anak, memiliki 1 kendaraan, memiliki 1 rumah`, `${nama} akan menjadi orang yang Sederhana, keluarga yang dicerai, memiliki 2 anak, memiliki 1 kendaraan, rumah ngontrak`, `${nama} akan menjadi orang yang Sangat Sederhana, keluarga yang Sakinah, memiliki 1 anak, memiliki 1 kendaraan, memiliki 1 rumah`, `${nama} akan menjadi orang yang Sederhana, keluarga yang Sangat Sederhana, memiliki 11 anak, memiliki 1 kendaraan, memiliki 1 rumah`, `${nama} akan menjadi orang yang Sederhana, keluarga yang Sangat Sederhana, memiliki 2 anak kembar, memiliki 3 kendaraan, memiliki 2 rumah`, `${nama} akan menjadi orang yang Sederhana keluarga yang Sederhana, memiliki 2 anak kembar dan 1 anak lagi, memiliki 1 kendaraan, memiliki 1 rumah`])

    res.json({
        status: true,
        creaator: creator,
        result: result
    })
})

router.get('/laptop', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await (await fetch(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${img}`)).buffer()
        await fs.writeFileSync(__path + '/tmp/laptop.png', hasil)

        res.sendFile(__path + '/tmp/laptop.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/iqtest', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    var result = 'IQ Anda sebesar ' + Math.floor(Math.random() * 1001) + '!'
    res.json({
        status: true,
        creator: creator,
        result: result
    })
})

router.get('/bacot', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

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

    res.json({
        status: true,
        creator: creator,
        result: result
    })
})

router.get('/truth', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

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

    res.json({
        status: true,
        creator: creator,
        result: result
    })
})

router.get('/katailham', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

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

    res.json({
        status: true,
        creator: creator,
        result: result
    })
})

router.get('/sindiran', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    var data = fs.readFileSync(__path + '/lib/scraper/sindiran.json')
    var object = JSON.parse(data);
    var index = Math.floor(Math.random() * object.length);
    var json = object[index];

    res.json({
        status: true,
        creator: creator,
        result: json.result.sindiran
    })
})

router.get('/twister', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var json = await (await fetch(`http://docs-jojo.herokuapp.com/api/tongue_twister`)).json()

        res.json({
            status: true,
            creator: creator,
            result: json.result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/purba', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var result = await purba(text.toLowerCase())

        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/tebakumur', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var nama = req.query.nama,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!nama) return res.json(loghandler.notnama)

    try {
        var result = Math.floor(Math.random() * 60)

        res.json({
            status: true,
            creator: creator,
            nama: nama,
            umur: `${result} tahun`
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/wattpad2', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var q = req.query.query,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!q) return res.json(loghandler.notquery)

    try {
        var result = await (await fetch(`https://xteam.xyz/search/wattpadsearch?q=${q}&APIKEY=${xteam_key}`)).json()

        res.json(result)
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/randombyte', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var jumlah = req.query.jumlah,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!jumlah) return res.json(loghandler.notjumlah)
    if (isNaN(jumlah)) return res.json(loghandler.number)
    if (jumlah > 1000) return res.json({
        error: 'Maximal 1000!'
    })

    try {
        var result = await randomBytes(Number(jumlah))

        res.json({
            status: true,
            creator: creator,
            result: result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/randomsticker', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        res.sendFile(__path + '/src/sticker/' + Math.floor(Math.random() * 205) + '.webp')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/intromaker', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

        var media = await imageToBase64('https://raw.githubusercontent.com/RC047/media/main/intromaker/' + text.toLowerCase() + '.webm').catch(() => res.sendFile(__path + '/public/media/intro.mp4'))
        var buffer = Buffer.from(media, 'base64')
            fs.writeFileSync(__path + '/tmp/intro.mp4', buffer)

  res.sendFile(__path + '/tmp/intro.mp4')
})

router.get('/tomp3', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandler.noturl)
    if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
        var enc = await imageToBase64(url)
        var buffer = Buffer.from(enc, 'base64')
        await fs.writeFileSync(__path + '/tmp/media_tomp3.mp4', buffer)
        var media = await fs.readFileSync(__path + '/tmp/media_tomp3.mp4')
        var mp3 = await toMP3(media, 'mp4')
        var result = await saveToMedia(mp3)

           res.json({
           	status: true,
               creator: creator,
               result: result
           })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/attp2', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!text) return res.json(loghandler.nottext)

    try {
        var enc = await imageToBase64(`https://api.vhtear.com/textxgif?text=${text}&apikey=${vhtears_key}`)
        var buffer = Buffer.from(enc, 'base64')
        await fs.writeFileSync(__path + '/tmp/attp2.gif', buffer)

        res.sendFile(__path + '/tmp/attp2.gif')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/shitpost', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var enc = await imageToBase64(`https://api.xteam.xyz/shitpost?APIKEY=${xteam_key}`)
        var buffer = Buffer.from(enc, 'base64')
        await fs.writeFileSync(__path + '/tmp/shitpost.mp4', buffer)

        res.sendFile(__path + '/tmp/shitpost.mp4')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/shauntheship', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!img) return res.json(loghandler.notimg)
    if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
        var enc = await imageToBase64(`https://api.xteam.xyz/videomaker/shaunthesheep?url=${img}&APIKEY=${xteam_key}`)
        var buffer = Buffer.from(enc, 'base64')
        await fs.writeFileSync(__path + '/tmp/shaun-the-ship.mp4', buffer)

        res.sendFile(__path + '/tmp/shaun-the-ship.mp4')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/running', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!img) return res.json(loghandler.notimg)
    if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
        var buffer = await getBuffer(img)
        await fs.writeFileSync(__path + '/tmp/running_tmp.png', buffer)
        var media = fs.readFileSync(__path + '/tmp/running_tmp.png')
        await running(media, 10, 60).then(result => {
            fs.writeFileSync(__path + '/tmp/running.mp4', result)

            res.sendFile(__path + '/tmp/running.mp4')
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/citacita', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
    var arr = []
          await fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
             .then(result => result.text())
             .then(body => arr = body.split('\n'))
                var cita = arr[Math.floor(Math.random() * arr.length)]
                var buffer = await imageToBase64(cita)
                var media = Buffer.from(buffer, 'base64')
                fs.writeFileSync(__path + '/tmp/cita_cita.mp3', media)

         res.sendFile(__path + '/tmp/cita_cita.mp3')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/github', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var q = req.query.query,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!q) return res.json(loghandler.notquery)

    try {
        var result = await (await fetch(`https://api.github.com/search/repositories?q=${q}`)).json()

        res.json({
            status: true,
            creator: creator,
            result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/minecraft', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var type = req.query.type,
          server = req.query.server,
          apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!type) return res.json(loghandler.nottype)
    if (!(type == 'bedrock' || type == 'java')) return res.json({ message: 'Pilih bedrock atau java!' })
    if (!server) return res.json({ message: 'Masukan parameter server' })

    try {
    	var tipe = type.toLowerCase()
    	if (tipe == 'bedrock') {
            await msu.statusBedrock(server).then(result => {
            if (result.host == undefined) return res.json({ status: false, message: 'Server tidak ditemukan!' })

                res.json({
                    status: true,
                    creator: creator,
                    type: tipe,
                    result:{
                    	host: result.host,
                        port: result.port,
                        edition: result.edition,
                        serverGUID: result.serverGUID.toString(),
                        version: result.version,
                        protocolVersion: result.protocolVersion,
                        maxPlayers: result.maxPlayers,
                        onlinePlayers: result.onlinePlayers,
                        serverID: result.serverID,
                        gameMode: result.gameMode,
                        gameModeID: result.gameModeID,
                        portIPv4: result.portIPv4,
                        portIPv6: result.portIPv6,
                        roundTripLatency: result.roundTripLatency
                        }
                })
            })
         } else if (tipe == 'java') {
            await msu.status(server).then(result => {
            if (result.host == undefined) return res.json({ status: false, message: 'Server tidak ditemukan!' })

                res.json({
                    status: true,
                    creator: creator,
                    type: tipe,
                    result: result
                })
              })
           }
    } catch (e) {
        console.error(e)
    res.status(403).send(error)
    }
})

router.get('/rank', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var avatar = req.query.avatar,
        nama = req.query.nama,
        exp = req.query.exp,
        max_exp = req.query.max_exp,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!avatar) return res.json(loghandler.notimg)
    if (!avatar.startsWith('http')) return res.json(loghandler.invalidLink)
    if (!nama) return res.json(loghandler.nama)
    if (!exp) return res.json({
        message: 'Masukan parameter exp'
    })
    if (isNaN(exp)) return res.json(loghandler.number)
    if (!max_exp) return res.json({
        message: 'Masukan parameter max_exp'
    })
    if (isNaN(max_exp)) return res.json(loghandler.number)

    try {
        var rank = new canvacord.Rank()
            .setAvatar(avatar)
            .setCurrentXP(Number(exp))
            .setRequiredXP(Number(max_exp))
            .setStatus('dnd')
            .setProgressBar('#FFFFFF', 'COLOR')
            .setUsername(nama)
            .setDiscriminator('000' + Math.floor(Math.random() * 9))

        rank.build().then(result => {
            fs.writeFileSync(__path + '/tmp/rank_' + nama + '.png', result)

            res.sendFile(__path + '/tmp/rank_' + nama + '.png')
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/savemedia', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var file_url = req.query.file_url,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!file_url) return res.json({
        message: 'Masukan parameter file_url'
    })
    if (!file_url.startsWith('http')) return res.json(loghandler.invalidLink)

        var encmedia = await imageToBase64(file_url)
        var buffer = Buffer.from(encmedia, 'base64')
        var { ext } = await fromBuffer(buffer)
        var extension = `${ext} (${ext.toUpperCase()})`
        var result = await saveToMedia(buffer)

      res.json({
      	status: true,
          creator: creator,
          ext: extension,
          result: result
      })
})

router.get('/waifu', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var json = await (await fetch('https://api.waifu.pics/sfw/waifu')).json()
        var result = await getBuffer(json.url)
               await fs.writeFileSync(__path + '/tmp/waifu.png', result) 

  res.sendFile(__path + '/tmp/waifu.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/neko', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

    try {
        var json = await (await fetch('https://api.waifu.pics/sfw/neko')).json()
        var result = await getBuffer(json.url)
               await fs.writeFileSync(__path + '/tmp/neko.png', result) 

  res.sendFile(__path + '/tmp/neko.png')
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/tobraille', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
          apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!img) return res.json(loghandler.notimg)

    try {
    var media = await getBuffer(img)
    var path = __path + '/tmp/' + randomNumber + '.png'
    await fs.writeFileSync(path, media)
    var result = await braillefy(path, 30, {
        invert: false,
        dither: true
    })

        res.json({
            status: true,
            creator: creator,
            result: result.toString()
         })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/spotifycard', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var avatar = req.query.avatar,
        nama = req.query.nama,
        album = req.query.album,
        title = req.query.title,
        start = req.query.start,
        end = req.query.end,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!avatar) return res.json(loghandler.notimg)
    if (!avatar.startsWith('http')) return res.json(loghandler.invalidLink)
    if (!nama) return res.json(loghandler.nama)
    if (!album) return res.json({ message: 'Masukan parameter album' })
    if (!title) return res.json({ message: 'Masukan parameter title' })
    if (!start) return res.json({
        message: 'Masukan parameter start'
    })
    if (!end) return res.json({
        message: 'Masukan parameter end'
    })

    try {
        var card = new canvacord.Spotify()
         .setAuthor(nama)
         .setAlbum(album)
         .setStartTimestamp(start)
         .setEndTimestamp(end)
         .setImage(avatar)
         .setTitle(title)

        card.build().then(result => {
            fs.writeFileSync(__path + '/tmp/' + nama + '_spotify.png', result)

            res.sendFile(__path + '/tmp/' + nama + '_spotify.png')
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/fetch', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
          method = req.query.method,
          apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!url) return res.json(loghandler.noturl)
    if (!url.startsWith('http')) return res.json(loghandler.invalidLink)
    if (!(method || method.toUpperCase() == 'GET' || method.toUpperCase() == 'POST')) return res.json({ status: false, message: 'Masukan parameter method (GET/POST)' })

try {
    var data = await fetch(url, { method: method.toUpperCase() })
    var header = data.headers.get('content-type')

    if (data.status !== 200) return res.json({ status: false, creator: creator, message: `${data.statusText} (${data.status})` })
    if (!/text|json/.test(header)) {
    var buffer = await data.buffer()
    var src = await saveToMedia(buffer)
       res.json({
       	status: true,
           creator: creator,
           header: header,
           src: src
       })
    }
    if (header.split(';')[0] == 'application/json') {
    var json = await data.json()

       res.json({
    	   status: true,
           creator: creator,
           header: header,
           body: json
       })
    }
    if (header.split(';')[0] == 'text/html') {
    var body = await data.text()

       res.json({
       	status: true,
           creator: creator,
           header: header,
           body: body
       })
    }
} catch (e) {
      console.error(e)
   res.status(403).send(error)
   }
})

router.get('/groupwa', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var q = req.query.query,
        apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
    if (!q) return res.json(loghandler.notquery)

    try {
        var json = await (await fetch(`https://api.xteam.xyz/search/grupwa?q=${q}&APIKEY=${xteam_key}`)).json()

        res.json({
            status: true,
            creator: creator,
            result: json.result
        })
    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/burning', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await imageToBase64(`https://api.zeks.xyz/api/burning-image?apikey=${zeks_key}&image=${img}`)
        await fs.writeFileSync(__path + '/tmp/burning.gif', hasil, 'base64')

        res.sendFile(__path + '/tmp/burning.gif')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/brightness', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        level = req.query.level,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!level) return res.json({ message: 'Masukan parameter level' })
        if (isNaN(level)) return res.json(loghandler.number)

        var hasil = await canvacord.Canvas.brightness(img, Number(level));
        await fs.writeFileSync(__path + '/tmp/brightness.png', hasil)

        res.sendFile(__path + '/tmp/brightness.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/threshold', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        level = req.query.level,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!level) return res.json({ message: 'Masukan parameter level' })
        if (isNaN(level)) return res.json(loghandler.number)

        var hasil = await canvacord.Canvas.threshold(img, Number(level));
        await fs.writeFileSync(__path + '/tmp/threshold.png', hasil)

        res.sendFile(__path + '/tmp/threshold.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/darkness', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        level = req.query.level,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!level) return res.json({ message: 'Masukan parameter level' })
        if (isNaN(level)) return res.json(loghandler.number)

        var hasil = await canvacord.Canvas.darkness(img, Number(level));
        await fs.writeFileSync(__path + '/tmp/darkness.png', hasil)

        res.sendFile(__path + '/tmp/darkness.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/fuse', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        img2 = req.query.img2,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!img2) return res.json({ message: 'Masukan parameter img2' })
        if (!img2.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.fuse(img, img2);
        await fs.writeFileSync(__path + '/tmp/fuse.png', hasil)

        res.sendFile(__path + '/tmp/fuse.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/slap', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        img2 = req.query.img2,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!img2) return res.json({ message: 'Masukan parameter img2' })
        if (!img2.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.slap(img, img2)
        await fs.writeFileSync(__path + '/tmp/slap.png', hasil)

        res.sendFile(__path + '/tmp/slap.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/spank', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        img2 = req.query.img2,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!img2) return res.json({ message: 'Masukan parameter img2' })
        if (!img2.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.spank(img, img2)
        await fs.writeFileSync(__path + '/tmp/spank.png', hasil)

        res.sendFile(__path + '/tmp/spank.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/kiss', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        img2 = req.query.img2,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!img2) return res.json({ message: 'Masukan parameter img2' })
        if (!img2.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.kiss(img, img2);
        await fs.writeFileSync(__path + '/tmp/kiss.png', hasil)

        res.sendFile(__path + '/tmp/kiss.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/imgcolor', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        color = req.query.color,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!color) return res.json({ message: 'Masukan parameter color' })

        var hasil = await canvacord.Canvas.colorfy(img, color);
        await fs.writeFileSync(__path + '/tmp/color.png', hasil)

        res.sendFile(__path + '/tmp/color.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/hitler', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

        var hasil = await canvacord.Canvas.hitler(img);
        await fs.writeFileSync(__path + '/tmp/hitler.png', hasil)

        res.sendFile(__path + '/tmp/hitler.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/resize', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var img = req.query.img,
        width = req.query.width,
        height = req.query.height,
        apikeyInput = req.query.apikey;

    try {
        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!img) return res.json(loghandler.notimg)
        if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!width) return res.json({ message: 'Masukan parameter width' })
        if (isNaN(width)) return res.json(loghandler.number)
        if (!height) return res.json({ message: 'Masukan parameter height' })
        if (isNaN(height)) return res.json(loghandler.number)

        var hasil = await canvacord.Canvas.resize(img, Number(width), Number(height));
        await fs.writeFileSync(__path + '/tmp/resize.png', hasil)

        res.sendFile(__path + '/tmp/resize.png')

    } catch (e) {
        console.error(e)
        res.status(403).send(error)
    }
})

router.get('/scraper/photooxy', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        text = req.query.text,
        apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.notimg)
        if (!url.startsWith('https://photooxy.com/')) return res.json({ status: false, message: 'Masukan url photooxy!' })
        if (!text) return res.json({ status: false, message: 'Masukan parameter text', info: `Gunakan [ ] jika text lebih dari 1 (2-3). Misal : ['Teks1'], ['Teks2']` })

       try {
       var result = await photooxy(url, text)

           res.json({
           	status: true,
               creator: creator,
               result: result
           })
       } catch (e) {
            console.error(e);
            res.json({
            	status: false,
                creator: creator,
                error: util.format(e).split`at`[0]
            })
    }
})

router.get('/scraper/textpro', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        text = req.query.text,
        apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.notimg)
        if (!url.startsWith('https://textpro.me/')) return res.json({ status: false, message: 'Masukan url textpro.me!' })
        if (!text) return res.json({ status: false, message: 'Masukan parameter text', info: `Gunakan [ ] jika text lebih dari 1 (2-3). Misal : ['Teks1'], ['Teks2']` })

       try {
       var result = await textpro(url, text)

           res.json({
           	status: true,
               creator: creator,
               result: result
           })
       } catch (e) {
            console.error(e);
            res.json({
            	status: false,
                creator: creator,
                error: util.format(e).split`at`[0]
            })
    }
})

router.get('/scraper/ephoto360', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        text = req.query.text,
        apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.notimg)
        if (!url.startsWith('https://en.ephoto360.com/')) return res.json({ status: false, message: 'Masukan url ephoto360!' })
        if (!text) return res.json({ status: false, message: 'Masukan parameter text', info: `Gunakan [ ] jika text lebih dari 1 (2-3). Misal : ['Teks1'], ['Teks2']` })

       try {
       var result = await ephoto(url, text)

           res.json({
           	status: true,
               creator: creator,
               result: result
           })
       } catch (e) {
            console.error(e);
            res.json({
            	status: false,
                creator: creator,
                error: util.format(e).split`at`[0]
            })
    }
})

router.get('/nomorhoki', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
        nomor = req.query.nomor,
        apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!nomor) return res.json(loghandler.notimg)
        if (isNaN(nomor)) return res.json(number)

    try {
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
            var result = h.split`(adsbygoogle`[0];

          res.json({
           	status: true,
               creator: creator,
               result: 'Nomor HP ' + result
          })
       })
    } catch (e) {
    	console.error(e)
     res.status(403).send(error)
   }
})

router.get('/soundchanger', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var type = req.query.type,
          audio = req.query.audio,
          apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!type) return res.json(loghandler.nottype)
        if (!audio) return res.json(loghandler.notaudio)
        if (!audio.startsWith('http')) return res.json(loghandler.invalidLink)

        var tmp = await imageToBase64(audio)
        await fs.writeFileSync(__path + '/tmp/audio.mp3', tmp, 'base64')
        var mp3 = __path + '/tmp/audio.mp3'
        var output = __path + '/public/media/soundchanger_result.mp3'
        var tipe = type.toLowerCase()
        var result = 'https://kuhong-api.herokuapp.com/media/' + tipe + '.mp3'
        if (!(tipe == 'bass' || tipe == 'slow' || tipe == 'tupai' || tipe == 'berat' || tipe == 'reverse' || tipe == 'fast')) return res.json({ message: 'Pilih bass, slow, tupai, reverse, fast, dan berat!' })
        if (tipe == 'bass') {
	    await execSync(`ffmpeg -i ${mp3} -af equalizer=f=94:width_type=o:width=2:g=30 ${output}`, (err, stderr, stdout) => {
				   if (err) {
				   console.log(util.format(err))
                   res.status(403).send(error)
                   }

             res.json({
              	status: true,
                  creator: creator,
                  result: result
              })
           })
        } else if (tipe == 'slow') {
	    await execSync(`ffmpeg -i ${mp3} -filter:a 'atempo=0.7,asetrate=44100' ${output}`, (err, stderr, stdout) => {
				   if (err) {
				   console.log(util.format(err))
                   res.status(403).send(error)
                   }

             res.json({
              	status: true,
                  creator: creator,
                  result: result
              })
           })
        } else if (tipe == 'tupai') {
		await await execSync(`ffmpeg -i ${mp3} -filter:a 'atempo=0.5,asetrate=65100' ${output}`, (err, stderr, stdout) => {
				   if (err) {
				   console.log(util.format(err))
                   res.status(403).send(error)
                   }

             res.json({
              	status: true,
                  creator: creator,
                  result: result
              })
           })
        } else if (tipe == 'berat') {
		await execSync(`ffmpeg -i ${mp3} -filter:a 'atempo=1.6,asetrate=22100' ${output}`, (err, stderr, stdout) => {
				   if (err) {
				   console.log(util.format(err))
                   res.status(403).send(error)
                   }

             res.json({
              	status: true,
                  creator: creator,
                  result: result
              })
           })
        } else if (tipe == 'reverse') {
		await execSync(`ffmpeg -i ${mp3} -filter_complex 'areverse' ${output}`, (err, stderr, stdout) => {
				   if (err) {
				   console.log(util.format(err))
                   res.status(403).send(error)
                   }

             res.json({
              	status: true,
                  creator: creator,
                  result: result
              })
           })
        } else if (tipe == 'fast') {
		await execSync(`ffmpeg -i ${mp3} -filter:a 'atempo=1.63,asetrate=44100' ${output}`, (err, stderr, stdout) => {
				   if (err) {
				   console.log(util.format(err))
                   res.status(403).send(error)
                   }

             res.json({
              	status: true,
                  creator: creator,
                  result: result
              })
           })
        }
})

router.get('/execute', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var command = req.query.command,
          apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!command) return res.json({ message: 'Masukan parameter command' })
        if (apikeyInput !== owner_apikey && /^node|npm|python|ruby|php|go|(c)lang|sql|heroku|parallel|ffmpeg|gm|tesseract|rm|mv|cp|mkdir|l(s|d)|cd|cat|more|import/i.test(command)) return res.json({ status: false, creator: creator, result: 'Anda tidak diizinkan untuk menggunakan perintah ini!' })

   try {
        await exec(command, (err, stderr, stdout) => {
        var result
        if (stderr) result = stderr
        if (stdout) result = stdout
        if (err) result = formatLogs(err.message)

    res.json({
            status: true,
            creator: creator,
            result: result
        })
     })
  } catch (e) {
  	res.json({
     	status: true,
        creator: creator,
        result: formatLogs(e.message)
     })
   }
})

router.get('/escape', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
          apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json({ message: 'Masukan parameter text' })

     res.json({
     	status: true,
         creator: creator,
         basic: escape(text),
         full: escapeFull(text)
    })
})

router.get('/unescape', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
          apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json({ message: 'Masukan parameter text' })

     res.json({
     	status: true,
         creator: creator,
         result: unescape(text)
    })
})

router.get('/count', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
          apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

     res.json({
     	status: true,
         creator: creator,
         result: text.length.toString()
    })
})

router.get('/battery', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        var battery = await fs.readFileSync(__path + '/views/battery.html').toString()
        var result = await encryptHtml(battery)

    res.send(result)
})

router.get('/clipclaps', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var apikeyInput = req.query.apikey;

    var maintenance = false
    if (maintenance) return res.status(500).send(mtc)
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
    if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)

        await imageToBase64('https://raw.githubusercontent.com/RC047/media/main/clipclaps/' + Math.floor(Math.random() * 47) + '.mp4')
        .then(media => {
        var buffer = Buffer.from(media, 'base64')
              fs.writeFileSync(__path + '/tmp/clipclaps.mp4', buffer)

  res.sendFile(__path + '/tmp/clipclaps.mp4')
        }).catch(() => res.status(403).send(error))
})

router.get('/html-preview', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var html = req.query.html,
          devMode = req.query.dev,
          apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!html) return res.json({ message: 'Masukan parameter html' })

    try {
        var devTools
    	if (devMode == 'true') devTools = await fs.readFileSync(__path + '/views/tools.html').toString(), html = html + devTools

  res.send(unescape(html))
    } catch (e) {
   	console.error(e)
     res.status(403).send(error)
  }
})

router.get('/lock', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
          pass = req.query.pass,
          apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.noturl)
        if (!url.startsWith('http')) return res.json(loghandler.invalidLink)
        if (!pass) return res.json({ message: 'Masukan parameter pass (password)' })

    try {
    	var randomHash = await pickRandom(['sha1', 'sha256', 'sha512', 'md5'])
        var id = await createHash(randomHash).update(randomText).digest('hex')
        await fs.writeFileSync(__path + '/tmp/url.txt', url)
        await fs.writeFileSync(__path + '/tmp/id.txt', id)
        await fs.writeFileSync(__path + '/tmp/pass.txt', pass)
        var result = 'https://kuhong-api.herokuapp.com/api/locked?id=' + id
        var shorted = await (await fetch('https://tinyurl.com/api-create.php?url=' + result)).text()

      res.json({
      	status: true,
          creator: creator,
          password: pass,
          result: result,
          shorted_url: shorted
      })
    } catch (e) {
   	console.error(e)
     res.status(403).send(error)
  }
})

router.get('/locked', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var id = req.query.id;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!id) return res.json({ message: 'Masukan parameter id' })
        var url = await fs.readFileSync(__path + '/tmp/url.txt').toString()
        var session_id = await fs.readFileSync(__path + '/tmp/id.txt').toString()
        var pass = await fs.readFileSync(__path + '/tmp/pass.txt').toString()
        if (id !== session_id) return res.json({ status: false, message: 'session has expired' })

    try {
	await encryptScript(`
// Author: RC047

var lock = true;
var rejected = false;

while (lock) {

for (var i = 10; i > 0; i--) {
     var passInput = prompt('Silahkan masukan Password untuk membuka Link :');
     var kesempatan = i - 1;

   if (i > 10) i = 10;
   if (kesempatan == 0) alert('Anda sudah terlalu banyak memasukan Password yang salah!'), rejected = true, throw false;
   if (rejected == true) alert('Anda sudah terlalu banyak memasukan Password yang salah!'), throw false;
   if (passInput == null) alert('Tindakan ini tidak dapat dibatalkan!'), i += 1;
   else if (passInput == '') alert('Masukan Password!'), i += 1;
   else if (passInput !== '${pass}') alert('Password Salah!');
   else if (passInput == '${pass}') i = 0, lock = false, window.location = '${url}';
   }
}
`.trim()).then(script => fs.writeFileSync(__path + '/public/js/locker.js', script))
    	var data = '<script src="https://kuhong-api.herokuapp.com/js/locker.js"></script><script src="https://kuhong-api.herokuapp.com/js/ads.js"></script>'
    	var result = await encryptHtml(data, 'URL Locker provided by Kuhong - Rest API')

     res.send(result)
  } catch (e) {
      console.error(e)
    res.status(403).send(error)
  }
})

router.get('/hex/encode', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
          apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

    try {
    	var result = Buffer.from(text, 'utf-8').toString('hex')

      res.json({
      	  status: true,
          creator: creator,
          text: text,
          result: result
      })
    } catch (e) {
   	console.error(e)
     res.status(403).send(error)
  }
})

router.get('/hex/decode', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var text = req.query.text,
          apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!text) return res.json(loghandler.nottext)

    try {
    	var result = Buffer.from(text, 'hex').toString()

      res.json({
      	status: true,
          creator: creator,
          text: text,
          result: result
      })
    } catch (e) {
   	console.error(e)
     res.status(403).send(error)
  }
})

router.get('/html-load', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var url = req.query.url,
          apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!url) return res.json(loghandler.noturl)
        if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

    try {
    	var data = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="UTF-8">
<title>HTML Loader</title>
<script data-ad-client="ca-pub-8366721519003904" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script src="https://kuhong-api.herokuapp.com/js/ads.js"></script>
<style media="screen">
html, body, iframe {
margin: 0;
padding: 0;
}

html, body {
height: 100%;
overflow: hidden;
}

iframe {
width: 100%;
height: 100%;
border: 0;
}
</style>
</head>
<body>
   <iframe src="${url}"></iframe>
</body>
</html>
`.trim()
        var loaded = await encryptHtml(data, 'HTML Loader provided by Kuhong - Rest API')

      res.send(loaded)
    } catch (e) {
   	console.error(e)
     res.status(403).send(error)
  }
})

router.all('/upload', formidable({ encoding: 'UTF-8', uploadDir: '/tmp/', multiples: true }), async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    if (req.method.toUpperCase() !== 'POST') return res.json(loghandler.notfiles)
    var files = req.files.data.path
    if (!files) return res.json(loghandler.notfiles)

try {
var buffer = await fs.readFileSync(files)
var result = await saveToMedia(buffer)
if (!result) return res.json({ status: false, creator: creator, message: 'File type is Not Supported' })

   res.json({
	   status: true,
	   creator: creator,
	   result: result
    })
} catch (e) {
	console.error(e)
   res.status(403).send(error)
   }
})

router.get('/minify', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var code = req.query.code,
        apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!code) return res.json({ status: false, message: 'Masukan parameter code' })

try {
    await obfuscate(code, { target: 'node', minify: true })
	.then(result => {

  res.json({
	  status: true,
	  creator: creator,
	  result: result
	})
    })
} catch (e) {
    console.error(e)
  res.status(403).send(error)
  }
})

router.get('/obfuscate', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var code = req.query.code,
        apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!code) return res.json({ status: false, message: 'Masukan parameter code' })

try {
    await obfuscate(code, { target: 'node', preset: 'low', minify: true })
	.then(result => {

  res.json({
	  status: true,
	  creator: creator,
	  result: result
	})
   })
} catch (e) {
    console.error(e)
  res.status(403).send(error)
  }
})

router.get('/obfuscate', async (req, res, next) => {
await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (blocked.test(ip) || ip.startsWith(blocked.source) || ip.endsWith(blocked.source)) return res.json(loghandler.blocked)
    var code = req.query.code,
        apikeyInput = req.query.apikey;

        var maintenance = false
        if (maintenance) return res.status(500).send(mtc)
        if (!apikeyInput) return res.json(loghandler.notparam)
        if (!(apikeyInput == owner_apikey || apikeyInput == free_apikey || apikeyInput == apikey || apikeyInput == custom_apikey || apikeyInput == blocked_apikey)) return res.status(406).send(invalidKey)
        if (apikeyInput == blocked_apikey) return res.json(loghandler.blockedKey)
        if (!code) return res.json({ status: false, message: 'Masukan parameter code' })

try {
    await obfuscate(code, { target: 'node', preset: 'low', minify: true })
	.then(result => {

  res.json({
	  status: true,
	  creator: creator,
	  result: result
	})
   })
} catch (e) {
    console.error(e)
  res.status(403).send(error)
  }
})

// End of script
module.exports = router
