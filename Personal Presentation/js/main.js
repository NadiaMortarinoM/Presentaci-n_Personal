$(document).ready(function () { //Accede al documento cuando esta listo, y ejecute una función:

    var banner = { //Creamos el objeto banner para darle propiedades a nuestros slides:
        father: $('#banner'),
        numberSlides: $('#banner').children('.slide').length,
        position: 1
    }
    var info = { 
        father: $('#info'),
        numberSlides: $('#info').children('.slide').length,
        position: 1
    }
    //accedemos al objeto, a la propiedad children y le cambiamos el css al primer slide:
    banner.father.children('.slide').first().css({
        'left': 0

    });
    info.father.children('.slide').first().css({
        'left': 0

    });


    var heightBanner = function () {
        var height = banner.father.children('.slide').outerHeight();

        banner.father.css({
            'height': height + 'px'
        });
    }
    var heightInfo = function () {
        var height = info.father.children('.active').outerHeight();

        info.father.animate({
            'height': height + 'px'
        });
    }

    var heightContainer = function () {
        var heightWindow = $(window).height();

        if (heightWindow <= $('#container').outerHeight() + 200) {
            $('#container').css({
                'height': ''
            });

        } else {
            $('#container').css({
                'height': heightWindow + 'px'
            });
        }
    }

    heightBanner();
    heightInfo();
    heightContainer();

    //cuando la ventana cambie de tamaño queremos ejecutar una función:
    $(window).resize(function () {
        heightBanner();
        heightInfo();
        heightContainer();
    });

    $('#info').children('.slide').each(function(){
        $('#btn').append('<span>');
    });

    $('#btn').children('span').first().addClass('active');

    //------------Banner
    // buttom next:
    $('#banner_next').on('click', function (e) {
        e.preventDefault();

        if (banner.position < banner.numberSlides) {

            banner.father.children().not('.active').css({
                'left': '100%'
            });

            //animación:
            $('#banner .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            $('#banner .active').prev().animate({
                'left': '-100%'
            });
            //el ultimo slide pase y vuelva a empezar:
            banner.position = banner.position + 1;
        } else {
            $('#banner .active').animate({
                'left': '-100%'
            });

            banner.father.children().not('.active').css({
                'left': '100%'
            });

            $('#banner .active').removeClass('active');
            banner.father.children('.slide').first().addClass('active').animate({
                'left': 0
            });

            banner.position = 1;
        }

    });

    // buttom previous:
    $('#banner_prev').on('click', function (e) {
        e.preventDefault();

        if (banner.position > 1) {

            banner.father.children().not('.active').css({
                'left': '-100%'
            });

            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });

            banner.position = banner.position - 1;

        } else {
            banner.father.children().not('.active').css({
                'left': '-100%'
            });

            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active');
            banner.father.children().last().addClass('active').animate({
                'left': 0
            });

            banner.position = banner.numberSlides;
        }

    });

    /*Info*/
    $('#info_next').on('click', function (e) {
        e.preventDefault();

        if (info.position < info.numberSlides) {

            info.father.children().not('.active').css({
                'left': '100%'
            });

            //animación:
            $('#info .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            $('#info .active').prev().animate({
                'left': '-100%'
            });

            $('#btn').children('.active').removeClass('active').next().addClass('active');
           
            info.position = info.position + 1;
        } else {
            $('#info .active').animate({
                'left': '-100%'
            });

            info.father.children().not('.active').css({
                'left': '100%'
            });

            $('#info .active').removeClass('active');
            info.father.children('.slide').first().addClass('active').animate({
                'left': 0
            });

            $('#btn').children('.active').removeClass('active');
            $('#btn').children('span').first().addClassClass('active');

            //reseteamos la posición a 1
            info.position = 1;
        }

    });

    // buttom previous:
    $('#info_prev').on('click', function (e) {
        e.preventDefault();

        if (info.position > 1) {

            info.father.children().not('.active').css({
                'left': '-100%'
            });

            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });

            $('#btn').children('.active').removeClass('active').prev().addClass('active');

            info.position = info.position - 1;

        } else {
            info.father.children().not('.active').css({
                'left': '-100%'
            });

            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active');
            info.father.children().last().addClass('active').animate({
                'left': 0
            });

            $('#btn').children('.active').removeClass('active');
            $('#btn').children('span').last().addClass('active');

            info.position = info.numberSlides;
        }

    });

});