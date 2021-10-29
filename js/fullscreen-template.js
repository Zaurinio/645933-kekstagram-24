const fullscreenPost = document.querySelector('.big-picture');
const fullscreenPostImage = fullscreenPost.querySelector('img');

const fillCommentTemplate = (parent, object) => {
  const template = `<li class="social__comment">
    <img class="social__picture" src=${object.avatar} alt="${object.name}" width="35" height="35">
    <p class="social__text">${object.message}</p>
    </li>`;
  parent.insertAdjacentHTML('beforeend', template);
};

const getFullscreenTemplate = (element, callBack) => {
  callBack();
  fullscreenPostImage.src = `photos/${element.url}.jpg`;
  fullscreenPost.querySelector('.likes-count').textContent = element.likes;
  fullscreenPost.querySelector('.comments-count').textContent = Object.keys(element.comments).length;

  const socialComments = document.querySelector('.social__comments');
  socialComments.innerHTML = '';
  element.comments.forEach((comment) => {
    fillCommentTemplate(socialComments, comment);
  });
};

export {getFullscreenTemplate};
