__path = process.cwd();

const { fromBuffer } = require('file-type')
const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const gtts = require('node-gtts')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const path = require('path')
const fs = require('fs')

const saveToMedia = async (buffer) => {

 try {
  var ranName = Math.floor(Math.random() * 1000000)
  var { ext } = await fromBuffer(buffer)
  var savePath = `${__path}/public/media/${ranName}.${ext}`
  await fs.writeFileSync(savePath, buffer)

    return `https://kuhong-api.herokuapp.com/media/${ranName}.${ext}`
 } catch (e) {
  console.log('Failed to Save Buffer to Media :\n' + e)
    }
}

async function encryptHtml(html, mode, message) {

var basic = await escapeFull(`document.write(unescape('${escapeFull(html)}'));`)
var normal = await escapeFull(`eval(unescape('${escapeFull(basic)}'));`)
var hard = await escapeFull(`eval(unescape('${escapeFull(normal)}'));`)
var double = await escapeFull(`eval(unescape('${escapeFull(hard)}'));`)
var triple = await escapeFull(`eval(unescape('${escapeFull(double)}'));`)
var extended = await escapeFull(`eval(unescape('${escapeFull(triple)}'));`)
var super = await escapeFull(`eval(unescape('${escapeFull(extended)}'));`)

var data = html
if (mode == 'basic') data = basic // Security Level (1)
if (mode == 'normal') data = normal // Security Level (2)
if (mode == 'hard') data = hard // Security Level (3)
if (mode == 'double') data = double // Security Level (4)
if (mode == 'triple') data = triple // Security Level (5)
if (mode == 'extended') data = extended // Security Level (10)
if (mode == 'super') data = super // Security Level (25)

var result = `
<script type="text/javascript">
<!--
eval(unescape('${data}'));
// -->
</script>
`
if (message !== undefined) result = `
<script type="text/javascript">
<!-- ${message} -->
<!--
eval(unescape('${data}'));
// -->
</script>
`

  return result.trim()
}

function escapeFull(data) {

   var result = ''
   for (var i = 0; i < data.length; i++) {
   result += '%' + hexFromDec(data.charCodeAt(i))
   }

 return result
}

function hexFromDec(num) {

if (num > 65535) return ('error!')
var first = Math.round(num / 4096 -.5)
var temp1 = num - first * 4096
var second = Math.round(temp1 / 256 -.5)
var temp2 = temp1 - second * 256
var third = Math.round(temp2 / 16 -.5)
var fourth = temp2 - third * 16

   return ('' + getLetter(third) + getLetter(fourth))
}

function getLetter(num) {

   if (num < 10) {
   return num
   } else {
   if (num == 10) return 'A'
   if (num == 11) return 'B'
   if (num == 12) return 'C' 
   if (num == 13) return 'D'
   if (num == 14) return 'E'
   if (num == 15) return 'F'
   }
}

