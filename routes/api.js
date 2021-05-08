__path = process.cwd()

// Database :
var express = require('express');
var { generateApikey } = require(__path + '/lib/generator.js');
var database = require(__path + '/database/database.js');

try {
var kuhong = database.get('RC047'); // jan diubah
} catch (e) {
   console.log(e)
}

var creatorList = ['RC047','RendyGans','RendyCraft047']; // Nama Lu Ngab (dibutuhkan)
var creator = creatorList[Math.floor(Math.random() * creatorList.length)]; // Ini jan diubah

// Apikey :
var key = 'eh9RoPYCpE8lp272UrC8ve5RKpU4Jfb5O2L' // Apikeymu (dibutuhkan)
var xteam_key = '7cac32071f2eb2ff' // Apikey Xteam (dibutuhkan)
var removebg_key = 'HCVrssExQw8DuaWpj2vE5359' // Apikey RemoveBG (dibutuhkan)
console.log(`Checking Apikey Data...`)
console.log(`Apikey : ${key}`)
console.log(`Xteam Apikey : ${xteam_key}`)
console.log(`RemoveBG Apikey : ${removebg_key}`)

// Required Modules :
var ffmpeg = require('fluent-ffmpeg');
var brainly = require('brainly-scraper-v2');
var imageToBase64 = require('image-to-base64');
var upload = require(__path + '/lib/upload.js');
var translate = require('translate-google-api');
var tesseract = require('node-tesseract-ocr');
var axios = require('axios');
var FormData = require('form-data');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var qrcode = require('qrcode');
var secure = require('ssl-express-www');
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

var { tts, wait, simih, getBuffer, h2k, banner, getRandom, start, info, success, close, pickRandom } = require(__path + '/lib/functions.js');
var { servers, yta, ytv } = require(__path + '/lib/y2mate.js')
var { removeBackgroundFromImageFile } = require('remove.bg');
var { tahta } = require(__path + '/lib/tahta.js');
var { createHash } = require('crypto')
var { spawn, exec } = require('child_process');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var { recognize } = require(__path + '/lib/ocr.js')
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
        message: 'Teks harus berupa angka'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'Erorr! :('
    }
}

var error = __path + '/views/error.html' // Jika Error
var invalidKey = __path + '/views/invalidKey.html' // Jika Apikey Invalid

        var len = 10
        var arr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
        var random = '';
        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }
        var lenn = 5
        var randomlagi = '';
        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }
        var randomTextNumber = 'kuhong-api-storage/'+random+randomlagi;

router.get('/cekapikey', async (req, res, next) => {
    var apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
	var limit = '-'
    if(apikeyInput == `${key}`) limit = 'Unlimited!'

try {
	res.json({
               status : `active`,
                apikey : apikeyInput,
                limit : limit
            })
 
} catch (e) {
	res.sendFile(error)
   }
})

router.get('/tiktok', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

if(!apikeyInput) return res.json(loghandler.notparam)
if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
const cheerio = require('cheerio')

axios.get('https://jadwalnonton.com/now-playing')
.then(({ data }) => {
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


router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
		if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
         .on('error', () => console.log('Error Nulis'))
         .on('exit', () =>
         {
	         res.sendFile(outputPath)
        })
   } catch (e) {
      console.log(e);
	 res.json(loghandler.erorr)
   }
})

