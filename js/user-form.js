const MIN_QUANTITY_GUESTS = 0;
const MAX_QUANTITY_GUESTS = 100;

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const form = document.querySelector('ad-form');
const main = document.querySelector('.main');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

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
  if (capacity.checkValidity() === false) {}

};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(validateFields) {
    form.submit();
    return;
  }
  showErrorMessages();
});

capacity.addEventListener('change', capacityChangeHandler);
