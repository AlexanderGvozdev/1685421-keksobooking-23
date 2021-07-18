const filterNode = document.querySelector('.map__filters');
const typeControlNode = filterNode.querySelector('#housing-type');
const priceControlNode = filterNode.querySelector('#housing-price');
const roomsControlNode = filterNode.querySelector('#housing-rooms');
const guestsControlNode = filterNode.querySelector('#housing-guests');
const featuresFieldsetNode = filterNode.querySelector('#housing-features');

const CONTROL_DEFAULT_VALUE = 'any';

const PriceValue = {
  'any': {
    MIN: 0,
    MAX: Infinity,
  },
  'middle': {
    MIN: 10000,
    MAX: 50000,
  },
  'low': {
    MIN: 0,
    MAX: 10000,
  },
  'high': {
    MIN: 50000,
    MAX: Infinity,
  },
};

const checkIsControlInterrelation = (controlValue, checker) => controlValue || checker;

const validationTypeToFunction = {
  checkType(ad) {
    return checkIsControlInterrelation(typeControlNode.value === CONTROL_DEFAULT_VALUE, ad.offer.type === typeControlNode.value);
  },
  checkPrice(ad) {
    const filteredPrice = PriceValue[priceControlNode.value];
    return priceControlNode.value === CONTROL_DEFAULT_VALUE || (ad.offer.price >= filteredPrice.MIN && ad.offer.price <= filteredPrice.MAX);
  },
  checkRooms(ad) {
    return roomsControlNode.value === CONTROL_DEFAULT_VALUE || ad.offer.rooms === Number(roomsControlNode.value);
  },
  checkQuests(ad) {
    return guestsControlNode.value === CONTROL_DEFAULT_VALUE || ad.offer.guests === Number(guestsControlNode.value);
  },
  checkFeatures(ad) {
    const hasFeatures = Boolean(ad.offer.features);
    if (!hasFeatures) {
      return true;
    }
    const checkedFeatures = featuresFieldsetNode.querySelectorAll('input:checked');
    return Array.from(checkedFeatures).every((checkbox) => ad.offer.features.includes(checkbox.value));
  },
};

const getFilteredOffers = (offers) => {
  const filteredOffers = offers.filter((offerData) => {
    const isSuitable = Object.keys(validationTypeToFunction).every((key) => {
      const currentValidation = validationTypeToFunction[key];

      return currentValidation(offerData);
    });

    return isSuitable;
  });

  return filteredOffers;
};

export {getFilteredOffers, filterNode};
