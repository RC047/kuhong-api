__path = process.cwd();

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var secure = require('ssl-express-www');
var fs = require('fs');
var { obfuscate } = require('js-confuser');
var { encryptHtml, encryptScript } = require('./lib/functions.js');
var { color } = require('./lib/color.js');

obfuscate(fs.readFileSync('./public/js/script.js').toString(), { target: 'browser', minify: true }).then(data => fs.writeFileSync('./public/js/script.js', data));
obfuscate(fs.readFileSync('./public/js/botchat.js').toString(), { target: 'browser', minify: true }).then(data => fs.writeFileSync('./public/js/botchat.js', data));
obfuscate(fs.readFileSync('./public/js/type.js').toString(), { target: 'browser', preset: 'high', minify: true, stringEncoding: true }).then(data => fs.writeFileSync('./public/js/type.js', data));
obfuscate(fs.readFileSync('./public/js/ads.js').toString(), { target: 'browser', preset: 'high', minify: true, stringEncoding: true }).then(data => fs.writeFileSync('./public/js/ads.js', data));
obfuscate(fs.readFileSync('./public/js/autoload.js').toString(), { target: 'browser', preset: 'high', minify: true, stringEncoding: true }).then(data => fs.writeFileSync('./public/js/autoload.js', data));
obfuscate(fs.readFileSync('./public/js/fetch.js').toString(), { target: 'browser', minify: true }).then(data => fs.writeFileSync('./public/js/fetch.js', data));
encryptScript(fs.readFileSync('./public/js/script.js').toString());
encryptScript(fs.readFileSync('./public/js/botchat.js').toString());

var PORT = process.env.PORT || 8000 || 5000 || 3000,
    mainrouter = require('./routes/main.js'),
    apirouter = require('./routes/api.js');

app.enable('trust proxy');
app.set('json spaces', 2);
app.use(cors());
app.use(secure);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ parameterLimit: 100000, limit: '10mb', extended: true }));
app.use('/', mainrouter);
app.use('/api', apirouter);
app.use(async (req, res, next) => {
var notfound = await fs.readFileSync(__path + '/views/404.html').toString();
  res.status(404).send(await encryptHtml(notfound));
});

app.listen(PORT, async() => console.log(color('Server running on port ' + PORT, 'green')));


module.exports = app
