__path = process.cwd()

// Database :
var { generateID, generateApikey, generateCode, generatePassword, generateKey, generateHex, generateBase64, generateHash } = require(__path + '/lib/generator.js');
var express = require('express');
var database = require(__path + '/database/database.js');

try {
var kuhong = database.get('RC047'); // jan diubah
} catch (e) {
   console.log(e)
}

var creatorList = ['RC047','RendyGans','RendyCraft047']; // Nama Lu Ngab (dibutuhkan)
var creator = creatorList[Math.floor(Math.random() * creatorList.length)]; // Ini jan diubah

// Apikey :
var free_apikey = generateApikey // Apikey Gratis
var apikey = 'eh9RoPYCpE8lp272UrC8ve5RKpU4Jfb5O2L' // Apikeymu (dibutuhkan)
var custom_apikey = '' // Custom Apikey
var xteam_key = '7cac32071f2eb2ff' // Apikey Xteam (dibutuhkan)
var zeks_key = 'apikeykuhong' // Apikey Zeks (dibutuhkan)
var melodicxt_key = 'administrator' // Apikey Melodicxt-2 (dibutuhkan)
var removebg_key = 'HCVrssExQw8DuaWpj2vE5359' // Apikey RemoveBG (dibutuhkan)
console.log(`Checking Apikey Data...`)
console.log(`Your Apikey : ${apikey}`)
console.log(`Free Apikey : ${free_apikey}`)
//console.log(`Custom Apikey : ${custom_apikey}`)
console.log(`Xteam Apikey : ${xteam_key}`)
console.log(`Zeks Apikey : ${zeks_key}`)
console.log(`Melodicxt-2 Apikey : ${melodicxt_key}`)
console.log(`RemoveBG Apikey : ${removebg_key}`)

// Required Modules :
var http = require('http');
var ffmpeg = require('fluent-ffmpeg');
var brainly = require('brainly-scraper-v2');
var imageToBase64 = require('image-to-base64');
var upload = require(__path + '/lib/upload.js');
var translate = require('translate-google-api');
var tesseract = require('node-tesseract-ocr');
var googleIt = require('google-it');
var axios = require('axios');
var FormData = require('form-data');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var qrcode = require('qrcode');
var secure = require('ssl-express-www');
var formidable = require('formidable');
var mv = require('mv');
var cors = require('cors');
var scrapeYt = require('scrape-yt');
var gtts = require('node-gtts');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var yts = require('yt-search');
var fs = require('fs');
var util = require('util');
var router  = express.Router();
var options = require(__path + '/lib/options.js');
var { alay, purba, stylizeText, tts, wait, simih, getBuffer, h2k, getRandom, readMore, randomBytes, start, info, success, banner, close, pickRandom } = require(__path + '/lib/functions.js');
var { servers, yta, ytv } = require(__path + '/lib/y2mate.js');
var { sticker } = require(__path + '/lib/sticker.js');
var { fromBuffer } = require('file-type');
var { removeBackgroundFromImageFile } = require('remove.bg');
var { tahta } = require(__path + '/lib/tahta.js');
var { JSDOM } = require('jsdom');
var { createHash } = require('crypto');
var { spawn, exec } = require('child_process');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var { Vokal, Base, Searchnabi, Gempa } = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

// Handler Logger :
var loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter apikey!'
    },
    nottype: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter type'
    },
    notnama: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nama'
    },
    notimg: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter img'
    },
    notemoji: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter emoji'
    },
    notangka: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter angka'
    },
    notnomor: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nomor'
    },
    notjumlah: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter jumlah'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter url'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter query'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter kata'
    },
    notlang: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter bahasa'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter username'
    },
    notfound: {
        status: error,
        creator: `${creator}`,
        code: 404,
        message: 'Nyasar ya? yang lu cari disini nggak ada!'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Tema tidak tersedia silahkan masukkan texmaker/list atau baca dokumentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: `Apikey tidak ditemukan! Silahkan kontak Owner untuk dapatkan Apikey wa.me/62895337278647`
    },
    invalidLink: {
        status: false,
        creator: `${creator}`,
        message: 'Masukan link yang valid!'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'Kata tidak valid'
    },
    invalidtext: {
    	status: false,
        creator: `${creator}`,
        message: 'Teks tidak valid'
    },
    longtext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Teks terlalu panjang!'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    notbase64: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter teks base64'
    },
    number: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Teks harus berupa angka!'
    },
    maintenance: {
        status: 404,
        creator: `${creator}`,
        message: 'Fitur ini sedang dalam Perbaikan'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'Erorr! :('
    }
}

// Template Respone :
var invalidKey = __path + '/views/invalidKey.html' // Jika Apikey Invalid
var mtc = __path + '/views/maintenance.html' // Jika Sedang Perbaikan
var error = __path + '/views/error.html' // Jika Error

// Random Functions :
        var len = 10
        var arr = '_0123456789-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890_'
        var random = '';
        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }
        var lenn = 5
        var random2 = '';
        for (var i = lenn; i > 0; i--) {
            random2 += arr[Math.floor(Math.random() * arr.length)];
        }
        var randomTextNumber = 'kuhong-api-storage?id=' + random + random2

// Api Features :
router.get('/cekapikey', async (req, res, next) => {
    var apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	var status = 'active'
	var limit = 'Limited! (Berubah setiap website mati)'
        if(apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`) limit = 'Unlimited!'

    try {
	     res.json({
		creator: creator,
                status : status,
                apikey : apikeyInput,
                limit : limit
            })
 
    } catch (e) {
	res.sendFile(error)
   }
})

router.get('/getapikey', async (req, res, next) => {
    res.json({
	   status: true,
	   creator: creator,
	   info: 'Apikey akan berubah secara otomatis setiap website mati,, Beli Premium agar apikey tidak terus diganti',
	   free_apikey: free_apikey
    })
})

router.get('/tiktok', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

    var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidLink)
         })
})

router.get('/tiktokstalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "Username tidak ditemukan!"
             })
         })
})

router.get('/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/randomquotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa Subscribe Youtube ${creator}`
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/jadwal-bioskop', (req, res) => {
var apikeyInput = req.query.apikey

var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
const cheerio = require('cheerio')

axios.get('https://jadwalnonton.com/now-playing').then(({ data }) => {
     const $ = cheerio.load(data)
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
     creator:  `${creator}`,
     status: true,
     result: result
     })
  })
})

router.get('/tinyurl', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa Subscribe Youtube ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidLink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput !== `${apikey}`) return res.sendFile(invalidKey)
		if (!type) return res.json({status: false, creator, code: 404, message: 'Masukan parameter type, type yang tersedia : base4 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
					result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.sendFile(error)
			}
})

router.get('/nulis', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!text) return res.json(loghandler.nottext)

   try {
      var fontPath = __path + '/lib/font/Zahraaa.ttf'
      var inputPath = __path + '/lib/kertas/nulis.jpg'
      var outputPath = __path + '/tmp/hasil.jpg'
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
            text,
            outputPath
         ])
         .on('error', () => res.sendFile(error))
         .on('exit', () =>
         {
	      res.sendFile(outputPath)
        })
   } catch (e) {
      console.log(e);
	 res.sendFile(error)
   }
})

router.get('/nulis2', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

   try {
     var d = new Date
     var tgl = d.toLocaleDateString('id-Id')
     var hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
     var fontPath = __path + '/lib/font/Zahraaa.ttf'
     var inputPath = __path + '/lib/kertas/nulis2.jpg'
     var outputPath = __path + '/tmp/hasil2.jpg'
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
    text,
    outputPath
  ])
  .on('error', () => res.sendFile(error))
  .on('exit', () => {

     res.sendFile(outputPath)
        })
   } catch (e) {
      console.log(e);
	 res.json(loghandler.erorr)
           }
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
			    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    res.json({
                                              status : true,
                                              creator : creator,
                                              result : data.data.url
                                       })
                                })
                           })
                       }
                   })
     } catch (e) {
          console.log(e);
        res.sendFile(error)
            }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return rs.jso(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h =$(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effcts/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                               })
                       })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikeyInput = req.query.apikey;

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput !== `${apikey}`) return res.sendFile(invalidKey)
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.sendFile(error)
		})
})

router.get('/infogempa', async (req, res, next) => {
	        var apikeyInput = req.query.apikey

		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput !== `${apikey}`) return res.sendFile(invalidKey)
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.sendFile(error)
		})
})

router.get('/hadits', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
     })
})
 
router.get('/quran', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/fb', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json(result)
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.om/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnai").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/flaming', async (req, res, next) => {
         var text = req.query.text,
             apikeyInput = req.query.apikey;
        
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

  try {
         var json = await (await fetch(`http://zekais-api.herokuapp.com/photooxy/flaming?text=${text}`)).json()
	 var buffer = await (await fetch(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${json.result}&name=RC047`)).json()
	   await fs.writeFileSync(__path + '/tmp/flaming.png', await getBuffer(buffer.data.url))
	  
	res.sendFile(__path + '/tmp/flaming.png')
   } catch (e) {
       console.log(e);
     res.sendFile(error)
       }
})

router.get('/neon', async (req, res, next) => {
         var text = req.query.text,
             apikeyInput = req.query.apikey;
        
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

  try {
         var json = await (await fetch(`http://zekais-api.herokuapp.com/photooxy/neon?text=${text}`)).json()
	 var buffer = await (await fetch(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${json.result}&name=RC047`)).json()
	   await fs.writeFileSync(__path + '/tmp/neon.png', await getBuffer(buffer.data.url))
	  
	res.sendFile(__path + '/tmp/neon.png')
   } catch (e) {
       console.log(e);
     res.sendFile(error)
       }
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/wirid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${apikey}`) return res.jon(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var apikeyInput =req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQ-Results/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/wikipedia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/randomquote/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/drakorasia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.searc
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/jadwalshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kota = req.query.kota
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
            res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/fakedata', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            country = req.query.country
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})

router.get('/halah', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text;
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if (!text) return res.json(loghandler.nottext)

    var txt = 'a'
    var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, text.toUpperCase())

    res.json({
	status: true,
	creator: creator,
	result: result
         })
})

router.get('/hilih', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text;
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if (!text) return res.json(loghandler.nottext)

    var txt = 'i'
    var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, text.toUpperCase())

    res.json({
	status: true,
	creator: creator,
	result: result
         })
})

router.get('/huluh', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text;
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if (!text) return res.json(loghandler.nottext)

    var txt = 'u'
    var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, text.toUpperCase())

    res.json({
	status: true,
	creator: creator,
	result: result
         })
})

router.get('/heleh', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text;
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if (!text) return res.json(loghandler.nottext)

    var txt = 'e'
    var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, text.toUpperCase())

    res.json({
	status: true,
	creator: creator,
	result: result
         })
})

router.get('/holoh', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text;
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if (!text) return res.json(loghandler.nottext)

    var txt = 'o'
    var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, text.toUpperCase())

    res.json({
	status: true,
	creator: creator,
	result: result
         })
})

router.get('/lirik', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kata" })

        var json = await (await fetch(`https://scrap.terhambar.com/lirik?word=${lagu}`)).json()
        var result = json.result
             res.json({
		 creatos : creator,
                 result : result
             })
})

