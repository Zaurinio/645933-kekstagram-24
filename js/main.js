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

getData(
  (photos) => (renderPhotos(photos), initBigPhotoData(photos)),
  () => showAlert('Ошибка получения данных. Перезагрузите страницу'),
);

setUserFormSubmit(showFormSuccessMsg, closeUserForm);
