__path = process.cwd();

var { encryptHtml } = require(__path + '/lib/functions.js');
var { performance } = require('perf_hooks');
var osu = require('node-os-utils');
var fetch = require('node-fetch');
var express = require('express');
var fs = require('fs');
var router = express.Router();
var blocked = ['180.249.133.59'];

router.get('/', async (req, res, next) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var devMode = req.query.dev;
    var home = await fs.readFileSync(__path + '/views/home.html').toString()
    var devTools = await fs.readFileSync(__path + '/views/tools.html').toString()
    if (devMode == 'true') home = home + devTools
    res.send(await encryptHtml(home))
})

router.get('/api', async (req, res, next) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var devMode = req.query.dev;
    var api = await fs.readFileSync(__path + '/views/loading.html').toString()
    var devTools = await fs.readFileSync(__path + '/views/tools.html').toString()
    if (devMode == 'true') api = api + devTools
    res.send(await encryptHtml(api))
})

router.get('/docs', async (req, res, next) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var devMode = req.query.dev;
    var docs = await fs.readFileSync(__path + '/views/docs.html').toString()
    var devTools = await fs.readFileSync(__path + '/views/tools.html').toString()
    if (devMode == 'true') docs = docs + devTools
    res.send(await encryptHtml(docs))
})

router.get('/game/pingpong', async  (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var devMode = req.query.dev;
    var pingpong = await fs.readFileSync(__path + '/views/pingpong.html').toString()
    var devTools = await fs.readFileSync(__path + '/views/tools.html').toString()
    if (devMode == 'true') pingpong = pingpong + devTools
    res.send(await encryptHtml(pingpong))
})

router.get('/game/kuis', async  (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var kuis = await fs.readFileSync(__path + '/views/kuis.html').toString()
    res.send(await encryptHtml(kuis))
})

router.get('/game/tebakangka', async (req, res, next) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var tebakangka = await fs.readFileSync(__path + '/views/tebakangka.html').toString()
    res.send(await encryptHtml(tebakangka))
})

router.get('/game/tebakhuruf', async (req, res, next) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var tebakhuruf = await fs.readFileSync(__path + '/views/tebakhuruf.html').toString()
    res.send(await encryptHtml(tebakhuruf))
})

router.get('/game/suit', async  (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var suit = await fs.readFileSync(__path + '/views/suit.html').toString()
    res.send(await encryptHtml(suit))
})

router.get('/game/suitjawa', async (req, res, next) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var suitjawa = await fs.readFileSync(__path + '/views/suitjawa.html').toString()
    res.send(await encryptHtml(suitjawa))
})

router.get('/game/tetris', async (req, res, next) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var devMode = req.query.dev;
    var tetris = await fs.readFileSync(__path + '/views/tetris.html').toString()
    var devTools = await fs.readFileSync(__path + '/views/tools.html').toString()
    if (devMode == 'true') tetris = tetris + devTools
    res.send(await encryptHtml(tetris))
})

router.get('/game/dino', async (req, res, next) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var devMode = req.query.dev;
    var dino = await fs.readFileSync(__path + '/views/dino.html').toString()
    var devTools = await fs.readFileSync(__path + '/views/tools.html').toString()
    if (devMode == 'true') dino = dino + devTools
    res.send(await encryptHtml(dino))
})

router.get('/botchat', async (req, res, next) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var platform = req.query.platform,
        devMode = req.query.dev;

    var bot = await fs.readFileSync(__path + '/views/botchat.html').toString()
    if (platform == 'window') bot = await fs.readFileSync(__path + '/views/botchat.html').toString().replace(/botchat-mobile/g, 'botchat-window')
    var devTools = await fs.readFileSync(__path + '/views/tools.html').toString()
    if (devMode == 'true') bot = bot + devTools
    res.send(await encryptHtml(bot))
})

router.get('/tutorial', async (req, res, next) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    var devMode = req.query.dev;
    var tutorial = await fs.readFileSync(__path + '/views/tutorial.html').toString()
    var devTools = await fs.readFileSync(__path + '/views/tools.html').toString()
    if (devMode == 'true') tutorial = tutorial + devTools
    res.send(await encryptHtml(tutorial))
})

router.get('/status', async (req, res, next) => {  

var date = new Date()
var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
var NotDetect = 'Not Detected'
var cpu = osu.cpu
var cpuCore = cpu.count()
var drive = osu.drive
var mem = osu.mem
var netstat = osu.netstat
var platform = osu.os.platform()
var cpuModel = cpu.model()
var cpuPer

var p1 = cpu.usage().then(cpuPercentage => {
    cpuPer = cpuPercentage
}).catch(() => { 
    cpuPer = NotDetect
})
var driveTotal, driveUsed, drivePer
var p2 = drive.info().then(info => {
         driveTotal = (info.totalGb + ' GB'),
         driveUsed = info.usedGb,
         drivePer = (info.usedPercentage + '%')
}).catch(() => { 
    driveTotal = NotDetect,
    driveUsed = NotDetect,
    drivePer = NotDetect
})
var ramTotal, ramUsed
var p3 = mem.info().then(info => {
    ramTotal = info.totalMemMb,
    ramUsed = info.usedMemMb
}).catch(() => { 
   ramTotal = NotDetect,
   ramUsed = NotDetect
})
var netsIn, netsOut
var p4 = netstat.inOut().then(info => {
   netsIn = (info.total.inputMb + ' MB'),
   netsOut = (info.total.outputMb + ' MB')
}).catch(() => { 
   netsIn = NotDetect,
   netsOut = NotDetect
})
await Promise.all([p1, p2, p3, p4])

var _ramTotal = (ramTotal + ' MB')
var old = performance.now()
var neww = performance.now()
var user = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/users')).json()
var visitor = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var request = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/hits')).json()
var star = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/rating')).json()
var ip_used = await (await fetch('https://api.ipify.org/?format=json')).json()
var port_used = process.env.PORT || 8000 || 5000 || 3000
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })

res.json({
    stats:{
        status: 'Online',
        platform: platform.slice(0, 1).toUpperCase() + platform.slice(1),
        ram: `${ramUsed} MB / ${_ramTotal} (${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '% Used' : NotDetect})`,
        storage: `${driveUsed} GB / ${driveTotal} (${drivePer} Used)`,
        cpu: `${cpuModel} - ${cpuCore} Core (${cpuPer}% Used)`,
        connection:{
            nets_In: netsIn,
            nets_Out: netsOut,
            port_used: port_used.toString(),
            ip_used: ip_used.ip.toString()
        },
        time: time,
        uptime: muptime(process.uptime()),
        ping_ms: neww - old + ' ms',
        ping_sec: (neww - old / 100000).toFixed(2) + ' sec'
    },
        total:{
            users: user.value.toString(),
            requests: request.value.toString(),
            visitors: visitor.value.toString(),
            stars: star.value.toString(),
            features: '348',
            ip_blocked: Object.keys(blocked).length.toString()
    },
        owner:{
            nama: 'Rendy',
            deskripsi: 'Hanya sekedar untuk belajar :)',
            instagram: 'rendycraft047',
            youtube: 'RC047',
            facebook: 'RendyCraft',
            donasi: 'https://saweria.co/RC047'
        }
    })
})

router.post('/post', async (req, res, next) => {
res.send('Your data has been posted!')
console.log(req);
})

module.exports = router

function muptime(seconds) {

var hours = Math.floor(seconds / (60 * 60));
var minutes = Math.floor(seconds % (60 * 60) / 60);
var seconds = Math.floor(seconds % 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function pad(s) {
  return (s < 10 ? '0' : '') + s;
}
