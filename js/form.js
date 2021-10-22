import {isEscapeKey, isEnterKey} from './utils.js';

const upload = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadOverlayCloseElement =  document.querySelector('#upload-cancel');
const documentBody = document.querySelector('body');
const hashtagTerms = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    uploadOverlay.classList.add('hidden');
    documentBody.classList.remove('modal-open');
    upload.value = '';
  }
  if (hashtagInput.onfocus) {
    evt.stopPropagation();
  }
};

function openUserForm () {
  uploadOverlay.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserForm () {
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  documentBody.classList.remove('modal-open');
  upload.value = '';
}

upload.addEventListener('change', () => {
  openUserForm ();
});

uploadOverlayCloseElement.addEventListener ('click', () => {
  closeUserForm ();
});

uploadOverlayCloseElement.addEventListener ('keydown', (evt) => {
  if(isEnterKey(evt)) {
    closeUserForm ();
  }
});

hashtagInput.addEventListener('input', () => {
  const inputValue = hashtagInput.value;
  const inputValueArray = inputValue.split(' ');
  const isDuplicate = inputValueArray.some((value, id) => inputValueArray.indexOf(value) !== id);
  const correctHashtag = inputValueArray.some((value) => !hashtagTerms.test(value));

  if (correctHashtag) {
    hashtagInput.setCustomValidity('Неправильный формат хэштега');
  } else if (isDuplicate) {
    hashtagInput.setCustomValidity('Не должно быть повторяющихся хэштегов');
  } else if (inputValueArray.length > 5) {
    hashtagInput.setCustomValidity('Нельзя указывать более 5 хэштегов');
  } else {
    hashtagInput.setCustomValidity('');
  }

  hashtagInput.reportValidity();
});

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

commentInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
