let game = {
    /**
     * Запускает игру.
     */
    run() {

        let score = 0;

        // Бесконечный цикл
        for (let $i = 1; $i <= numberOfQuestionsForGame; $i++) {

            let result = player.getAnswer();

            if (result) {
                score++;
            }

            // Если игрок сказал что хочет выйти, то игра заканчивается.
            if (result === null) {
                console.log("Игра окончена? досрочно.");
                console.log(`Правильных ответов - ${score}`);
                return;
            }
        }
        console.log(`Вы ответили правильно на ${score} вопросов.`);
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log("Кто хочет стать миллионером");
        // Отображаем нашу игру.
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();