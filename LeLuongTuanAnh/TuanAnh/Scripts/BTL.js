$('#show-info-toolbar-icon').click(function () {
    if ($('#show-info-toolbar-detail').css('display') == 'none') {
        $('#show-info-toolbar-detail').show(300,"swing");
        
    }
    else {
        $('#show-info-toolbar-detail').hide(300);
        
    }
})
$('#setting-toolbar-info-detail-icon').click(function () {
    if ($('#setting-toolbar-info-detail-content').css('display') == 'none') {
        $('#setting-toolbar-info-detail-content').show();

    }
    else {
        $('#setting-toolbar-info-detail-content').hide();

    }
})
$('#setting-toolbar-info-BT3').click(function () {    
        $('#setting-toolbar-info-detail-content').hide();
})
$('#setting-toolbar-info-detail-closeBt').click(function () {
    $('#setting-toolbar-info-detail-content').hide();
})