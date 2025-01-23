
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
        from: 20,
        to: 1100,
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

    $('.filter-btn--check, .catalogofgoods__close').on('click', function () {
        $('.catalogofgoods__filters').toggleClass('catalogofgoods__filters--active');  
        $('.wrapper').addClass('wrapper--lock'); 
    }); 

    $('.catalogofgoods__close').on('click', function () {        
        $('.wrapper').removeClass('wrapper--lock'); 
    }); 

    $(document).on('mouseup', function (e) {
        var filter = $('.catalogofgoods__filters--active')       
        if (!filter.is(e.target) && filter.has(e.target).length === 0) {
            filter.removeClass('catalogofgoods__filters--active');
            
        }
    });

    // $(document).on('mouseup', function (e) {
    //     var filter = $('.catalogofgoods__filters')
    //     if (!filter.is(e.target) && filter.has(e.target).length === 0) {
    //         filter.removeClass('catalogofgoods__filters--active');
    //         $('.wrapper').removeClass('wrapper--lock');
    //     }
    // });

 $('.cart__close').on('click', function () {        
        $('.wrapper').removeClass('wrapper--lock'); 
    });   


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
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3,
                }
            },
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


});





$(function(){ 

    //добавляем прослушку на всем окне

    window.addEventListener('click', function (event) {

        //добавляем переменную для счетчика
        var counter;
        

        //проверяем клик строго по кнопкам Плюс либо Минус        
        if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
            const counterWrapper = event.target.closest('.product-card__form, .top-slider__form'); 
            counter =  counterWrapper.querySelector('[data-counter]');  
        }
        
        // проверяем является ли элемент по которому совершен клик кнопкой Плюс
        if (event.target.dataset.action === 'plus') {   
            counter.innerText = ++counter.innerText;
        }       

        // проверяем является ли элемент по которому совершен клик кнопкой Минус
        if (event.target.dataset.action === 'minus') {         
      
            //проверяем чтобы счетчик был больше 1
            if (parseInt(counter.innerText) > 1 ){
                counter.innerText = --counter.innerText;
                }

        }

        // проверяем клик на + или - внутри корзины
        if (event.target.hasAttribute('data-action') && event.target.closest('.cart__content')) {        

            //пересчет общей количества товаров в корзине        
        calcCartCount ();    
            //пересчет общей стоимости товаров в корзине
        calcCartPrice ();
    

        
        };

    });

  

    const cartWrapper = document.querySelector('.cart__content');

 


        //отслеживаем клик на странице

    window.addEventListener('click', function (event) {

            //проверяем что клик был совершен по кнопке "добавить в корзину"
            if (event.target.hasAttribute('data-cart')) {
                //находим карточку с товаром внутри которой был совершен клик
                const card = event.target.closest('.product-card, .top-slider');

                //собираем данные с этого товара и записываем их в единый объект productInfo
                const productInfo = {
                id: card.dataset.id,
                imgSrc: card.querySelector('.product-card__img, .top-slider__img').getAttribute('src'),
                title: card.querySelector('.product-card__title, .top-slider__title').innerText,
                price: card.querySelector('.product-card__price, .top-slider__price').innerText,
                counter: card.querySelector('.product-card__counter, .top-slider__counter').innerText,
                };   
                
                this.localStorage.setItem('productInfo', JSON.stringify(productInfo));
                const local = JSON.parse(this.localStorage.getItem('productInfo'));  
                console.log(local.title);
                

               //проверять есть ли уже такой товар в корзине

               const itemInCart = cartWrapper.querySelector(`[data-id="${local.id}"]`);        

               //если товар есть в корзине

               if (itemInCart) {
                    const counterElement = itemInCart.querySelector('[data-counter]');
                    counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter); 
                  

               }   
               
               else {
                //если товара нет  в корзине
               

                //собранные данные подставим в шаблон для товара в корзине

                const cartItemHTML = `<li class="cart__card" data-id="${local.id}">
                            <button class="cart__close-item" type="button" data-action="close">
                                <span class="cart__line-item"></span>
                                <span class="sr-only">Кнопка закрыть пункт меню корзины</span>
                            </button>
                            <article class="product-card">
                                <div class="product-card__content">
                                    <a class="product-card__link" href="#">
                                        <img class="product-card__img" src="${local.imgSrc}"
                                            alt="Питахайя" width="80" height="60">
                                    </a>
                                    <div class="product-card__discription">
                                        <a class="product-card__title-link" href="#">
                                            <h3 class="product-card__title">
                                                ${local.title}
                                            </h3>
                                        </a>
                                        <span class="product-card__price">
                                            ${local.price}
                                        </span>
                                    </div>
                                </div>
                                <form class="product-card__form">
                                    <button class="product-card__minus" type="button" data-action="minus">
                                    </button>
                                    <span class="product-card__counter" data-counter>
                                    ${local.counter}
                                    </span>
                                    <button class="product-card__plus" type="button" data-action="plus">
                                    </button> 
                                    <span class="product-card__sum">
                                        ${local.price} 
                                    </span>
                                    <span>₽</span>
                                <form>
                            </article>
                                </li>`;
               

                        //отобразим товар в корзине
                cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML); 
                
           
                
                };

                //сбрасываем счетчик добавленного товара на "1"
                card.querySelector('[data-counter]').innerText = '1';

            
             //пересчет общей количества товаров в корзине        
            calcCartCount ();   
          
            //пересчет общей стоимости товаров в корзине
            calcCartPrice ();
           
         
            
           
        };
    });

}); 



