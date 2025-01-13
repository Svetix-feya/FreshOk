//счетчик для одного товара
console.log ('Hello');


$(function(){ 

    const btnMinus = document.querySelector('.minus');

    const btnPlus = document.querySelector('.plus');

    const counter = document.querySelector('.product-card__button');

    //вывод в консоль

    btnMinus.addEventListener('click', function () {
        console.log('Minus click');
    })

    btnPlus.addEventListener('click', function () {
        console.log('Plus click');
    })

    counter.addEventListener('click', function () {
        console.log(counter);
    })

});    

//счетчик для всех картчек


$(function(){ 

    //добавляем прослушку на всем окне

    window.addEventListener('click', function (event) {

        //добавляем переменную для счетчика
        let counter;

        //проверяем клик строго по кнопкам Плюс либо Минус        
        if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
            const counterWrapper = event.target.closest('.product-card__form'); 
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
    });


}); 



$(function(){    

    const cartWrapper = document.querySelector('.cart__content');

        //отслеживаем клик на странице

    window.addEventListener('click', function (event) {

            //проверяем что клик был совершен по кнопке "добавить в корзину"
            if (event.target.hasAttribute('data-cart')) {
                //находим карточку с товаром внутри которой был совершен клик
                const card = event.target.closest('.product-card');
                //собираем данные с этого товара и записываем их в единый объект productInfo
                const productInfo = {
                id: card.dataset.id,
                imgSrc: card.querySelector('.product-card__img').getAttribute('src'),
                title: card.querySelector('.product-card__title').innerText,
                price: card.querySelector('.product-card__price').innerText,
                counter: card.querySelector('.product-card__counter').innerText,
                };
               console.log(productInfo);

                //собранные данные подставим в шаблон для товара в корзине

                const cartItemHTML = `<li class="cart__card">
                            <button class="cart__close-item" type="button">
                                <span class="cart__line-item"></span>
                                <span class="sr-only">Кнопка закрыть пункт меню корзины</span>
                            </button>
                            <article class="product-card">
                                <div class="product-card__content">
                                    <a class="product-card__link" href="#">
                                        <img class="product-card__img" src="${productInfo.imgSrc}"
                                            alt="Питахайя" width="80" height="60">
                                    </a>
                                    <div class="product-card__discription">
                                        <a class="product-card__title-link" href="#">
                                            <h3 class="product-card__title">
                                                ${productInfo.title}
                                            </h3>
                                        </a>
                                        <span class="product-card__price">
                                            ${productInfo.price} <span>₽</span>
                                        </span>
                                    </div>
                                </div>
                                <form class="product-card__form">
                                    <button class="product-card__minus" type="button">
                                    </button>
                                    <span class="product-card__counter" data-counter>
                                    ${productInfo.counter}
                                    </span>
                                    <button class="product-card__plus" type="button">
                                    </button> 
                                    <span class="product-card__sum">
                                        2038 <span>₽</span>
                                    </span>
                                </form>                                                                 
                            </article>
                                </li>`;

                        //отобразим товар в корзине
                cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);        
            }

    });


});    

