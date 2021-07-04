var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www'),
    fs = require('fs');

const port = process.env.PORT || 8080 || 5000 || 3000
var { encryptHtml } = require('./lib/functions.js');
var { color } = require('./lib/color.js');

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
app.use((req, res, next) => {
   var notfound = fs.readFileSync(__path + '/views/404.html').toString();
   res.status(404);
   res.send(encryptHtml(notfound));
});

app.listen(port, () => {
    console.log(color('Server running on port ' + port, 'green'));
});

module.exports = app
