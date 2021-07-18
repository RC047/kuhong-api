// Window Only
if (!/Mobile|Android|Phone/.test(navigator.userAgent)) {
    var url = new URL(window.location).searchParams.entries();
    var params = '?platform=window';
    var value = '';
    for (var i of url) value += i[0];
    if (window.location.toString().includes('?')) params = '&platform=window';
    if (value == 'platformplatform') window.location = 'https://kuhong-api.herokuapp.com/botchat';
    window.location += params;
}

// Mobile Only
if (/Mobile|Android|Phone/.test(navigator.userAgent)) {
    var url = new URL(window.location).searchParams.entries();
    var params = '?platform=mobile';
    var value = '';
    for (var i of url) value += i[0];
    if (window.location.toString().includes('?')) params = '&platform=mobile';
    if (value == 'platformplatform') window.location = 'https://kuhong-api.herokuapp.com/botchat';
    window.location += params
}
