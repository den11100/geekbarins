let player = {

    getAnswer() {

        // Доступные ответы.
        const validAnswers = [1,2,3,4];

        let randomQuestion = question.getQuestion();

        while (true) {
            // Получаем от пользователя ответ.

            let answer = parseInt(prompt(randomQuestion.text + '\nОтмена для выхода.'));
            if (isNaN(answer)) {
                return null;
            }
            // Если ответ не дан
            // и начинаем новую итерацию.
            if (!validAnswers.includes(answer)) {
                alert('Выберите ответ 1, 2, 3 или 4');
                continue;
            }

            // Если пользователь правильно ответил
            if (answer == randomQuestion.correctAnswer) {
                return 1;
            }

            // Если ответил неверно
            return 0;
        }
    },

};

