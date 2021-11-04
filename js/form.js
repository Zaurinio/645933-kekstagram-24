import {isEscapeKey, isEnterKey} from './utils.js';
import {resetFilterSettings} from './effects.js';
import {createFormSlider, resetSliderSettings} from './form-slider.js';
import {resetScaleValue} from './scale.js';

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
    uploadButton.value = '';
    closeUserForm ();
  }
};

const onCloseButtonKeydown = (evt) => {
  if(isEnterKey(evt)) {
    uploadButton.value = '';
    closeUserForm ();
  }
};

function closeUserForm () {
  editForm.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  uploadButton.value = '';
  document.removeEventListener('keydown', onPopupEscKeydown);
  editFormCloseButton.removeEventListener ('click', closeUserForm);
  editFormCloseButton.removeEventListener('keydown', onCloseButtonKeydown);
  resetFilterSettings();
  resetSliderSettings();
  resetScaleValue();
}

function openUserForm () {
  editForm.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  editFormCloseButton.addEventListener ('click', closeUserForm);
  editFormCloseButton.addEventListener('keydown', onCloseButtonKeydown);
  createFormSlider();
}

const onUploadButtonChange = () => uploadButton.addEventListener('change', openUserForm);

export {onUploadButtonChange};
