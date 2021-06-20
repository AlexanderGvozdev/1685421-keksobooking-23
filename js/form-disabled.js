const adForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');

const arrAdForm = [...adForm];
const arrMapForm = [...mapForm];

const getBlockForms = () => {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('ad-form--disabled');

  arrAdForm.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  arrMapForm.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const getActiveForms = () => {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('ad-form--disabled');

  arrAdForm.forEach((element) => {
    element.removeAttribute('disabled');
  });

  arrMapForm.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

export { getBlockForms, getActiveForms };
