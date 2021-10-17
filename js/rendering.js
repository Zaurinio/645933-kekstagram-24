import {generatePhotos} from './data.js';

const randomPictureTemplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');

const similarPhotos = generatePhotos();
const similarListFragment = document.createDocumentFragment();


const getPhotoTemplate = ({element}) => {
  const photoElement = randomPictureTemplate.cloneNode(true);
  const commentsQty = Object.keys(element.comments).length;
  photoElement.querySelector('.picture__img').src = element.url;
  photoElement.querySelector('.picture__likes').textContent = element.likes;
  photoElement.querySelector('.picture__comments').textContent = commentsQty;
  photoElement.querySelector('.picture').id = element.id;

  return photoElement;
};

const renderPhotos = () => {
  similarPhotos.forEach((photo) => {
    similarListFragment.appendChild(getPhotoTemplate(photo));
  });
  picturesList.appendChild(similarListFragment);
};


export {renderPhotos};
