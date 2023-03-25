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
            $(".slider-top").addClass('slider-top--active');         
        }
        if (50 > scrolled) {
            $(".header__bottom").removeClass('header__bottom--active');   
            $(".slider-top").removeClass('slider-top--active');          
        }
    }

    $('.usernav__item-cart, .cart__close').on('click', function () {
        $('.cart').toggleClass('hidden');  
        $('.wrapper').addClass('wrapper--lock'); 
    }); 


 $('.cart__close').on('click', function () {        
        $('.wrapper').removeClass('wrapper--lock'); 
    }); 


    $('.cart__clean-cart').on('click', function () {
        $('.cart__card').toggleClass('hidden');
        
    }); 


    $('.cart__close-item').on('click', function () {
        $(this).parent().toggleClass('hidden'); 
        
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

    
    $('.header__btn').on('click', function () {
        $('.burger-menu').toggleClass('burger-menu--active');       
        $('.wrapper').toggleClass('wrapper--lock')
    }); 

    
    
    
    $('.catalog').on('click', function () {
        $('.catalog__items').toggleClass('catalog__items--active');
        $('.catalog').toggleClass('catalog--active');
    })

    $(document).on('mouseup', function (e) {
        var catalog = $('.catalog')
        if (!catalog.is(e.target) && catalog.has(e.target).length === 0) {
            $('.catalog__items').removeClass('catalog__items--active');  
            $('.catalog').removeClass('catalog--active');          
        }
    });

    $(document).on('mouseup', function (e) {
        var burger = $('.burger-menu--active')       
        if (!burger.is(e.target) && burger.has(e.target).length === 0) {
            burger.removeClass('burger-menu--active');
            
        }
    });

    $(document).on('mouseup', function (e) {
        var cart = $('.cart')
        if (!cart.is(e.target) && cart.has(e.target).length === 0) {
            cart.addClass('hidden');
            $('.wrapper').removeClass('wrapper--lock');
        }
    });

    $('.burger-menu__close, .burger-menu__link').on('click', function () {
        $('.burger-menu').toggleClass('burger-menu--active');
        $('.wrapper').removeClass('wrapper--lock');
    }); 

});