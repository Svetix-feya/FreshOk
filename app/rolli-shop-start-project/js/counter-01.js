//счетчик
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
