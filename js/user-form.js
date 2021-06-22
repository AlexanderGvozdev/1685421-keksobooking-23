const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
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
  /* запутался в проверке валидации при отправке,вроде же итак проверяет т.к. required указан
   и то что выше написал на гостей комнаты и прочие проверки
    ( рамка опять же подсвечивается при неправильных данных в инпутах этих),
     вообще верным путём иду? подскажи пжлст
  */
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
