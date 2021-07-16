// Window Only
if (!/Mobile|Android|Phone/.test(navigator.userAgent)) window.location = 'https://kuhong-api.herokuapp.com/botchat?v2=true';

// Mobile Only
if (/Mobile|Android|Phone/.test(navigator.userAgent)) window.location = 'https://kuhong-api.herokuapp.com/botchat';
