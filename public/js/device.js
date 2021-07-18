// Window Only
if (!/Mobile|Android|Phone/.test(navigator.userAgent)) window.location = 'https://kuhong-api.herokuapp.com/botchat?platform=window';

// Mobile Only
if (/Mobile|Android|Phone/.test(navigator.userAgent)) window.location = 'https://kuhong-api.herokuapp.com/botchat?platform=android';
