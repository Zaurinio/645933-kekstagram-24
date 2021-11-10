const DOWNLOAD_ELSE_QTY = 5;
const fullScreenPost = document.querySelector('.big-picture');
const commentLoadButton = document.querySelector('.social__comments-loader');
let startDownloadingComment = 5;
let endDownloadingComment = startDownloadingComment + DOWNLOAD_ELSE_QTY;

const resetCommentsValue = () => {
  startDownloadingComment = DOWNLOAD_ELSE_QTY;
  endDownloadingComment = startDownloadingComment + DOWNLOAD_ELSE_QTY;
};


const onCommentLoadButtonClick = () => {
  const commentsQty = fullScreenPost.querySelectorAll('.social__comment').length;
  let currentRemaininQty = commentsQty - DOWNLOAD_ELSE_QTY;

  const checkEndDownloadingComment = () => {
    if (currentRemaininQty <= DOWNLOAD_ELSE_QTY) {
      endDownloadingComment = startDownloadingComment + currentRemaininQty;
    }
  };

  checkEndDownloadingComment();

  for (let i = startDownloadingComment; i < endDownloadingComment; i++) {
    fullScreenPost.querySelectorAll('.social__comment')[i].classList.remove('hidden');
  }

  fullScreenPost.querySelector('.comments-count__current').textContent = endDownloadingComment;
  currentRemaininQty = commentsQty - endDownloadingComment;
  startDownloadingComment = endDownloadingComment;
  endDownloadingComment += DOWNLOAD_ELSE_QTY;

  checkEndDownloadingComment();

  if (currentRemaininQty <= 0) {
    commentLoadButton.classList.add('hidden');
    resetCommentsValue();
  }
};

export {onCommentLoadButtonClick, resetCommentsValue};
