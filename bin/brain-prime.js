#!/usr/bin/env node

// Импорты 
import readlineSync from 'readline-sync';

// Код
//приветствие

console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

//выводим правила игры

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

//игровой цикл

let rightAnswers = 0; 

while (rightAnswers < 3) {
  const num = Math.floor(Math.random() * 1000);//генерируем число
  let stack = [];//создаем массив, который будет являться стеком
  //запускаем цикл, который будет проходить по всем возможным делителям    
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      stack.push(i);
    } 
    if(stack.length > 2) {
      break;
    }
  }
  //создаем переменную, в которую помещаем правильный ответ
  let trueAnswer = '';
  if (stack.length <= 2) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  //выводим вопрос пользователю
  console.log(`Question: ${num}`);
  //предоставляем поле для ввода ответа пользователю и тут же сохраняем ее в переменную
  const playerAnswer = readlineSync.question('Your answer: ');
  //проверяем ответ пользователя
  if (trueAnswer === playerAnswer) {
    console.log('Correct!');
    rightAnswers += 1;
  } else if (trueAnswer === 'yes' && playerAnswer !== 'yes') {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let's try again, ${name}!`);
    break;
  } else if (trueAnswer === 'no' && playerAnswer !== 'no') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (rightAnswers === 3) {
  console.log(`Congratulations, ${name}!`);
}
