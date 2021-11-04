const editableImageBlock= document.querySelector('.img-upload__preview');
const editableImage = editableImageBlock.querySelector('img');
const sliderElement= document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');
const filterSlider = document.querySelector('.effect-level');


const createFormSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    connect: 'lower',
    step: 0.1,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
  filterSlider.classList.add('hidden');
};

const setSliderSettings = (currentFilter) => {

  const filterSettings = {
    none: {
      effect: 'none',
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      unit: '',
    },
    chrome: {
      effect: 'grayscale',
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      unit: '',
    },
    sepia: {
      effect: 'sepia',
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      unit: '',
    },
    marvin: {
      effect: 'invert',
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
      unit: '%',
    },
    phobos: {
      effect: 'blur',
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
      unit: 'px',
    },
    heat: {
      effect: 'brightness',
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
      unit: '',
    },
  };

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: filterSettings[currentFilter]['range']['min'],
      max: filterSettings[currentFilter]['range']['max'],
    },
    step: filterSettings[currentFilter]['step'],
    start: filterSettings[currentFilter]['start'],
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    effectLevel.value = values[handle];
    effectLevel.setAttribute('value', effectLevel.value);

    if (currentFilter === 'none') {
      editableImage.style.filter = 'none';
    } else {
      editableImage.style.filter = `${filterSettings[currentFilter]['effect']}(${effectLevel.value}${filterSettings[currentFilter]['unit']})`;
    }
  });
};

const resetSliderSettings = () => {
  sliderElement.noUiSlider.destroy();
  editableImage.style.filter = 'none';
};

export {createFormSlider, setSliderSettings, resetSliderSettings};
