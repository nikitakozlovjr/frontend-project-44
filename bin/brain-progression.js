#!/usr/bin/env node

// Импорты
import readlineSync from 'readline-sync';

// Код
// приветствие

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

// выводим правила игры

console.log('What number is missing in the progression?');

// игровой цикл

let rightAnswers = 0;

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
  // предлагаем ввести игроку ответ
  const playerAnswer = readlineSync.question('Your answer: ');
  // делаем проверку результата
  if (Number(playerAnswer) === trueAnswer) {
    console.log('Correct!');
    rightAnswers += 1;
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.)`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (rightAnswers === 3) {
  console.log(`Congratulations, ${name}!`);
}