function calcCartPrice () {  

    const cartItems = document.querySelectorAll('.cart__card');   
    const totalSum = document.querySelector('.cart__total-sum');

    var totalPrice = 0;    


    cartItems.forEach(function (item) {  
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.product-card__price');  
        
        

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;  

        var priceSum = item.querySelector('.product-card__sum');
        priceSum.innerText = currentPrice; 

        //удаляем каждый товар по отдельности
        const btnclose = item.querySelector('.cart__close-item');
        btnclose.addEventListener('click', function () {      
            if (item) {  
                item.remove();
            }; 
            totalSum.innerText = totalPrice - currentPrice;

        });  
       

    });

    //отображаем цену на странице
    totalSum.innerText = totalPrice;
    
        //очищаем корзину  
    const cartClean = document.querySelector('.cart__clean-cart');
    cartClean.addEventListener('click', function () {     

        var element = document.querySelectorAll('.cart__card');
        element.forEach(function(item){
             if (item) {
                item.remove(); // удаляем элемент, если он действительно присутствует
                totalSum.innerText = 0;
                
                
            };

        });
       
           
    });
  
   
};



function calcCartCount () {

    const counterInCart = document.querySelectorAll('.cart__card');
    const Count = document.querySelector('.usernav__num--cart');

    var totalCount = 0;

    counterInCart.forEach(function (item) {
        const Element = item.querySelector('[data-counter]');


    const currentCount = parseInt(Element.innerText);
    totalCount += currentCount;

        //удаляем каждый товар по отдельности для счетчика
    const btncloseCount = item.querySelector('.cart__close-item');
    btncloseCount.addEventListener('click', function () {     
  
        
        Count.innerText = totalCount - currentCount;
    });  

    });

    Count.innerText = totalCount;

    //обнуляем счетчик
    const cartCleanCount = document.querySelector('.cart__clean-cart');
    cartCleanCount.addEventListener('click', function () {     

        var element = document.querySelectorAll('.cart__card');
        element.forEach(function(item){
             if (item) {
                Count.innerText = 0; 
            };

        });

           
    });

    

};


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

    
    // var container = document.querySelector('[data-ref="container"]');
    var minSizeRangeInput = document.querySelector('[name="minSize"]');
    var maxSizeRangeInput = document.querySelector('[name="maxSize"]');

    var mixer = mixitup(containerE3, {
        animation: {
            duration: 350
        }
    });

    /**
     * Reads the values from our two native range inputs, returning an object
     * with `min` and `max` numeric values.
     *
     * @return {object}
     */

    function getRange() {
        var min = Number(minSizeRangeInput.value);
        var max = Number(maxSizeRangeInput.value);

        return {
            min: min,
            max: max
        };
    }

    /**
     * Ensures that the mixer is re-filtered whenever the value of a range
     * input changes.
     *
     * @return {void}
     */

    function handleRangeInputChange() {
        mixer.filter(mixer.getState().activeFilter);
    }

    /**
     * Allows us to manipulate the test result (`true` or `false`) of a
     * target against the current filter selector(s) (e.g. `.blue`).
     *
     * In this case we want to apply an additional constraint of whether or not the
     * target is within an arbitrary range, and override the test result to `false`
     * if not. The function must always return the test result.
     *
     * @param {boolean} testResult
     *     A boolean indicating whether or not the target is passing the current filtering criteria.
     * @param {mixitup.Target} target
     *     A reference to the target being tested
     * @return {boolean}
     */

    function filterTestResult(testResult, target) {
        var size = Number(target.dom.el.getAttribute('data-price'));
        var range = getRange();

        if (size < range.min || size > range.max) {
            testResult = false;
        }

        return testResult;
    }

    // Using the static method `registerFilter` from the MixItUp plugins API, we can
    // register the above function as a filter, to manipulate the value returned from the
    // `testResultEvaluateHideShow` hook.

    mixitup.Mixer.registerFilter('testResultEvaluateHideShow', 'range', filterTestResult);

    // Listen for change events from the two range inputs

    minSizeRangeInput.addEventListener('change', handleRangeInputChange);
    maxSizeRangeInput.addEventListener('change', handleRangeInputChange);


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

    var inputSearch = document.querySelector('[data-ref="input-search"]');
    var keyupTimeout;

    var mixer = mixitup(containerEl1, {
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



