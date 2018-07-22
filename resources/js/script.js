$(document).ready(function () {

    /*  --------------------// Sticky navigtion ---------------*/
    var waypoint = new Waypoint({
        element: $('.js--section-about')[0],
        handler: function (direction) {
            if (direction === "down") {
                $('.navbar').addClass('sticky');
            } else if (direction === "up") {
                $('.navbar').removeClass('sticky');
            }
        },
        offset: 100
    })


    /* ------------------- Scroll to ----------------------------*/
    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({ scrollTop: $('#about-me').offset().top }, 800);
    });

    $('.js--scroll-to-projects').click(function () {
        $('html, body').animate({ scrollTop: $('#portfolio').offset().top }, 800);
    })


    // $('.js--scroll-to-blog').click(function () {
    //     $('html, body').animate({ scrollTop: $('#').offset().top }, 800);
    // })

    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({ scrollTop: $('#contact').offset().top }, 800);
    })


    $('.js--scroll-to-home').click(function () {
        $('html, body').animate({ scrollTop: $('.js--home').offset().top }, 800);
    })

    /* -----------------------// Animation on scroll ----------------*/

    var waypoint = new Waypoint({
        element: $('.js--wp')[0],
        handler: function (direction) {
            $('.js--wp').addClass('animated fadeIn');
        },
        offset: 600
    });
    /* ----------------------- Mobile nav ----------------*/

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
    })
});


