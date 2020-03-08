let question = {

    /**
     * Выбираем случайный вопрос из списка
     * @returns {{text, correctAnswer}|*}
     */
    getQuestion() {
        return questions[this._randomInteger(1, questions.length - 1)];
    },

    /**
     * случайное число от min до max включительно
     * @param min
     * @param max
     * @returns {number}
     * @private
     */
    _randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
};

