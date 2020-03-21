'use strict';

let basket = {

    item: '',
    totalPrice: 0,
    printPlace: document.querySelector('.total'),

    add: function(id, price, name) {
        this.item += `<p># ${id}, ${name} , цена ${price} руб.</p>`;
        this.calcTotalPrice(price);
    },

    calcTotalPrice: function (price) {
        this.totalPrice += parseInt(price);
    },

    print: function () {
        this.printPlace.innerHTML = this.item + `<hr><p>Стоимость: ${this.totalPrice} руб.</p>`;
    },

    clear: function () {
        this.item = '';
        this.totalPrice = 0;
        this.printPlace.innerHTML = '';
    }
};

document.querySelectorAll('.buy').forEach(function(item, i){
    item.addEventListener('click', function() {
        basket.add(item.dataset.id, item.dataset.price, item.dataset.name);
        basket.print();
    });
});

document.querySelector('.clear').addEventListener('click', function() {
    basket.clear();
});