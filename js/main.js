import {renderPhotos} from './rendering.js';
import {generatePhotos} from './data.js';
import {onUploadButtonChange} from './form.js';
import {setValidationRules} from './form-validation.js';
import {onPictureClick} from './fullscreen.js';

const generatedPhotos = generatePhotos();


renderPhotos(generatedPhotos);
setValidationRules();
onUploadButtonChange();
onPictureClick(generatedPhotos);
