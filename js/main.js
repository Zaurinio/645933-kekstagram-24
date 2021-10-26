import {renderPhotos} from './rendering.js';
import {generatePhotos} from './data.js';
import './form.js';
import {setValidationRules} from './form-validation.js';

renderPhotos(generatePhotos());
setValidationRules();