const zodiak = [
    ["Capricorn", new Date(1970, 0, 1)],
    ["Aquarius", new Date(1970, 0, 20)],
    ["Pisces", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Taurus", new Date(1970, 3, 21)],
    ["Gemini", new Date(1970, 4, 21)],
    ["Cancer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Scorpio", new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}

const alay = async (text) => {

function forceLower(strInput) {
  strInput = strInput.toLowerCase();
}
function randomizeStrIdx(chars){
   var charsSize = charset[chars].length;
   var shuffledIdx = Math.floor(Math.random() * charsSize);
 return shuffledIdx;
}
function randomizeNya(chars){
    var charsSize =  nyaset.length;
    charsSize = charsSize - 1;
    var shuffledIdx = Math.floor(Math.random() * charsSize);
  return shuffledIdx;
}
function randomizeKu(chars){
    var charsSize =  nyaset.length;
    charsSize = charsSize - 1;
    var shuffledIdx = Math.floor(Math.random() * charsSize);
  return shuffledIdx;
}

            var charset = {
                'a': ['a', 'A', '4'],
                'b': ['b', 'B', '6'],
                'c' : ['c', 'C'],
                'd' : ['d', 'D'],
                'e' : ['3', 'e', 'E'],
                'f' : ['f', 'F'],
                'g' : ['9', 'g', 'G'],
                'h' : ['h', 'H'],
                'i' : ['1', 'i', 'I', 'ie'],
                'j' : ['j', 'J'],
                'k' : ['k', 'K'],
                'l' : ['l', 'L'],
                'm' : ['m', 'M'],
                'n' : ['n', 'N'],
                'o' : ['0', 'o', 'O', 'eU'],
                'p' : ['p', 'P'],
                'q' : ['q', 'Q'],
                'r' : ['r', 'R'],
                's' : ['5', 's', 'S','s', 'S', 'z'],
                't' : ['t', 'T'],
                'u' : ['u', 'U', 'v', 'V', 'Oe'],
                'v' : ['v', 'V'],
                'w' : ['w', 'W', 'vv'],
                'x' : ['x', 'X'],
                'y' : ['y', 'Y', 'ia'],
                'z' : ['z', 'Z']
            }
            var nyaset = ['nya', 'nya','nya','nya', 'x', "'x",'na', "'a"];
            var kuset = ['ku', 'ku', 'ku', 'ku', 'qu', 'q', 'kuw', 'quw', 'qhu', "'q"];
            var tesstring;
                tesstring = text;
                tesstring = tesstring.replace(/nya/gi, m => nyaset[randomizeNya(m)]);
                tesstring = tesstring.replace(/nya/gi, m => nyaset[randomizeKu(m)]);
                tesstring = tesstring.replace(/[abcdefghijklmnopqrstuvwxyz]/gi, m => charset[m][randomizeStrIdx(m)]);
                return tesstring;
}

const purba = async (text) => {

function forceLower(strInput) {
  strInput = strInput.toLowerCase();
}
function randomizeStrIdx(chars){
   var charsSize = charset[chars].length;
   var shuffledIdx = Math.floor(Math.random() * charsSize);
 return shuffledIdx;
}
function randomizeNya(chars){
    var charsSize =  nyaset.length;
    charsSize = charsSize - 1;
    var shuffledIdx = Math.floor(Math.random() * charsSize);
  return shuffledIdx;
}
function randomizeKu(chars){
    var charsSize =  nyaset.length;
    charsSize = charsSize - 1;
    var shuffledIdx = Math.floor(Math.random() * charsSize);
  return shuffledIdx;
}

            var charset = {
                'a': ['ava'],
                'i': ['ivi'],
                'u': ['uvu'],
                'e': ['eve'],
                'o': ['ovo']
            }
            var nyaset = ['nya', 'nya','nya','nya', 'x', "'x",'na', "'a"];
            var kuset = ['ku', 'ku', 'ku', 'ku', 'qu', 'q', 'kuw', 'quw', 'qhu', "'q"];
            var tesstring;
                tesstring = text;
                tesstring = tesstring.replace(/nya/gi, m => nyaset[randomizeNya(m)]);
                tesstring = tesstring.replace(/nya/gi, m => nyaset[randomizeKu(m)]);
                tesstring = tesstring.replace(/[aiueo]/gi, m => charset[m][randomizeStrIdx(m)]);
                return tesstring;
}

function textWrap(str, maxWidth) {
    var newLineStr = '\n'; done = false; result = '';
    while (str.length > maxWidth) {                 
        found = false;
        // Inserts new line at first whitespace of the line
        for (i = maxWidth - 1; i >= 0; i--) {
            if (testWhite(str.charAt(i))) {
                result = result + [str.slice(0, i), newLineStr].join('');
                str = str.slice(i + 1);
                found = true;
                break;
            }
        }
        // Inserts new line at maxWidth position, the word is too long to wrap
        if (!found) {
            result += [str.slice(0, maxWidth), newLineStr].join('');
            str = str.slice(maxWidth);
        }

    }

    return result + str
}

function testWhite(x) {
    var white = new RegExp(/^\s$/);
    return white.test(x.charAt(0));
}

const wait = async (media) => new Promise(async (resolve, reject) => {
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`Gambar tidak ditemukan!`);
    const result = await response.json()
    try {
        const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
        let belief = () => similarity < 0.89 ? "Saya memiliki keyakinan rendah dalam hal ini : " : ""
        let ecch = () => is_adult ? "Iya" : "Tidak"
        resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Judul Jepang : *${title}*
~> Ejaan Judul : *${title_romaji}*
~> Judul Inggris : *${title_english}*
~> Episode : *${episode}*
~> Season  : *${season}*`});
        } catch (e) {
                console.log(e)
                reject(`Saya tidak tau ini anime apa`)
        }
})

const simih = async (text) => {
        try {
                const sami = await fetch(`https://simsumi.herokuapp.com/api?text=${text}`, {method: 'GET'})
                const res = await sami.json()
                return res.success
        } catch {
                return 'Simi ga tau apa yang anda ngomong, bahasa alien yah kak?'
        }
}

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
        try {
                options ? options : {}
                const res = await axios({
                        method: "get",
                        url,
                        headers: {
                                'DNT': 1,
                                'Upgrade-Insecure-Request': 1
                        },
                        ...options,
                        responseType: 'arraybuffer'
                })
                return res.data
        } catch (e) {
                console.log(`Error : ${e}`)
        }
}

function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__path + '/tmp/', (1 * new Date) + '.mp3')
      tts.save(filePath, text, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}

async function stylizeText(text) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
    let html = await res.text()
    let dom = new JSDOM(html)
    let table = dom.window.document.querySelector('table').children[0].children
    let obj = {}
    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML
      let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
      obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
    return obj
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
                i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
}

const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const spinner = {
  "interval": 120,
  "frames": [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛"
  ]}

let globalSpinner;

const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
        spins.add(id, {text: text})
                /*setTimeout(() => {
                        spins.succeed('load-spin', {text: 'Suksess'})
                }, Number(wait) * 1000)*/
}

const info = (id, text) => {
        spins.update(id, {text: text})
}

const success = (id, text) => {
        spins.succeed(id, {text: text})
        }

const close = (id, text) => {
        spins.fail(id, {text: text})
}

const banner = cfonts.render(('LOADING...'), {
    font: 'chrome',
    color: 'candy',
    align: 'center',
    gradient: ["red","yellow"],
    lineHeight: 3
  });


module.exports = { saveToMedia, encryptHtml, escapeFull, getZodiac, alay, purba, stylizeText, tts, wait, simih, getBuffer, textWrap, h2k, generateMessageID, getGroupAdmins, getRandom, readMore, randomBytes, start, info, success, banner, close, pickRandom }
