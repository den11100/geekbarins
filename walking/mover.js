let mover = {

    // Следующая точка игрока
    nextPosition: {},

    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [1,2,3,4,6,7,8,9];

        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число (1,2,3,4,6,7,8 или 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1,2,3,4,6,7,8 или 9.');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        this.nextPosition = {
            x: player.x,
            y: player.y,
        };
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 1:
                this.nextPosition.y++;
                this.nextPosition.x--;
                break;
            case 2:
                this.nextPosition.y++;
                break;
            case 3:
                this.nextPosition.y++;
                this.nextPosition.x++;
                break;
            case 4:
                this.nextPosition.x--;
                break;
            case 6:
                this.nextPosition.x++;
                break;
            case 7:
                this.nextPosition.y--;
                this.nextPosition.x--;
                break;
            case 8:
                this.nextPosition.y--;
                break;
            case 9:
                this.nextPosition.y--;
                this.nextPosition.x++;
                break;
        }

        this._checkBorderLeftAndUp();
        this._checkBorderRightAndDown();

        return this.nextPosition;
    },

    _checkBorderLeftAndUp() {
        if (this.nextPosition.x < 0 && this.nextPosition.y < 0) {
            this.nextPosition.x++;
            this.nextPosition.y++;
        } else if (this.nextPosition.x < 0) {
            this.nextPosition.x++;

        } else if(this.nextPosition.y < 0) {
            this.nextPosition.y++;
        }
    },

    _checkBorderRightAndDown() {
        if (this.nextPosition.x >= config.colsCount && this.nextPosition.y >= config.rowsCount) {
            this.nextPosition.x--;
            this.nextPosition.y--;
        } else if (this.nextPosition.x >= config.colsCount) {
            this.nextPosition.x--;

        } else if(this.nextPosition.y >= config.rowsCount) {
            this.nextPosition.y--;
        }
    },

};