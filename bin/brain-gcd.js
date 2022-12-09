#!/usr/bin/env node

// Импорты 
import readlineSync from 'readline-sync';

// Код
//приветствие

console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

//выводим правила игры

console.log('Find the greatest common divisor of given numbers.');

//игровой цикл

let rightAnswers = 0;

while (rightAnswers < 3) {
    const firstNum = Math.floor(Math.random() * 100);//первое число
    const secondNum = Math.floor(Math.random() * 100);//второе число
    //создаем переменную, которая будет хранить число до какого нужно идти циклу
    let mostBigVersion = 0;
    //предел числа до какого мы ищем 
    if (firstNum <= secondNum) {
      mostBigVersion = firstNum;
    } else {
      mostBigVersion = secondNum;
    }
    //создаем переменную, которая будет хранить правильный ответ
    let trueAnswer = 0;
    //создаем цикл, который будет проходить от 1 до mostBigVersion;
    for (let i = 1; i <= mostBigVersion; i += 1) {
      //проверяем на условие кратности firstNum и secondNum
      if (firstNum % i === 0 && secondNum % i === 0) {
        trueAnswer = i;
      }
    }
    //задаем вопрос
    console.log(`Question: ${firstNum} ${secondNum}`);
    //Просим ввести ответ и сохраняем в перемнной
    const playerAnswer = readlineSync.question("Your answer: ");
    //делаем проверку результата
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