import {getRandomPositiveInteger} from './utils.js';
import {debounce} from './utils.js';
import {renderPhotos} from './rendering.js';

const imgFiltersForm = document.querySelector('.img-filters__form');

const compareCommentsQty = (photoA, photoB) => {
  const commentsA = photoA.comments.length;
  const commentsB = photoB.comments.length;

  return commentsB - commentsA;
};

const createRandomPhotoIdList = () => {
  const idNumbers = [];

  return () => {
    while (idNumbers.length < 10) {
      let currentId = getRandomPositiveInteger(0, 24);
      while (idNumbers.includes(currentId)) {
        currentId = getRandomPositiveInteger(0, 24);
      }
      idNumbers.push(currentId);
    }
    return idNumbers;
  };
};

function changeFilterValue (evt, photos) {
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
    const sortedArray = photos.slice().sort(compareCommentsQty);
    renderPhotos(sortedArray);
  }

  if (evt.target.id === 'filter-default') {
    document.querySelectorAll('.picture').forEach((el) => el.remove());
    renderPhotos(photos);
  }
}

const bindFilterButtonListener = (photos) => {
  const onFilterClick = (evt) => changeFilterValue (evt, photos);
  imgFiltersForm.addEventListener('click', debounce(onFilterClick, 500));
};

export {bindFilterButtonListener};

