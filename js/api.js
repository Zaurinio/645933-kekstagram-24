
const GET_DATA_SERVER_ADDRESS = 'https://24.javascript.pages.academy/kekstagram/data';

const SEND_DATA_SERVER_ADDRESS = 'https://24.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onFail) => {
  fetch(GET_DATA_SERVER_ADDRESS)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail();
      }
    })
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (formClose, onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_SERVER_ADDRESS,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      formClose();
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
