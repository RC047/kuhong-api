function fetchURI(url, opts = { method: 'GET', headers: false, responseType: false, body: null, username: false, password: false }) {

if (!url) return err('param cant be blank');
if (!/^http(s)?:\/\/(\w+:?\w*@)?(\S+)(:\d+)?((?<=\.)\w+)+(\/([\w#!:.?+=&%@!\-/])*)?/gi.test(url)) return err('Only absolute URLs are supported');

try {
if (url) {
var xhr = new XMLHttpRequest();
if (opts.username && opts.password) xhr.open(opts.method.toUpperCase(), url, false, opts.username, opts.password);
else xhr.open(opts.method.toUpperCase(), url, false);
if (opts.headers) xhr.setRequestHeader('Content-type', opts.headers);
if (opts.responseType) xhr.responseType = opts.responseType;
xhr.send(opts.body);
var data = opts.responseType ? xhr.response : xhr.responseText;
if (/json/i.test(xhr.getAllResponseHeaders())) data = JSON.parse(data);
} catch (e) {
    err(e);
} finally {
    return {
	  status: xhr.status,
	  statusText: xhr.statusText,
	  headers:{
	       	  requested: opts.headers ? opts.headers : 'default (text/html)',
		  userAgent: navigator.userAgent,
		  contentLength: xhr.getAllResponseHeaders().split('content-length: ')[1].split('content-type: ')[0],
		  contentType: xhr.getAllResponseHeaders().split('content-type: ')[1].split(';')[0]
	  },
	  target: url,
	  method: opts.method.toUpperCase(),
	  body: opts.body,
	  data: data
      }
    }
  }
}

function err(logs) {
  return console.error('FetchError: ' + logs);
}

fetchURI.toString = function() {
  return 'function fetchURI() { [native code] }';
}
