function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
} // генерация случайного числа в заданном диапазоне

const shuffle = (array) => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = swap;
  }
  return newArray;
}; // перемешивание массив в случайном порядке


const generateOrdinalMassive = (name, max) => {
  for (let i = 1; i <= max; i++) {
    name.push(i);
  }
  return name;
}; // генерирует массив заданной длины

export {getRandomPositiveInteger, shuffle, generateOrdinalMassive};