router.get('/nulis2', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  .on('error', () => console.log('Error Nulis2'))
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
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
		if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)
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
		if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.jon(loghandler.invalidKey)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

    var data = fs.readFileSync(__path + '/lib/games/caklontong.js')
    var jon = JSON.parse(data);
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
           
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(req.query === undefined) return res.json(loghandler.notfound)
        if (!img) return res.json(loghandler.notimg)
	if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

	var enc = await imageToBase64(img)
	var media = Buffer.from(enc, 'base64')
	await fs.writeFileSync(__path + '/tmp/ocr.png', media)
	var path = fs.readFileSync(__path + '/tmp/ocr.png')
        var ocr = { lang: "eng", oem: 1, psm: 3 }

   await tesseract.recognize(path, ocr).then(result => {
    console.log("ocr result :" + result)

	   res.json({
                status : true,
                creator : `${creator}`,
                message : `jangan lupa Subscribe Youtube ${creator}`,
                result : result
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
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(req.query === undefined) return res.json(loghandler.notfound)
        if (!img) return res.json(loghandler.notimg)
	if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

	var media = await imageToBase64(img)
	var ranp = getRandom('.png')
          await removeBackgroundFromImageFile({ path: media, apiKey: removebg_key, size: 'auto', type: 'auto', ranp }).then(result => {
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

       res.json({
       	status : true,
           creator : `${creator}`,
       	result : text
       })
})

router.get('/md5', async (req, res, next) => {
     var apikeyInput = req.query.apikey,
            text = req.query.text;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/hartatahta?text=${text}&apikey=apivinz`)).buffer()
       await fs.writeFileSync(__path + '/tmp/tahta.png', hasil)

    res.sendFile(__path + '/tmp/tahta.png')
})

router.get('/customtahta', async (req, res, next) => {
   var text = req.query.text,
          apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/tahta?text=${text}&apikey=apivinz`)).buffer()
       await fs.writeFileSync(__path + '/tmp/cstahta.png', hasil)

    res.sendFile(__path + '/tmp/cstahta.png')
})

router.get('/anime/random', async (req, res, next) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!emoji) return res.json(loghandler.notemoji)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${encodeURIComponent(emoji)}`)).buffer()
        await fs.writeFileSync(__path + '/tmp/emojitopng.png', hasil)

         res.sendFile(__path + '/tmp/emojitopng.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)   }
})

router.get('/brainly', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
               text = req.query.text;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var json = await (await fetch(`https://api.zeks.xyz/api/brainly?apikey=apivinz&q=${text}&count=5`)).json()
       res.json(json)
     
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/pantun', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

     var json = await (await fetch(`https://api.zeks.xyz/api/pantun?apikey=apivinz`)).json()
         res.json(json)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/memeindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

     var json = await (await fetch(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)).json()
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/ptlvid`)).json()
         res.json(json)

} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/cerpen', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/mediafire?apikey=apivinz&url=${url}`)).json()
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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

     var json = await (await fetch(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)).json()
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${text}&apikey=apivinz`)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${text}&apikey=apivinz`)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${text}`)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var json = await (await fetch(`https://api.zeks.xyz/api/snowwrite?text1=${t1}&text2=${t2}&apikey=apivinz`)).json()
       await fs.writeFileSync(__path + '/tmp/salju.png', await getBuffer(json.result))

         res.sendFile(__path + '/tmp/salju.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/alay', async (req, res, next) => {
        var kata = req.query.kata,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!kata) return res.json(loghandler.notkata)
      var json = await (await fetch(`https://api.terhambar.com/bpk?kata=${kata}`)).json()
         res.json({
		 status : true,
		 creator : creator,
		 result : json.text
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${text}&apikey=apivinz`)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)
  if (!t3) return res.json(loghandler.nottext3)

     var json = await (await fetch(`https://api.zeks.xyz/api/retro?text1=${t1}&text2=${t2}&text3=${t3}&apikey=apivinz`)).json()
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${text}`)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${text}`)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${t1}&text2=${t2}&apikey=apivinz`)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${t1}&text2=${t2}&apikey=apivinz`)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${text}&apikey=apivinz`)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!t1) return res.json(loghandler.nottext)
  if (!t2) return res.json(loghandler.nottext2)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${t1}&text2=${t2}&apikey=apivinz`)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://api.zeks.xyz/api/thundertext?text=${text}&apikey=apivinz`)
       await fs.writeFileSync(__path + '/tmp/thunder.png', hasil)

         res.sendFile(__path + '/tmp/thunder.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/news', async (req, res) => {
     var apikeyInput = req.query.apikey;

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
    if (ress.status !== 200) return await res.json(result)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
	
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!q) return res.json(loghandler.notquery)

     var json = await (await fetch(`https://api.zeks.xyz/api/spotify?apikey=apivinz&q=${q}`)).json()

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(logahndler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/ig?url=${url}&apikey=apivinz`)).json()

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(logahndler.invalidLink)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/pngtowebp?url=${url}`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     result : json.result
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

  var len = 25
  var arr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210'
  var random = ''
  var random2 = ''

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }
        var lenn = 10
        var code = '';
        for (var i = lenn; i > 0; i--) {
            random2 += arr[Math.floor(Math.random() * arr.length)];
        }
   var encode = random + random2 + code

       res.json({
       	     status : true,
             creator : creator,
             text : text,
             code : encode
        })
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/bucin', async (req, res, next) => {
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

     var json = await (await fetch(`http://zekais-api.herokuapp.com/bucin`)).json()

     res.json({
	     status : true,
	     creator : creator,
	     bucin : json.result
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!q) return res.json(loghandler.notquery)

     var json = await (await fetch(`https://api.zeks.xyz/api/joox?apikey=apivinz&q=${q}`)).json()

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/gdbypass?url=${url}`)).json()

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/soundcloud?apikey=apivinz&url=${url}`)).json()

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!username) return res.json(loghandler.notnama)

     var json = await (await fetch(`https://api.zeks.xyz/api/igs?apikey=apivinz&username=${username}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/nickff', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

     var json = await (await fetch(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/murothal', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

     var json = await (await fetch(`https://api.zeks.xyz/api/randomquran?apikey=apivinz`)).json()

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

     var json = await (await fetch(`https://api.banghasan.com/quran/format/json/acak`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/ninja', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    nama = req.query.nama;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!q) return res.json(loghandler.notquery)


     var json = await (await fetch(`https://api.zeks.xyz/api/resep-masak?apikey=apivinz&q=${q}`)).json()

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!url) return res.json(loghandler.noturl)
  if (!url.startsWith('http')) return res.json(loghandler.invalidLink)

     var json = await (await fetch(`https://api.zeks.xyz/api/qrdecode?apikey=apivinz&image=${url}`)).json()

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!q) return res.json(loghandler.notquery)

     var json = await (await fetch(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${q}`)).json()

     res.json(json)
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/tebakanime', async (req, res, next) => {
        var apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)

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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
          var { is_adult, title, title_chinese, title_romaji, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
          var link = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`

  res.json({
	  status: true,
	  creator: creator,
	  result:{
                  title: title,
                  title_romaji: title_romaji,
                  similarity: `${(similarity * 100).toFixed(1)}%`,
                  episode: episode.toString(),
                  echi: `${is_adult ? 'yes' : 'no'}`,
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if(!text) return res.json(loghandler.nottext)

    var [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''

        res.json({
		status: true,
		creator: creator,
		readmore: l + readMore + r,
		note: `gunakan whatsapp/telegram agar teks terlihat baca selengkapnya.`
	})
})

router.get('/8bit', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
        if (!query) return res.json(loghandler.notquery)

 try {
       var json = await (await fetch(`https://api.zeks.xyz/api/shopee?apikey=apivinz&q=${query}`)).json()
             res.json(json)
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/happymod', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
        query = req.query.query;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
        if (!query) return res.json(loghandler.notquery)

 try {
       var json = await (await fetch(`https://api.zeks.xyz/api/happymod?apikey=apivinz&q=${query}`)).json()
             res.json(json)
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

router.get('/faktaunik', async (req, res, next) => {
	var apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(req.query === undefined) return res.json(loghandler.notfound)

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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if(!img) return res.json(loghandler.notimg)
  if(!username) return res.json(loghandler.notusername)
  if(!comment) return res.json({ message: 'Masukan parameter komentar' })
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=${img}&username=${username}&msg=${comment}`)).buffer()
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if(!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/barcode?apikey=apivinz&text=${text}`)).buffer()
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if(!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${text}`)).buffer()
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if(!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${text}`)).buffer()
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if(!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/tlight?text=${text}&apikey=apivinz`)).buffer()
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if(!t1) return res.json(loghandler.nottext)
  if(!t2) return res.json(loghandler.nottext2)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${t1}&text2=${t2}`)).buffer()
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if(!text) return res.json(loghandler.nottext)

     var hasil = await (await fetch(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${text}`)).buffer()
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if(!text) return res.json(loghandler.nottext)

     var json = await (await fetch(`https://api.zeks.xyz/api/naruto?text=${text}&apikey=apivinz`)).json()
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

router.get('/jail', async (req, res, next) => {
    var img = req.query.img,
        apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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

router.get('/spongebob', async (req, res, next) => {
        var text = req.query.text,
	    apikeyInput = req.query.apikey;

try {
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
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
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
  if(req.query === undefined) return res.json(loghandler.notfound)
  if (!text) return res.json(loghandler.nottext)

     var hasil = await getBuffer(`https://leyscoders-api.herokuapp.com/api/textto-image?text=${text}`)
       await fs.writeFileSync(__path + '/tmp/ttp3.png', hasil)

         res.sendFile(__path + '/tmp/ttp3.png')
} catch (e) {
     console.log(e)
	res.sendFile(error)
   }
})

router.get('/fml', async (req, res, next) => {
	var apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(req.query === undefined) return res.json(loghandler.notfound)

 try {
       var json = await (await fetch(`https://api.zeks.xyz/api/fml?apikey=apivinz`)).json()

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

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
        if(req.query === undefined) return res.json(loghandler.notfound)

 try {
       var estetik = await (await fetch(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)).buffer()
           await fs.writeFileSync(__path + '/tmp/aesthetic_pic.png', estetik)

         res.sendFile(__path + '/tmp/aesthetic_pic.png')
} catch (e) {
  console.log(e)
    res.sendFile(error)
   }
})

// End of script
module.exports = router

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
