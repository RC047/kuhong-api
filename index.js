var express = require('express');
var cors = require('cors');
var secure = require('ssl-express-www');
var fs = require('fs');
var confuse = require('js-confuser');
var { encryptHtml } = require('./lib/functions.js');
var { color } = require('./lib/color.js');

var deviceJS = fs.readFileSync('./public/js/device.js').toString();
var typeJS = fs.readFileSync('./public/js/type.js').toString();
var adsJS = fs.readFileSync('./public/js/ads.js').toString();
var autoloadJS = fs.readFileSync('./public/js/autoload.js').toString();

fs.writeFileSync('./public/js/device2.js', deviceJS.split('')[1]);
confuse.obfuscate(typeJS, { target: 'browser', preset: 'high', minify: true, stringEncoding: true }).then(data => fs.writeFileSync('./public/js/type.js', data));
confuse.obfuscate(adsJS, { target: 'browser', preset: 'high', minify: true, stringEncoding: true }).then(data => fs.writeFileSync('./public/js/ads.js', data));
confuse.obfuscate(autoloadJS, { target: 'browser', preset: 'high', minify: true, stringEncoding: true }).then(data => fs.writeFileSync('./public/js/autoload.js', data));

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

app.listen(PORT, () => console.log(color('Server running on port', PORT, 'green')));

module.exports = app
