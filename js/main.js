import {renderPhotos} from './rendering.js';
import {generatePhotos} from './data.js';
import {onUploadButtonChange} from './form.js';
import {setValidationRules} from './form-validation.js';
import {initBigPhotoData} from './fullscreen.js';

import './form-slider.js';

const generatedPhotos = generatePhotos();


renderPhotos(generatedPhotos);
setValidationRules();
onUploadButtonChange();

initBigPhotoData(generatedPhotos);


// тестирую для задания "10.6. Помощь друга"

// Фильтр
import {getFilterName} from './effects.js';
const effectsList = document.querySelector('.effects__list');
effectsList.addEventListener('click', getFilterName);

// Масштаб
import {changeScaleValue} from './scale.js';
const scaleSection = document.querySelector('.scale');
scaleSection.addEventListener('click', changeScaleValue);
