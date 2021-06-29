$(document).ready(function() {

    $('.sub-btn').click(function() {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    $('.menu-btn').click(function() {
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function() {
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
    });
});

var name = prompt(`
LOGIN REQUIRED :

Silahkan masukan namamu untuk identitas diwebsite ini :)
`.trim(), 'Guest');
if (name !== '') {
console.log(`LOGIN :\n${name} just logged in to your website`);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/users', true);
xhr.send();
}

window.setTimeout('setTimes();', 1000);
function setTimes() {

    var xhr = new XMLHttpRequest();
    var url = 'https://kuhong-api.herokuapp.com/api/login?name=' + name;
    var date = new Date();
    var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    var ucapan;
    if (date.getHours() == 0 || date.getHours() == 1 || date.getHours() == 2 || date.getHours() == 3 || date.getHours() == 4 || date.getHours() == 5 || date.getHours() == 6 || date.getHours() == 7 || date.getHours() == 8 || date.getHours() == 9) ucapan = 'Selamat Pagi';
    if (date.getHours() == 10 || date.getHours() == 11 || date.getHours() == 12 || date.getHours() == 13 || date.getHours() == 14) ucapan = 'Selamat Siang';
    if (date.getHours() == 15 || date.getHours() == 16 || date.getHours() == 17) ucapan = 'Selamat Sore';
    if (date.getHours() == 18 || date.getHours() == 19 || date.getHours() == 20 || date.getHours() == 21 || date.getHours() == 22 || date.getHours() == 23) ucapan = 'Selamat Malam';
    xhr.onloadend = function() {
    var json = JSON.parse(this.responeText);
    var notif = ucapan + '\n' + json.name + '!';
          setTimeout('setTimes();', 1000);
          document.getElementById('time').innerHTML = time;
          document.getElementById('notif').innerHTML = notif;

    }

xhr.open('GET', url, true);
xhr.send();
}
