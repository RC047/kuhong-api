// Platform detector
if (!/Mobile|Android|Phone/i.test(navigator.userAgent)) {
    var url = new URL(window.location).searchParams.entries();
    var params = '?platform=window';
    var value = '';
    for (var i of url) value += i[0];
    if (window.location.toString().includes('?')) params = '&platform=window';
    if (!/platform/i.test(value)) window.location += params;

} else if (!/Window|Mac|PC/i.test(navigator.userAgent)) {
    var url = new URL(window.location).searchParams.entries();
    var params = '?platform=mobile';
    var value = '';
    for (var i of url) value += i[0];
    if (window.location.toString().includes('?')) params = '&platform=mobile';
    if (!/platform/i.test(value)) window.location += params;
}
