import {isEscEvent} from './util-function.js';

const ERROR_SHOW_TIME = 5000;

const successPopupTemplate = document.querySelector('#success').content.querySelector('.success');
const errorPopupTemplate = document.querySelector('#error').content.querySelector('.error');

let successPopup = null;
let errorPopup = null;

const closeSuccessPopup = () => {
  if (successPopup !== null) {
    successPopup.remove();
    successPopup = null;
  }
};

const closeErrorPopup = () => {
  if (errorPopup !== null) {
    errorPopup.remove();
    errorPopup = null;
  }
};

const onSuccessPopupKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessPopup();
  }
};

const onErrorPopupKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeErrorPopup();
  }
};

const showSuccessPopup = () => {
  successPopup = successPopupTemplate.cloneNode(true);
  document.body.insertAdjacentElement('afterbegin', successPopup);
  successPopup.addEventListener('click', closeSuccessPopup);
  document.addEventListener('keydown', onSuccessPopupKeydown);
};

const showErrorPopup = () => {
  errorPopup = errorPopupTemplate.cloneNode(true);
  document.body.insertAdjacentElement('afterbegin', errorPopup);
  errorPopup.addEventListener('click', closeErrorPopup);
  document.addEventListener('keydown', onErrorPopupKeydown);
};

const showServerError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ERROR_SHOW_TIME);
};

export {showSuccessPopup, showErrorPopup, showServerError};
