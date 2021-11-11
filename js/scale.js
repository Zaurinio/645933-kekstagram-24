const scaleSection = document.querySelector('.scale');
const scaleLevel = scaleSection.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');

const onScaleButtonClick = (evt) => {
  const scaleDownButton = evt.target.matches('.scale__control--smaller');
  const scaleUpButton = evt.target.matches('.scale__control--bigger');
  let scaleLevelWithoutPercent = Number(scaleLevel.value.split('%').join(''));

  if (scaleUpButton && scaleLevelWithoutPercent < 100) {
    scaleLevelWithoutPercent += 25;
    scaleLevel.value = `${scaleLevelWithoutPercent}%`;
  }
  if (scaleDownButton && scaleLevelWithoutPercent > 25) {
    scaleLevelWithoutPercent -= 25;
    scaleLevel.value = `${scaleLevelWithoutPercent}%`;
  }

  imagePreview.style.transform = `scale(${scaleLevelWithoutPercent/100}`;
};

const resetScaleValue = () => {
  imagePreview.style.transform = 'scale(1)';
  scaleLevel.value = '100%';
};

const bindScaleButtonListener = () => scaleSection.addEventListener('click', onScaleButtonClick);

export {bindScaleButtonListener, resetScaleValue};
