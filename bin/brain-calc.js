// Импорты 
import readlineSync from 'readline-sync';

// Код
//приветствие

console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

//выводим правила игры

console.log('What is the result of the expression?');

//игровой цикл

let rightAnswers = 0;

while (rightAnswers < 3) {
    //генерация двух случайных чисел
    const fistNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    //генерация случайного индекса
    const index = Math.floor(Math.random() * 3);;
    //массив, содержащий всевозможные операнды
    const arrOfOperant = ["*", "+", "-"];
    //составляем выражение для пользователя
    const expression = String(fistNum) + ' ' + arrOfOperant[index] + ' ' + String(secondNum);
    //инициализируем переменную, которая будет содержать правильный ответ
    let trueAnswer = 0;
    //помещаем правильный ответ в переменую
    if (index === 0) { //если index случайным образом оказался 0
    trueAnswer = fistNum * secondNum;
    } else if (index === 1) { //если index случайным образом оказался 1
    trueAnswer = fistNum + secondNum;
    } else if (index === 2) { //если index случайным образом оказался 2
    trueAnswer = fistNum - secondNum;
    }
    //выводим пользователю выражение, которое он должен решить
    console.log(`Question: ${expression}`);
    // просим ввести его ответ и сразуже сохраняем его в переменной playerAnswer
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



