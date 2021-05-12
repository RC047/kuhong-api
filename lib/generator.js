// Automatic Generate ID, Code, Password, Key, Apikey, etc!
const { pickRandom } = require('./functions.js')
const { createHash } = require('crypto')

var len = Math.floor(Math.random() * 30)
var random = pickRandom(['_0123456789-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890_','abcd-1234567890_efghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQ-1234567890_RSTUVWXYZ','012rstuvwF3456789-abcdefghijklmnopqrstuvwFGHIJKLMNOPQRSTUVWXYrstuvwFZ-1234567890_rstAJJAJADDDuvrsrstuvwFtuvwFwF'])
var arr = Math.floor(Math.random() * random.length)
var start = ''
for (var i = len; i > 0; i--) {
start += arr[Math.floor(Math.random() * arr.length)]
}
var lenn = Math.floor(Math.random() * 10)
var end = ''
for (var i = lenn; i > 0; i--) {
end += arr[Math.floor(Math.random() * arr.length)]
}
var arr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
var base = ''
for (var i = len; i > 0; i--) {
base += arr[Math.floor(Math.random() * arr.length)]
}
var result = start + end
var respone = base

// Functions :
const generateID = result
const generateApikey = result
const generateCode = result
const generatePassword = result
const generateKey = result
const generateHex = result.toString('hex')
const generateBase64 = createHash('md5').update(respone).digest('base64')
const generateHash = createHash('md5').update(respone).digest('hex')

module.exports = { generateID, generateApikey, generateCode, generatePassword, generateKey, generateHex, generateBase64, generateHash }
