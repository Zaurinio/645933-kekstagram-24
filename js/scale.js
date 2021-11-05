const scaleSection = document.querySelector('.scale');
const scaleLevel = scaleSection.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');

const changeScaleValue = (evt) => {
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

const resetScaleValue = () => imagePreview.style.transform = 'scale(1)';

const onScaleButtonClick = () => scaleSection.addEventListener('click', changeScaleValue);

export {onScaleButtonClick, resetScaleValue};
