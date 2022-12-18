// Импорты
import readlineSync from 'readline-sync';

// Приветствует пользователя
// Возвращает имя пользователя
const sayHi = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;// возвращаем переменную name;
};
// Данна функция принимает на вход:
// 1)правильный ответ(trueAnswer)
// 2)имя пользователя(name)
// 3)кол-во правильных ответов(rightAnswers)
// 4)CТОП-СЛОВО(fail)
// Выводит пользователю поле для ввода ответа
// При верном ответе:
// 1)возвращает входящее значени СТОП-СЛОВА(false);
// 2)выводит пользователю что ответ праивльный.
// При неправильном ответе:
// 1)меняет значение СТОП-СЛОВА на true;
// 2)возвращает его и выводит пользователю, что ответ неверный и прощается с ним.
const checkAnswer = (trueAnswer, name) => {
  let fail = ' ';
  // просим ввести его ответ и сразуже сохраняем его в переменной playerAnswer
  const playerAnswer = readlineSync.question('Your answer: ');
  // делаем проверку результата
  if (playerAnswer === String(trueAnswer)) {
    console.log('Correct!');
    return fail;
  } if (playerAnswer !== String(trueAnswer)) {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.)`);
    console.log(`Let's try again, ${name}!`);
    fail = true;
    return fail;
  }
  return ' ';
};
// Данная функция выводит поздравление
// Принемает имя пользователя и кол-во правильных ответов
const outputCongratulations = (name, rightAnswers) => {
  if (rightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

// Экспортируем функции приветствия, проверки ответа, вывода поздравления
export { sayHi, outputCongratulations, checkAnswer };
