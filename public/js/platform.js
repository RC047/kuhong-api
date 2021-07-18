// Window Only
if (!/Mobile|Android|Phone/.test(navigator.userAgent)) {
    var link = window.location;
    var params = '?platform=';
    if (link.includes('?')) params = '&platform=';
    link += params + 'window';
}

// Mobile Only
if (/Mobile|Android|Phone/.test(navigator.userAgent)) {
    var link = window.location;
    var params = '?platform=';
    if (link.includes('?')) params = '&platform=';
    link += params + 'mobile';
}
