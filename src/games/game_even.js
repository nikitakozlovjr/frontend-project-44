// Импорты
import { sayHi, outputCongratulations, checkAnswer } from '../index.js';
// Код
const brainEven = () => {
// приветствие

  const sayHiResult = sayHi();

  // выводим правила игры

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rightAnswers = 0;// переменная, хранящая число правильных ответов игрока
  const fail = false;// переменная "СТОП-СЛОВО" при ее значении true цикл заканчивает свою работу
  // игровой цикл

  while (rightAnswers < 3) {
    const num = Math.floor(Math.random() * 100);
    let trueAnswer = '';// создаем переменную, которая будет содержать правильный ответ
    if (num % 2 === 0) {
      trueAnswer = 'yes';
    } else if (num % 2 !== 0) {
      trueAnswer = 'no';
    }
    console.log(`Question: ${num}`);
    const checkAnswerResult = checkAnswer(trueAnswer, sayHiResult, fail);

    if (checkAnswerResult === true) { // завершаем игру если checkAnswer() возвращает true
      break;
    } else { // во всех других случаях увеличиваем кол-во правильных ответов на 1;
      rightAnswers += 1;
    }
  }

  // Выводим поздравление игроку, если он ответил три раза правильно
  outputCongratulations(sayHiResult, rightAnswers);
};

export { brainEven };
