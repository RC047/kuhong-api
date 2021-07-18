// Window Only
if (!/Mobile|Android|Phone/.test(navigator.userAgent)) {
    var params = '?platform=';
    if (location.includes('?')) params = '&platform=';
    window.location += params + 'window';
}

// Mobile Only
if (!/Mobile|Android|Phone/.test(navigator.userAgent)) {
    var params = '?platform=';
    if (location.includes('?')) params = '&platform=';
    window.location += params + 'mobile';
}
