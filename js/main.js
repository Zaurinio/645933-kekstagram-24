import {renderPhotos} from './rendering.js';
import {bindUploadButtonListener} from './form.js';
import {setUserFormSubmit} from './form-submit.js';
import {initBigPhotoData} from './fullscreen.js';
import {bindEffectsButtonsListener} from './effects.js';
import {bindScaleButtonListener} from './scale.js';
import './form-slider.js';
import {getData} from './api.js';
import {showAlert} from './form-messages.js';
import {bindFilterButtonListener} from './download-filter.js';
import {bindFileChooserListener} from './form-photo-upload.js';

bindUploadButtonListener();
bindEffectsButtonsListener();
bindScaleButtonListener();
bindFileChooserListener();

const iniPage = (photos) => (
  renderPhotos(photos),
  initBigPhotoData(photos),
  bindFilterButtonListener(photos)
);

const onGetDataError = () => {
  showAlert('Ошибка получения данных. Перезагрузите страницу');
};

getData(iniPage, onGetDataError);

setUserFormSubmit();

