// CONFIG





//FUNCTION : DONT CHANGE ?

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