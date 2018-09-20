
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
        $('#table-info-all-employees20').css('bottom', '241px');
        $('#employee-info-table-footer').css('bottom', '241px');
        $('#table-info-all-employees2').css('height', '173px');
    }
    else{
        $('#employee-general-info').hide();
        $('#table-info-all-employees').css('height', '516px');
        $('#employee-info-table-all-button-control').addClass('employee-info-table-all-button2');
        $('#employee-info-table-all-button-control').removeClass('employee-info-table-all-button');
        $('#table-info-all-employees20').css('bottom', '491px');
        $('#employee-info-table-footer').css('bottom', '491px');
        $('#table-info-all-employees2').css('height', '424px');
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
            $(this).removeClass('employee-info-toolbar-item-onselect');
        });
        $(this).addClass('employee-info-toolbar-item-onselect');
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
$('#table-info-all-employees1-line1').hover(function () {
    $('#table-info-all-employees2-line1').css('background','#E7F4FF');
    $('#table-info-all-employees1-line1').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line1').css('background','white');
    $('#table-info-all-employees1-line1').css('background','white');
}
);
$('#table-info-all-employees2-line1').hover(function () {
    $('#table-info-all-employees2-line1').css('background','#E7F4FF');
    $('#table-info-all-employees1-line1').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line1').css('background','white');
    $('#table-info-all-employees1-line1').css('background','white');
}
);
$('#table-info-all-employees1-line2').hover(function () {
    $('#table-info-all-employees2-line2').css('background','#E7F4FF');
    $('#table-info-all-employees1-line2').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line2').css('background','#F0F0F0');
    $('#table-info-all-employees1-line2').css('background','#F0F0F0');
}
);
$('#table-info-all-employees2-line2').hover(function () {
    $('#table-info-all-employees2-line2').css('background','#E7F4FF');
    $('#table-info-all-employees1-line2').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line2').css('background','#F0F0F0');
    $('#table-info-all-employees1-line2').css('background','#F0F0F0');
}
);
$('#table-info-all-employees1-line3').hover(function () {
    $('#table-info-all-employees2-line3').css('background','#E7F4FF');
    $('#table-info-all-employees1-line3').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line3').css('background','white');
    $('#table-info-all-employees1-line3').css('background','white');
}
);
$('#table-info-all-employees2-line3').hover(function () {
    $('#table-info-all-employees2-line3').css('background','#E7F4FF');
    $('#table-info-all-employees1-line3').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line3').css('background','white');
    $('#table-info-all-employees1-line3').css('background','white');
}
);
$('#table-info-all-employees1-line4').hover(function () {
    $('#table-info-all-employees2-line4').css('background','#E7F4FF');
    $('#table-info-all-employees1-line4').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line4').css('background','#F0F0F0');
    $('#table-info-all-employees1-line4').css('background','#F0F0F0');
}
);
$('#table-info-all-employees2-line4').hover(function () {
    $('#table-info-all-employees2-line4').css('background','#E7F4FF');
    $('#table-info-all-employees1-line4').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line4').css('background','#F0F0F0');
    $('#table-info-all-employees1-line4').css('background','#F0F0F0');
}
);
$('#table-info-all-employees1-line5').hover(function () {
    $('#table-info-all-employees2-line5').css('background','#E7F4FF');
    $('#table-info-all-employees1-line5').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line5').css('background','white');
    $('#table-info-all-employees1-line5').css('background','white');
}
);
$('#table-info-all-employees2-line5').hover(function () {
    $('#table-info-all-employees2-line5').css('background','#E7F4FF');
    $('#table-info-all-employees1-line5').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line5').css('background','white');
    $('#table-info-all-employees1-line5').css('background','white');
}
);
$('#table-info-all-employees1-line6').hover(function () {
    $('#table-info-all-employees2-line6').css('background','#E7F4FF');
    $('#table-info-all-employees1-line6').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line6').css('background','#F0F0F0');
    $('#table-info-all-employees1-line6').css('background','#F0F0F0');
}
);
$('#table-info-all-employees2-line6').hover(function () {
    $('#table-info-all-employees2-line6').css('background','#E7F4FF');
    $('#table-info-all-employees1-line6').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line6').css('background','#F0F0F0');
    $('#table-info-all-employees1-line6').css('background','#F0F0F0');
}
);
$('#table-info-all-employees1-line7').hover(function () {
    $('#table-info-all-employees2-line7').css('background','#E7F4FF');
    $('#table-info-all-employees1-line7').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line7').css('background','white');
    $('#table-info-all-employees1-line7').css('background','white');
}
);
$('#table-info-all-employees2-line7').hover(function () {
    $('#table-info-all-employees2-line7').css('background','#E7F4FF');
    $('#table-info-all-employees1-line7').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line7').css('background','white');
    $('#table-info-all-employees1-line7').css('background','white');
}
);
$('#table-info-all-employees1-line8').hover(function () {
    $('#table-info-all-employees2-line8').css('background','#E7F4FF');
    $('#table-info-all-employees1-line8').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line8').css('background','#F0F0F0');
    $('#table-info-all-employees1-line8').css('background','#F0F0F0');
}
);
$('#table-info-all-employees2-line8').hover(function () {
    $('#table-info-all-employees2-line8').css('background','#E7F4FF');
    $('#table-info-all-employees1-line8').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line8').css('background','#F0F0F0');
    $('#table-info-all-employees1-line8').css('background','#F0F0F0');
}
);
$('#table-info-all-employees1-line9').hover(function () {
    $('#table-info-all-employees2-line9').css('background','#E7F4FF');
    $('#table-info-all-employees1-line9').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line9').css('background','white');
    $('#table-info-all-employees1-line9').css('background','white');
}
);
$('#table-info-all-employees2-line9').hover(function () {
    $('#table-info-all-employees2-line9').css('background','#E7F4FF');
    $('#table-info-all-employees1-line9').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line9').css('background','white');
    $('#table-info-all-employees1-line9').css('background','white');
}
);
$('#table-info-all-employees1-line10').hover(function () {
    $('#table-info-all-employees2-line10').css('background','#E7F4FF');
    $('#table-info-all-employees1-line10').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line10').css('background','#F0F0F0');
    $('#table-info-all-employees1-line2').css('background','#F0F0F0');
}
);
$('#table-info-all-employees2-line10').hover(function () {
    $('#table-info-all-employees2-line10').css('background','#E7F4FF');
    $('#table-info-all-employees1-line10').css('background','#E7F4FF');
    },function () {
    $('#table-info-all-employees2-line10').css('background','#F0F0F0');
    $('#table-info-all-employees1-line10').css('background','#F0F0F0');
}
);
