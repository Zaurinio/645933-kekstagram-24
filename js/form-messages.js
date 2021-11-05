import {isEscapeKey} from './utils.js';

const formSuccessMsgTemplate = document.querySelector('#success').content;
const formErrorMsgTemplate = document.querySelector('#error').content;

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage ();
  }
};

const onModalWindowClick = (evt) => {
  if (evt.target.matches('.success') || evt.target.matches('.error')) {
    closeMessage ();
  }
};

function closeMessage () {
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onModalWindowClick);
  if (document.querySelector('.success')) {
    document.querySelector('.success').remove();
  } else {
    document.querySelector('.error').remove();
  }
}

const showFormSuccessMsg = () => {
  const formSuccessMsg = formSuccessMsgTemplate.cloneNode(true);
  document.querySelector('body').appendChild(formSuccessMsg);

  const successMessageCloseButton = document.querySelector('.success__button');
  successMessageCloseButton.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onModalWindowClick);
};

const showFormErrorMsg = () => {
  const formErrorMsg = formErrorMsgTemplate.cloneNode(true);
  document.querySelector('body').appendChild(formErrorMsg);

  const errorMessageCloseButton = document.querySelector('.error__button');
  errorMessageCloseButton.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onModalWindowClick);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
};

export {showFormSuccessMsg, showFormErrorMsg, showAlert};
