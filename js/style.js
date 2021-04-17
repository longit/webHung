
$(document).ready(function (){ 
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

    // $(window).scroll(function ()
    // {
    //     if ($(this).scrollTop() > 400)
    //     {
    //         $('.b-header').addClass("b-fixed");
    //     } else
    //     {
    //         $('.b-header').removeClass("b-fixed");
    //     }
    // });
     

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