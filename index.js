var express = require('express');
var formidable = require('express-formidable');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var secure = require('ssl-express-www');
var fs = require('fs');
var { encryptHtml, encryptScript } = require('./lib/functions.js');
var { color } = require('./lib/color.js');

var scriptJS = encryptScript(fs.readFileSync('./public/js/script.js'));
var botchatJS = encryptScript(fs.readFileSync('./public/js/botchat.js'));
var typeJS = encryptScript(fs.readFileSync('./public/js/type.js'));
var adsJS = encryptScript(fs.readFileSync('./public/js/ads.js'));
var autoloadJS = encryptScript(fs.readFileSync('./public/js/autoload.js'));
var fetchJS = encryptScript(fs.readFileSync('./public/js/fetch.js'));
fs.writeFileSync('./public/js/script.js', scriptJS.toString());
fs.writeFileSync('./public/js/botchat.js', botchatJS.toString());
fs.writeFileSync('./public/js/type.js', typeJS.toString());
fs.writeFileSync('./public/js/ads.js', adsJS.toString());
fs.writeFileSync('./public/js/autoload.js', autoloadJS.toString());
fs.writeFileSync('./public/js/fetch.js', fetchJS.toString());

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
