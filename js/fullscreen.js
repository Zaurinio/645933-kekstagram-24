import {isEscapeKey, isEnterKey} from './utils.js';
import {getFullscreenTemplate} from './fullscreen-template.js';
import {downloadingComments} from './comments-download.js';

const fullscreenPost = document.querySelector('.big-picture');
const picturesSection = document.querySelector('.pictures');
const documentBody = document.querySelector('body');
const fullscreenCloseButton = document.querySelector('.big-picture__cancel');

const commentsCount = document.querySelector('.social__comment-count'); // временный функционал
const commentLoadButton = document.querySelector('.comments-loader');

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
  // commentsCount.classList.add('hidden');
  // commentsLoadButton.classList.add('hidden');
};

const findPhoto = (evt, data) => {
  const checkPictureParent = evt.target.closest('.picture');
  if(checkPictureParent) {
    const currentElementId = checkPictureParent.id;
    const currentObject = data.find((el) => el.id === parseInt(currentElementId, 10));
    const totalCommentsQty = Object.keys(currentObject.comments).length;
    getFullscreenTemplate(currentObject, openUserForm, totalCommentsQty);

    // const download = () => downloadingComments(currentObject, totalCommentsQty);
    // commentsLoadButton.addEventListener('click', download);
  }
};

const initBigPhotoData = (data) => {
  const onPictureSectionClick = (e) => findPhoto(e, data);
  picturesSection.addEventListener('click', onPictureSectionClick);
};

export {initBigPhotoData};
