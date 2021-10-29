import {isEscapeKey, isEnterKey} from './utils.js';
import {getFullscreenTemplate} from './fullscreen-template.js';

const fullscreenPost = document.querySelector('.big-picture');
const picturesSection = document.querySelector('.pictures');
const documentBody = document.querySelector('body');
const fullscreenCloseButton = document.querySelector('.big-picture__cancel');

const commentsCount = document.querySelector('.social__comment-count'); // временный функционал
const commentsLoadButton = document.querySelector('.comments-loader'); // временный функционал

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    fullscreenPost.classList.add('hidden');
    documentBody.classList.remove('modal-open');
  }
};

const onCloseButtonKeydown = (evt) => {
  if(isEnterKey(evt)) {
    fullscreenPost.classList.add('hidden');
    documentBody.classList.remove('modal-open');
  }
};

const closeUserForm = () => {
  fullscreenPost.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  fullscreenCloseButton.removeEventListener ('click', closeUserForm);
  fullscreenCloseButton.removeEventListener('keydown', onCloseButtonKeydown);
};

const openUserForm = () => {
  fullscreenPost.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  fullscreenCloseButton.addEventListener ('click', closeUserForm);
  fullscreenCloseButton.addEventListener('keydown', onCloseButtonKeydown);

  commentsCount.classList.add('hidden'); // временный функционал
  commentsLoadButton.classList.add('hidden'); // временный функционал
};

/// правки
const findPhoto = (evt, data) => {
  const checkPictureParent = evt.target.closest('.picture');
  if(checkPictureParent) {
    const currentElementId = checkPictureParent.id;
    const currentObject = data.find((el) => el.id === parseInt(currentElementId, 10));
    getFullscreenTemplate(currentObject, openUserForm);
  }
};

const initBigPhotoData = (data) => {
  const onPictureSectionClick = (e) => findPhoto(e, data);
  picturesSection.addEventListener('click', onPictureSectionClick);
};

export {initBigPhotoData};


// function getChoosenPhoto (array) {
//   const generatedArray = array;
//   return function onPhotoClick (evt) {
//     if(evt.target.closest('.picture')) {
//       const currentElementId = evt.target.closest('.picture').id;
//       const currentObject = generatedArray.find((el) => el.id === parseInt(currentElementId, 10));
//       getFullscreenTemplate(currentObject);
//     }
//   };
// }

// const onPictureClick = (array) => picturesSection.addEventListener('click', getChoosenPhoto(array));

// export {onPictureClick};
