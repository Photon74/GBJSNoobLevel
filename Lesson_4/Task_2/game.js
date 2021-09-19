'use strict';

let game = {
    /**
     * Запускает игру
     */
    run() {
        while (true) {
            // Получаем направление игрока
            const direction = mover.getDirection();
            if (direction === null) {
                console.log('Игра окончена!');
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log('Ваше положение на поле в виде "O"');
        renderer.render();
        console.log('Чтобы начать играть наберите game.run() и нажмите Enter(Ввод)');
    },
};

game.init();