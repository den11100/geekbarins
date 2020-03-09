'use strict';

/**
 * @param {MouseEvent} event
 */
let buttonEventClick = function (event) {

    let button = event.target;
    let parent = event.target.parentNode;
    let img = parent.querySelector('img');

    if (button.classList.contains('cancel')) {

        button.innerHTML = 'Подробнее';
        button.classList.remove('cancel');
        parent.querySelector('.description').remove();
        img.classList.remove('hidden');

    } else {

        button.innerHTML = 'Отмена';
        button.classList.add('cancel');

        img.classList.add('hidden');

        let description = document.createElement('div');
        description.setAttribute('class', 'description');
        description.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
        parent.insertBefore(description, img);

    }
};

let buttons = document.querySelectorAll('.product button');
buttons.forEach(function (button) {
    button.addEventListener('click', buttonEventClick);
});