router.get('/chord', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json(result)
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/random/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/kbbi', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if(!kata) return res.json({ status : false, creator: `${creator}`, message : "Masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json(result)
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/covidindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/covidworld', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => responsejson())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kota = req.query.kota
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/infocuaca', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    provinsi = req.query.provinsi
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!provinsi) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter provinsi"})
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/${provinsi}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/infocuaca/bandara', async (req, rs, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/infocuaca/dunia', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/infotsunami', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
        var result = dta;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/random/meme', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/quotes/kanye', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/translate', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    lang = req.query.lang,
	    text = req.query.text;
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if (!lang) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter bahasa" })
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
		hasil: result[0]
	})
    } catch (e) {
        res.sendFile(error)
	    console.log(e)
    }       
})


router.get('/anime/kusonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/gabut', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;            res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/random/wallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/kuis/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
  if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

    var data = fs.readFileSync(__path + '/lib/games/caklontong.js')
    var json = JSON.parse(data);
    var index = Math.floor(Math.random() * json.length);
    var object = json[index];

    res.json({
	    status : true,
            creator : `${creator}`,
            soal : object.result.soal,
	          jawaban : object.result.jawaban,
	          desk : object.result.desc,
	          poin : object.result.poin
      })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/kuis/tebakgambar', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
  if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

    var data = fs.readFileSync(__path + '/lib/games/tebakgambar.js')
    var json = JSON.parse(data);
    var index = Math.floor(Math.random() * json.length);
    var object = json[index];

    res.json({
	    status : true,
            creator : `${creator}`,
            soal : object.result.soal,
	          jawaban : object.result.jawaban,
	          poin : object.result.poin
      })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/news/cnn', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/news/cnbc', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
           
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/news/republika', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/news/tempo', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.verce.app/v1/tempo-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/news/antara', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            type = req.query.type
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!type) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter type"})

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${type}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/news/kumparan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/filmapik/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/filmapik/kategori', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/filmapik/play', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            id = req.query.id
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!id) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter id"})

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${id}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
            res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/filmapik/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
            res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter film"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/comingsoon', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/tvseries', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/year', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tahun = req.query.tahun
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!tahun) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter tahun"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/year?year=${tahun}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/country', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            negara = req.query.negara
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!negara) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter negara"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/country?country=${negara}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
		result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/lk21/genre', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tipe = req.query.tipe
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!tipe) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter tipe"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/genre?genre=${tipe}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/textmaker/random', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'text-burn' && theme != 'art-quote') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'text-burn') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'art-quote') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
               headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
			    fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/textmaker/roses', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wooden-boarch' && theme != 'golden') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'wooden-boarch') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
               headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.sendFile(error)
                }
        } else if (theme == 'golden') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = heerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.sendFile(error)
        }
})

router.get('/ytmp4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!url) return res.json(loghandler.noturl)

       var server = (url || 'id4').toLowerCase()
       var { dl_link, thumb, title, filesize, filesizeF } = await ytv(url, servers.includes(server) ? server : 'id4')

       res.json({
            status: true,
            creator: creator,
	    result:{
		    title: title,
		    thumb: thumb,
		    size: filesizeF,
		    link: dl_link
	    }
        })
})


router.get('/ytmp3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!url) return res.json(loghandler.noturl)

       var server = (url || 'id4').toLowerCase()
       var { dl_link, thumb, title, filesize, filesizeF } = await ytv(url, servers.includes(server) ? server : 'id4')

       res.json({
            status: true,
            creator: creator,
	    result:{
		    title: title,
		    thumb: thumb,
		    size: filesizeF,
		    link: dl_link
	    }
        })
})


router.get('/igstalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter username"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/stalk?username=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
            })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker2?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker3?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker4', async (rq, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/textmaker4?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker3d', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker3d/no2', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-2?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker3d/no3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.qery.text
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-3?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/maker3d/no4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

       fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-4?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'RC047',
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
})


router.get('/ytsearch', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            q = req.query.q
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!q) return res.json(loghandler.notquery)

     var results = await yts(q)
     var data = results.all.find(video => video.seconds < 3600)
     if (!data) return res.json({ message: `Hasil pencarian "${q}" tidak ditemukan!` })
     var isVideo = /2$/.test(q)
     var { dl_link, thumb, title, filesize, filesizeF } = await (ytv)(data.url, 'id4')

     res.json({
            status: true,
            creator: creator,
	    result:{
		    title: title,
                    duration: data.timestamp,
                    views: `${data.views} views`,
                    uploaded: data.ago,
		    thumb: thumb,
		    url: data.url,
		    mp4_link: dl_link
	    },
	    channel:{
		    name: data.author.name,
		    link: data.author.url
	    }
        })
})


router.get('/maker/special/transformer', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})
 try {
       var json = await (await fetch(`https://textmaker-api-zahirr.herokuapp.com/api/special/transformer?text=${text}`)).json()
       var buffer = await getBuffer(json.results)
	 await fs.writeFileSync(__path + '/tmp/transformer.png', buffer)

             res.sendFile(__path + '/tmp/transformer.png')
 } catch (e) {
	 console.log(e)
    res.sendFile(error)
  }
})

router.get('/maker/special/epep', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            text = req.query.text
            
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter text"})

 try {
       var json = await (await fetch(`https://textmaker-api-zahirr.herokuapp.com/api/special/sertifikatepep?text=${text}`)).json()
       var buffer = await getBuffer(json.results)
	 await fs.writeFileSync(__path + '/tmp/epepserti.png', buffer)

             res.sendFile(__path + '/tmp/epepserti.png')
 } catch (e) {
	 console.log(e)
    res.sendFile(error)
      }
})

router.get('/tomp4', async (req, res, next) => {
        var url = req.query.url,
             apikeyInput = req.query.apikey;
        
	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!url) return res.json(loghandler.noturl)
	if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

try {
   axios.get(`https://ezgif.com/webp-to-mp4?url=${url}`).then(({ data }) => {
           var $ = cheerio.load(data)
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
                         }}).then(({ data }) => {
                         var $ = cheerio.load(data)
                         var result = 'https:' + $('div#output > p.outfile > video > source').attr('src')

	                       res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result : result
                                        })
                             })
                     })

 } catch (e) {
          console.log(e);
      res.sendFile(error)
   }
})

router.get('/ocr', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
        img = req.query.img;
            
	var maintenance = true
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!img) return res.json(loghandler.notimg)
	if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

	var media = await getBuffer(img)
	await fs.writeFileSync(__path + '/tmp/ocr.png', media)
	var path = fs.readFileSync(__path + '/tmp/ocr.png')
        var ocr = { lang: "eng+ind", oem: 1, psm: 3 }
          await tesseract.recognize(path, ocr).then(result => {
          console.log('OCR RESULT :' + result.toStrimg())

	   res.json({
		   status: true,
		   creator: creator,
		   result: result.toString()
	   })
  })
     .catch(error => {
        res.sendFile(error)
     console.log(error.message)
  })
})

router.get('/removebg', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
        img = req.query.img;

  try {
	var maintenance = true
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!img) return res.json(loghandler.notimg)
	if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

	var media = await getBuffer(img)
	await fs.writeFileSync(__path + '/tmp/nobg.png', media)
	var path = fs.readFileSync(__path + '/tmp/nobg.png')
	var ranp = getRandom('.png')
          await removeBackgroundFromImageFile({ path: path, apiKey: removebg_key, size: 'auto', type: 'auto', ranp }).then(result => {
            var hasil = Buffer.from(result.base64img, 'base64')
            fs.writeFileSync(ranp, hasil, (e) => {
          if (e) return res.json({ error: 'Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.' })
        })

	  res.sendFile(hasil)
    })
 } catch (e) {
          console.log(e);
      res.sendFile(error)
   }
})

router.get('/simsimi', async (req, res, next) => {
        var kata = req.query.kata,
	apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!kata) return res.json(loghandler.notkata)

 try {
       var json = await (await fetch(`https://simsumi.herokuapp.com/api?text=${kata}&lang=id`)).json()
        var result = json.success
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
	console.log(e)
    res.sendFile(error)
   }
})

