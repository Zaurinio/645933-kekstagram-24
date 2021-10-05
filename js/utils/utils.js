function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('тестовая_строка', 100);
// проверка длины строки

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger(1, 10);
// генерация случайного числа в заданном диапазоне

function getRandomNumber (min, max) {
  const moduleMin = Math.abs(min);
  const moduleMax = Math.abs(max);
  if (moduleMax < moduleMin) {
    return Math.floor(Math.random() * (moduleMin - moduleMax + 1)) + moduleMax;
  }
  return Math.floor(Math.random() * (moduleMax - moduleMin + 1)) + moduleMin;
}

getRandomNumber(0, 20);
// генерация случайного числа в заданном диапазоне

const shuffle = (array) => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = swap;
  }
  return newArray;
};

shuffle();
// перемешивание массив в случайном порядке
