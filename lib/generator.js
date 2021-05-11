// Automatic Generate ID, Code, Password, Key, Apikey, etc!
const { pickRandom } = require('./functions.js')
const { createHash } = require('crypto')

var len = Math.floor(Math.random() * 25)
var arr = '_0123456789-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890_'
var start = ''
for (var i = len; i > 0; i--) {
start += arr[Math.floor(Math.random() * arr.length)]
}
var lenn = Math.floor(Math.random() * 5)
var end = ''
for (var i = lenn; i > 0; i--) {
end += arr[Math.floor(Math.random() * arr.length)]
}
var hash = pickRandom(['sha1','sha256','sha512'])
var randomHash = Math.floor(Math.random() * hash.length)
var result = start + end

// Functions :
const generateID =  result
const generateApikey = result
const generateCode =  result
const generatePassword = result
const generateKey = result
const generateHex = result.toString('hex')
const generateBase64 = result.toString('base64')
const generateHash = createHash(randomHash).update(result).digest('hex')

module.exports = { generateID, generateApikey, generateCode, generatePassword, generateKey, generateHex, generateBase64, generateHash }
