$('#icon-left-header').click(function () {
    $('.menu-right').toggle();
    $('.main').toggleClass('main-left-30px');
});

$('.hover-li').hover(function () {
    $(this).toggleClass('bg-red');
});