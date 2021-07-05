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

export {removeEmptyHtmlElements, getListenerCloneNodes};
