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
    

    // $('.search-form').hasClass('search-form--active').on        ('click', function () {
    //         $(this).toggleClass('search-form--active'); 
    // });
    
    $('.header__btn, .header__close').on('click', function () {
        $('.header__menu-nav').toggleClass('header__menu-nav--active');       
        $('.wrapper').toggleClass('wrapper--lock')
    });  

    // document.addEventListener('DOMContentLoaded', () => {
        
    //     const burger = document.querySelector('.header__btn'); //наша кнопка
    //     const mobileMenu = document.querySelector('.header__menu-nav'); //мобильное меню
    //     const bodyLock = document.querySelector('.wrapper'); //ищем как селектор ТЕГА
      
    //     document.addEventListener('click', function (e) {
    //         if (e.target !== burger && e.target !== mobileMenu) {                
    //         mobileMenu.classList.remove('header__menu-nav--active');
    //         bodyLock.classList.remove('.wrapper--lock');
    //         }
    //     });
        
    // });

    

});