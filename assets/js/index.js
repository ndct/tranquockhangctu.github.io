// CONFIG

var URL_BANNER_1 = '#';
var URL_BANNER_2 = '#';
var URL_BANNER_3 = '#';

var URL_KHAM_PHA_NGAY = '#';
var URL_CH_PLAY = '#';
var URL_APPLE_STORE = '#';

var URL_SERVICE_BEGIN = '#';
var URL_SERVICE_STANDARD = '#';
var URL_SERVICE_SILVER = '#';
var URL_SERVICE_GOLD = '#';

var URL_FACEBOOK = '#';
var URL_YOUTUBE = '#';
var URL_INSTAGRAM = '#';

//FUNCTION : DONT CHANGE ?

$('.banner-images-1').click(() => {
    gotoURL(URL_BANNER_1);
});

$('.banner-images-2').click(() => {
    gotoURL(URL_BANNER_2);
});

$('.banner-images-3').click(() => {
    gotoURL(URL_BANNER_3);
});

$('.btn-khamphangay').click(() => {
    gotoURL(URL_KHAM_PHA_NGAY);
});

$('.android-download').click(() => {
    gotoURL(URL_CH_PLAY);
});

$('.apple-download').click(() => {
    gotoURL(URL_APPLE_STORE);
});

$('.btn-gold').click(() => {
    gotoURL(URL_SERVICE_GOLD);
});

$('.btn-silver').click(() => {
    gotoURL(URL_SERVICE_SILVER);
});

$('.btn-standard').click(() => {
    gotoURL(URL_SERVICE_STANDARD);
});

function gotoURL(s) {
    if (s != '#') {
        window.location.href = s;
    } else {
        console.log(`Dont change URL ...`);
    }
}

$('.navbar-brand').click(() => {
    window.location.href = 'index.html';
});

$('.gioi-thieu').click(() => {
    scrollToId('carplus_about');
});

$('.tinh-nang').click(() => {
    scrollToId('carplus_tinhnang');
});

$('.dich-vu').click(() => {
    scrollToId('carplus_dichvu');
});

$('.doi-tac').click(() => {
    scrollToId('carplus_doitac');
});

$('.tai-xuong-app').click(() => {
    scrollToId('carplus_download');
});

$('.carousel').carousel();

function scrollToId(id) {
    $('html, body').animate({
        scrollTop: $(`#${id}`).offset().top
    }, 1000)
}