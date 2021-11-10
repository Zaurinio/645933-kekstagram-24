import {setSliderSettings} from './form-slider.js';

const editableImage = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');
const filterSlider = document.querySelector('.effect-level');

const onEffectClick = (evt) => {
  const clickedFilter = evt.target.matches('.effects__radio');
  const imageClassList = editableImage.className.split(' ');
  const filterClassForChange = imageClassList.find((el) => el.includes('effects__preview--'));

  if (clickedFilter) {
    if (filterClassForChange) {
      editableImage.classList.remove(filterClassForChange);
    }
    editableImage.classList.add(`effects__preview--${evt.target.value}`);
    setSliderSettings(evt.target.value);
    if (evt.target.value === 'none') {
      filterSlider.classList.add('hidden');
    } else {
      filterSlider.classList.remove('hidden');
    }
  }
};

const resetEffectSettings = () => {
  const imageClassList = document.querySelector('.img-upload__preview').className.split(' ');
  const filterClassForChange = imageClassList.find((el) => el.includes('effects__preview--'));
  if (filterClassForChange !== 'effects__preview--none') {
    editableImage.classList.remove(filterClassForChange);
    editableImage.classList.add('effects__preview--none');
  }
};

const bindEffectsButtonsListener = () => effectsList.addEventListener('click', onEffectClick);

export {bindEffectsButtonsListener, resetEffectSettings};
