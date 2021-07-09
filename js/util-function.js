const TIMEOUT_DELAY = 500;

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
  const body = document.querySelector('body');
  body.insertAdjacentElement('beforeend', cloneNode);

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27 && cloneNode) {
      cloneNode.remove();
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target === cloneNode) {
      cloneNode.remove();
    } else if (buttonNode) {
      cloneNode.remove();
    }
  });
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
