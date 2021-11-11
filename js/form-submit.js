import {showFormErrorMsg} from './form-messages.js';
import {showFormSuccessMsg} from './form-messages.js';
import {sendData} from './api.js';
import {onCloseButtonClick} from './form.js';

const imgUploadForm = document.querySelector('.img-upload__form');

const setUserFormSubmit = () => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const onSendFormData = () => {
      onCloseButtonClick();
      showFormSuccessMsg();
    };

    const onErrorFormData = () => {
      onCloseButtonClick();
      showFormErrorMsg();
    };

    sendData(
      () => onSendFormData(),
      () => onErrorFormData(),
      new FormData(imgUploadForm),
    );

  });
};

export {setUserFormSubmit};
