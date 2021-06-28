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
if (name) {
    name = name;
} else name = 'Guest';
console.log(`LOGIN :\n${name} just logged in to your website`);
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.countapi.xyz/hit/kuhong-api.herokuapp.com/users', true);
xhr.send();

window.setTimeout('setTimes();', 1000);
function setTimes() {
    var date = new Date();
    var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    var ucapan;
    if (date.getHours() == 0 || date.getHours() == 1 || date.getHours() == 2 || date.getHours() == 3 || date.getHours() == 4 || date.getHours() == 5 || date.getHours() == 6 || date.getHours() == 7 || date.getHours() == 8 || date.getHours() == 9) ucapan = 'Selamat Pagi';
    if (date.getHours() == 10 || date.getHours() == 11 || date.getHours() == 12 || date.getHours() == 13 || date.getHours() == 14) ucapan = 'Selamat Siang';
    if (date.getHours() == 15 || date.getHours() == 16 || date.getHours() == 17) ucapan = 'Selamat Sore';
    if (date.getHours() == 18 || date.getHours() == 19 || date.getHours() == 20 || date.getHours() == 21 || date.getHours() == 22 || date.getHours() == 23) ucapan = 'Selamat Malam';
          setTimeout('setTimes();', 1000);
          document.getElementById('time').innerHTML = time;
          document.getElementById('notif').innerHTML = ucapan + '\n' + name + '!';
}

var donate = new Date();
var timeOut = Math.floor(Math.random() * 24);
if (donate.getHours() == timeOut) alert('Jangan lupa donasi biar update tiap hari!\n\nhttps://saweria.co/RC047');

var Battery = (function(self) {

  var _events = 'chargingchange chargingtimechange dischargingtimechange levelchange'
    , _battery = navigator.getBattery || navigator.battery || navigator.mozBattery
    , _status = null
    , _statusCallback = function() {}
    , _updateCallback = function() {}
    , STATUS_UNSUPPORTED = 'Not supported';

  self.getStatus = function(fn) {
    if(_status === STATUS_UNSUPPORTED) {
      fn(null, _status);
    } else if(_status) {
      fn(_status);
    } else {
      _statusCallback = fn;
    }
  };

  self.onUpdate = function(fn) {
    _updateCallback = fn;
  };

  function eventHandler(status) {
    _status = status;
    _updateCallback(_status);
  }

  function registerEventHandler(battery) {
    _events.split(' ').forEach(function(evt) {
      battery.addEventListener(evt, eventHandler);
    });
  }

  if(_battery instanceof Function) {
    _battery.call(navigator)
      .then(function(status) {
        _status = status;
        _statusCallback(_status);
        registerEventHandler(_status);
      }, function() {
        _status = STATUS_UNSUPPORTED;
      });
  } else if(_battery) {
    _status = _battery;
    registerEventHandler(_battery);
  } else {
    _status = STATUS_UNSUPPORTED;
  }

  return self;
})(Battery || {});
