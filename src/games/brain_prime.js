// Импорты
import { sayHi, outputCongratulations, checkAnswer } from '../index.js';

const brainPrime = () => {
  // приветствие

  const sayHiResult = sayHi();

  // выводим правила игры

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  // переменные для игрового цикла

  let rightAnswers = 0;// переменная, хранящая число правильных ответов игрока
  const fail = false;// переменная "СТОП-СЛОВО" при ее значении true цикл заканчивает свою работу

  // игровой цикл

  while (rightAnswers < 3) {
    const num = Math.floor(Math.random() * 1000);// генерируем число
    const stack = [];// создаем массив, который будет являться стеком
    // запускаем цикл, который будет проходить по всем возможным делителям
    for (let i = 1; i <= num; i += 1) {
      if (num % i === 0) {
        stack.push(i);
      }
      if (stack.length > 2) {
        break;
      }
    }
    // создаем переменную, в которую помещаем правильный ответ
    let trueAnswer = '';
    if (stack.length <= 2) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }
    // выводим вопрос пользователю
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

export { brainPrime };
