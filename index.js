var express = require('express');
var cors = require('cors');
var secure = require('ssl-express-www');
var fs = require('fs');
var confuse = require('js-confuser');
var { encryptHtml } = require('./lib/functions.js');
var { color } = require('./lib/color.js');

var scriptJS = fs.readFileSync('./public/js/script.js').toString();
var botchatJS = fs.readFileSync('./public/js/botchat.js').toString();
var platformJS = fs.readFileSync('./public/js/platform.js').toString();
var typeJS = fs.readFileSync('./public/js/type.js').toString();
var adsJS = fs.readFileSync('./public/js/ads.js').toString();
var autoloadJS = fs.readFileSync('./public/js/autoload.js').toString();

confuse.obfuscate(scriptJS, { target: 'browser', minify: true }).then(data => fs.writeFileSync('./public/js/script.js', data));
confuse.obfuscate(botchatJS, { target: 'browser', minify: true }).then(data => fs.writeFileSync('./public/js/botchat.js', data));
confuse.obfuscate(platformJS.split('// Mobile Only')[1], { target: 'browser', preset: 'high', minify: true, stringEncoding: false }).then(data => fs.writeFileSync('./public/js/window.js', data));
confuse.obfuscate(platformJS.split('// Mobile Only')[0], { target: 'browser', preset: 'high', minify: true, stringEncoding: false }).then(data => fs.writeFileSync('./public/js/mobile.js', data));
confuse.obfuscate(typeJS, { target: 'browser', preset: 'high', minify: true, stringEncoding: true }).then(data => fs.writeFileSync('./public/js/type.js', data));
confuse.obfuscate(adsJS, { target: 'browser', preset: 'high', minify: true, stringEncoding: true }).then(data => fs.writeFileSync('./public/js/ads.js', data));
confuse.obfuscate(autoloadJS, { target: 'browser', preset: 'high', minify: true, stringEncoding: true }).then(data => fs.writeFileSync('./public/js/autoload.js', data));
fs.rmSync('./public/js/platform.js');

var PORT = process.env.PORT || 8000 || 5000 || 3000;
var mainrouter = require('./routes/main.js'),
    apirouter = require('./routes/api.js');

var app = express();
app.enable('trust proxy');
app.set('json spaces', 2);
app.use(cors());
app.use(secure);
app.use(express.static('public'));

app.use('/', mainrouter);
app.use('/api', apirouter);
app.use(async (req, res, next) => {
   var notfound = await fs.readFileSync(__path + '/views/404.html').toString();
   res.status(404);
   res.send(await encryptHtml(notfound));
});

app.listen(PORT, () => console.log(color('Server running on port ' + PORT, 'green')));

module.exports = app
