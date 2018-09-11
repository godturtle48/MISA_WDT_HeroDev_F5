$('.setting-search').click(function () {
    $('.setting-dialog').toggle(300);
    $('.triangle').slideUp(200);
    $('.catalog-application-catalog').slideUp(200);
});

$('.img-catalog-app').click(function () {
    $('.triangle').slideToggle(200);
    $('.catalog-application-catalog').slideToggle(200);
    $('.setting-dialog').slideUp(200);
});
$('.r-user').click(function () {
    $('.r-user-profile').slideToggle(150);
});

var check = 2;
$('.nav-menu').click(function () {
    if (check % 2 == 0) {
        $('.nav-logo').toggle(1);
        $('.search-box').css('min-width', '390px');
        $('#ip-search').css('width', '80%');
        $('.nav-panel-l-r').css('width', '27.8%');
        $('.catalog-application-catalog').css('left', '24px');
        $('.setting-dialog').css('width', '28.5%');
        $('.nav-menu').css('box-shadow', '7px -2px 36px -5px #003f7f');
    } else {
        $('.nav-logo').toggle(1);
        $('.search-box').css('min-width', '300px');
        $('#ip-search').css('width', '74%');
        $('.nav-panel-l-r').css('width', '20.4%');
        $('.catalog-application-catalog').css('left', '206px');
        $('.setting-dialog').css('width', '22%');
        $('.nav-menu').css('box-shadow', '0 0 0 0');
    }
    check++;
    console.log(check);
});

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

