const adForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');

const arrAdForms = [...adForm];
const arrMapForms = [...mapForm];

const getBlockForms = () => {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('ad-form--disabled');

  arrAdForms.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  arrMapForms.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const getActiveForms = () => {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('ad-form--disabled');

  arrAdForms.forEach((element) => {
    element.removeAttribute('disabled');
  });

  arrMapForms.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

export { getBlockForms, getActiveForms };
