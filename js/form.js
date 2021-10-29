import {isEscapeKey, isEnterKey} from './utils.js';

const uploadButton = document.querySelector('#upload-file');
const editForm = document.querySelector('.img-upload__overlay');
const editFormCloseButton =  document.querySelector('#upload-cancel');
const documentBody = document.querySelector('body');
const hashtagInput = document.querySelector('.text__hashtags');

const onPopupEscKeydown = (evt) => {
  if (hashtagInput.onfocus) {
    evt.stopPropagation();
  }

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    editForm.classList.add('hidden');
    documentBody.classList.remove('modal-open');
    uploadButton.value = '';
  }
};

const onCloseButtonKeydown = (evt) => {
  if(isEnterKey(evt)) {
    editForm.classList.add('hidden');
    documentBody.classList.remove('modal-open');
    uploadButton.value = '';
  }
};

const closeUserForm = () => {
  editForm.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  uploadButton.value = '';
  document.removeEventListener('keydown', onPopupEscKeydown);
  editFormCloseButton.removeEventListener ('click', closeUserForm);
  editFormCloseButton.removeEventListener('keydown', onCloseButtonKeydown);
};

const openUserForm = () => {
  editForm.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  editFormCloseButton.addEventListener ('click', closeUserForm);
  editFormCloseButton.addEventListener('keydown', onCloseButtonKeydown);
};

const onUploadButtonChange = () => uploadButton.addEventListener('change', openUserForm);

export {onUploadButtonChange};
