'use strict';

let board = '';

const letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];

board = '<tr>';
for (let i = 0; i < 9; i++) {
    board += `<th>${letters[i]}</th>`;
}
board += '</tr>';

let coordinate = '';
for (let row = 0; row < 8; row++) {

    board += `<tr><td>${numbers[row]}</td>`;

    for (let column = 0; column < 8; column++) {

        coordinate = letters[column+1] + numbers[row];
        if (column % 2) {
            let color = (row % 2) ? 'brown': '';
            board += `<td data-coordinate="${coordinate}" class="${color}"></td>`;
        } else {
            let color = (row % 2) ? '': 'brown';
            board += `<td data-coordinate="${coordinate}" class="${color}"></td>`;
        }
    }

    board += '</tr>';
}

const wrapBoard = document.querySelector('.wrap-board');
wrapBoard.insertAdjacentHTML('afterbegin', `<table>${board}</table>`);