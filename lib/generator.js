// Automatic Generate Code, Password, Key, ApiKey, etc!

var len = 5
var arr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
var code_start = '';
for (var i = len; i > 0; i--) {
code_start += arr[Math.floor(Math.random() * arr.length)];
}
var lenn = 5
var code_end = '';
for (var i = lenn; i > 0; i--) {
code_end += arr[Math.floor(Math.random() * arr.length)];
}

   return `${code_start + code_end}`

module.exports = { generateApikey, generateCode, generatePassword, generateKey }
