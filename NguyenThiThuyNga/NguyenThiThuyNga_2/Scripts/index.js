


//Create Tooltip
let setupTooltip = function () {
    let tooltip = "",
        tooltipDiv = document.querySelector(".div-tooltip"),
        tooltipElements = Array.from(document.querySelectorAll(".hover-reveal"));
    let displayTooltip = function (e, obj) {
        tooltip = obj.dataset.tooltip;
        tooltipDiv.innerHTML = tooltip;
        tooltipDiv.style.top = e.pageY + "px";
        tooltipDiv.style.left = e.pageX + "px";
        tooltipDiv.style.opacity = 1;
    }


    tooltipElements.forEach(function (elem) {
        elem.addEventListener("mouseenter", function (e) {
            displayTooltip(e, this);
        })
        elem.addEventListener("mouseleave", function (e) {
            tooltipDiv.style.opacity = 0;
        });
    })
};
setupTooltip();

//Kể từ đây đến hết là phần mới thêm
$("#employee-file-add-button").click(function () {
    $('#employee-file').hide();
    $('#employee-file-add-button-pannel').show();
})

$('.arr-dropdown').click(function () {
    $('.dropdown-content').toggle();
})

function filterFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('input-filter');
    filter = input.value.toUpperCase();
    ul = document.getElementById("contentfilter");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";         
        }
    }
}
$('.contentfilter li').click(function () {
    var input = $(this).attr('value');
    $('.dropdown-content').hide();
    $('.input-filter').val(input);
})
$('.current-status').click(function () {
    $('.right-right-status').toggle();
})
$('.right-right-status li').click(function () {
    var input = $(this).attr('value');
    $('.right-right-status').hide();
    $('.current-status').val(input);

})