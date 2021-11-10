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

    sendData(
      () => onSendFormData(),
      () => showFormErrorMsg(),
      new FormData(imgUploadForm),
    );

  });
};

export {setUserFormSubmit};
