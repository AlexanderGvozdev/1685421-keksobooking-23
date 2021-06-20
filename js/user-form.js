const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const title = document.querySelector('#title');

title.addEventListener('input', () => {
  const valueLength = title.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } символов`);

  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } символы`);

  } else {
    title.setCustomValidity('');

  }
  title.reportValidity();
});
