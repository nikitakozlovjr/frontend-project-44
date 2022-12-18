// Импорты
import { sayHi, outputCongratulations, checkAnswer } from '../index.js';

export default () => {
  // приветствие

  const sayHiResult = sayHi();

  // выводим правила игры

  console.log('Find the greatest common divisor of given numbers.');

  // переменные для игрового цикла

  let rightAnswers = 0;// переменная, хранящая число правильных ответов игрока
  const fail = false;// переменная "СТОП-СЛОВО" при ее значении true цикл заканчивает свою работу

  // игрвоой цикл

  while (rightAnswers < 3) {
    const firstNum = Math.floor(Math.random() * (100 - 1) + 1);// первое число
    const secondNum = Math.floor(Math.random() * (100 - 1) + 1);// второе число

    // создаем переменную, которая будет хранить число до какого нужно идти циклу
    let mostBigVersion = 0;
    // предел числа до какого мы ищем
    if (firstNum <= secondNum) {
      mostBigVersion = firstNum;
    } else {
      mostBigVersion = secondNum;
    }
    // создаем переменную, которая будет хранить правильный ответ
    let trueAnswer = 0;
    // создаем цикл, который будет проходить от 1 до mostBigVersion;
    for (let i = 1; i <= mostBigVersion; i += 1) {
    // проверяем на условие кратности firstNum и secondNum
      if (firstNum % i === 0 && secondNum % i === 0) {
        trueAnswer = i;
      }
    }
    // задаем вопрос
    console.log(`Question: ${firstNum} ${secondNum}`);
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
