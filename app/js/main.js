$(function(){
    $('.slider-top__items').slick({
        prevArrow : '<button type="button" class="slick-prev"><img class="slick-prev__img "src="images/sprite.svg#arrow-left" alt="arrow-left"></button>',
        nextArrow : '<button type="button" class="slick-next"><img class="slick-next__img" src="images/sprite.svg#arrow-right" alt="arrow-right"></button>',
        autoplay: false,
        infinite: false,
    });

    $('.partners__items').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
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

    
    $(".product-cart__rating-star").rateYo({
        rating: 10,
        maxValue: 10,
        numStars: 1,
        starSvg: '<svg class="star" width="16" height="16" viewBox="0 0 16 16"><use xlink:href="images/sprite.svg#star"></use></svg>',
        starWidth: '16px',
      });

});