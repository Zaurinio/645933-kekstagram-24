// пример вычисления взят из источника: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber (min, max) {
  const moduleMin = Math.abs(min);
  const moduleMax = Math.abs(max);
  if (moduleMax < moduleMin) {
    return Math.floor(Math.random() * (moduleMin - moduleMax + 1)) + moduleMax;
  }
  return Math.floor(Math.random() * (moduleMax - moduleMin + 1)) + moduleMin;
}

getRandomNumber(0, 20);

function checkLineLength (line, maxLength) {
  return line.length <= maxLength;
}

checkLineLength('тестовая_строка', 100);
