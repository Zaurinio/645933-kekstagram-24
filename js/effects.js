import {setSliderSettings} from './form-slider.js';

const editableImage = document.querySelector('.img-upload__preview');


export const getFilterName = (evt) => {
  const clickedFilter = evt.target.matches('.effects__radio');
  const imageClassList = editableImage.className.split(' ');
  const filterClassForChange = imageClassList.find((el) => el.includes('effects__preview--'));

  if (clickedFilter) {
    if (filterClassForChange) {
      editableImage.classList.remove(filterClassForChange);
    }
    editableImage.classList.add(`effects__preview--${evt.target.value}`);
    setSliderSettings(evt.target.value);
  }

};

export const resetFilterSettings = () => {
  const imageClassList = document.querySelector('.img-upload__preview').className.split(' ');
  const filterClassForChange = imageClassList.find((el) => el.includes('effects__preview--'));
  if (filterClassForChange !== 'effects__preview--none') {
    editableImage.classList.remove(filterClassForChange);
    editableImage.classList.add('effects__preview--none');
  }
};
