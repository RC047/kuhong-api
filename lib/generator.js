// Automatic Generate ID, Code, Password, Key, Apikey, etc!
const { createHash } = require('crypto')

const generateID = () => {
var len = Math.floor(Math.random() * 30)
var arr = '_0123456789-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890_'
var start = ''
for (var i = len; i > 0; i--) {
start += arr[Math.floor(Math.random() * arr.length)]
}
var lenn = Math.floor(Math.random() * 10)
var end = ''
for (var i = lenn; i > 0; i--) {
end += arr[Math.floor(Math.random() * arr.length)]
  }
    return start + end 
}

const generateApikey = () => {
var len = Math.floor(Math.random() * 30)
var arr = '_0123456789-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890_'
var start = ''
for (var i = len; i > 0; i--) {
start += arr[Math.floor(Math.random() * arr.length)]
}
var lenn = Math.floor(Math.random() * 10)
var end = ''
for (var i = lenn; i > 0; i--) {
end += arr[Math.floor(Math.random() * arr.length)]
  }
    return start + end 
}

const generateCode = () => {
var len = Math.floor(Math.random() * 30)
var arr = '_0123456789-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890_'
var start = ''
for (var i = len; i > 0; i--) {
start += arr[Math.floor(Math.random() * arr.length)]
}
var lenn = Math.floor(Math.random() * 10)
var end = ''
for (var i = lenn; i > 0; i--) {
end += arr[Math.floor(Math.random() * arr.length)]
  }
    return start + end 
}

const generatePassword = () => {
var len = Math.floor(Math.random() * 30)
var arr = '_0123456789-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890_'
var start = ''
for (var i = len; i > 0; i--) {
start += arr[Math.floor(Math.random() * arr.length)]
}
var lenn = Math.floor(Math.random() * 10)
var end = ''
for (var i = lenn; i > 0; i--) {
end += arr[Math.floor(Math.random() * arr.length)]
  }
    return start + end 
}

const generateKey = () => {
var len = Math.floor(Math.random() * 30)
var arr = '_0123456789-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890_'
var start = ''
for (var i = len; i > 0; i--) {
start += arr[Math.floor(Math.random() * arr.length)]
}
var lenn = Math.floor(Math.random() * 10)
var end = ''
for (var i = lenn; i > 0; i--) {
end += arr[Math.floor(Math.random() * arr.length)]
  }
    return start + end 
}

const generateHex = () => {
var len = Math.floor(Math.random() * 30)
var arr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
var hex = ''
for (var i = len; i > 0; i--) {
hex += arr[Math.floor(Math.random() * arr.length)]
   }
      return Buffer.from(hex, 'utf-8').toString('hex')
}

const generateBase64 = () => {
var len = Math.floor(Math.random() * 30)
var arr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
var base64 = ''
for (var i = len; i > 0; i--) {
base64 += arr[Math.floor(Math.random() * arr.length)]
   }
      return Buffer.from(base64, 'utf-8').toString('base64')
}

const generateHash = () => {
var len = Math.floor(Math.random() * 30)
var arr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
var hash = ''
for (var i = len; i > 0; i--) {
hash += arr[Math.floor(Math.random() * arr.length)]
   }
      return createHash('sha1').update(hash).digest('hex')
}

module.exports = { generateID, generateApikey, generateCode, generatePassword, generateKey, generateHex, generateBase64, generateHash }
