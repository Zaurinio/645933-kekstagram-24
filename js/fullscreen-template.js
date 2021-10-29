import {fillCommentTemplate} from './comment-template.js';
import {downloadingComments} from './comments-download.js';

const fullscreenPost = document.querySelector('.big-picture');
const fullscreenPostImage = fullscreenPost.querySelector('img');
const DOWNLOAD_ELSE_QTY = 5;
const socialComments = document.querySelector('.social__comments');
const commentLoadButton = document.querySelector('.social__comments-loader');

const getFullscreenTemplate = (element, action, commentsQty) => {
  action();
  fullscreenPostImage.src = `photos/${element.url}.jpg`;
  fullscreenPost.querySelector('.likes-count').textContent = element.likes;
  fullscreenPost.querySelector('.comments-count').textContent = commentsQty;
  socialComments.innerHTML = '';

  commentLoadButton.classList.remove('hidden');
  let firstDownloadedCommentsQty = DOWNLOAD_ELSE_QTY;
  if (commentsQty < DOWNLOAD_ELSE_QTY) {
    firstDownloadedCommentsQty = commentsQty;
    commentLoadButton.classList.add('hidden');
  }

  for (let i = 0; i < firstDownloadedCommentsQty; i++) {
    fillCommentTemplate(socialComments, element.comments[i]);
  }

  downloadingComments(element, commentsQty, firstDownloadedCommentsQty);
};

export {getFullscreenTemplate, DOWNLOAD_ELSE_QTY};
