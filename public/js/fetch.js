async function fetchURL(url, opts = { method: 'GET', body: null, headers: false }) {
var xhr = new XMLHttpRequest();
xhr.open(opts.method.toUpperCase(), url, false);
if (opts.headers) xhr.setRequestHeader('Content-type', opts.headers);
xhr.send(opts.body);
var data = xhr.responseText;
if (/json/i.test(xhr.getAllResponseHeaders())) data = JSON.parse(xhr.responseText);
var res = {
	status: xhr.status,
	statusText: xhr.statusText,
	headers:{
		requested: opts.headers ? opts.headers : 'default (text/html)',
		userAgent: navigator.userAgent,
		contentLength: xhr.getAllResponseHeaders().split('content-length: ')[1].split('content-type: ')[0],
		contentType: xhr.getAllResponseHeaders().split('content-type: ')[1]
	},
	target: url,
	method: opts.method.toUpperCase(),
	body: opts.body,
	data: data
  }
  console.log(res);
  return res;
}
