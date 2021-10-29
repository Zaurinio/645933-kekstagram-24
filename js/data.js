import {getRandomPositiveInteger, shuffle, generateOrdinalMassive} from './utils.js';

const idOordinalList = [];
const urlOrdinalList = [];
const commentIdOordinalList = [];

generateOrdinalMassive(idOordinalList, 25);
generateOrdinalMassive(urlOrdinalList, 25);
generateOrdinalMassive(commentIdOordinalList, 500);

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
  const createCommentsArray = () => {
    const commentsQty = getRandomPositiveInteger(1,15);
    const array = [];
    for (let i = 0; i < commentsQty; i++) {
      array[i] = {
        id: commentIdList[i],
        avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
        message: getRandomMessage(),
        name: getRandomName(),
      };
    }
    return array;
  }; // генерирует случайное кол-во комментариев к фото

  for (let i = 0; i < PHOTOS_QUANTITY; i++) {
    result.push(
      {
        id: idList[i],
        url: urlList[i],
        description: getRandomDescription(),
        likes: getLikesQuantity(),
        comments: createCommentsArray(),
      },
    );
  }
  return result;
};

export {generatePhotos};
