import {getRandomPositiveInteger} from './utils.js';
import {debounce} from './utils.js';
import {renderPhotos} from './rendering.js';

const RANDOM_PHOTOS_QTY = 10;
const ON_PAGE_PHOTOS_QTY = 24;

const imgFiltersForm = document.querySelector('.img-filters__form');

const compareCommentsQty = (photoA, photoB) => {
  const commentsA = photoA.comments.length;
  const commentsB = photoB.comments.length;

  return commentsB - commentsA;
};

const createRandomPhotoIdList = () => {
  const idNumbers = [];

  return () => {
    while (idNumbers.length < RANDOM_PHOTOS_QTY) {
      let currentId = getRandomPositiveInteger(0, ON_PAGE_PHOTOS_QTY);
      while (idNumbers.includes(currentId)) {
        currentId = getRandomPositiveInteger(0, ON_PAGE_PHOTOS_QTY);
      }
      idNumbers.push(currentId);
    }
    return idNumbers;
  };
};

const changeFilterValue = (evt, photos) => {
  const checkFilterParent = evt.target.closest('.img-filters__button');
  if (checkFilterParent) {
    const currentFilter = imgFiltersForm.querySelector('.img-filters__button--active');
    currentFilter.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  }


  if (evt.target.id === 'filter-random') {
    document.querySelectorAll('.picture').forEach((el) => el.remove());
    const idList = createRandomPhotoIdList();
    const checkArray = (el) => idList().indexOf(el.id) !== -1;
    const randomPhotos = photos.filter(checkArray);
    renderPhotos(randomPhotos);
  }

  if (evt.target.id === 'filter-discussed') {
    document.querySelectorAll('.picture').forEach((el) => el.remove());
    const sortedPhotos = photos.slice().sort(compareCommentsQty);
    renderPhotos(sortedPhotos);
  }

  if (evt.target.id === 'filter-default') {
    document.querySelectorAll('.picture').forEach((el) => el.remove());
    renderPhotos(photos);
  }
};

const bindFilterButtonListener = (photos) => {
  const onFilterClick = (evt) => changeFilterValue (evt, photos);
  imgFiltersForm.addEventListener('click', debounce(onFilterClick, 500));
};

export {bindFilterButtonListener};

