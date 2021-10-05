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

// ------------------------ Задание "Больше деталей"

const idOordinalList = [];
const urlOrdinalList = [];
const commentIdOordinalList = [];

const generateOrdinalMassive = (name, max) => {
  for (let i = 1; i <= max; i++) {
    name.push(i);
  }
  return name;
}; // генерирует массив заданной длинны

generateOrdinalMassive(idOordinalList, 25);
generateOrdinalMassive(urlOrdinalList, 25);
generateOrdinalMassive(commentIdOordinalList, 500);

const shuffle = (array) => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = swap;
  }
  return newArray;
}; // перемешивает массив в случайном порядке

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}; // генерирует случайное число в заданном диапазоне

const DESC_FIRST_PART = [
  'Это ',
  'Здесь ',
  'Однажды ',
  'Как вам ',
];

const DESC_SECOND_PART = [
  'я ',
  'мы ',
  'будучи ',
];

const DESC_THIRD_PART = [
  'на ',
];

const DESC_FOURTH_PART = [
  'Панаме',
  'Мадагаскаре',
  'Мальдивах',
  'Мальорке',
  'Гаваях',
];

const getRandomDescription = () => {
  const description = DESC_FIRST_PART[getRandomPositiveInteger(0, DESC_FIRST_PART.length - 1)] +
  DESC_SECOND_PART[getRandomPositiveInteger(0, DESC_SECOND_PART.length - 1)] +
  DESC_THIRD_PART[getRandomPositiveInteger(0, DESC_THIRD_PART.length - 1)] +
  DESC_FOURTH_PART[getRandomPositiveInteger(0, DESC_FOURTH_PART.length - 1)];

  return description;
}; // генерирует случайный текст описания

const MIN_LIKES_QTY = 15;
const MAX_LIKES_QTY = 200;

const getLikesQuantity = () => {
  const randomQty = getRandomPositiveInteger(MIN_LIKES_QTY, MAX_LIKES_QTY);
  return randomQty;
}; // генерирует случайное количество лайков

const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomMessage = () => {
  const randomMessageNumber = getRandomPositiveInteger(0, COMMENTS_MESSAGES.length - 1);
  const randomMessage = COMMENTS_MESSAGES[randomMessageNumber];
  return randomMessage;
}; // генерирует случайный текст комментария

const COMMENTS_NAMES = [
  'Авксентий',
  'Леонард',
  'Маврикий',
  'Бенедикт',
  'Вальдемар',
  'Рудольф',
];

const getRandomName = () => {
  const randomNameNumber = getRandomPositiveInteger(0, COMMENTS_NAMES.length - 1);
  const randomName = COMMENTS_NAMES[randomNameNumber];
  return randomName;
}; // генерирует случайное имя комментатора

const PHOTOS_QUANTITY = 25;

const generatePhotos = () => {
  const result = [];
  const idList = shuffle(idOordinalList);
  const urlList = shuffle(urlOrdinalList);
  const commentIdList = shuffle(commentIdOordinalList);
  for (let i = 0; i < PHOTOS_QUANTITY; i++) {
    result.push(
      {
        id: idList[i],
        url: urlList[i],
        description: getRandomDescription(),
        likes: getLikesQuantity(),
        comments: {
          id: commentIdList[i],
          avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
          message: getRandomMessage(),
          name: getRandomName(),
        },
      },
    );
  }
  return result;
};

generatePhotos();
