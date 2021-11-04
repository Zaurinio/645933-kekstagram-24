import {renderPhotos} from './rendering.js';
import {generatePhotos} from './data.js';
import {onUploadButtonChange} from './form.js';
import {setValidationRules} from './form-validation.js';
import {initBigPhotoData} from './fullscreen.js';
import {onFilterClick} from './effects.js';
import {onScaleButtonClick} from './scale.js';
import './form-slider.js';

const generatedPhotos = generatePhotos();


renderPhotos(generatedPhotos);
setValidationRules();
onUploadButtonChange();
initBigPhotoData(generatedPhotos);
onFilterClick();
onScaleButtonClick();
