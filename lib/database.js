__path = process.cwd();

var monk = require('monk');
var { color } = require(__path + '/lib/color.js');

var url = 'https://kuhong-api.herokuapp.com';
if (!url) throw color('Cek konfigurasi database, url belum diisi', 'red');
monk(url).then(() => console.log(color('Connected correctly to server, Kuhong-API', 'green'))).catch((e) => console.log(color('Error: '+ e +'\n\nGagal connect ke database, \nCek configurasi database apakah Connection URL sudah benar', 'red')))

module.exports = database
