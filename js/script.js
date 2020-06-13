new WOW().init();

$(document).ready(function () {
    $(".se-pre-con").fadeOut("slow");
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".navbar").css("background-color", "#333333");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    });
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
});

var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    backSpeed: 10,
    loop: true
});


$('.images').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    mouseDrag: true,
    center: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
});
