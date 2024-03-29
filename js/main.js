/*global $, jQuery, alert*/
$(document).ready(function () {
    'use strict';

    // Scroll Navbar
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 10) {
            $('.navbar').addClass('nav-scroll');
        }
        else {
            $('.navbar').removeClass('nav-scroll');
        };
    });

    //smoothly Scroll To Element
    $('.navbar-nav li a').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);
    });

    // Sync Links With Sections
    $(window).on('scroll', function () {
        $('section').each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var secID = $(this).attr('id');
                $('.navbar-nav li a').removeClass('active-li')
                $('.navbar-nav li a[data-scroll="' + secID + '"]').addClass('active-li');
            }
        })
    });

    // Scroll Too Top
    $('.scroll-top').on('click', function () { $('html, body').animate({ scrollTop: 0 }, 1000); });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.scroll-top').fadeIn('slow');
        } else {
            $('.scroll-top').fadeOut('slow');
        }
    });

    // Gallery works Section
    var contact = document.querySelector('.contact');
    var mixit = mixitup(contact);


    // Adjust Selected Shuffle Links
    $('.shuffle li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // Owl Carousel Section App Screenshots
    $('.services .owl-carousel').owlCarousel({
        autoplay: 3000,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        rewind: true,
        margin: 15,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });

    // Owl Carousel Section App Screenshots
    $('.clients .owl-carousel').owlCarousel({
        autoplay: 2000,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        rewind: true,
        margin: 10,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

}); //End Document Function

//loading Screen
$(window).on('load', function () {
    $(".loading-over .spinner").fadeOut(0,

        function () {
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(0,

                function () {
                    $(this).remove();
                });

        });
});
