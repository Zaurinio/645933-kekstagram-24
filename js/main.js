import {renderPhotos} from './rendering.js';
import {onUploadButtonChange} from './form.js';
import {closeUserForm} from './form.js';
import {setUserFormSubmit} from './form-submit.js';
import {setValidationRules} from './form-validation.js';
import {initBigPhotoData} from './fullscreen.js';
import {onFilterClick} from './effects.js';
import {onScaleButtonClick} from './scale.js';
import './form-slider.js';
import {showFormSuccessMsg} from './form-messages.js';
import {getData} from './api.js';
import {showAlert} from './form-messages.js';

setValidationRules();
onUploadButtonChange();
onFilterClick();
onScaleButtonClick();

const iniPage = (photos) => (
  renderPhotos(photos),
  initBigPhotoData(photos)
);

const onError = () => {
  showAlert('Ошибка получения данных. Перезагрузите страницу');
};

getData(iniPage, onError);

setUserFormSubmit(showFormSuccessMsg, closeUserForm);