router.get('/binary', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
       text = req.query.encode

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

 try {
       var json = await (await fetch(`https://some-random-api.ml/binary?encode=${text}`)).json()
        var result = json.binary
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/binary', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        text = req.query.decode;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!text) return res.json(loghandler.nottext)

 try {
       var json = await (await fetch(`https://some-random-api.ml/binary?decode=${text}`)).json()
        var result = json.text
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/tobase64', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        img = req.query.img;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!img) return res.json(loghandler.notimg)

 try {
           var result = await imageToBase64(img)
                res.json({
                   	status : true,
                       creator : `${creator}`,
                       result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/tomedia', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        base64 = req.query.base64;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!base64) return res.json(loghandler.notbase64)
        if (base64.startsWith('data')) return res.json({ message : `Gunakan teks base64 tanpa data:image/jpeg!` })

 try {
           var result = Buffer.from(base64, 'base64')
                res.sendFile(result)
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/ttp', async (req, res, next) => {
     var text = req.query.text,
     apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

 try {
         var json = await (await fetch(`https://api.areltiyan.site/sticker_maker?text=${text}`)).json()
         var hasil = json.base64.split`,`[1]
         await fs.writeFileSync(__path + `/tmp/ttp.png`, hasil, 'base64')

    res.sendFile(__path + '/tmp/ttp.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/dadu', async (req, res, next) => {
	var apikeyInput = req.query.apikey

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

      var random = Math.floor(Math.random() * 6) + 1
      var hasil = 'https://www.random.org/dice/dice' + random + '.png'
      var data = await (await fetch(hasil)).buffer()

         await fs.writeFileSync(__path + '/tmp/dadu.png', data)
   res.sendFile(__path + '/tmp/dadu.png')
})

router.get('/repeat', (req, res, next) => {
const repeat = (text, total) => {
  return text.repeat(total)
}
        var text = req.query.text,
            jumlah = req.query.jumlah,
            apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if (!jumlah) return res.json(loghandler.notjumlah)
  if (isNaN(jumlah)) return res.json(loghandler.number)
  if (jumlah > 10000) return res.json({ message: `Maximal 10rb Kali!` })

  var result = repeat(text, jumlah)
       res.json({
             status: true,
             creator: `${creator}`,
             result: result
       })
})

router.get('/reverse', async (req, res, next) => {
       var text = req.query.text,
	   apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!text) return res.json(loghandler.nottext)

 try {
       var json = await (await fetch(`https://videfikri.com/api/hurufterbalik/?query=${text}`)).json()
        var result = json.result.kata
             res.json({
             	status : true,
                creator : `${creator}`,
                result : result
             })
} catch (e) {
    res.sendFile(error)
   }
})

router.get('/spamcall', async (req, res, next) => {
       var nomor = req.query.nomor,
	   apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!nomor) return res.json(loghandler.notnomor)
	if (isNaN(nomor)) return res.json(loghandler.number)

 try {
       var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/spamcall?no=${nomor}`)).json()
             res.json(json)

} catch (e) {
    res.sendFile(error)
   }
})

router.get('/spamsms', async (req, res, next) => {
       var nomor = req.query.nomor,
           jumlah = req.query.jumlah,
	   apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!nomor) return res.json(loghandler.notnomor)
    if (isNaN(nomor)) return res.json(loghandler.number)
    if (!jumlah) return res.json(loghandler.notjumlah)
    if (isNaN(jumlah)) return res.json(loghandler.number)
    if (jumlah > 20) return res.json({ message: `Maximal 20 Bang` })

 try {
       var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/spamsms?no=${nomor}&jum=${jumlah}`)).json()
         res.json(json)

} catch (e) {
    res.sendFile(error)
   }
})

router.get('/bokep', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://mhankbarbar.herokuapp.com/api/pussy`)).json()
	 var hasil = await getBuffer(json.result)
            await fs.writeFileSync(__path + '/tmp/bokep.png', hasil)

    res.sendFile(__path + '/tmp/bokep.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/googleimage', async (req, res, next) => {
	var q = req.query.q,
     apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!q) return res.json(loghandler.notquery)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=${q}`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/image.png', hasil)

    res.sendFile(__path + '/tmp/image.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/pinterest', async (req, res, next) => {
	var q = req.query.q,
     apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!q) return res.json(loghandler.notquery)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=${q}`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * boy.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/pinterest.png', hasil)

    res.sendFile(__path + '/tmp/pinterest.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/say', async (req, res, next) => {
     var apikeyInput = req.query.apikey,
            text = req.query.text;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       res.json({
       	status : true,
           creator : `${creator}`,
       	result : text
       })
})

router.get('/md5', async (req, res, next) => {
     var apikeyInput = req.query.apikey,
            text = req.query.text;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var result = await createHash('md5').update(text).digest('hex')

       res.json({
       	   status : true,
           creator : `${creator}`,
           result : result
       })
})

router.get('/tahta', async (req, res, next) => {
   var text = req.query.text,
          apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/hartatahta?text=${text}&apikey=${zeks_key}`)).buffer()
       await fs.writeFileSync(__path + '/tmp/tahta.png', hasil)

    res.sendFile(__path + '/tmp/tahta.png')
})

router.get('/customtahta', async (req, res, next) => {
   var text = req.query.text,
          apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/tahta?text=${text}&apikey=${zeks_key}`)).buffer()
       await fs.writeFileSync(__path + '/tmp/cstahta.png', hasil)

    res.sendFile(__path + '/tmp/cstahta.png')
})

router.get('/anime/random', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=anime`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/anime.png', hasil)

    res.sendFile(__path + '/tmp/anime.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/kpop/random', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=kpop`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/kpop.png', hasil)

    res.sendFile(__path + '/tmp/kpop.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/random/manga', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

 try {
         var json = await (await fetch(`https://api.fdci.se/rep.php?gambar=manga`)).json()
         var body = JSON.parse(JSON.stringify(json))
         var tada =  body[Math.floor(Math.random() * body.length)]
	 var hasil = await getBuffer(tada)
            await fs.writeFileSync(__path + '/tmp/manga.png', hasil)

    res.sendFile(__path + '/tmp/manga.png')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/triggered', async (req, res, next) => {
       var img = req.query.img,
	   apikeyInput = req.query.apikey;
	
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

 try {
	 var result = await imageToBase64(`http://zekais-api.herokuapp.com/trigger?url=${img}`)
	 var hasil = Buffer.from(result, 'base64')
            await fs.writeFileSync(__path + '/tmp/trigger.gif', hasil)

    res.sendFile(__path + '/tmp/trigger.gif')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/emojitopng', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
               emoji = req.query.emoji;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!emoji) return res.json(loghandler.notemoji)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/emoji-image?apikey=${zeks_key}&emoji=${encodeURIComponent(emoji)}`)).buffer()
        await fs.writeFileSync(__path + '/tmp/emojitopng.png', hasil)

         res.sendFile(__path + '/tmp/emojitopng.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)   }
})

router.get('/brainly', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            soal = req.query.soal,
	    poin = req.query.poin;

try {
  var maintenance = false
  if(maintenance == true) return res.sendFile(mtc)
  if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!soal) return res.json({ message: `Masukan parameter soal` })
  if (!poin) return res.json({ message: `Masukan parameter poin` })
  if (isNaN(poin)) return res.json(loghandler.number)
  if (poin > 50) return res.json({ message: `Maximal 50!` })
  if (poin < 5) return res.json({ message: `Minimal 5!` })

     var json = await (await fetch(`https://api.zeks.xyz/api/brainly?apikey=${zeks_key}&q=${soal}&count=${poin}`)).json()
       res.json(json)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/belajar', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
               soal = req.query.soal;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
  if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!soal) return res.json({ message: `Masukan parameter soal` })

     var json = await (await fetch(`https://api.zeks.xyz/api/brainly?apikey=${zeks_key}&q=${soal}&count=5`)).json()
       res.json(json)
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/pantun', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.zeks.xyz/api/pantun?apikey=${zeks_key}`)).json()
         res.json(json)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/memeindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.zeks.xyz/api/memeindo?apikey=${zeks_key}`)).json()
     var hasil = await getBuffer(json.result)
       await fs.writeFileSync(__path + '/tmp/memeindo.png', hasil)

         res.sendFile(__path + '/tmp/memeindo.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})	

router.get('/artinama', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
               nama = req.query.nama;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!nama) return res.json(loghandler.notnama)	

 request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url: 'http://www.primbon.com/arti_nama.php?nama1=' + nama + '&proses=+Submit%21+',
      }, function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');

var result = `Arti dari namamu adalah\n\nNama *${nama}*\n${h}`
         res.json({
	        status : true,
                creator : `${creator}`,
                result : result
             })
   })

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/cekjodoh', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            nama = req.query.nama,
	    pasangan = req.query.pasangan;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!nama) return res.json(loghandler.notnama)
  if (!pasangan) return res.json({ message : `Masukan nama pacarmu,, ehh pasangan :v` })

 request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url: 'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1=' + nama + '&nama2='+ pasangan +'&proses=+Submit%21+',

    }, function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')

var result = `Kecocokan Berdasarkan Nama :\n\n${d}`
         res.json({
	        status : true,
                creator : `${creator}`,
                result : result
             })
   })

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/kuis/family100', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

    var data = fs.readFileSync(__path + '/lib/games/family100.js')
    var json = JSON.parse(data);
    var index = Math.floor(Math.random() * json.length);
    var object = json[index];

    res.json({
	    status : true,
            creator : `${creator}`,
            soal : object.result.soal,
	    jawaban : object.result.jawaban
      })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/asupan', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
    if(!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     var result = await fs.readFileSync(__path + '/src/lucu/' + Math.floor(Math.random() * 47) + '.mp4')
         res.sendFile(result)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/cerpen', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/cerpen`)).json()
         res.json({
		 status : true,
		 creator : creator,
		 judul : json.title,
		 pengarang : json.pengarang,
		 kategori : json.category,
		 cerpen : json.post
      })

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/mediafire', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/mediafire?apikey=${zeks_key}&url=${url}`)).json()
         res.json(json)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/tts', async (req, res, next) => {
       var text = req.query.text,
	   lang = req.query.lang,
	   apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
    if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if (text.length > 200) return res.json(loghandler.longtext)
  if (!lang) return res.json(loghandler.notlang)
  if (lang.length > 4) return res.json({ error : `Kode bahasa tidak valid!` })

  try {
  var google = await tts(text, lang)
     await fs.writeFileSync(__path + '/tmp/tts.mp3', google)

       res.sendFile(__path + '/tmp/tts.mp3')
  } catch (e) {
	console.log(e)
	  res.sendFile(error)
     }
})

router.get('/darkjokes', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.zeks.xyz/api/darkjokes?apikey=${zeks_key}`)).json()
     var hasil = await getBuffer(json.result)
       await fs.writeFileSync(__path + '/tmp/darkjokes.png', hasil)

         res.sendFile(__path + '/tmp/darkjokes.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/splaybutton', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${text}&apikey=${zeks_key}`)
       await fs.writeFileSync(__path + '/tmp/playbutton.png', hasil)

         res.sendFile(__path + '/tmp/playbutton.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/gplaybutton', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${text}&apikey=${zeks_key}`)
       await fs.writeFileSync(__path + '/tmp/playbutton2.png', hasil)

         res.sendFile(__path + '/tmp/playbutton2.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/textpantai', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=${zeks_key}&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/pantai.png', hasil)

         res.sendFile(__path + '/tmp/pantai.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/textsalju', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var json = await (await fetch(`https://api.zeks.xyz/api/snowwrite?text1=${t1}&text2=${t2}&apikey=${zeks_key}`)).json()
       await fs.writeFileSync(__path + '/tmp/salju.png', await getBuffer(json.result))

         res.sendFile(__path + '/tmp/salju.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/alay', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
    if(!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if (!text) return res.json(loghandler.nottext)

      // var json = await (await fetch(`https://api.terhambar.com/bpk?kata=${text}`)).json()
      var result = await alay(text)

         res.json({
		 status : true,
		 creator : creator,
		 result: result
	         // result : json.text
	   })

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/firework', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${text}&apikey=${zeks_key}`)
       await fs.writeFileSync(__path + '/tmp/firework.png', hasil)

         res.sendFile(__path + '/tmp/firework.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/retro', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2,
	    t3 = req.query.t3;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)
  if (!t3) return res.json(loghandler.nottext3)

     var json = await (await fetch(`https://api.zeks.xyz/api/retro?text1=${t1}&text2=${t2}&text3=${t3}&apikey=${zeks_key}`)).json()
       await fs.writeFileSync(__path + '/tmp/retro.png', await getBuffer(json.result))

         res.sendFile(__path + '/tmp/retro.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/matrix', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=${zeks_key}&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/matrix.png', hasil)

         res.sendFile(__path + '/tmp/matrix.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/text3d', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=${zeks_key}&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/3d.png', hasil)

         res.sendFile(__path + '/tmp/3d.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/phlogo', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${t1}&text2=${t2}&apikey=${zeks_key}`)
       await fs.writeFileSync(__path + '/tmp/phlogo.png', hasil)

         res.sendFile(__path + '/tmp/phlogo.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/marvel', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2;
try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${t1}&text2=${t2}&apikey=${zeks_key}`)
       await fs.writeFileSync(__path + '/tmp/marvel.png', hasil)

         res.sendFile(__path + '/tmp/marvel.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/blackpink', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${text}&apikey=${zeks_key}`)
       await fs.writeFileSync(__path + '/tmp/bp.png', hasil)

         res.sendFile(__path + '/tmp/bp.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/avengers', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    t1 = req.query.t1,
	    t2 = req.query.t2;
try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${t1}&text2=${t2}&apikey=${zeks_key}`)
       await fs.writeFileSync(__path + '/tmp/avenger.png', hasil)

         res.sendFile(__path + '/tmp/avenger.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/thunder', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    text = req.query.text;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/thundertext?text=${text}&apikey=${zeks_key}`)
       await fs.writeFileSync(__path + '/tmp/thunder.png', hasil)

         res.sendFile(__path + '/tmp/thunder.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/news', async (req, res) => {
     var apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     res.json({
  status: true,
  result: [
 {
    jenis: 'cnn',
    type: ["nasional","internasional","ekonomi","olahraga","teknologi","hiburan","gaya-hidup"],
    example: 'https://kuhong-api.herokuapp.com/api/news/cnn?type=teknologi&apikey=APIKEY',
    author: creator
  },
  {
    jenis: 'cnbc',
    type: ["market","investment","news","entrepreneur","syariah","tech","lifestyle"],
    example: 'https://kuhong-api.herokuapp.com/api/news/cnbc?type=syariah&apikey=APIKEY',
    author: creator
  },
  {
    jenis: 'republika',
    type: ["news","nusantara","khazanah","islam-digest","internasional","ekonomi","sepakbola","leisure"],
    example: 'https://kuhong-api.herokuapp.com/api/news/republika?type=ekonomi&apikey=APIKEY',
    author: creator
  },
  {
    jenis: 'tempo',
    type: ["nasional","bisnis","metro","dunia","bola","sport","cantik","tekno","otomotif","nusantara"],
    example: 'https://kuhong-api.herokuapp.com/api/news/tempo?type=bisnis&apikey=APIKEY',
    author: creator
  },
  {
    jenis: 'antara',
    type: ["terkini","top-news","politik","hukum","ekonomi","metro","sepakbola","olahraga","humaniora","lifestyle","hiburan","dunia","infografik","tekno","otomotif","warta-bumi","rilis-pers"],
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
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await getBuffer(`http://nurutomo.herokuapp.com/api/ssweb?url=${url}`)
       await fs.writeFileSync(__path + '/tmp/screenshot.png', hasil)

         res.sendFile(__path + '/tmp/screenshot.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/calculator', async (req, res) => {
    var angka = req.query.angka,
	apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!angka) return res.json(loghanlder.notangka)

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
  try {
    console.log(val)
    var result = (new Function('return ' + val))()
    if (!result) res.json({ message : result })

	res.json({
		status : true,
		creator : creator,
		result : result
	  })
  } catch (e) {
    if (e == undefined) res.json({ error : `Kesalahan Terjadi!` })
        res.json({ message : `Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport` })
  }
})

router.get('/hd', async (req, res) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
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
	 console.log(e)
    res.sendFile(error)
  }
})

router.get('/dare', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     result : json.Dare
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/quotemaker', async (req, res, next) => {
        var quote = req.query.quote,
	    author = req.query.author,
	    theme = req.query.theme,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!quote) return res.json({ message : `Masukan parameter quote (kata quotes)` })
  if (!author) return res.json({ message : `Masukan parameter author` })
  if (!theme) return res.json(loghandler.nottheme)

     var json = await (await fetch(`https://terhambar.com/aw/qts/?kata=${quote}&author=${author}&tipe=${theme}`)).json()
       await fs.writeFileSync(__path + '/tmp/quotemaker.png', await getBuffer(json.result))

         res.sendFile(__path + '/tmp/quotemaker.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/attp', async (req, res, next) => {
       var text = req.query.text,
	   apikeyInput = req.query.apikey;
	
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

 try {
	 var result = await imageToBase64(`https://api.xteam.xyz/attp?file&text=${text}`)
	 var hasil = Buffer.from(result, 'base64')
            await fs.writeFileSync(__path + '/tmp/attp.webp', hasil)

    res.sendFile(__path + '/tmp/attp.webp')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/ttp2', async (req, res, next) => {
       var text = req.query.text,
	   apikeyInput = req.query.apikey;
	
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

 try {
	 var result = await imageToBase64(`https://api.xteam.xyz/ttp?file&text=${text}`)
	 var hasil = Buffer.from(result, 'base64')
            await fs.writeFileSync(__path + '/tmp/ttp.webp', hasil)

    res.sendFile(__path + '/tmp/ttp.webp')
  } catch (e) {
  	console.log(e)
    res.sendFile(error)
      }
})

router.get('/futureneon', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.xteam.xyz/textpro/neon?text=${text}&APIKEY=${xteam_key}`)
       await fs.writeFileSync(__path + '/tmp/futureneon.png', hasil)

         res.sendFile(__path + '/tmp/futureneon.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/spotify', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    q = req.query.q;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!q) return res.json(loghandler.notquery)

     var json = await (await fetch(`https://api.zeks.xyz/api/spotify?apikey=${zeks_key}&q=${q}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/instagram', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(logahndler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/ig?url=${url}&apikey=${zeks_key}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/towebp', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(logahndler.invalidLink)

     axios.get(`https://ezgif.com/png-to-webp?url=${url}`).then(({ data }) => {
           var $ = cheerio.load(data)
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
                         url: 'https://ezgif.com/png-to-webp/' + gotdata.file,
                         data: bodyFormThen,
                         headers: {
                         'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
                         }}).then(({ data }) => {
                         var $ = cheerio.load(data)
                         var result = 'https:' + $('div#output > p.outfile > image > source').attr('src')

	                       res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa Subscribe Youtube ${creator}`,
                                            result : result
                                        })
                             })
                     })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/math', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    mode = req.query.mode;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!mode) return res.json({ message : `Silahkan masukan modenya,, Mode tersedia : 1. very_easy, 2. easy, 3. medium, 4. hard, 5. extreme, 6. impossible` })

     var json = await (await fetch(`http://zekais-api.herokuapp.com/math?mode=${mode}`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     info : json.message,
	     soal : json.soal,
	     jawaban : json.jawaban,
	     poin : 25000
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/math2', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://salism3api.pythonanywhere.com/math`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     soal : json.image,
	     jawaban : json.answer,
	     poin : 50000
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/toimg', async (req, res, next) => {
        var webp = req.query.webp,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!webp) return res.json(loghandler.notimg)
  if (!webp.startsWith('http')) return res.json(loghandler.invalidLink)

    var convert = await imageToBase64(webp)
    var img = Buffer.from(convert, 'base64')
      await fs.writeFileSync(__path + '/tmp/toimg.png', img)

     res.sendFile(__path + '/tmp/toimg.png')

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/qrcode', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var qr = await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 })
     var hasil = qr.split`,`[1]
        await fs.writeFileSync(__path + '/tmp/qr.png', hasil, 'base64')
          res.sendFile(__path + '/tmp/qr.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/imgbb', async (req, res, next) => {
        var url = req.query.url,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.imgbb.com/1/upload?expiration=180&key=761ea2d5575581057a799d14e9c78e28&image=${url}&name=imgbb-uploader`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     info : 'url otomatis akan hilang dalam 3 menit',
	     url : json.data.url_viewer,
	     display_url : json.data.url,
	     delete_url : json.data.delete_url
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/createcode', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
  if(maintenance == true) return res.sendFile(mtc)
  if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
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
       	     status : true,
             creator : creator,
             text : text,
             code : result
        })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/bucin', async (req, res, next) => {
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
    if(!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

var bucin = [
  "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
  "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
  "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
  "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
  "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
  "Pacar orang adalah jodoh kita yang tertunda.",
  "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
  "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
  "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
  "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
  "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
  "Aku ingin menjadi satu-satunya, bukan salah satunya.",
  "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
  "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
  "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
  "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
  "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
  "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
  "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
  "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
  "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
  "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
  "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
  "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
  "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
  "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
  "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
  "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
  "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
  "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
  "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
  "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
  "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
  "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
  "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
  "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
  "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
  "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
  "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
  "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
  "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
  "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
  "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
  "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
  "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
  "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
  "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
  "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
  "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
  "Saben dino kegowo ngimpi tapi ora biso nduweni.",
  "Ora ketemu koe 30 dino rasane koyo sewulan.",
  "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
  "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
  "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
  "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
  "Kanyaah akang moal luntur najan make Bayclean.",
  "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
  "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
  "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
  "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
  "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
  "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
  "Cukup jaringan aja yang hilang, kamu jangan.",
  "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
  "Musuhku adalah mereka yang ingin memilikimu juga.",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "Jam tidurku hancur dirusak rindu.",
  "Cukup China aja yang jauh, cinta kita jangan.",
  "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
  "Cuma satu keinginanku, dicintai olehmu..",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
  "Cukup antartika aja yang jauh. Antarkita jangan."
]
     var result = pickRandom(bucin)

     res.json({
	     status : true,
	     creator : creator,
	     result : result
       })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/memegen', async (req, res, next) => {
  var img = req.query.img,
      t1 = req.query.t1,
      t2 = req.query.t2,
      apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if(!t1) return res.json(loghandler.nottext)
  if(!t2) return res.json(loghandler.nottext2)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`http://zekais-api.herokuapp.com/mgen?text1=${t1}&text2=${t2}&url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/memegen.png', hasil)

     res.sendFile(__path + '/tmp/memegen.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/slot', async (req, res, next) => {
  var apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

  var emojis = ["🍎", "🍌", "🍇", "♦️", "🥇", "💵"];
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
        end = "JACKPOT!!!";
        poin = 10000;

    } else if (a == b || a == c || b == c) {
        end = "Dikit Lagi!",
        poin = 500;
    } else {
        end = "Kamu Kalah!, Yang Sabar yaa. Anggap aja ini Ujian :)";
	poin = "5";
    }
      res.json({
              status : true,
              creator : creator,
              hasil : `${end}\n\n${x[0]} ${y[0]} ${z[0]}\n${x[1]} ${y[1]} ${z[1]}\n${x[2]} ${y[2]} ${z[2]}`,
	      poin : poin
              })
})

router.get('/joox', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    q = req.query.q;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!q) return res.json(loghandler.notquery)

     var json = await (await fetch(`https://api.zeks.xyz/api/joox?apikey=${zeks_key}&q=${q}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/gdrive', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/gdbypass?url=${url}&apikey=${zeks_key}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/soundcloud', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/soundcloud?apikey=${zeks_key}&url=${url}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/igstory', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    username = req.query.username;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!username) return res.json(loghandler.notnama)

     var json = await (await fetch(`https://api.zeks.xyz/api/igs?apikey=${zeks_key}&username=${username}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/nickff', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.zeks.xyz/api/nickepep?apikey=${zeks_key}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/murothal', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.zeks.xyz/api/randomquran?apikey=${zeks_key}`)).json()

     res.json({
             status: true,
             creator: creator,
             result: json.result.audio
        })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/randomquran', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     var json = await (await fetch(`https://api.banghasan.com/quran/format/json/acak`)).json()

     res.json(json.acak)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/ninja', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    nama = req.query.nama;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!nama) return res.json(loghandler.notnama)


     var json = await (await fetch(`https://api.terhambar.com/ninja?nama=${nama}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/resep', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    q = req.query.q;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!q) return res.json(loghandler.notquery)


     var json = await (await fetch(`https://api.zeks.xyz/api/resep-masak?apikey=${zeks_key}&q=${q}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/readqr', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/qrdecode?apikey=${zeks_key}&image=${url}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/sticker', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    q = req.query.q;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!q) return res.json(loghandler.notquery)

     var json = await (await fetch(`https://api.zeks.xyz/api/searchsticker?apikey=${zeks_key}&q=${q}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/tebakanime', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/tebakanime`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/ytcomment', async (req, res, next) => {
    var img = req.query.img,
      username = req.query.username,
      comment = req.query.comment;
      apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if(!username) return res.json(loghandler.notnama)
  if(!comment) return res.json({ message: `Masukan parameter komentar` })
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://some-random-api.ml/canvas/youtube-comment?avatar=${img}&comment=${comment}&username=${username}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/ytcomment.png', hasil)

     res.sendFile(__path + '/tmp/ytcomment.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/ytplay', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    q = req.query.q;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
    if(!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if(!q) return res.json(loghandler.notquery)

     var results = await yts(q)
     var vid = results.all.find(video => video.seconds < 3600)
     if (!vid) return res.json({ message: 'Video/Audio Tidak ditemukan' })
     var isVideo = /2$/.test(q)
     var { dl_link, thumb, title, filesize, filesizeF } = await (isVideo ? ytv : yta)(vid.url, 'id4')

     res.json({
            status: true,
            creator: creator,
	    result:{
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
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/wait', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    url = req.query.url;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!url) return res.json(loghandler.noturl)
  if(!url.startsWith('http')) return res.json(loghandler.invalidLink)

  var base64 = await imageToBase64(url)
  var anime = `data:image/jpeg;base64,${base64}`
  var response = await fetch("https://trace.moe/api/search", {
                 method: "POST",
                 body: JSON.stringify({ image: anime }),
                 headers: { "Content-Type": "application/json" }})
          if (!response.ok) return res.json({ error: `Saya tidak tau ini anime apa` })
          var result = await response.json()
          var { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
          var link = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`

  res.json({
	  status: true,
	  creator: creator,
	  result:{
                  title: title,
		  title_chinese: title_chinese,
                  title_romaji: title_romaji,
		  title_english: title_english,
                  similarity: `${(similarity * 100).toFixed(1)}%`,
                  episode: episode.toString(),
		  season: season.toString(),
                  echi: is_adult ? 'yes' : 'no',
		  url: link
	    }
        })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/wasted', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://some-random-api.ml/canvas/wasted?avatar=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/wasted.png', hasil)

     res.sendFile(__path + '/tmp/wasted.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/rainbow', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://some-random-api.ml/canvas/gay?avatar=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/rainbow.png', hasil)

     res.sendFile(__path + '/tmp/rainbow.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/glass', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://some-random-api.ml/canvas/glass?avatar=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/glass.png', hasil)

     res.sendFile(__path + '/tmp/glass.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/readmore', async (req, res, next) => {
   var text = req.query.text,
       apikeyInput = req.query.apikey;

  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)

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
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`http://zekais-api.herokuapp.com/pixelate?url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/8bit.png', hasil)

     res.sendFile(__path + '/tmp/8bit.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/wanted', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`http://zekais-api.herokuapp.com/wanted?url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/wanted.png', hasil)

     res.sendFile(__path + '/tmp/wanted.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/githubstalk', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        username = req.query.username;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!username) return res.json(loghandler.notusername)

 try {
       var json = await (await fetch(`http://zekais-api.herokuapp.com/github?user=${username}`)).json()
             res.json(json.result)
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/upload', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        file = req.query.file_url;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!file) return res.json({ message: `Masukan parameter file_url` })

 try {
       var encmedia = await imageToBase64(file)
       var media = Buffer.from(encmedia, 'base64')
       await fs.writeFileSync(__path + '/tmp/image.png', media)
       var file_result = fs.readFileSync(__path + '/tmp/image.png')
       var result = await upload(file_result)

             res.json({
             	status : true,
                creator : `${creator}`,
                result: result
             })
} catch (e) {
    res.json({ error: e })
	console.log(e)
   }
})

router.get('/shopee', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        query = req.query.query;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!query) return res.json(loghandler.notquery)

 try {
       var json = await (await fetch(`https://api.zeks.xyz/api/shopee?apikey=${zeks_key}&q=${query}`)).json()
             res.json(json)
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/happymod', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        query = req.query.query;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!query) return res.json(loghandler.notquery)

 try {
       var json = await (await fetch(`https://api.zeks.xyz/api/happymod?apikey=${zeks_key}&q=${query}`)).json()
             res.json(json)
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/faktaunik', async (req, res, next) => {
	var apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

 try {
       var json = await (await fetch(`https://videfikri.com/api/fakta/`)).json()
             res.json({
		     status: true,
		     creator: creator,
		     fakta: json.result.fakta
	     })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/artimimpi', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
	    mimpi = req.query.mimpi;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if (!mimpi) return res.json({ message: "Masukan parameter mimpi" })

 try {
       var json = await (await fetch(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${mimpi}`)).json()
             res.json({
		     status: true,
		     creator: creator,
		     result: json.result.artimimpi
	     })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/tggljadian', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
	    tggl = req.query.tggl,
	    bln = req.query.bln,
	    thn = req.query.thn;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if (!tggl) return res.json({ message: "Masukan parameter tanggal" })
	if (!bln) return res.json({ message: "Masukan parameter bulan" })
	if (!thn) return res.json({ message: "Masukan parameter tahun" })
	if (isNaN(tggl)) return res.json(loghandler.number)
	if (isNaN(bln)) return res.json(loghandler.number)
	if (isNaN(thn)) return res.json(loghandler.number)

 try {
       var json = await (await fetch(`https://videfikri.com/api/primbon/tgljadian/?tgl=${tggl}&bln=${bln}&thn=${thn}`)).json()
             res.json({
		     status: true,
		     creator: creator,
		     result: json.result.hasil
	     })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/zodiak', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
	    nama = req.query.nama,
	    tggl = req.query.tggl,
	    bln = req.query.bln,
	    thn = req.query.thn;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if (!nama) return res.json(loghandler.notnama)
	if (!tggl) return res.json({ message: "Masukan parameter tanggal" })
	if (!bln) return res.json({ message: "Masukan parameter bulan" })
	if (!thn) return res.json({ message: "Masukan parameter tahun" })
	if (isNaN(tggl)) return res.json(loghandler.number)
	if (isNaN(bln)) return res.json(loghandler.number)
	if (isNaN(thn)) return res.json(loghandler.number)

 try {
       var json = await (await fetch(`https://arugaz.herokuapp.com/api/getzodiak?nama=${nama}&tgl-bln-thn=${tggl}-${bln}-${thn}`)).json()
             res.json(json)

} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/spamgmail', async (req, res, next) => {
       var email = req.query.email,
	   subjek = req.query.subjek,
           pesan = req.query.pesan,
	   apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
        if (!email) return res.json({ message: "Masukan parameter email" })
	if (!email.endsWith('@gmail.com')) return res.json({ message: "Email tidak valid" })
	if (!subjek) return res.json({ message: "Masukan parameter subjek" })
	if (subjek.length > 10) return res.json({ message: "Subjek kepanjangan!" })
        if (!pesan) return res.json({ message: "Masukan parameter pesan" })


 try {
       var json = await (await fetch(`https://videfikri.com/api/spamemail/?email=${email}&subjek=${subjek}&pesan=${pesan}`)).json()
         res.json({
		 status: true,
		 creator: creator,
		 result: json.result.log_lengkap
	 })

} catch (e) {
	console.log(e)
    res.sendFile(error)
   }
})

router.get('/smoke', async (req, res, next) => {
  var text = req.query.text,
      apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/photooxy/smoke?text=${text}`)).json()
     var data = await (await fetch(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${json.result}&name=result`)).json()
   await fs.writeFileSync(__path + '/tmp/smoke.png', await getBuffer(data.data.url))

     res.sendFile(__path + '/tmp/smoke.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/phcomment', async (req, res, next) => {
  var img = req.query.img,
      username = req.query.username,
      comment = req.query.comment,
      apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if(!username) return res.json(loghandler.notusername)
  if(!comment) return res.json({ message: 'Masukan parameter komentar' })
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/phub?apikey=${zeks_key}&img=${img}&username=${username}&msg=${comment}`)).buffer()
       await fs.writeFileSync(__path + '/tmp/phcomment.png', hasil)

     res.sendFile(__path + '/tmp/phcomment.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/barcode', async (req, res, next) => {
  var text = req.query.text,
      apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/barcode?apikey=${zeks_key}&text=${text}`)).buffer()
       await fs.writeFileSync(__path + '/tmp/barcode.png', hasil)

     res.sendFile(__path + '/tmp/barcode.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/dropwater', async (req, res, next) => {
  var text = req.query.text,
      apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/dropwater?apikey=${zeks_key}&text=${text}`)).buffer()
       await fs.writeFileSync(__path + '/tmp/dropwater.png', hasil)

     res.sendFile(__path + '/tmp/dropwater.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/glowtext', async (req, res, next) => {
  var text = req.query.text,
      apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/bneon?apikey=${zeks_key}&text=${text}`)).buffer()
       await fs.writeFileSync(__path + '/tmp/glowtext.png', hasil)

     res.sendFile(__path + '/tmp/glowtext.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/glowtext2', async (req, res, next) => {
  var text = req.query.text,
      apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/tlight?text=${text}&apikey=${zeks_key}`)).buffer()
       await fs.writeFileSync(__path + '/tmp/glowtext2.png', hasil)

     res.sendFile(__path + '/tmp/glowtext2.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/wolflogo', async (req, res, next) => {
  var t1 = req.query.text,
      t2 = req.query.text2,
      apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!t1) return res.json(loghandler.nottext)
  if(!t2) return res.json(loghandler.nottext2)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/wolflogo?apikey=${zeks_key}&text1=${t1}&text2=${t2}`)).buffer()
       await fs.writeFileSync(__path + '/tmp/wolflogo.png', hasil)

     res.sendFile(__path + '/tmp/wolflogo.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/breakwall', async (req, res, next) => {
  var text = req.query.text,
      apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/breakwall?apikey=${zeks_key}&text=${text}`)).buffer()
       await fs.writeFileSync(__path + '/tmp/breakwall.png', hasil)

     res.sendFile(__path + '/tmp/breakwall.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/naruto', async (req, res, next) => {
  var text = req.query.text,
      apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)

     var json = await (await fetch(`https://api.zeks.xyz/api/naruto?text=${text}&apikey=${zeks_key}`)).json()
     var data = await (await fetch(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${json.result}&name=result`)).json()
   await fs.writeFileSync(__path + '/tmp/naruto.png', await getBuffer(data.data.url))

     res.sendFile(__path + '/tmp/naruto.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/cloud', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.xteam.xyz/textpro/cloudsky?text=${text}&APIKEY=${xteam_key}`)
       await fs.writeFileSync(__path + '/tmp/cloud.png', hasil)

         res.sendFile(__path + '/tmp/cloud.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/jokerlogo', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.xteam.xyz/textpro/jokerlogo?text=${text}&APIKEY=${xteam_key}`)
       await fs.writeFileSync(__path + '/tmp/jokerlogo.png', hasil)

         res.sendFile(__path + '/tmp/jokerlogo.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/lionlogo', async (req, res, next) => {
        var t1 = req.query.text,
	    t2 = req.query.text2,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var hasil = await getBuffer(`https://api.xteam.xyz/textpro/lionlogomascot?text=${t1}&text2=${t2}&APIKEY=${xteam_key}`)
       await fs.writeFileSync(__path + '/tmp/lionlogo.png', hasil)

         res.sendFile(__path + '/tmp/lionlogo.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/ninjalogo', async (req, res, next) => {
        var t1 = req.query.text,
	    t2 = req.query.text2,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var hasil = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${t1}&text2=${t2}&APIKEY=${xteam_key}`)
       await fs.writeFileSync(__path + '/tmp/ninjalogo.png', hasil)

         res.sendFile(__path + '/tmp/ninjalogo.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/blood', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${text}&APIKEY=${xteam_key}`)
       await fs.writeFileSync(__path + '/tmp/blood.png', hasil)

         res.sendFile(__path + '/tmp/blood.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/lava', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.xteam.xyz/textpro/lava?text=${text}&APIKEY=${xteam_key}`)
       await fs.writeFileSync(__path + '/tmp/lava.png', hasil)

         res.sendFile(__path + '/tmp/lava.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/1917', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.xteam.xyz/textpro/1917?text=${text}&APIKEY=${xteam_key}`)
       await fs.writeFileSync(__path + '/tmp/1917.png', hasil)

         res.sendFile(__path + '/tmp/1917.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/skeleton', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.xteam.xyz/textpro/skeleton?text=${text}&APIKEY=${xteam_key}`)
       await fs.writeFileSync(__path + '/tmp/skeleton.png', hasil)

         res.sendFile(__path + '/tmp/skeleton.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/crossfire', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${text}`)
       await fs.writeFileSync(__path + '/tmp/crossfire.png', hasil)

         res.sendFile(__path + '/tmp/crossfire.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/gtaposter', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/gtaposter.png', hasil)

     res.sendFile(__path + '/tmp/gtaposter.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/deltrash', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`http://zekais-api.herokuapp.com/delete?url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/deltrash.png', hasil)

     res.sendFile(__path + '/tmp/deltrash.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/rotate', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`http://zekais-api.herokuapp.com/rotate?url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/rotate.png', hasil)

     res.sendFile(__path + '/tmp/rotate.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/jail', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`http://zekais-api.herokuapp.com/jail?url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/jail.png', hasil)

     res.sendFile(__path + '/tmp/jail.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/continue', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`http://zekais-api.herokuapp.com/tobecontinue?url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/continue.png', hasil)

     res.sendFile(__path + '/tmp/continue.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/rip', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`http://zekais-api.herokuapp.com/rip?url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/rip.png', hasil)

     res.sendFile(__path + '/tmp/rip.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/spongebob', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${text}`)
       await fs.writeFileSync(__path + '/tmp/sb_burn.png', hasil)

         res.sendFile(__path + '/tmp/sb_burn.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/ttp3', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://leyscoders-api.herokuapp.com/api/textto-image?text=${text}`)
       await fs.writeFileSync(__path + '/tmp/ttp3.png', hasil)

         res.sendFile(__path + '/tmp/ttp3.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/ttp4', async (req, res, next) => {
        var text = req.query.text,
	    color = req.query.color,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)
  if (!color) return res.json({ message: `Masukan parameter warna` })

     var hasil = await getBuffer(`http://zekais-api.herokuapp.com/text2png?text=${text}&color=${color}`)
       await fs.writeFileSync(__path + '/tmp/ttp4.png', hasil)

         res.sendFile(__path + '/tmp/ttp4.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/fml', async (req, res, next) => {
	var apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

 try {
       var json = await (await fetch(`https://api.zeks.xyz/api/fml?apikey=${zeks_key}`)).json()

             res.json({
		     status: true,
		     creator: creator,
		     result: json.result
	     })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/estetik', async (req, res, next) => {
	var apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

 try {
       var estetik = await (await fetch(`https://api.zeks.xyz/api/estetikpic?apikey=${zeks_key}`)).buffer()
           await fs.writeFileSync(__path + '/tmp/aesthetic_pic.png', estetik)

         res.sendFile(__path + '/tmp/aesthetic_pic.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/html-viewer', async (req, res, next) => {
	var url = req.query.url,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

       axios.get(`https://api-self.herokuapp.com/api/htmlscrapper?url=${url}`).then((data) => {

             res.json({
		     status: true,
		     creator: creator,
		     result: data.data.result
	     })
       }).catch(() => {
    res.sendFile(error)
   })
})

router.get('/invert', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://api-self.herokuapp.com/api/invert?url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/invert.png', hasil)

     res.sendFile(__path + '/tmp/invert.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/styletext', async (req, res, next) => {
    var text = req.query.text,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!text) return res.json(loghandler.nottext)

    var style = await stylizeText(text)
    var result = Object.entries(style).map(([name, value]) => `*${name}*\n${value}`).join`\n\n`

           res.json({
		     status: true,
		     creator: creator,
		     result: result
	     })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/carbon', async (req, res, next) => {
        var code = req.query.code,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!code) return res.json({ message: `Masukan parameter code` })

     var hasil = await getBuffer(`http://zekais-api.herokuapp.com/carbon?code=${code}`)
       await fs.writeFileSync(__path + '/tmp/carbon_code.png', hasil)

         res.sendFile(__path + '/tmp/carbon_code.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/maps', async (req, res, next) => {
	var q = req.query.query,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!q) return res.json(loghandler.notquery)

 try {
       var json = await (await fetch(`https://mnazria.herokuapp.com/api/maps?search=${q}`)).json()
       var result = await (await fetch(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${json.gambar}&name=kuhong-api-storage---maps`)).json()
         await fs.writeFileSync(__path + '/tmp/maps.png', await getBuffer(result.data.url))

             res.sendFile(__path + '/tmp/maps.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/search-giphy', async (req, res, next) => {
	var q = req.query.query,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!q) return res.json(loghandler.notquery)

 try {
       var json = await (await fetch(`https://mnazria.herokuapp.com/api/gif?search=${q}`)).json()

       res.json(json)
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/ipcheck', async (req, res, next) => {
	var ip = req.query.ip,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!ip) return res.json({ message: `Masukan parameter ip` })

 try {
       var json = await (await fetch(`https://mnazria.herokuapp.com/api/check?ip=${ip}`)).json()

       res.json(json)
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/hentai', async (req, res, next) => {
	var apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

 try {
       var json = await (await fetch(`http://api-melodicxt-2.herokuapp.com/api/random/hentai?apiKey=${melodicxt_key}`)).json()
         await fs.writeFileSync(__path + '/tmp/hentai.png', await getBuffer(json.result.result))

             res.sendFile(__path + '/tmp/hentai.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/nulis3', async (req, res, next) => {
	var text = req.query.text,
	    arah = req.query.arah,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)
	if(!arah) return res.json({ message: `Masukan parameter arah, kanan/kiri.` })

 try {
        if (arah == 'kanan' || arah == 'kiri') {
        var hasil = await (await fetch(`http://zekais-api.herokuapp.com/buku${arah}?text=${text}`)).buffer()
         await fs.writeFileSync(__path + '/tmp/nulis3_${arah}.png', hasil)

             res.sendFile(__path + '/tmp/nulis3_${arah}.png')
	} else res.json({ message: `Pilih kiri atau kanan udin!` })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/suit', async (req, res, next) => {
	var text = req.query.pilihan,
	    apikeyInput = req.query.apikey;

    var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
    if(!text) return res.json({ message: `Masukan pilihan suitmu` })

    var miss = `Pilihan yang tersedia gunting, kertas, batu`
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
        res.json({ status: true, creator: creator, message: `Seri!`, kamu: text, bot: suit })
    } else if (text == 'batu') {
        if (suit == 'gunting') {
            res.json({ status: true, creator: creator, message: `Kamu Menang!`, kamu: text, bot: suit, poin: poin })
        } else {
            res.json({ status: false, creator: creator, message: `Kamu Kalah!`, kamu: text, bot: suit })
        }
    } else if (text == 'gunting') {
        if (suit == 'kertas') {
            res.json({ status: true, creator: creator, message: `Kamu Menang!`, kamu: text, bot: suit, poin: poin })
        } else {
            res.json({ status: false, creator: creator, message: `Kamu Kalah!`, kamu: text, bot: suit })
        }
    } else if (text == 'kertas') {
        if (suit == 'batu') {
            res.json({ status: true, creator: creator, message: `Kamu Menang!`, kamu: text, bot: suit, poin: poin })
        } else {
            res.json({ status: false, creator: creator, message: `Kamu Kalah!`, kamu: text, bot: suit })
        }
    } else {
        res.json({ status: false, creator: creator, message: miss })
    }
})

router.get('/sid', async (req, res, next) => {
	var url = req.query.url,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!url) return res.json(loghandler.noturl)
	if(!url.startsWith('http')) return res.json(loghandler.invalidLink)

 try {
       var json = await (await fetch(`https://api.zeks.xyz/api/sid-shortener?apikey=${zeks_key}&url=${url}`)).json()

       res.json(json)
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/jadwaltv', async (req, res, next) => {
	var channel = req.query.channel,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!channel) return res.json({ message: `Masukan parameter channel` })

 try {
       var json = await (await fetch(`https://api.zeks.xyz/api/jadwaltv?channel=${channel}&apikey=${zeks_key}`)).json()

       res.json(json)
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/sha1', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var result = await createHash('sha1').update(text).digest('hex')

       res.json({
	       status: true,
	       creator: creator,
	       text: text,
	       sha1: result
       })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/sha256', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var result = await createHash('sha256').update(text).digest('hex')

       res.json({
	       status: true,
	       creator: creator,
	       text: text,
	       sha256: result
       })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/sha512', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var result = await createHash('sha512').update(text).digest('hex')

       res.json({
	       status: true,
	       creator: creator,
	       text: text,
	       sha512: result
       })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/gaminglogo', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${text}`)
       await fs.writeFileSync(__path + '/tmp/gaminglogo.png', hasil)

         res.sendFile(__path + '/tmp/gaminglogo.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/blur', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://api-self.herokuapp.com/api/blur?url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/blur.png', hasil)

     res.sendFile(__path + '/tmp/blur.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/sepia', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://api-self.herokuapp.com/api/sepia?url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/sepia.png', hasil)

     res.sendFile(__path + '/tmp/sepia.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/grey', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://api-self.herokuapp.com/api/greyscale?url=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/grey.png', hasil)

     res.sendFile(__path + '/tmp/grey.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/welcome', async (req, res, next) => {
        var nama_mem = req.query.nama_mem,
	    avatar = req.query.avatar,
	    bg = req.query.bg,
	    nama_gc = req.query.nama_gc,
	    jumlah_mem = req.query.jumlah_mem,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
  if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!nama_mem) return res.json({ message: `Masukan parameter nama member` })
  if (!avatar) return res.json({ message: `Masukan parameter avatar` })
  if (!avatar.startsWith('http')) return res.json(loghandler.invalidLink)
  if (!bg) return res.json({ message: `Masukan parameter background` })
  if (!bg.startsWith('http')) return res.json(loghandler.invalidLink)
  if (!nama_gc) return res.json({ message: `Masukan parameter nama group` })
  if (!jumlah_mem) return res.json({ message: `Masukan parameter jumlah member` })

     var hasil = await (await fetch(`https://api-self.herokuapp.com/api/canvaswelbg?name=${nama_mem}&avatar=${avatar}&background=${bg}&gcname=${nama_gc}&jumlahmem=${jumlah_mem}`)).buffer()
       await fs.writeFileSync(__path + '/tmp/welcome.png', hasil)

         res.sendFile(__path + '/tmp/welcome.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/bye', async (req, res, next) => {
        var nama_mem = req.query.nama_mem,
	    avatar = req.query.avatar,
	    bg = req.query.bg,
	    nama_gc = req.query.nama_gc,
	    jumlah_mem = req.query.jumlah_mem,
	    apikeyInput = req.query.apikey;

try {
  var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
  if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if (!nama_mem) return res.json({ message: `Masukan parameter nama member` })
  if (!avatar) return res.json({ message: `Masukan parameter avatar` })
  if (!avatar.startsWith('http')) return res.json(loghandler.invalidLink)
  if (!bg) return res.json({ message: `Masukan parameter background` })
  if (!bg.startsWith('http')) return res.json(loghandler.invalidLink)
  if (!nama_gc) return res.json({ message: `Masukan parameter nama group` })
  if (!jumlah_mem) return res.json({ message: `Masukan parameter jumlah member` })

     var hasil = await (await fetch(`https://api-self.herokuapp.com/api/canvasbyebg?name=${nama_mem}&avatar=${avatar}&background=${bg}&gcname=${nama_gc}&jumlahmem=${jumlah_mem}`)).buffer()
       await fs.writeFileSync(__path + '/tmp/bye.png', hasil)

         res.sendFile(__path + '/tmp/bye.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/linesticker', async (req, res, next) => {
	var url = req.query.url,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!url) return res.json(loghandler.noturl)
	if(!url.startsWith('http')) return res.json(loghandler.invalidLink)

 try {
       var json = await (await fetch(`https://api.zeks.xyz/api/linesticker?link=${url}&apikey=${zeks_key}`)).json()

       res.json(json)
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/kerang', async (req, res, next) => {
	var pertanyaan = req.query.pertanyaan,
	    apikeyInput = req.query.apikey;

	  var maintenance = false
          if(maintenance == true) return res.sendFile(mtc)
	  if(!apikeyInput) return res.json(loghandler.notparam)
	  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

       var nama_acak = await (await fetch(`https://kuhong-api.herokuapp.com/api/fakedata?country=en&apikey=${apikey}`)).json()
       var answer = 'Tidak ada pertanyaan yang dapat dijawab'
       if (!pertanyaan) answer = answer
       if (!pertanyaan.startsWith('apa') || !pertanyaan.startsWith('apakah') || !pertanyaan.startsWith('bisakah') || !pertanyaan.startsWith('bisa') || !pertanyaan.startsWith('kapan') || !pertanyaan.startsWith('siapakah') || !pertanyaan.startsWith('berapa') || !pertanyaan.startsWith('berapakah')) answer = 'Kata tanya yang tersedia : apa, apakah, kapan, kapankah, siapa, siapakah, bisa, bisakah, berapa, berapakah'
       if (pertanyaan.startsWith('apakah')) answer = pickRandom(['Ya','Mungkin iya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'])
       if (pertanyaan.startsWith('apa')) answer = pickRandom(['Ya','Mungkin iya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'])
       if (pertanyaan.startsWith('bisakah')) answer = pickRandom(['Iya','Bisa','Tentu saja bisa','Tentu bisa','Sudah pasti','Sudah pasti bisa','Tidak','Tidak bisa','Tentu tidak','tentu tidak bisa','Sudah pasti tidak'])
       if (pertanyaan.startsWith('bisa')) answer = pickRandom(['Iya','Bisa','Tentu saja bisa','Tentu bisa','Sudah pasti','Sudah pasti bisa','Tidak','Tidak bisa','Tentu tidak','tentu tidak bisa','Sudah pasti tidak'])
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
	var q = req.query.query,
	    apikeyInput = req.query.apikey;

	var maintenance = false
    if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!q) return res.json(loghandler.notquery)

 try {
       var search = await googleIt({ query: q })
       var result = search.map(({ title, link, snippet }) => {

        return `*${title}*\n\n${link}\n${snippet}`
    }).join`\n\n`

       res.json({
	       status: true,
	       creator: creator,
	       result: result
       })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/nulis4', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var json = await (await fetch(`https://videfikri.com/api/nulis/?query=${text}`)).json()
         await fs.writeFileSync(__path + '/tmp/nulis4.png', json.result.images)

       res.sendFile(__path + '/tmp/nulis4.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/toimage', async (req, res, next) => {
     var img = req.query.img,
	 apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!img) return res.json(loghandle.notimg)
	if(!img.startsWith('http')) return res.json(loghandler.invalidLink)

    var media = await getBuffer(img)
        await fs.writeFileSync(__path + '/tmp/image.png', media)

        res.sendFile(__path + '/tmp/image.png')
})

router.get('/stickerwm', async (req, res, next) => {
     var url = req.query.url,
	 pkg = req.query.packname,
	 wm = req.query.author,
	 apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!url) return res.json(loghandle.noturl)
	if(!url.startsWith('http')) return res.json(loghandler.invalidLink)
	if(!pkg) return res.json({ message: `Masukan parameter packname` })
	if(!wm) return res.json({ message: `Masukan parameter author` })

        var stk = await sticker(false, url, pkg, wm)
        await fs.writeFileSync(__path + '/tmp/stickerwm.webp', stk)

        res.sendFile(__path + '/tmp/stickerwm.webp')
})

router.get('/underwater', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var hasil = await (await fetch(`https://videfikri.com/api/textmaker/underwater/?text=${text}`)).buffer()
         await fs.writeFileSync(__path + '/tmp/underwater.png', hasil)

       res.sendFile(__path + '/tmp/underwater.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/catlogo', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var hasil = await getBuffer(`https://dynamic.brandcrowd.com/asset/logo/065b4535-d123-4261-accb-2f21e3eac3cf/logo?v=4&text=${text}`)
         await fs.writeFileSync(__path + '/tmp/catlogo.png', hasil)

       res.sendFile(__path + '/tmp/catlogo.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/arcade', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var hasil = await getBuffer(`https://dynamic.brandcrowd.com/asset/logo/065b4535-d123-4261-accb-2f21e3eac3cf/logo?v=4&text=${text}`)
         await fs.writeFileSync(__path + '/tmp/arcade.png', hasil)

       res.sendFile(__path + '/tmp/arcade.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/foxlogo', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var hasil = await getBuffer(`https://dynamic.brandcrowd.com/asset/logo/6458e177-55ec-4b2d-8be7-4094431378ad/logo?v=4&text=${text}`)
         await fs.writeFileSync(__path + '/tmp/foxlogo.png', hasil)

       res.sendFile(__path + '/tmp/foxlogo.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/glitchlogo', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var hasil = await getBuffer(`https://dynamic.brandcrowd.com/asset/logo/afa0be93-d4ae-46d5-b741-64bd3b4b6148/logo?v=4&text=${text}`)
         await fs.writeFileSync(__path + '/tmp/glitchlogo.png', hasil)

       res.sendFile(__path + '/tmp/glitchlogo.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/bearlogo', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var hasil = await getBuffer(`https://dynamic.brandcrowd.com/asset/logo/0c963355-e735-4cdd-bec8-1373ba2a222e/logo?v=4&text=${text}`)
         await fs.writeFileSync(__path + '/tmp/bearlogo.png', hasil)

       res.sendFile(__path + '/tmp/bearlogo.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/freefire', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var hasil = await getBuffer(`https://api.zeks.xyz/api/epep?text=${text}&apikey=${zeks_key}`)
         await fs.writeFileSync(__path + '/tmp/fflogo.png', hasil)

       res.sendFile(__path + '/tmp/fflogo.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/spammer/pizzahut', async (req, res, next) => {
	var nomor = req.query.nomor,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!nomor) return res.json(loghandler.notnomor)
	if(isNaN(nomor)) return res.json(loghandler.number)

 try {
       var hasil = await (await fetch(`https://api.xteam.xyz/spammer/pizzahut?no=${nomor}&APIKEY=${xteam_key}`)).json()

       res.json({
	       status: true,
	       creator: creator,
	       logs: json.result
       })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/spammer/olx', async (req, res, next) => {
	var nomor = req.query.nomor,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!nomor) return res.json(loghandler.notnomor)
	if(isNaN(nomor)) return res.json(loghandler.number)

 try {
       var hasil = await (await fetch(`https://api.xteam.xyz/spammer/olx?no=${nomor}&APIKEY=${xteam_key}`)).json()

       res.json({
	       status: true,
	       creator: creator,
	       logs: json.result
       })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/spammer/danacinta', async (req, res, next) => {
	var nomor = req.query.nomor,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!nomor) return res.json(loghandler.notnomor)
	if(isNaN(nomor)) return res.json(loghandler.number)

 try {
       var hasil = await (await fetch(`https://api.xteam.xyz/spammer/danacinta?no=${nomor}&APIKEY=${xteam_key}`)).json()

       res.json({
	       status: true,
	       creator: creator,
	       logs: json.result
       })
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/how', async (req, res, next) => {
	var type = req.query.type,
	    nama = req.query.nama,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!nama) return res.json(loghandler.notnama)
	if(!type) return res.json(loghandler.nottype)
	if (type == 'baper' || type == 'gay' || type == 'tolol' || type == 'bucin' || type == 'sange' || type == 'gila' || type == 'pintar' || type == 'bodoh' || type == 'ganteng' || type == 'cantik' || type == 'stres' || type == 'sad') {

       var result = nama +  ' itu ' + Math.floor(Math.random() * 101) + '% ' + type

       res.json({
	       status: true,
	       creator: creator,
	       result: result
       })
   } else return res.json({ status: false, result: `Tipe yang tersedia : baper, gay, tolol, bucin, sange, gila, pintar, bodoh, ganteng, cantik, stres, sad` })

})

router.get('/poly', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var buffer = await imageToBase64(`http://zekais-api.herokuapp.com/photooxy/poly?text=${text}`)
       var media = Buffer.from(buffer, 'base64')
         await fs.writeFileSync(__path + '/tmp/poly.mp4', media)

       res.sendFile(__path + '/tmp/poly.mp4')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/wattpad', async (req, res, next) => {
	var id = req.query.id,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!id) return res.json({ message: `Masukan parameter id` })

 try {
       var result = await (await fetch(`https://api.wattpad.com/api/v3/stories/${id}`)).json()

       res.json({
	       status: true,
	       creator: creator,
	       result
       })
} catch (e) {
   console.log(e)
    res.json({ error: `id stories tidak valid` })
   }
})

router.get('/jedagjedug', async (req, res, next) => {
	var theme = req.query.theme,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!theme) return res.json(loghandler.nottheme)
	if (!(theme == 'ff' || theme == 'ml' || theme == 'beatvn')) return res.json({ error: `Tema yang tersedia : ff, ml, beatvn` })

 try {
      res.sendFile(__path + `/src/jedag-jedug/${theme}/${pickRandom(['jedag','jedag1','jedag2','jedag3','jedag4','jedag5','jedag6','jedag7','jedag8'])}.mp4`)
} catch (e) {
   console.log(e)
    res.json({ status: '400 (ETIMEOUT)', message: 'error, coba lagi nanti' })
   }
})

router.get('/getvn', async (req, res, next) => {
	var query = req.query.query,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!query) return res.json(loghandler.notquery)
	if (!(query == 'papale' || query == 'anjay' || query == 'pota' || queryquery == 'padepap' || queryquery == 'iri' || queryquery == 'ara' || queryquery == 'bila' || queryquery == 'cidro' || query == 'kiminoto' || query == 'baby' || query == 'bernyanyi' || query == 'umbrella' || query == 'enak' || query == 'wes' || query == 'kokoro' || query == 'bambam' || query == 'booma' || query == 'tapi' || query == 'siul' || query == 'masha')) return res.json({ status: false, list_theme: [`anjay, ara, bila, baby, bambam, booma, bernyanyi, cidro, enak, iri, masha, padepap, papale, pota, kiminoto, kokoro, siul, tapi, umbrella, wes`] })

 try {
       var getvn = await fs.readFileSync(__path + `/src/getvn/${query}.opus`)
       await fs.writeFileSync(__path + '/tmp/getvn.mp3', getvn)

       res.sendFile(__path + '/tmp/getvn.mp3')
} catch (e) {
   console.log(e)
    res.sendFile(error)
   }
})

router.get('/masadepan', async (req, res, next) => {
	var nama = req.query.nama,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!nama) return res.json(loghandler.notnama)

       var result = 'Menurut Ramalan...\n\nMasa Depan ' + pickRandom([`${nama} akan menjadi orang yang Kaya, keluarga yang harmonis, memiliki 2 memiliki anak, memiliki 4 memiliki kendaraan, memiliki 2 rumah`,`${nama} akan menjadi orang yang Sederhana, keluarga yang harmonis, memiliki 3 memiliki anak, memiliki 1 memiliki kendaraan, memiliki 1 rumah`,`${nama} akan menjadi orang yang Miskin, keluarga yang Sederhana, memiliki 1 anak, tidak memiliki kendaraan, rumah ngontrak`,`${nama} akan menjadi orang yang Sederhana, keluarga yang dicerai, memiliki 5 anak, memiliki 2 kendaraan, memiliki 2 rumah`,`${nama} akan menjadi orang yang Sederhana, keluarga yang Sederhana, memiliki 2 anak, memiliki 2 kendaraan, memiliki 1 rumah`,`${nama} akan menjadi orang yang Miskin, keluarga yang dicerai memiliki 2 anak, memiliki 1 kendaraan, memiliki 1 rumah`,`${nama} akan menjadi orang yang Kaya, keluarga yang Sederhana, memiliki 1 anak, memiliki 1 kendaraan, memiliki 2 rumah`,`${nama} akan menjadi orang yang Sederhana, keluarga yang Harmonis, memiliki 1 anak, memiliki 3 kendaraan, memiliki 1 rumah`,`${nama} akan menjadi orang yang Miskin, tidak memiliki keluarga (jomblo), tidak memiliki anak, tidak memiliki kendaraan, tidak memiliki rumah`,`${nama} akan menjadi orang yang Sederhana, keluarga yang Sederhana, memiliki 4 anak, memiliki 1 kendaraan, memiliki 2 rumah`,`${nama} akan menjadi orang yang Sederhana, keluarga yang kacau, tidak memiliki anak (Gugur), memiliki 2 kendaraan, memiliki 1 rumah`,`${nama} akan menjadi orang yang Sangat Kaya, keluarga yang Sangat Harmonis, memiliki 5 anak, memiliki 7 kendaraan, memiliki 9 rumah`,`${nama} akan menjadi orang yang Sangat Miskin, keluarga yang Sederhana, memiliki 9 anak, tidak memiliki kendaraan, rumah ngontrak`,`${nama} akan menjadi orang yang Kaya, keluarga yang Pelit, memiliki 2 anak, memiliki 2 kendaraan, memiliki 2 rumah`,`${nama} akan menjadi orang yang Sederhana, keluarga yang Pelit, memiliki 1 anak, memiliki 1 kendaraan, memiliki 1 rumah`,`${nama} akan menjadi orang yang Sederhana, keluarga yang dicerai, memiliki 2 anak, memiliki 1 kendaraan, rumah ngontrak`,`${nama} akan menjadi orang yang Sangat Sederhana, keluarga yang Sakinah, memiliki 1 anak, memiliki 1 kendaraan, memiliki 1 rumah`,`${nama} akan menjadi orang yang Sederhana, keluarga yang Sangat Sederhana, memiliki 11 anak, memiliki 1 kendaraan, memiliki 1 rumah`,`${nama} akan menjadi orang yang Sederhana, keluarga yang Sangat Sederhana, memiliki 2 anak kembar, memiliki 3 kendaraan, memiliki 2 rumah`,`${nama} akan menjadi orang yang Sederhana keluarga yang Sederhana, memiliki 2 anak kembar dan 1 anak lagi, memiliki 1 kendaraan, memiliki 1 rumah`])

       res.json({
             status: true,
             creaator: creator,
             result: result
       })
})

router.get('/laptop', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  var maintenance = false
  if(maintenance == true) return res.sendFile(mtc)
  if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
  if(!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${img}`)).buffer()
   await fs.writeFileSync(__path + '/tmp/laptop.png', hasil)

     res.sendFile(__path + '/tmp/laptop.png')
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/iqtest', async (req, res, next) => {
    var apikeyInput = req.query.apikey;

  var maintenance = false
  if(maintenance == true) return res.sendFile(mtc)
  if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

  var result = 'IQ Anda sebesar ' + Math.floor(Math.random() * 1000) + '!'
     res.json({
	     status: true,
	     creator: creator,
	     result: result
     })
})

router.get('/bacot', async (req, res, next) => {
    var apikeyInput = req.query.apikey;

  var maintenance = false
  if(maintenance == true) return res.sendFile(mtc)
  if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

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
    var apikeyInput = req.query.apikey;

  var maintenance = false
  if(maintenance == true) return res.sendFile(mtc)
  if(!apikeyInput) return res.json(loghandler.notparam)
  if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

var truth = [
    "Acara tv apa yang paling kamu benci? Berikan alasannya!",
    "Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?",
    "Apa hal paling buruk (gosip) yang pernah kamu bilang tentang temenmu?",
    "Apa hal paling memalukan dari dirimu?",
    "Apa hal paling memalukan dari temanmu?",
    "Apa hal pertama yang kamu lihat saat kamu melihat orang lain (lawan jenis)?",
    "Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?",
    "Apa hal terbodoh yang pernah kamu lakukan?",
    "Apa hal terbodoh yang pernah kamu lakukan?",
    "Apa ketakutan terbesar kamu?",
    "Apa mimpi terburuk yang pernah kamu alami?",
    "Apa mimpi terkonyol yang sampai sekarang kamu kamu ingat?",
    "Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?",
    "Apa sifat terburukmu menurut kamu?",
    "Apa sifat yang ingin kamu rubah dari dirimu?",
    "Apa sifat yang ingin kamu rubah dari temanmu?",
    "Apa yang akan kamu lakuin bila pacarmu bilang hidung atau jarimu jelek?",
    "Apa yang kamu fikirkan sebelum kamu tidur ? ex: menghayal tentang jodoh,dll.",
    "Apakah hal yang menurutmu paling menonjol dari dirimu?",
    "Bagian tubuh temanmu mana yang paling kamu sukai dan ingin kamu punya?",
    "Bagian tubuhmu mana yang paling kamu benci?",
    "Dari semua kelas yang ada di sekolah, kelas mana yang paling ingin kamu masuki dan kelas mana yang paling ingin kamu hindari?",
    "Deksripsikan teman terdekat mu!",
    "Deskripsikan dirimu dalam satu kata!",
    "Film dan lagu apa yang pernah membuat kamu menangis?",
    "Hal apa yang kamu rahasiakan sampe sekarang dan gak ada satu orangpun yang tau?",
    "Hal paling romantis apa yang seseorang (lawan jenis) pernah lakuin atau kasih ke kamu?",
    "Hal-hal menjijikan apa yang pernah kamu alami ?",
    "Jika kamu lahir kembali dan harus jadi salah satu dari temanmu, siapa yang akan kamu pilih untuk jadi dia?",
    "Jika punya kekuatan super/ super power ingin melakukan apa",
    "Jika sebentar lagi kiamat, apa yang kamu lakukan ?",
    "Kalo kamu disuruh operasi plastik dengan contoh wajah dari teman sekelasmu, wajah siapa yang akan kamu tiru?",
    "Kamu pernah mencuri sesuatu gak?",
    "Apakah kamu takut mati? kenapa?",
    "Kapan terakhir kali kamu menangis dan mengapa?",
    "Apa kemampuan spesial kamu apa?",
    "Kok bisa suka sama orang yang kamu sukai?",
    "Menurutmu, apa sifat baik teman terdekatmu yang nggak dia sadari?",
    "Orang seperti apa yang ingin kamu nikahi suatu saat nanti?",
    "Pekerjaan paling ngenes apa yang menurutmu cocok untuk teman yang sedang duduk di sebelahmu? Dan kenapa?",
    "Pengen tukeran hidup sehari dengan siapa? (teman terdekat yang kalian sama-sama tahu) dan mengapa",
    "Pernahkah kamu diam-diam berharap hubungan seseorang dengan pacarnya putus? Siapa?",
    "Pilih PACAR atau TEMAN ? why?",
    "Quote apa yang paling kamu ingat dan kamu suka?",
    "Rahasia apa yang belum pernah kamu katakan sampai sekarang kepada teman mu ?",
    "Siapa panutan yang benar-benar menjadi panutanmu?",
    "Siapa di antara temanmu yang kamu pikir matre?",
    "Siapa di antara teman-temanmu yang menurutmu potongan rambutnya paling nggak banget?",
    "Siapa diantara temen-temenmu yang paling NGGAK fotogenik dan kalo difoto lagi ketawa mukanya jelek banget?",
    "Siapa mantan terindah mu? dan mengapa kalian putus ?!",
    "Siapa nama artis yang pernah kamu bucinin diam-diam?",
    "Siapa nama guru cowok yang pernah kamu sukai dulu?",
    "Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
    "Siapa nama orang (lawan jenis) yang menurutmu akan asyik bila dijadikan pacar?",
    "Siapa nama orang yang kamu benci, tapi kamu rasa orang itu suka sama kamu (nggak harus lawan jenis)?",
    "Siapa nama orang yang pernah kamu kepoin diam-diam?",
    "Siapa orang (lawan jenis) yang paling sering terlintas di pikiranmu?",
    "Siapa orang yang paling menjengkelkan di antara teman teman mu ? alasannya!",
    "Siapa sebenernya di antara teman-temanmu yang kamu pikir harus di make-over?",
    "Siapa yang paling mendekati tipe pasangan idealmu di sini",
    "Apa hal pertama yang akan Anda lakukan jika Anda bangun sebagai lawan jenis?",
    "Pernahkah Anda membiarkan orang lain mendapat masalah karena sesuatu yang Anda lakukan?",
    "Kapan terakhir kali Anda mengompol?",
    "Apa yang paling kamu impikan dari tidur?",
    "Jika Anda akan menghasilkan uang secara ilegal, bagaimana Anda membuatnya?",
    "Apa yang kekanak-kanakan yang masih Anda lakukan?",
    "Jika Anda buta, siapa yang akan menjadi anjing pemandu Anda?",
    "Apa yang paling mengesankan Anda?",
    "Jika Anda diizinkan untuk menggunakan hanya 3 kata untuk sisa malam mulai sekarang - yang mana itu?",
    "Jika Anda seorang diktator, hukum mana yang akan Anda undang terlebih dahulu?",
    "Jika Anda hidup selama era Nazi, siapa Anda?",
    "Apa pengalaman paling memalukan di waktu sekolah / waktu belajar / pendidikan / tahun lalu?",
    "Hewan apa yang paling cocok untukmu dan mengapa?",
    "Apa kencan terburukmu?",
    "Siapa yang ingin kamu cium sekarang?",
    "Apa rahasia kamu, fantasi gelap?",
    "Apakah Anda lebih suka tato pantat Anda atau menusuk lidah Anda?",
    "Apakah kamu selalu setia?",
    "Apakah Anda memiliki naksir remaja?",
    "Di orang mana kamu jatuh cinta?",
    "Selebritas mana yang ingin kamu kencani?",
    "Apa waasa saat paling memalukan dalam hidup Anda?"
    ]
    var result = pickRandom(truth)
 
     res.json({
	     status: true,
	     creator: creator,
	     result: result
     })
})

router.get('/twister', async (req, res, next) => {
	var apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)

 try {
       var result = await (await fetch(`http://docs-jojo.herokuapp.com/api/tongue_twister`)).json()

       res.json({
	       status: true,
	       creator: creator,
	       result: json.result
       })
} catch (e) {
   console.log(e)
    res.snedFile(error)
   }
})

router.get('/purba', async (req, res, next) => {
	var text = req.query.text,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!text) return res.json(loghandler.nottext)

 try {
       var result = await purba(text)

       res.json({
	       status: true,
	       creator: creator,
	       result: result
       })
} catch (e) {
   console.log(e)
    res.snedFile(error)
   }
})

router.get('/tebakumur', async (req, res, next) => {
	var nama = req.query.nama,
	    apikeyInput = req.query.apikey;

	var maintenance = false
        if(maintenance == true) return res.sendFile(mtc)
	if(!apikeyInput) return res.json(loghandler.notparam)
	if (!(apikeyInput == `${free_apikey}` || apikeyInput == `${apikey}` || apikeyInput == `${custom_apikey}`)) return res.sendFile(invalidKey)
	if(!nama) return res.json(loghandler.notnama)

 try {
       var result = Math.floor(Math.random() * 60)

       res.json({
	       status: true,
	       creator: creator,
	       nama: nama,
	       umur: result.toString()
       })
} catch (e) {
   console.log(e)
    res.snedFile(error)
   }
})

// End of script
module.exports = router
