const TIMEOUT_DELAY = 500;
const KeyboardKey = {
  ESCAPE: 'Escape',
};

const removeEmptyHtmlElements = (data) => {
  const elements = Array.from(data.children);
  elements.forEach((element) => {
    if (element.src === '' || (element.innerHTML === '' && element.tagName.toLowerCase() !== 'img')) {
      element.remove();
    }
  });
};

const getListenerCloneNodes = (node) => {
  const cloneNode = node.cloneNode(true);
  const buttonNode = cloneNode.querySelector('.error__button');
  document.body.insertAdjacentElement('beforeend', cloneNode);

  let onModalKeyDown = null;
  let onModalClick = null;

  const closeModal = () => {
    cloneNode.remove();

    document.removeEventListener('keydown', onModalKeyDown);
    document.removeEventListener('click', onModalClick);
  };

  onModalKeyDown = (evt) => {
    if (evt.key === KeyboardKey.ESCAPE && cloneNode) {
      closeModal();
    }
  };

  onModalClick = (evt) => {
    if (evt.target === cloneNode || buttonNode) {
      closeModal();
    }
  };

  document.addEventListener('keydown', onModalKeyDown);
  document.addEventListener('click', onModalClick);
};

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

const debounce = (callback, timeoutDelay = TIMEOUT_DELAY) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};

export {removeEmptyHtmlElements, getListenerCloneNodes, debounce};
