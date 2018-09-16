
$('#table-info-all-employees2').scroll(function () {
    $('#table-info-all-employees1').scrollTop($('#table-info-all-employees2').scrollTop());
});
$('#table-info-all-employees2').scroll(function () {
    $('#table-info-all-employees21').scrollLeft($('#table-info-all-employees2').scrollLeft());
});
$('#employee-info-table-all-button-control').click(function () {
    if ($('#employee-general-info').css('display') === 'none') {
        $('#employee-general-info').show();
        $('#table-info-all-employees').css('height', '266px');
        $('#employee-info-table-all-button-control').removeClass('employee-info-table-all-button2');
        $('#employee-info-table-all-button-control').addClass('employee-info-table-all-button');
        $('#table-info-all-employees20').css('bottom', '239px');
        $('#employee-info-table-footer').css('bottom', '238px');
        $('#table-info-all-employees2').css('height', '168px');
    }
    else{
        $('#employee-general-info').hide();
        $('#table-info-all-employees').css('height', '516px');
        $('#employee-info-table-all-button-control').addClass('employee-info-table-all-button2');
        $('#employee-info-table-all-button-control').removeClass('employee-info-table-all-button');
        $('#table-info-all-employees20').css('bottom', '489px');
        $('#employee-info-table-footer').css('bottom', '490px');
        $('#table-info-all-employees2').css('height', '419px');
    }
});
$('#show-info-toolbar-icon').click(function () {
    if ($('#show-info-toolbar-detail').css('display') === 'none') {
        $('#show-info-toolbar-detail').show(300, "swing");

    }
    else {
        $('#show-info-toolbar-detail').hide(300);

    }
});


$('#setting-toolbar-info-detail-icon').click(function () {
    if ($('#setting-toolbar-info-detail-content').css('display') === 'none') {
        $('#setting-toolbar-info-detail-content').show();

    }
    else {
        $('#setting-toolbar-info-detail-content').hide();

    }
});
$('#setting-toolbar-info-BT3').click(function () {
    $('#setting-toolbar-info-detail-content').hide();
});
$('#setting-toolbar-info-detail-closeBt').click(function () {
    $('#setting-toolbar-info-detail-content').hide();
});
$('.employee-info-toolbar-item').each(function (item, index) {
    $(this).click(function () {
        $('.employee-info-toolbar-item').each(function (item, index) {
            $(this).css('border', '0px');
            $(this).css('color', 'black');
        });
        $(this).css('border-bottom', '3px solid #238DE6');
        $(this).css('color', '#238DE6');
        $('#employee-info-img').hide();
        $('#employee-info-maint-content').hide();
        if ($(this).attr('id') === 'employee-info-toolbar-item1') {
            $('#employee-info-img').show();
            $('#employee-info-maint-content').show();
        }
    });
});
$('.employee-info-select-ion').each(function (item, index) {
    $(this).click(function () {
        if ($(this).next().css('display') === 'none') {
            $(this).next().show();
        }
        else{
            $(this).next().hide();
        }
    });
});