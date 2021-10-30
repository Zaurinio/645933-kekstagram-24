const fullScreenPost = document.querySelector('.big-picture');
const DOWNLOAD_ELSE_QTY = 5;
const commentLoadButton = document.querySelector('.social__comments-loader');

const fillCommentTemplate = (object) => {
  const template = `<li class="social__comment">
    <img class="social__picture" src=${object.avatar} alt="${object.name}" width="35" height="35">
    <p class="social__text">${object.message}</p>
    </li>`;
  return template;
};

export const fillFullscreenTemplate = (element) => {
  fullScreenPost.querySelector('img').src = `photos/${element.url}.jpg`;
  fullScreenPost.querySelector('.likes-count').textContent = element.likes;
  fullScreenPost.querySelector('.comments-count').textContent = element.comments.length;
  fullScreenPost.querySelector('.social__caption').textContent = element.description;

  fullScreenPost.querySelector('.social__comments').innerHTML = element.comments.map((comment) => fillCommentTemplate(comment)).join('');

  commentLoadButton.classList.remove('hidden');
  if (element.comments.length <= DOWNLOAD_ELSE_QTY) {
    commentLoadButton.classList.add('hidden');
  }

  for (let i = DOWNLOAD_ELSE_QTY; i < element.comments.length; i++) {
    fullScreenPost.querySelectorAll('.social__comment')[i].classList.add('hidden');
  }
};
