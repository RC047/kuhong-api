__path = process.cwd();

var upload = require(__path + '/lib/upload.js')
var express = require('express');
var router = express.Router();

router.get('/getbase64url', async (req, res, next) => {
var base64 = 'BASE64_DATA_STRING';
if (base64.includes(',')) base64 = base64.split(',')[1];
var url = await upload(Buffer.from(base64, 'base64');

  return res.json({ url: url });
});

module.exports = router
