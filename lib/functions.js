__path = process.cwd();

const { obfuscate } = require('js-confuser')
const { fromBuffer } = require('file-type')
const { minify } = require('uglify-js')
const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const gtts = require('node-gtts')
const axios = require('axios')
const crypto = require('crypto')
const cfonts = require('cfonts')
const spin = require('spinnies')
const path = require('path')
const fs = require('fs')

const saveToMedia = async (buffer) => {

 try {
  var ranName = randomText()
  var { ext } = await fromBuffer(buffer)
  var savePath = `${__path}/public/media/${ranName}.${ext}`
  await fs.writeFileSync(savePath, buffer)

    return `https://kuhong-api.herokuapp.com/media/${ranName}.${ext}`
 } catch (e) {
  console.log(e)
    }
}

function encryptHtml(html, message) {

var ranFunc = randomText()
var object = randomText()
var object2 = randomText()
var object3 = randomText()
var object4 = randomText()
var object5 = randomText()
var source = `
<script type="text/javascript">
<!-- Encryption By RC047 -->
<!--
document.write(${ranFunc}('${object + object2 + toBase64(object4 + toBase64(toBase64(html)) + object5) + object3}'));
// -->

function ${ranFunc}(data) {
var tmp = data.split('${object}')[1].split('${object3}')[0];
var tmp2 = atob(tmp.slice(${object2.length}));
var tmp3 = atob(tmp2.replace(/(${object4})/g, '').replace(/(${object5})/g, ''));
var result = atob(tmp3);

  return result;
}
</script>
`
var data = toBase64(`document.write(atob('${toBase64(source.trim())}'));`)
var result = `
<script type="text/javascript">
<!--
eval(atob('${data}'));
// -->
</script>
`
if (message) result = `
<script type="text/javascript">
<!-- ${message} -->
<!--
eval(atob('${data}'));
// -->
</script>
`

  return result.trim()
}

function encryptScript(data) {

var source = toBase64(data)
var result = `eval(atob('${source}'));`

  return result.trim()
}

function toBinary(text) {

var result = ''
for (var i = 0; i < text.length; i++) result += text[i].charCodeAt(0).toString(2) + ' '
  return result
}

function toBase64(text) {
  return Buffer.from(text, 'UTF-8').toString('base64')
}

function toHex(text) {
  return Buffer.from(text, 'UTF-8').toString('hex')
}

function randomText() {

var len = 15
var arr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
var random = ''
for (var i = len; i > 0; i--) {
    random += arr[Math.floor(Math.random() * arr.length)]
}
var lenn = 10
var random2 = ''
for (var i = lenn; i > 0; i--) {
    random2 += arr[Math.floor(Math.random() * arr.length)]
}

   return random + random2
}

function escapeFull(data) {

var result = ''
for (var i = 0; i < data.length; i++) result += '%' + hexFromDec(data.charCodeAt(i))

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
   if (num == 10) return 'a'
   if (num == 11) return 'b'
   if (num == 12) return 'c'
   if (num == 13) return 'd'
   if (num == 14) return 'e'
   if (num == 15) return 'f'
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
    var newLineStr = '\n';
    var done = false;
    var result = '';
    while (str.length > maxWidth) {                 
        var found = false;
        for (var i = maxWidth - 1; i >= 0; i--) {
            if (testWhite(str.charAt(i))) {
                result = result + [str.slice(0, i), newLineStr].join('');
                str = str.slice(i + 1);
                found = true;
                break;
            }
        }
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

function formatLogs(logs) {
  return logs.split('console.js:1')[1].split('at ')[0].split(':1)')[0].split(':3')[0].split('(Use `node --trace-uncaught ...` to show where the exception was thrown)')[0];
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
        resolve({ video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief() }
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
    return crypto.randomBytes(length)
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


module.exports = { saveToMedia, encryptHtml, encryptScript, escapeFull, getZodiac, alay, purba, stylizeText, tts, formatLogs, wait, simih, getBuffer, textWrap, h2k, generateMessageID, getGroupAdmins, getRandom, readMore, randomBytes, start, info, success, banner, close, pickRandom }
