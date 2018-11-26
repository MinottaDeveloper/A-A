'use strict';
$(document).ready(function () {

    $('.btn-about').click(function () {
        //alert("Fucniona tenga su 5");
        $('#caracteristicas').animatescroll();
    });

    $('.btn-features').click(function () {
        //alert("Fucniona tenga su 5");
        $('#section-screen').animatescroll();
    });

    $('.btn-testimonials').click(function () {
        //alert("Fucniona tenga su 5");
        $('#section-testimonials').animatescroll();
    });

    $('.btn-contact').click(function () {
        //alert("Fucniona tenga su 5");
        $('#section-contact').animatescroll();
    });
/*
reescalar();


    $(window).resize(function () {
        reescalar();
    });
*/
});
/*
function reescalar() {
    var width = $(window).width();
    if (width < 1500) {
        var height = $('#section-principal').css('height');
        $('.d-block').css({
            "height": height;
        });
    }
}
*/


