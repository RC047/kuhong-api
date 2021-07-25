function actionLogin() {

setTimeout(() => document.querySelector("a").innerHTML = 'Success!', 2000);
setTimeout(() => {
var login = true;
var name = null;
var param = new URL(window.location).searchParams;
var location = param.get('location');
if (!location) return window.location = 'about:blank';

while (login) {
name = prompt(`
LOGIN REQUIRED :

*Silahkan masukan nama disini untuk melanjutkan :
`.trim());

if (name == null) alert('Login dibutuhkan!');
else if (name == '') alert('Nama tidak bisa kosong!');
else if (name !== '') alert('Selamat Datang ' + name), login = false;
}

fetchURI('https://kuhong-api.herokuapp.com/api/login', {
     method: 'POST',
     headers: 'application/x-www-form-urlencoded',
     body: 'name=' + name
});

if (!login) return window.location = 'https://kuhong-api.herokuapp.com/' + location;
}, 3000)}
