$('#icon-left-header').click(function () {
    $('.menu-right').toggle();
    $('.main').toggleClass('main-left-30px');
    $('.menu-li, .menu-li-ul-li').removeAttr('style');
    $('.menu-li-dropdown').filter('[status=show]').next().hide();
    $('.menu-li-dropdown').filter('[status=show]').removeAttr('status');
});

// Thay đổi backgroup khi click vào 1 menu trong list menu bên trái
$('.menu-li, .menu-li-ul-li').click(function () {
    $('.menu-li, .menu-li-ul-li').removeAttr('style');
    $(this).css("background-color", "#EDA235");
});

$('.menu-left').click(function () {
    $('.menu-right').show();
    $('.main').removeClass('main-left-30px');
}); 

$('.menu-li-dropdown').click(function () {
    if ($(this).attr('status') !== 'show') {
        $('.menu-li-dropdown').filter('[status=show]').find('span').removeClass("icon-menu-dropup");
        $('.menu-li-dropdown').filter('[status=show]').find('span').addClass("icon-menu-dropdown");
        $('.menu-li-dropdown').filter('[status=show]').next().stop().slideUp(300);
        $('.menu-li-dropdown').filter('[status=show]').removeAttr('status');
        $(this).next().stop().slideDown(300);
        $(this).attr('status', 'show');
        $(this).find('span').removeClass("icon-menu-dropdown");
        $(this).find('span').addClass("icon-menu-dropup");
        debugger;
    } else {
        $(this).next().stop().slideUp(300);
        $(this).removeAttr('status');
        $(this).find('span').removeClass("icon-menu-dropup");
        $(this).find('span').addClass("icon-menu-dropdown");
    }
});

