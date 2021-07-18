// Window Only
if (!/Mobile|Android|Phone/.test(navigator.userAgent)) {
    var url = new URL(window.location).searchParams.entries();
    var params = '?platform=window';
    var value = '';
    for (var i of url) value += i[0];
    if (window.location.toString().includes('?')) params = '&platform=window';
    window.location += params;
}

// Mobile Only
if (!/Window|Mac|PC/.test(navigator.userAgent)) {
    var url = new URL(window.location).searchParams.entries();
    var params = '?platform=mobile';
    var value = '';
    for (var i of url) value += i[0];
    if (window.location.toString().includes('?')) params = '&platform=mobile';
    window.location += params;
}
