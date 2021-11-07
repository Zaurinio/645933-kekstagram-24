import {isEscapeKey, isEnterKey} from './utils.js';
import {resetFilterSettings} from './effects.js';
import {createFormSlider, resetSliderSettings} from './form-slider.js';
import {resetScaleValue} from './scale.js';
import {resetFormText} from './form-validation.js';
import {validationRules} from './form-validation.js';
import {invalidInputHighlighting} from './form-validation.js';

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
    closeUserForm ();
  }
};

const onCloseButtonKeydown = (evt) => {
  if(isEnterKey(evt)) {
    uploadButton.value = '';
    closeUserForm ();
  }
};

const checkInputFocus = (evt) => {
  evt.stopPropagation();
};

function closeUserForm () {
  editForm.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  uploadButton.value = '';
  document.removeEventListener('keydown', onPopupEscKeydown);
  editFormCloseButton.removeEventListener ('click', closeUserForm);
  editFormCloseButton.removeEventListener('keydown', onCloseButtonKeydown);
  hashtagInput.removeEventListener('input', validationRules);
  hashtagInput.removeEventListener('keydown', checkInputFocus);
  commentInput.removeEventListener('keydown', checkInputFocus);
  formSubmitButton.removeEventListener ('click', invalidInputHighlighting);
  resetFilterSettings();
  resetSliderSettings();
  resetScaleValue();
  resetFormText();
}

function openUserForm () {
  editForm.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  editFormCloseButton.addEventListener ('click', closeUserForm);
  editFormCloseButton.addEventListener('keydown', onCloseButtonKeydown);
  hashtagInput.addEventListener('input', validationRules);
  hashtagInput.addEventListener('keydown', checkInputFocus);
  commentInput.addEventListener('keydown', checkInputFocus);
  formSubmitButton.addEventListener ('click', invalidInputHighlighting);
  createFormSlider();
}

const onUploadButtonChange = () => uploadButton.addEventListener('change', openUserForm);

export {onUploadButtonChange, closeUserForm};
