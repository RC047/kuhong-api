function login(href) {

var login = true;
var name = null;
if (!href) return document.write('Internal Server Error (503)');

while (login) {
name = prompt(`
LOGIN REQUIRED :

*Silahkan masukan nama disini untuk melanjutkan :
`.trim());

if (name == null) alert('Login dibutuhkan!');
else if (name == '') alert('Nama tidak bisa kosong!');
else if (name !== '') login = false;
}

fetchURI('https://kuhong-api.herokuapp.com/api/login', {
     method: 'POST',
     headers: 'application/x-www-form-urlencoded',
     body: 'name=' + name
});

if (login == false) return window.location = 'https://kuhong-api.herokuapp.com/' + href;
}
