// Automatic Generate ID, Code, Password, Key, ApiKey, etc!

const { createHash } = require('crypto')

var len = Math.floor(Math.random() * 20)
var arr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
var code_start = '';
for (var i = len; i > 0; i--) {
code_start += arr[Math.floor(Math.random() * arr.length)];
}
var lenn = Math.floor(Math.random() * 5)
var code_end = '';
for (var i = lenn; i > 0; i--) {
code_end += arr[Math.floor(Math.random() * arr.length)];
}

const generateID =  code_start + code_end
const generateApikey =  code_start + code_end
const generateCode =  code_start + code_end
const generatePassword =  code_start + code_end
const generateKey =  code_start + code_end
const generateHex = (text) => {
   return createHash('md5').update(text).digest('hex')
}

module.exports = { generateID, generateApikey, generateCode, generatePassword, generateKey, generateHex }
