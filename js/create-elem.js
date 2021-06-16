import {createOffers} from './create-announcement.js';
const ANNOUNCEMENT_QUANTITY = 10;
const popup = document.querySelector('#card').content.querySelector('.popup');
const mapOffers = document.querySelector('#map-canvas');

const createElement = window.someFN = createOffers(ANNOUNCEMENT_QUANTITY);
createElement.forEach(({offer, author}) => {
  const popupElement = popup.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = offer.title;
  popupElement.querySelector('.popup__text--address').textContent = offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupElement.querySelector('.popup__features').textContent = offer.features;
  popupElement.querySelector('.popup__description').textContent = offer.description;
  popupElement.querySelector('.popup__photos');
  popupElement.querySelector('.popup__type');
  popupElement.querySelector('.popup__avatar').src = author.avatar;
  mapOffers.appendChild(popupElement);
});
