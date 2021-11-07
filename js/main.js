import {renderPhotos} from './rendering.js';
import {onUploadButtonChange} from './form.js';
import {closeUserForm} from './form.js';
import {setUserFormSubmit} from './form-submit.js';
import {initBigPhotoData} from './fullscreen.js';
import {onFilterClick} from './effects.js';
import {onScaleButtonClick} from './scale.js';
import './form-slider.js';
import {showFormSuccessMsg} from './form-messages.js';
import {getData} from './api.js';
import {showAlert} from './form-messages.js';
import {filterRandomPhotos} from './download-filter.js';
import {filterPhotosByComments} from './download-filter.js';
import {filterDefaultPhotos} from './download-filter.js';
import {changeDownloadFilter} from './download-filter.js';

onUploadButtonChange();
onFilterClick();
onScaleButtonClick();
changeDownloadFilter();

const iniPage = (photos) => (
  renderPhotos(photos),
  initBigPhotoData(photos),
  filterRandomPhotos(photos),
  filterPhotosByComments(photos),
  filterDefaultPhotos(photos)
);

const onError = () => {
  showAlert('Ошибка получения данных. Перезагрузите страницу');
};

getData(iniPage, onError);

setUserFormSubmit(showFormSuccessMsg, closeUserForm);

