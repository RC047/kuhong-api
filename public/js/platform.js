// Window Only
if (!/Mobile|Android|Phone/.test(navigator.userAgent)) window.location = window.location + '?platform=window';
// Mobile Only
if (/Mobile|Android|Phone/.test(navigator.userAgent)) window.location = window.location + '?platform=mobile';
