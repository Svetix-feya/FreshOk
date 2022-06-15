$(function(){
    $('.slider__items').slick({
        prevArrow : '<button type="button" class="slick-prev"><img class="slick-prev__img "src="images/icons/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow : '<button type="button" class="slick-next"><img class="slick-next__img" src="images/icons/arrow-right.svg" alt="arrow-right"></button>',
        autoplay: false,
    });

    var mixer = mixitup('.topproducts');

});