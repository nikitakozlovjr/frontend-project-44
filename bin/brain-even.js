// Импорты 
import readlineSync from 'readline-sync';

// Код
//приветствие

console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

//выводим правила игры

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let rightAnswers = 0;

//игровой цикл

while (rightAnswers < 3) {
  const num = Math.floor(Math.random() * 100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  //проверка ответа
  if (num % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    rightAnswers += 1;
  } else if (num % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
    rightAnswers += 1;
  } else if (num % 2 === 0 && answer === 'no') {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let's try again, ${name}!`);
    break;
  } else if (num % 2 !== 0 && answer === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (rightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
}