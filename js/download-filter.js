import {getRandomPositiveInteger} from './utils.js';
import {debounce} from './utils.js';
import {renderPhotos} from './rendering.js';

const imgFiltersForm = document.querySelector('.img-filters__form');
const randomFilterButton = document.querySelector('#filter-random');
const commentsFilterButton = document.querySelector('#filter-discussed');
const defaultFilterButton = document.querySelector('#filter-default');

const onFilterClick = (evt) => {
  const checkFilterParent = evt.target.closest('.img-filters__button');
  if (checkFilterParent) {
    const currentFilter = imgFiltersForm.querySelector('.img-filters__button--active');
    currentFilter.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  }
};

const changeDownloadFilter = () => {
  imgFiltersForm.addEventListener('click', onFilterClick);
};


const compareCommentsQty = (photoA, photoB) => {
  const commentsA = photoA.comments.length;
  const commentsB = photoB.comments.length;

  return commentsB - commentsA;
};

const createRandomPhotoIdList = () => {
  const idList = [];

  return () => {
    while (idList.length < 10) {
      let currentId = getRandomPositiveInteger(0, 24);
      while (idList.includes(currentId)) {
        currentId = getRandomPositiveInteger(0, 24);
      }
      idList.push(currentId);
    }
    return idList;
  };
};

const filterRandomPhotos = (photos) => {
  randomFilterButton.addEventListener('click', debounce(() => {
    document.querySelectorAll('.picture').forEach((el) => el.remove());
    const idList = createRandomPhotoIdList();
    const checkArray = (el) => idList().indexOf(el.id) !== -1;
    const randomPhotos = photos.filter(checkArray);
    renderPhotos(randomPhotos);
  }));
};

const filterPhotosByComments = (data) => {
  commentsFilterButton.addEventListener('click', debounce(() => {
    document.querySelectorAll('.picture').forEach((el) => el.remove());
    const sortedArray = data.slice().sort(compareCommentsQty);
    renderPhotos(sortedArray);
  }));
};

const filterDefaultPhotos = (data) => {
  defaultFilterButton.addEventListener('click', debounce(() => {
    document.querySelectorAll('.picture').forEach((el) => el.remove());
    renderPhotos(data);
  }));
};

export {changeDownloadFilter, filterRandomPhotos, filterPhotosByComments, filterDefaultPhotos};

