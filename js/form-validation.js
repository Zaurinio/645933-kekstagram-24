const hashtagTerms = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const validationRules = () => {
  const inputValueArray = hashtagInput.value.toLowerCase().split(' ');
  const isDuplicate = inputValueArray.some((value, id) => inputValueArray.indexOf(value) !== id);
  const correctHashtag = inputValueArray.some((value) => !hashtagTerms.test(value));

  if (correctHashtag && hashtagInput.value !== '') {
    hashtagInput.setCustomValidity('Неправильный формат хэштега');
  } else if (isDuplicate) {
    hashtagInput.setCustomValidity('Не должно быть повторяющихся хэштегов');
  } else if (inputValueArray.length > 5) {
    hashtagInput.setCustomValidity('Нельзя указывать более 5 хэштегов');
  } else {
    hashtagInput.setCustomValidity('');
    hashtagInput.style.outline = 'none';
  }

  hashtagInput.reportValidity();
};

const invalidInputHighlighting = () => {
  const setHighlighting = () => {
    hashtagInput.style.outline = '2px solid red';
  };
  if (hashtagInput.validity.valid !== true) {
    setHighlighting();
  }
};

const resetFormText = () => {
  hashtagInput.value = '';
  commentInput.value = '';
};

export {resetFormText, validationRules, invalidInputHighlighting};
