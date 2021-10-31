import {isEscapeKey, isEnterKey} from './utils.js';
import {fillFullscreenTemplate} from './fullscreen-template.js';
import {onCommentLoadButtonClick, resetCommentsValue} from './comments-download.js';

const fullscreenPost = document.querySelector('.big-picture');
const picturesSection = document.querySelector('.pictures');
const documentBody = document.querySelector('body');
const fullscreenCloseButton = document.querySelector('.big-picture__cancel');
const commentLoadButton = document.querySelector('.comments-loader');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserForm ();
  }
};

const onCloseButtonKeydown = (evt) => {
  if(isEnterKey(evt)) {
    closeUserForm ();
  }
};

function closeUserForm () {
  fullscreenPost.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  fullscreenCloseButton.removeEventListener ('click', closeUserForm);
  fullscreenCloseButton.removeEventListener('keydown', onCloseButtonKeydown);
  commentLoadButton.removeEventListener ('click', onCommentLoadButtonClick);
  resetCommentsValue();
}

function openUserForm () {
  fullscreenPost.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  fullscreenCloseButton.addEventListener ('click', closeUserForm);
  fullscreenCloseButton.addEventListener('keydown', onCloseButtonKeydown);
  commentLoadButton.addEventListener ('click', onCommentLoadButtonClick);
}

const findPhoto = (evt, data) => {
  const checkPictureParent = evt.target.closest('.picture');
  if(checkPictureParent) {
    const currentElementId = checkPictureParent.id;
    const currentObject = data.find((el) => el.id === parseInt(currentElementId, 10));
    fillFullscreenTemplate(currentObject);
    openUserForm();
  }
};

const initBigPhotoData = (data) => {
  const onPictureSectionClick = (e) => findPhoto(e, data);
  picturesSection.addEventListener('click', onPictureSectionClick);
};

export {initBigPhotoData};
