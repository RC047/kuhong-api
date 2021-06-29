// Ads provided by Me, not by Google :v

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

if (name == 'CraftCoding') throw false;

var listAds = [
'Dijual SC Bot WhatsApp 400+ fitur dengan harga 50K! url:https://wa.me/62895337278647?text=Min+saya+minat+mau+beli+sc+bot+wa',
'Jangan lupa donasi biar update tiap hari! url:https://saweria.co/RC047',
'Jangan lupa subscribe channel Owner! url:https://youtube.com/c/RC047',
'Dapatkan iPhone 7 secara gratis hanya dengan mengisi survey! url:https://biz-create.com/asia/cp1707',
'Mau dapet iPhone 11 gratis? Begini caranya! url:https://inet.detik.com/consumer/d-5251992/mau-dapat-iphone-11-gratis-begini-caranya',
'Nama domain .COM yang tepat bisa membantu menentukan identitas digitalmu! url:https://siapnge.com/maksimalkan-bisnis?utm_source=google&utm_medium=banner&utm_campaign=gdn_phase_6_website&utm_content=website_topic&utm_term=Website_Photo_Responsive_Ad_6&gclid=Cj0KCQjw5uWGBhCTARIsAL70sLKEDZEqGjHiajqH5E7ma1BYs_c533IhSu_-wunFzz2A0T6vew1dxVwaAqooEALw_wcB',
'Proses perangkat Anda terasa lambat?\nAyoo buruan download Nox Cleaner sekarang! url:https://play.google.com/store/apps/details?id=com.noxgroup.app.cleaner',
'Ayoo jangan lewatkan Shopee Flazh Sale! url:https://shopee.co.id/flash_sale',
'Belanja online? Tokopedia selalu ada selalu bisa! url:https://play.google.com/store/apps/details?id=com.tokopedia.tkpd',
'FT SILLENT KILLER\nCEPET DAFTAR NGAB KEBURU FULL\n\n🥇15k🥈10k 🥉10k\nFEE 5K || 3 MATCH\n\nSkuy lah ngab -6slot Gc lah🙃 url:https://wa.me/6287780169340?text=Min+Daftar+Ft+5k'
]

var ads = pickRandom(listAds);
var time = new Date();
var timeUp = Math.floor(Math.random() * 60);
if (time.getMinutes() == timeUp) {
    delay(3000);
    var ok = alert('IKLAN :\n\n' + ads.split(' url:')[0]);
    if (ok) window.location = ads.split('url:')[1];
}
