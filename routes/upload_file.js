__path = process.cwd();

var http = require('http');
var fs = require('fs');
var upload = require(__path + '/lib/upload.js');
var formidable = require('formidable');
var mv = require('mv');

http.createServer(function (req, res) {

    if (req.url === "/upload_result" && req.method === "GET"){
      fs.readFileSync(__path + '/views/upload.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        if (err) throw err;
        res.end(data);
      });
    }

    if (req.url == '/upload_result' && req.method === "POST") {
      var form = new formidable.IncomingForm();

      form.parse(req, function (err, fields, files) {
        var inputPath = files.file_upload.path;
        var outputPath = __path + '/tmp/' + files.file_upload.name;

        mv(inputPath, outputPath, function (err) {
          if (err) { throw err; }
          console.log('File uploaded successfully');
          var upload_files = upload(fs.readFileSync(outputPath))
          return res.json({ result: upload_files })
        });
      });
    } 

  }).listen(8000);

  console.log("Server running on listening http://localhost:8000");
