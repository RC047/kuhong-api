var express = require('express');
var formidable = require('express-formidable');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var secure = require('ssl-express-www');
var fs = require('fs');
var { encryptHtml, encryptScript } = require('./lib/functions.js');
var { color } = require('./lib/color.js');

var scriptJS = fs.readFileSync('./public/js/script.js').toString();
var botchatJS = fs.readFileSync('./public/js/botchat.js').toString();
var typeJS = fs.readFileSync('./public/js/type.js').toString();
var adsJS = fs.readFileSync('./public/js/ads.js').toString();
var autoloadJS = fs.readFileSync('./public/js/autoload.js').toString();
var fetchJS = fs.readFileSync('./public/js/fetch.js').toString();
encryptScript(scriptJS).then(data => fs.writeFileSync('./public/js/script.js', data));
encryptScript(botchatJS).then(data => fs.writeFileSync('./public/js/botchat.js', data));
encryptScript(typeJS).then(data => fs.writeFileSync('./public/js/type.js', data));
encryptScript(adsJS).then(data => fs.writeFileSync('./public/js/ads.js', data));
encryptScript(autoloadJS).then(data => fs.writeFileSync('./public/js/autoload.js', data));
encryptScript(fetchJS).then(data => fs.writeFileSync('./public/js/fetch.js', data));

var PORT = process.env.PORT || 8000 || 5000 || 3000;
var mainrouter = require('./routes/main.js'),
    apirouter = require('./routes/api.js');

app.enable('trust proxy');
app.set('json spaces', 2);
app.use(cors());
app.use(secure);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ parameterLimit: 100000, limit: '10mb', extended: true }));
app.use(formidable({ encoding: 'utf-8', uploadDir: '/tmp/', multiples: true }));

app.use('/', mainrouter);
app.use('/api', apirouter);
app.use(async (req, res, next) => {
   var notfound = await fs.readFileSync(__path + '/views/404.html').toString();
   res.status(404).send(await encryptHtml(notfound));
});

app.listen(PORT, async() => console.log(color('Server running on port ' + PORT, 'green')));

module.exports = app
