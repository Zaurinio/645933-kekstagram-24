import {DOWNLOAD_ELSE_QTY} from './fullscreen-template.js';
import {fillCommentTemplate} from './comment-template.js';

const commentLoadButton = document.querySelector('.social__comments-loader');
const socialComments = document.querySelector('.social__comments');


// const getCommentsQty = () => {
//   remainingCommentsQty = totalCommentsQty - currentCommentsQty;
//   startCommentsQty += 5;
//   if (remainingCommentsQty <= 5) {
//     currentCommentsQty += remainingCommentsQty;
//     commentLoadingButton.classList.add('hidden');
//   } else {
//     currentCommentsQty += 5;
//   }
// };

const downloadingComments = (element, commentsQty, commentsFirstQty) => {
  // let firstDownloadedCommentsQty = DOWNLOAD_ELSE_QTY;
  // if (commentsQty < DOWNLOAD_ELSE_QTY) {
  //   firstDownloadedCommentsQty = commentsQty;
  // }

  // commentLoadButton.classList.remove('hidden');

  let remainingCommentsQty = commentsQty - commentsFirstQty;
  let startDownloadingCommentNumber = commentsFirstQty;
  let endDownloadingCommentNumber = startDownloadingCommentNumber + DOWNLOAD_ELSE_QTY;

  if (remainingCommentsQty <= DOWNLOAD_ELSE_QTY) {
    endDownloadingCommentNumber = startDownloadingCommentNumber + remainingCommentsQty;
  }

  console.log(commentsQty);
  console.log(commentsFirstQty);
  console.log(remainingCommentsQty);
  console.log(startDownloadingCommentNumber);
  console.log(endDownloadingCommentNumber);

  commentLoadButton.addEventListener('click', () => {
    for (let i = startDownloadingCommentNumber; i < endDownloadingCommentNumber; i++) {
      fillCommentTemplate(socialComments, element.comments[i]);
    }

    remainingCommentsQty = commentsQty - endDownloadingCommentNumber;
    startDownloadingCommentNumber = endDownloadingCommentNumber;

    if (remainingCommentsQty <= DOWNLOAD_ELSE_QTY) {
      endDownloadingCommentNumber = startDownloadingCommentNumber + remainingCommentsQty;
    } else {
      endDownloadingCommentNumber = startDownloadingCommentNumber + DOWNLOAD_ELSE_QTY;
    }

    if (remainingCommentsQty === 0) {
      commentLoadButton.classList.add('hidden');
    }

    console.log(remainingCommentsQty);
    console.log(startDownloadingCommentNumber);
    console.log(endDownloadingCommentNumber);
  });

  // for (let i = startDownloadingCommentNumber; i < endDownloadingCommentNumber; i++) {
  //   fillCommentTemplate(socialComments, element.comments[i]);
  // }


  // remainingCommentsQty = remainingCommentsQty - endDownloadingCommentNumbr;
  // startDownloadingCommentNumber = startDownloadingCommentNumber + endDownloadingCommentNumbr + 1;
  // if (remainingCommentsQty <= DOWNLOAD_ELSE_QTY) {
  //   endDownloadingCommentNumbr = startDownloadingCommentNumber + remainingCommentsQty;
  // } else {
  //   endDownloadingCommentNumbr = startDownloadingCommentNumber + DOWNLOAD_ELSE_QTY;
  //   commentLoadButton.classList.add('hidden');
  // }


};

// commentLoadButton.addEventListener('click', (element) => {
//   for (let i = startDownloadingCommentNumber; i < endDownloadingCommentNumbr; i++) {
//     fillCommentTemplate(socialComments, element.comments[i]);
//   }
//   remainingCommentsQty = remainingCommentsQty - endDownloadingCommentNumbr;
//   startDownloadingCommentNumber = startDownloadingCommentNumber + endDownloadingCommentNumbr + 1;
//   if (remainingCommentsQty <= DOWNLOAD_ELSE_QTY) {
//     endDownloadingCommentNumbr = startDownloadingCommentNumber + remainingCommentsQty;
//   } else {
//     endDownloadingCommentNumbr = startDownloadingCommentNumber + DOWNLOAD_ELSE_QTY;
//     commentLoadButton.classList.add('hidden');
//   }
// });

export {downloadingComments};
