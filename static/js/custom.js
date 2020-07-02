/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Video
5. Init Gallery
6. Bootstrap Modal


******************************/

$(document).ready(function () {
    "use strict";

	/* 

	1. Vars and Inits

	*/

    var header = $('.header');
    var hamburgerBar = $('.hamburger_bar');
    var hamburger = $('.hamburger');

    setHeader();

    $(window).on('resize', function () {
        setHeader();

        setTimeout(function () {
            $(window).trigger('resize.px.parallax');
        }, 375);
    });

    $(document).on('scroll', function () {
        setHeader();
    });


    initGallery();
    initMenu();

	/* 

	2. Set Header

	*/

    function setHeader() {
        if ($(window).scrollTop() > 91) {
            header.addClass('scrolled');
            hamburgerBar.addClass('scrolled');
        }
        else {
            header.removeClass('scrolled');
            hamburgerBar.removeClass('scrolled');
        }
    }

	/* 

	3. Init Menu

	*/

    function initMenu() {
        if ($('.menu').length) {
            var menu = $('.menu');
            hamburger.on('click', function () {
                hamburger.toggleClass('active');
                menu.toggleClass('active');
            });
        }
    }

	/* 

	5. Init Gallery

	*/

    function initGallery() {
        if ($('.gallery_slider').length) {
            var gallery = $('.gallery_slider');
            gallery.owlCarousel(
                {
                    autoplay: true,
                    loop: true,
                    smartSpeed: 1200,
                    nav: false,
                    dots: false,
                    center: true,
                    responsive:
                    {
                        0:
                        {
                            items: 3
                        },
                        991:
                        {
                            items: 5
                        }
                    }
                });
        }
    }
	/* 

	6. Bootstrap modal

	*/
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus');
    });

});
