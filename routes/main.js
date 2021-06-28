__path = process.cwd();

var { performance } = require('perf_hooks');
var osu = require('node-os-utils');
var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
var blocked = ['180.249.133.59'];

router.get('/', async (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', async (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    res.sendFile(__path + '/views/loading.html')
})

router.get('/docs', async (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    res.sendFile(__path + '/views/index.html')
})

router.get('/api/game/pingpong', async  (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    res.sendFile(__path + '/views/pingpong.html')
})

router.get('/api/game/tebakangka', async (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    res.sendFile(__path + '/views/tebakangka.html')
})

router.get('/api/game/suitjawa', async (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    res.sendFile(__path + '/views/suitjawa.html')
})

router.get('/api/game/tetris', async (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    res.sendFile(__path + '/views/tetris.html')
})

router.get('/api/game/dino', async (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    res.sendFile(__path + '/views/dino.html')
})

router.get('/api/tutorial', async (req, res) => {
var visits = await (await fetch('https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/visits')).json()
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })
    res.sendFile(__path + '/views/tutorial.html')
})

router.get('/api/status', async (req, res, next) => {  

var date = new Date()
var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
var NotDetect = 'Not Detected'
var cpu = osu.cpu
var cpuCore = cpu.count()
var drive = osu.drive
var mem = osu.mem
var netstat = osu.netstat
var OS = osu.os.platform()
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
var port_used = process.env.PORT || 8080 || 5000 || 3000
var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (blocked.indexOf(ip) > -1) return res.json({ message: 'Kamu telah diblokir oleh Owner!' })

res.json({
    stats:{
        status: 'Online',
        name: 'kuhong-api',
        os: OS.toUpperCase(),
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
        ping_sec: Math.round(neww - old) + ' sec'
    },
        total:{
            users: user.value.toString(),
            requests: request.value.toString(),
            visitors: visitor.value.toString(),
            stars: star.value.toString(),
            features: '339',
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
