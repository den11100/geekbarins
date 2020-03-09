'use strict';

let button = document.querySelector('.show-modal');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');

button.addEventListener('click', function () {
    modal.style.display = 'block';
    modal.classList.add('magictime', 'swap');
});

close.addEventListener('click', function () {
    modal.style.display = 'none';
});