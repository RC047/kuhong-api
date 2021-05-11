__path = process.cwd()

var { performance } = require('perf_hooks');
var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', async (req, res) => {
    res.sendFile(__path + '/views/loading.html')
})

router.get('/docs', async (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/api/game/pingpong', async  (req, res) => {
    res.sendFile(__path + '/views/pingpong.html')
})

router.get('/api/game/tebakangka', async (req, res) => {
    res.sendFile(__path + '/views/tebakangka.html')
})

router.get('/api/game/suitjawa', async (req, res) => {
    res.sendFile(__path + '/views/suitjawa.html')
})

router.get('/api/game/tetris', async (req, res) => {
    res.sendFile(__path + '/views/tetris.html')
})

router.get('/api/game/dino', async (req, res) => {
    res.sendFile(__path + '/views/dino.html')
})

router.get('/api/tutorial', async (req, res) => {
    res.sendFile(__path + '/views/tutorial.html')
})

router.get('/api/status', async (req, res, next) => {  

var date = new Date
var jam = date.getHours()
var menit = date.getMinutes()
var detik = date.getSeconds()
var old = performance.now()
var neww = performance.now()
var ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var cpu = require('os').cpus()
var json = await (await fetch('https://api.ipify.org/?format=json')).json()
var data = await (await fetch('https://kuhong-api.herokuapp.com/api/getapikey')).json()
var port = process.env.PORT || 8080 || 5000 || 3000 
    status = {
        status: 'online',
        memory: ram,
        cpu: cpu[0].model,
        port: port,
        ip: json.ip,
        time: `${jam} : ${menit} : ${detik}`,
        uptime: muptime(process.uptime()),
        speed: `${neww - old}ms`,
        info:{
            owner: 'Rendy',
            deskripsi: 'Hanya sekedar untuk belajar :)',
            instagram: 'rendycraft047',
            youtube: 'RC047',
            donasi: 'Biar Update tiap hari : https://saweria.co/RC047',
            free_apikey: data.free_apikey
        }
    }
    res.json(status)
})

module.exports = router

function muptime(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ' : ' + pad(minutes) + ' : ' + pad(seconds)
}
