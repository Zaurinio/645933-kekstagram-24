// пример вычисления взят из источника: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber (min, max) {
  return (min >= 0 && max >= 0) ? Math.floor(Math.random() * (max - min + 1)) + min : console.log('Диапазон может быть только положительный, включая ноль');
}

getRandomNumber(0, 20);

function checkLineLength (line, maxLength) {
  return line.length <= maxLength;
}

checkLineLength('тестовая_строка', 100);
