import {createOffers} from './create-announcement.js';
const popup = document.querySelector('#card').content.querySelector('.popup');
const mapOffers = document.querySelector('#map-canvas');

const OFFER_TYPE_TO_READABLE = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const createElement = createOffers();
createElement.forEach(({offer, author}) => {

  const popupElement = popup.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = offer.title;
  popupElement.querySelector('.popup__text--address').textContent = offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} для ${offer.guests}`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupElement.querySelector('.popup__description').textContent = offer.description;
  popupElement.querySelector('.popup__avatar').src = author.avatar;
  popupElement.querySelector('.popup__type').textContent = OFFER_TYPE_TO_READABLE[offer.type];

  const photosList = popupElement.querySelector('.popup__photos');
  const createPhotosList = (photos, list) => {
    const photoListElement = popup.querySelector('.popup__photo');
    photos.forEach((element) => {
      const photo = photoListElement.cloneNode(true);
      photo.src = element;
      list.appendChild(photo);
    });
  };

  const featuresList = popupElement.querySelector('.popup__features');
  const createFeaturesList = (features, list) => {
    features.forEach((element) => {
      const feature = document.createElement('li');
      const classNameModifier = `popup__feature--${element}`;
      feature.classList.add('popup__feature', classNameModifier);
      list.appendChild(feature);
    });
  };

  photosList.innerHTML = '';
  createPhotosList(offer.photos, photosList);

  featuresList.innerHTML = '';
  createFeaturesList(offer.features, featuresList);

  const removeEmptyHtmlElements = (data) => {
    const elements = Array.from(data.children);
    elements.forEach((element) => {
      if (element.src === '' || element.innerHTML === '' && element.tagName.toLowerCase() !== 'img') {
        element.remove();
      }
    });
  };

  removeEmptyHtmlElements(popupElement);
  mapOffers.appendChild(popupElement);
});

/* требований к окончаниям нигде не указано вроде как,
 и на данном этапе немного затрудняюсь их сделать более правильно чем есть.
 Там где ты ссылался на ТЗ это же задание для 8-го раздела разве нет?
 там и сделаю, или дальше как ДЗ скажет */
