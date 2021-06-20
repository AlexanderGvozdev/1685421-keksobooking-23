const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const PRICE_MAX = 1000000;
const MIN_QUANTITY_GUESTS = 0;
const MAX_QUANTITY_GUESTS = 100;

const title = document.querySelector('#title');
const price = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

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

const priceValidityHandler = () => {
  if (price.validity.valueMissing) {
    price.setCustomValidity(`Укажите цену. Максимальная цена — ${PRICE_MAX}`);
  } else {
    price.setCustomValidity('');
  }
};

const capacityChangeHandler = () => {
  const roomNumberValue = Number(roomNumber.value);
  const capacityValue = Number(capacity.value);

  if (roomNumberValue < MAX_QUANTITY_GUESTS && capacityValue < 1 || capacityValue > roomNumberValue) {
    capacity.setCustomValidity(`Укажите количество гостей. Минимум - 1.
    Максимум - ${roomNumber.value}`);
  } else if (roomNumberValue >= MAX_QUANTITY_GUESTS && capacityValue > MIN_QUANTITY_GUESTS) {
    capacity.setCustomValidity('Слишком много комнат. Выберите пункт "не для гостей"');
  } else {
    capacity.setCustomValidity('');
  }

  capacity.reportValidity();
};

price.addEventListener('invalid', priceValidityHandler);
capacity.addEventListener('change', capacityChangeHandler);
