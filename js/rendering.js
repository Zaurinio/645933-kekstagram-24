import {generatePhotos} from './data.js';

const randomPictureTemplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');

const similarPhotos = generatePhotos();
const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach(({url, likes, comments}) => {
  const photoElement = randomPictureTemplate.cloneNode(true);
  const commentsQty = Object.keys(comments).length;
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = commentsQty;
  similarListFragment.appendChild(photoElement);
});

picturesList.appendChild(similarListFragment);
