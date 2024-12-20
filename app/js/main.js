$(function(){ 


    var $range = $(".filter-price__item");
    var $inputFrom = $(".filter-price__from");
    var $inputTo = $(".filter-price__to");
    var instance;
    var min = 0;
    var max = 1000;
    var from = 0;
    var to = 0;
    
    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 100,
        to: 1000,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
    });
    

    $(".product-card__rating").rateYo({ 
        rating: 4.5, 
        readOnly: true, 
        spacing: "10px", 
        numStars: 1, 
        minValue: 0, 
        maxValue: 5, 
        normalFill: '#c1c1c1', 
        ratedFill: '#FFB800', 
        starWidth: '16px',
        starHeight: '16px',
        onChange: function (rating, rateYoInstance) {
            $(this).next().text(rating);
          }

    }) 

   

    $('.slider-top__items').slick({
        prevArrow : '<button type="button" class="slick-prev"><img class="slick-prev__img "src="images/sprite.svg#arrow-left" alt="arrow-left"></button>',
        nextArrow : '<button type="button" class="slick-next"><img class="slick-next__img" src="images/sprite.svg#arrow-right" alt="arrow-right"></button>',
        autoplay: true,
        infinite: true,
        dots: true, 
    });

    $('.partners__items').slick({
        arrows: false,
        infinite: true,
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



    $('.title--categories').on('click', function () {        
        $('.filter--categories').toggleClass('filter--close'); 
    }); 

    $('.title--categories').on('click', function () {        
        $('.catalogofgoods-categories__items').toggleClass('hidden'); 
    }); 

    $('.title--offers').on('click', function () {        
        $('.filter--offers').toggleClass('filter--close'); 
    }); 

    $('.title--offers').on('click', function () {        
        $('.catalogofgoods-offers__form').toggleClass('hidden'); 
    }); 

    $('.title--brend').on('click', function () {        
        $('.filter--brend').toggleClass('filter--close'); 
    }); 

    $('.title--brend').on('click', function () {        
        $('.catalogofgoods-brend__form').toggleClass('hidden'); 
    });

    $('.title--price').on('click', function () {        
        $('.filter--price').toggleClass('filter--close'); 
    }); 

    $('.title--price').on('click', function () {        
        $('.catalogofgoods-price__item').toggleClass('hidden'); 
    }); 

    $('.catalog-content__select').styler();


    $('.catalog-content__filter-btn').on('click', function () {
        $('.catalog-content__filter-btn').removeClass('catalog-content__filter-btn--active');
        $(this).addClass('catalog-content__filter-btn--active');
     
    }); 

    $('.filter-btn--list').on('click', function(){
        $('.top-products__item').addClass('top-products__item--list')
    })

    $('.filter-btn--grid').on('click', function(){
        $('.top-products__item').removeClass('top-products__item--list')
    })


    $('.top-slider__inner').slick({
        prevArrow : '<button type="button" class="slick-prev"><img class="slick-prev__img "src="images/sprite.svg#arrow-left" alt="arrow-left"></button>',
        nextArrow : '<button type="button" class="slick-next"><img class="slick-next__img" src="images/sprite.svg#arrow-right" alt="arrow-right"></button>',
        autoplay: false,
        infinite: false,
        dots: false, 
        arrows: true,
    });
    

    $(".top-slider__stars, .tabs__feedback-rating").rateYo({ 
        rating: 4.5, 
        spacing: "6px", 
        numStars: 5, 
        minValue: 0, 
        maxValue: 5, 
        normalFill: '#c1c1c1', 
        ratedFill: '#FFB800', 
        starWidth: '16px',
        starHeight: '16px',

    }) 

    $('.top-slider__button').styler();

    $('.tabs__title').on('click', function(e){
        e.preventDefault();
        $('.tabs__title').removeClass('tabs__title--active');
        $(this).addClass('tabs__title--active');

        $('.tabs__item').removeClass('tabs__item--active');       
        $($(this).attr('href')).addClass('tabs__item--active');
    

    })


        $('.slider-product__items').slick({
        prevArrow : '<button type="button" class="slick-prev"><img class="slick-prev__img "src="images/sprite.svg#arrow-left" alt="arrow-left"></button>',
        nextArrow : '<button type="button" class="slick-next"><img class="slick-next__img" src="images/sprite.svg#arrow-right" alt="arrow-right"></button>',
        autoplay: false,
        infinite: true,
        dots: false, 
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    });  


});

$(function(){
 

    var containerE3 = document.querySelector('.catalog-content');
    var checkboxGroup = document.querySelector('.catalogofgoods-offers__items');
    var checkboxes = checkboxGroup.querySelectorAll('input[type="checkbox"]');

    var mixer = mixitup(containerE3);

    checkboxGroup.addEventListener('change', function() {
        var selectors = [];

            for (var i = 0; i < checkboxes.length; i++) {
                var checkbox = checkboxes[i];

                if (checkbox.checked) selectors.push(checkbox.value);
            }

        var selectorString = selectors.length > 0 ?
            selectors.join(',') : 
                'all';

        mixer.filter(selectorString);
    });
        
    
    // var containerE3 = document.querySelector('[data-ref="container"]');
    var inputSearch = document.querySelector('[data-ref="input-search"]');
    var keyupTimeout;

    var mixer = mixitup(containerE3, {
        animation: {
            duration: 350
        },
        callbacks: {
            onMixClick: function() {
                // Reset the search if a filter is clicked

                if (this.matches('[data-filter]')) {
                    inputSearch.value = '';
                }
            }
        }       
    });

    // Set up a handler to listen for "keyup" events from the search input

    inputSearch.addEventListener('keyup', function() {
        var searchValue;

        if (inputSearch.value.length < 3) {
            // If the input value is less than 3 characters, don't send

            searchValue = '';
        } else {
            searchValue = inputSearch.value.toLowerCase().trim();
        }

        // Very basic throttling to prevent mixer thrashing. Only search
        // once 350ms has passed since the last keyup event

        clearTimeout(keyupTimeout);

        keyupTimeout = setTimeout(function() {
            filterByString(searchValue);
        }, 350);
    });

    /**
     * Filters the mixer using a provided search string, which is matched against
     * the contents of each target's "class" attribute. Any custom data-attribute(s)
     * could also be used.
     *
     * @param  {string} searchValue
     * @return {void}
     */

    function filterByString(searchValue) {
        if (searchValue) {
            // Use an attribute wildcard selector to check for matches

            mixer.filter('[class*="' + searchValue + '"]');
        } else {
            // If no searchValue, treat as filter('all')

            mixer.filter('all');
        }
    }   

});

$(function(){

    var containerEl1 = document.querySelector('[data-ref="top-products"]');
    var containerEl2 = document.querySelector('[data-ref="stocks"]');
    

    var config = {
        controls: {
        scope: 'local'
        }
    };

 
    var mixer1 = mixitup(containerEl1, config);
    var mixer1 = mixitup(containerEl2, config);

});

