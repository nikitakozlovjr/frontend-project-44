// Импорты
import { sayHi, outputCongratulations, checkAnswer } from '../index.js';

export default () => {
  // приветствие
  const sayHiResult = sayHi();

  // выводим правила игры

  console.log('What number is missing in the progression?');

  let rightAnswers = 0;// переменная, хранящая число правильных ответов игрока
  const fail = false;// переменная "СТОП-СЛОВО" при ее значении true цикл заканчивает свою работу
  // игровой цикл

  while (rightAnswers < 3) {
    const firstNum = Math.floor(Math.random() * 100);// первое число прогрессии
    const coefficient = Math.floor(Math.random() * 12);// коэфицент
    const lengthProgression = Math.floor(Math.random() * (10 - 5) + 5);// длина прогрессии от 5 до 10
    const passPlace = Math.floor(Math.random() * (lengthProgression - 1) + 1);// позиция, где число будет пропущенно
    // генерируем правильный ответ
    const trueAnswer = firstNum + coefficient * (passPlace - 1);
    // прогрессия в массиве
    const arrProgression = [];// массив, содержащий числовой ряд прогрессии
    // цикл собирающий этот ряд
    let transit = 0;
    for (let i = 1; i <= lengthProgression; i += 1) {
      transit = firstNum + coefficient * (i - 1);
      arrProgression.push(transit);
    }
    // цикл формирующий прогрессию для пользователя в виде строки
    let strProgression = '';// строка
    for (let i = 0; i < arrProgression.length; i += 1) {
      if (i === passPlace - 1) {
        strProgression += '.. ';
      } else {
        strProgression += `${arrProgression[i]} `;
      }
    }
    // выводим вопрос пользователю
    console.log(`Question: ${strProgression}`);
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
