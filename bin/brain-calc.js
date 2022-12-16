#!/usr/bin/env node

// Импорты
import { sayHi, outputCongratulations, checkAnswer } from '../src/index.js';
import { calcLogig } from '../games/game-logik-calc.js';

// приветствие
const sayHiResult = sayHi();
// выводим правила игры
console.log('What is the result of the expression?');
// внешние переменные для игрового цикла

let rightAnswers = 0;// переменная, хранящая число правильных ответов игрока
const fail = false;// переменная "СТОП-СЛОВО" при ее значении true цикл заканчивает свою работу
let calcLogigResult;// в эту переменную поместим правильный ответ (результат calcLogig())

// игровой цикл
while (rightAnswers < 3) {
  calcLogigResult = calcLogig();// выполняем функцию
  const checkAnswerResult = checkAnswer(calcLogigResult, sayHiResult, fail);

  if (checkAnswerResult === true) { // завершаем игру если checkAnswer() возвращает true
    break;
  } else { // во всех других случаях увеличиваем кол-во правильных ответов на 1;
    rightAnswers += 1;
  }
}

// Выводим поздравление игроку, если он ответил три раза правильно
outputCongratulations(sayHiResult, rightAnswers);
