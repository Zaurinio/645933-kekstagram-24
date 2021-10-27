import {renderPhotos} from './rendering.js';
import {generatePhotos} from './data.js';
import {uploadButton, openUserForm} from './form.js';
import {setValidationRules} from './form-validation.js';

renderPhotos(generatePhotos());
setValidationRules();
uploadButton.addEventListener('change', openUserForm);
