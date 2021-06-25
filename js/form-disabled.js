const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');

const getBlockForms = () => {
  adForm.classList.add('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.disabled = true;
  });

  mapFilters.classList.add('ad-form--disabled');
  mapFiltersSelects.forEach((item) => {
    item.disabled = true;
  });
  mapFiltersFieldsets.forEach((item) => {
    item.disabled = true;
  });
};

const  getActiveForms = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.disabled = false;
  });

  mapFilters.classList.remove('ad-form--disabled');
  mapFiltersSelects.forEach((item) => {
    item.disabled = false;
  });
  mapFiltersFieldsets.forEach((item) => {
    item.disabled = false;
  });
};

export { getBlockForms, getActiveForms };
