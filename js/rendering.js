const randomPictureTemplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');
const photosFilter = document.querySelector('.img-filters');
const similarListFragment = document.createDocumentFragment();

const getPhotoTemplate = (element) => {
  const photoElement = randomPictureTemplate.cloneNode(true);
  const commentsQty = Object.keys(element.comments).length;
  photoElement.querySelector('.picture__img').src = element.url;
  photoElement.querySelector('.picture__likes').textContent = element.likes;
  photoElement.querySelector('.picture__comments').textContent = commentsQty;
  photoElement.querySelector('.picture').id = element.id;

  return photoElement;
};

const renderPhotos = (data) => {
  data.forEach((photo) => {
    similarListFragment.appendChild(getPhotoTemplate(photo));
  });
  picturesList.appendChild(similarListFragment);
  photosFilter.classList.remove('img-filters--inactive');
};


export {renderPhotos};
