

$(document).ready(function () {

    jQuery('body').css('overflow', 'hidden');

    $('#linkedin').hover(function () {
        $('.animation-dot .dot').css({
            'animation': 'move-linkedin 1s'
        });


    }, function () {
        $('.animation-dot .dot').css({
            'animation': 'none',

        });
    });

    $('#whatsapp').hover(function () {
        $('.animation-dot .dot').css({
            'animation': 'move-whatsapp 1s '
        });


    }, function () {
        $('.animation-dot .dot').css({
            'animation': 'none '
        });
    });

    $('#gmail').hover(function () {
        $('.animation-dot .dot').css({
            'animation': 'move-gmail 1s '
        });


    }, function () {
        $('.animation-dot .dot').css({
            'animation': 'none '
        });
    });

    $('#cv').hover(function () {
        $('.animation-dot .dot').css({
            'animation': 'move-cv 1s '
        });


    }, function () {
        $('.animation-dot .dot').css({
            'animation': 'none '
        });
    });
});