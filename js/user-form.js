const PRICE_MAX = 1000000;
const MIN_QUANTITY_GUESTS = 0;
const MAX_QUANTITY_GUESTS = 100;

const title = document.querySelector('#title');
const price = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const form = document.querySelector('ad-form');
const main = document.querySelector('.main');
const errorMessage = document.querySelector('#error').content.querySelector('.error');


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


const createMessage = (template) => {
  const message = template.cloneNode(true);

  main.appendChild(message);
  message.tabIndex = 0;
  message.focus();
};

const showErrorMessages = () => {
  createMessage(errorMessage);
};

const validateFields = () => {
  if (title.checkValidity() === false) {}

};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(validateFields) {
    form.submit();
    return;
  }
  showErrorMessages();
});

price.addEventListener('invalid', priceValidityHandler);
capacity.addEventListener('change', capacityChangeHandler);
