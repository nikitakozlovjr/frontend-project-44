// Импорты
import { sayHi, outputCongratulations, checkAnswer } from '../index.js';

const brainCalc = () => {
// приветствие
  const sayHiResult = sayHi();
  // выводим правила игры
  console.log('What is the result of the expression?');
  // внешние переменные для игрового цикла

  let rightAnswers = 0;// переменная, хранящая число правильных ответов игрока
  const fail = false;// переменная "СТОП-СЛОВО" при ее значении true цикл заканчивает свою работу

  // игровой цикл
  while (rightAnswers < 3) {
    // генерация двух случайных чисел
    const fistNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    // генерация случайного индекса
    const index = Math.floor(Math.random() * 3);
    // массив, содержащий всевозможные операнды
    const arrOfOperant = ['*', '+', '-'];
    // составляем выражение для пользователя
    const expression = `${String(fistNum)} ${arrOfOperant[index]} ${String(secondNum)}`;
    // инициализируем переменную, которая будет содержать правильный ответ
    let trueAnswer = 0;
    // помещаем правильный ответ в переменую
    if (index === 0) { // если index случайным образом оказался 0
      trueAnswer = fistNum * secondNum;
    } else if (index === 1) { // если index случайным образом оказался 1
      trueAnswer = fistNum + secondNum;
    } else if (index === 2) { // если index случайным образом оказался 2
      trueAnswer = fistNum - secondNum;
    }
    console.log(`Question: ${expression}`);// выводим пользователю выражение, которое он должен решить
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

export { brainCalc };
