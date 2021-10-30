const DOWNLOAD_ELSE_QTY = 5;
const fullScreenPost = document.querySelector('.big-picture');
const commentLoadButton = document.querySelector('.social__comments-loader');
let startDownloadingComment = DOWNLOAD_ELSE_QTY;
let endDownloadingComment = startDownloadingComment + DOWNLOAD_ELSE_QTY;

export const downloadingComments = () => {
  const commentsQty = fullScreenPost.querySelectorAll('.social__comment').length;
  let currentRemaininQty = commentsQty - DOWNLOAD_ELSE_QTY;
  if (currentRemaininQty <= DOWNLOAD_ELSE_QTY) {
    endDownloadingComment = startDownloadingComment + currentRemaininQty;
  }

  for (let i = startDownloadingComment; i < endDownloadingComment; i++) {
    fullScreenPost.querySelectorAll('.social__comment')[i].classList.remove('hidden');
  }

  fullScreenPost.querySelector('.comments-count__current').textContent = endDownloadingComment;
  currentRemaininQty = commentsQty - endDownloadingComment;
  startDownloadingComment = endDownloadingComment;
  endDownloadingComment += DOWNLOAD_ELSE_QTY;
  if (currentRemaininQty <= DOWNLOAD_ELSE_QTY) {
    endDownloadingComment = startDownloadingComment + currentRemaininQty;
  }

  if (currentRemaininQty <= 0) {
    commentLoadButton.classList.add('hidden');
    startDownloadingComment = DOWNLOAD_ELSE_QTY;
    endDownloadingComment = startDownloadingComment + DOWNLOAD_ELSE_QTY;
  }
};
