
$(document).ready(function ()
{

    $('#sliderTop').owlCarousel({ 
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 2,
            },
            // breakpoint from 480 up
            480: {
                items: 3,
            },
            // breakpoint from 768 up
            768: {
                items: 5,
            }
        }
    });
    $('#sliderBottom').owlCarousel({ 
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 2,
            },
            // breakpoint from 480 up
            480: {
                items: 3,
            },
            // breakpoint from 768 up
            768: {
                items: 5,
            }
        }
    });

    $('#ttSlider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });
    $('#tienichSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            480: {
                items: 1,
            },
            // breakpoint from 768 up
            768: {
                items: 2,
            }
        }
    });
    $('#chinhsachSlider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });
    $('#tabs1Slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });
    $('#tabs3Slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });
    $('#tabs4Slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });
    $('#tabs5Slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });
    $('#tabs6Slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });
    $('#tabs7Slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });
    $('#tabs8Slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });
    $('#tabs9Slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });
    $('#tabs10Slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: false,
        autoplay: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
    });




    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 400)
        {
            $('.b-header').addClass("b-fixed");
        } else
        {
            $('.b-header').removeClass("b-fixed");
        }
    });
    $('a', $('.b-header__menu-navbar ul li')).click(function ()
    {
        var id = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(id).offset().top - 100 }, 700);
        return false;
    });

    $(".b-header__menu-navbar ul li a").click(function ()
    {
        var parent = $(this).parent();
        if ($(parent).hasClass("active"))
        {
            $(parent).removeClass("active");
        } else
        {
            $('.b-header__menu-navbar ul li.active').removeClass('active');
            $(parent).addClass("active");
        }
        return false;
    });

}); 