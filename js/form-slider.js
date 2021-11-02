const editableImageBlock= document.querySelector('.img-upload__preview');
const editableImage = editableImageBlock.querySelector('img');
const sliderElement= document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  connect: 'lower',
  step: 0.1,
});


const setSliderSettings = (currentFilter) => {

  const filterSettings = {
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

  sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
    effectLevel.value = unencoded[handle];

    editableImage.style.filter = `${filterSettings[currentFilter]['effect']}(${effectLevel.value}${filterSettings[currentFilter]['unit']})`;

  });
};

export {setSliderSettings};
