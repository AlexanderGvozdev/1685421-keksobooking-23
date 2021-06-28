const PRICE_MAX = 1000000;
const ROOM_CAPACITY = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const housingPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const price = document.querySelector('#price');
const housingType = document.querySelector('#type');
const timeInFormOffer = document.querySelector('#timein');
const timeOutFormOffer = document.querySelector('#timeout');

const typeChangeHandler = () => {
  price.placeholder = housingPrice[housingType.value];
  price.min = housingPrice[housingType.value];
};

const priceValidityHandler = () => {
  if (price.validity.valueMissing) {
    price.setCustomValidity(`Укажите цену. Максимальная цена — ${PRICE_MAX}`);
  } else {
    price.setCustomValidity('');
  }
};

const validateRoomsAndGuests = () => {
  const roomNumber = roomNumberSelect.value;
  const capacityNumber = parseInt(capacitySelect.value, 10);
  capacitySelect.setCustomValidity(ROOM_CAPACITY[roomNumber].includes(capacityNumber) ? '' : 'Количество гостей больше чем комнат');
};

const onTimeChange = (sourceElement, targetElement) => {
  if (sourceElement.value !== targetElement.value) {
    targetElement.value = sourceElement.value;
  }
};

validateRoomsAndGuests();
roomNumberSelect.addEventListener('change', validateRoomsAndGuests);
capacitySelect.addEventListener('change', validateRoomsAndGuests);
price.addEventListener('invalid', priceValidityHandler);
housingType.addEventListener('change', typeChangeHandler);
timeInFormOffer.addEventListener('change', onTimeChange.bind(null, timeInFormOffer, timeOutFormOffer));
timeOutFormOffer.addEventListener('change', onTimeChange.bind(null, timeOutFormOffer, timeInFormOffer));
