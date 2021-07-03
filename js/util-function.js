// Функция копирует, затем перемешивает массив в случайном порядке
const getShuffledItems = (items) => items.slice().sort(() => Math.random() - 0.5);

// Функция возвращает перемешенный массив до заданной длины массива
const getRandomItems = (items, count) => {
  const shuffledItems = getShuffledItems(items);
  return shuffledItems.slice(0, count);
};

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomFractionNumber = (min, max, digits = 1) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const removeEmptyHtmlElements = (data) => {
  const elements = Array.from(data.children);
  elements.forEach((element) => {
    if (element.src === '' || (element.innerHTML === '' && element.tagName.toLowerCase() !== 'img')) {
      element.remove();
    }
  });
};

const listenerCloneNodes = (node) => {
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

export {getRandomNumber, getRandomFractionNumber, getRandomItems, removeEmptyHtmlElements, listenerCloneNodes};
