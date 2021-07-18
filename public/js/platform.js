// Note: this script will be automatic deleted

// Window Only
if (!/Mobile|Android|Phone/.test(navigator.userAgent)) {
    var params = '?platform=';
    if (window.location.toString().includes('?')) params = '&platform=';
    window.location += params + 'window';
}

// Mobile Only
if (/Mobile|Android|Phone/.test(navigator.userAgent)) {
    var params = '?platform=';
    if (window.location.toString().includes('?')) params = '&platform=';
    window.location += params + 'mobile';
}
