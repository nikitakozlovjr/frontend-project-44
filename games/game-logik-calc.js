// Данная функция:
// 1) генерирует два случайных числа;
// 2) случайным образом выбирает оператора из массива;
// 3) исчисляет правильный ответ.
// Функция возвращает правильный ответ (trueAnswer)
const calcLogig = () => {
  const rightAnswer = 0;
  const fail = false;
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
  return trueAnswer;
};

export { calcLogig };
