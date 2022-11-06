$(function(){
    $('.slider-top__items').slick({
        prevArrow : '<button type="button" class="slick-prev"><img class="slick-prev__img "src="images/sprite.svg#arrow-left" alt="arrow-left"></button>',
        nextArrow : '<button type="button" class="slick-next"><img class="slick-next__img" src="images/sprite.svg#arrow-right" alt="arrow-right"></button>',
        autoplay: true,
        infinite: false,
        dots: true, 
    });

    $('.partners__items').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });


    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 50) {
            $(".header__bottom").addClass('header__bottom--active');
            $(".usernav__cart").addClass('usernav__cart--active');
        }
        if (50 > scrolled) {
            $(".header__bottom").removeClass('header__bottom--active');
            $(".usernav__cart").removeClass('usernav__cart--active');
        }
    }


    $('.usernav__item-cart, .usernav__close').on('click', function () {
        $('.usernav__cart').toggleClass('hidden');  
        $('.wrapper').toggleClass('wrapper--lock'); 
    }); 

    $('.usernav__clean-cart').on('click', function () {
        $('.usernav__card').toggleClass('hidden');
        
    }); 


    $('.product-card__close').on('click', function () {
        $('.usernav__card').toggleClass('hidden');  
    });


    $('.product-card__button').styler();


    var containerEl1 = document.querySelector('[data-ref="top-products"]');
    var containerEl2 = document.querySelector('[data-ref="stocks"]');
 
    var config = {
        controls: {
          scope: 'local'
        }
    };
     
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);

    $('.usernav__item--search').on('click', function () {
        $('.search-form').toggleClass('search-form--active');
        
    }); 
    

    $(document).on('mouseup', function (e) {
        var search = $('.search-form--active')
        if (!search.is(e.target) && search.has(e.target).length === 0) {
            search.removeClass('search-form--active');
        }
    });

    
    $('.header__btn, .header__close').on('click', function () {
        $('.header__menu-nav').toggleClass('header__menu-nav--active');       
        $('.wrapper').toggleClass('wrapper--lock')
    });  

    $(document).on('mouseup', function (e) {
        var search = $('.header__menu-nav--active')
        if (!search.is(e.target) && search.has(e.target).length === 0) {
            search.removeClass('header__menu-nav--active');
        }
    });

    $(document).on('mouseup', function (e) {
        var wrapper = $('.wrapper--lock')
        if (!wrapper.is(e.target) && wrapper.has(e.target).length === 0) {
            wrapper.removeClass('wrapper--lock');
        }
    });

    $(document).on('mouseup', function (e) {
        var cart = $('.usernav__cart')
        if (!cart.is(e.target) && cart.has(e.target).length === 0) {
            cart.addClass('hidden');
        }
    });

});