const PRICE_MAX = 1000000;

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const price = document.querySelector('#price');

const priceValidityHandler = () => {
  if (price.validity.valueMissing) {
    price.setCustomValidity(`Укажите цену. Максимальная цена — ${PRICE_MAX}`);
  } else {
    price.setCustomValidity('');
  }
};

if (roomNumber.value === '1') {
  capacity.options[2].selected = true;
}
const capacityChangeHandler = () => {
  if (roomNumber.value === '1' && capacity.value !== '1') {
    capacity.setCustomValidity('жильё для одного гостя');
  } else if (roomNumber.value === '2' && capacity.value !== '1' && capacity.value !== '2') {
    capacity.setCustomValidity('вмещает от 1 до 2 гостей');
  } else if (roomNumber.value === '3' && capacity.value === '0') {
    capacity.setCustomValidity('вмещает от 1 до 3 гостей');
  } else if (roomNumber.value === '100' && capacity.value !== '0') {
    capacity.setCustomValidity('Жильё не для гостей');
  } else {
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();
};

roomNumber.addEventListener('change', capacityChangeHandler);
capacity.addEventListener('change', capacityChangeHandler);
price.addEventListener('invalid', priceValidityHandler);
/* не совсем понял что ты написал про обработчики, похожие примеры в инернете видел с ними же,
люди на курсе вроде также делают, спрашивал
в остальном технически ДЗ выполнил по идее, нужные формы валидированы
и не отправляются если неправильно заполнены */
