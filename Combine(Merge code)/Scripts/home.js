
var check = 2;
$('#icon-left-header').click(function () {
    $('.menu-right').slideToggle();
    $('.main').toggleClass('main-left-30px');
    $('.menu-li, .menu-li-ul-li').removeAttr('style');
    $('.menu-li-dropdown').filter('[status=show]').next().hide();
    $('.menu-li-dropdown').filter('[status=show]').removeAttr('status');

    if (check%2 == 0) {
        $('.search-box').css('min-width','390px');
        $('#ip-search').css('width','80%');
        $('.nav-panel-l-r').css('width','29.2%');
        $('.setting-dialog').css('width','29.2%');
        $('.nav-menu').css('box-shadow','7px -2px 36px -5px #003f7f');
    }else{
        $('.search-box').css('min-width','305px');
        $('#ip-search').css('width','74%');
        $('.nav-panel-l-r').css('width','24.2%');
        $('.setting-dialog').css('width','26.6%');
        $('.nav-menu').css('box-shadow','0 0 0 0');

    }
    check++;
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

$('#desk-item').click(function () {
    $('.building-alert').show();
})

$('#contact-item').click(function () {
    $('.building-alert').show();
})

$('#fast-report-item').click(function () {
    $('.building-alert').show();
})

$('#garbage-item').click(function () {
    $('.building-alert').show();
})

$('#email-history-item').click(function () {
    $('.building-alert').show();
})

$('#desk-item').click(function () {
    $('.building-alert').show();
})

$('#desk-item').click(function () {
    $('.building-alert').show();
})

$('#desk-item').click(function () {
    $('.building-alert').show();
})

$('#desk-item').click(function () {
    $('.building-alert').show();
})

$('#desk-item').click(function () {
    $('.building-alert').show();
})

$('#desk-item').click(function () {
    $('.building-alert').show();
})

$('#desk-item').click(function () {
    $('.building-alert').show();
})

// toggle-menu
$('.time-management').click(function () {
    $('.time-management-sub-menu').slideToggle();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.time-sheet').click(function () {
    $('.time-sheet-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.salary').click(function () {
    $('.salary-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.tax').click(function () {
    $('.tax-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.insure').click(function () {
    $('.insure-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.recruit').click(function () {
    $('.recruit-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.training').click(function () {
    $('.training-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.report').click(function () {
    $('.report-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.list-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.list').click(function () {
    $('.list-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.system-sub-menu').hide();
})

$('.system').click(function () {
    $('.system-sub-menu').slideToggle();
    $('.time-management-sub-menu').hide();
    $('.time-sheet-sub-menu').hide();
    $('.salary-sub-menu').hide();
    $('.tax-sub-menu').hide();
    $('.insure-sub-menu').hide();
    $('.recruit-sub-menu').hide();
    $('.training-sub-menu').hide();
    $('.report-sub-menu').hide();
    $('.list-sub-menu').hide();
})