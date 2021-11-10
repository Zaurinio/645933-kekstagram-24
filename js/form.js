import {isEscapeKey, isEnterKey} from './utils.js';
import {resetEffectSettings} from './effects.js';
import {createFormSlider, resetSliderSettings} from './form-slider.js';
import {resetScaleValue} from './scale.js';
import {resetFormText} from './form-validation.js';
import {onInputChange} from './form-validation.js';
import {onSubmitButtonClick} from './form-validation.js';

const uploadButton = document.querySelector('#upload-file');
const editForm = document.querySelector('.img-upload__overlay');
const editFormCloseButton =  document.querySelector('#upload-cancel');
const documentBody = document.querySelector('body');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const formSubmitButton = document.querySelector('.img-upload__submit');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    uploadButton.value = '';
    onCloseButtonClick ();
  }
};

const onCloseButtonKeydown = (evt) => {
  if(isEnterKey(evt)) {
    uploadButton.value = '';
    onCloseButtonClick ();
  }
};

const onInputEscKeydown = (evt) => {
  evt.stopPropagation();
};

function onCloseButtonClick () {
  editForm.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  uploadButton.value = '';
  document.removeEventListener('keydown', onPopupEscKeydown);
  editFormCloseButton.removeEventListener ('click', onCloseButtonClick);
  editFormCloseButton.removeEventListener('keydown', onCloseButtonKeydown);
  hashtagInput.removeEventListener('input', onInputChange);
  hashtagInput.removeEventListener('keydown', onInputEscKeydown);
  commentInput.removeEventListener('keydown', onInputEscKeydown);
  formSubmitButton.removeEventListener ('click', onSubmitButtonClick);
  resetEffectSettings();
  resetSliderSettings();
  resetScaleValue();
  resetFormText();
}

function onUploadButtonChange () {
  editForm.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  editFormCloseButton.addEventListener ('click', onCloseButtonClick);
  editFormCloseButton.addEventListener('keydown', onCloseButtonKeydown);
  hashtagInput.addEventListener('input', onInputChange);
  hashtagInput.addEventListener('keydown', onInputEscKeydown);
  commentInput.addEventListener('keydown', onInputEscKeydown);
  formSubmitButton.addEventListener ('click', onSubmitButtonClick);
  createFormSlider();
}

const bindUploadButtonListener = () => uploadButton.addEventListener('change', onUploadButtonChange);

export {bindUploadButtonListener, onCloseButtonClick};
