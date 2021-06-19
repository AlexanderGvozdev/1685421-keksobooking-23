import {getRandomNumber, getRandomFractionNumber, getRandomItems} from './util-function.js';

const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const checkinHours = ['12:00','13:00','14:00'];
const checkoutHours = ['12:00','13:00','14:00'];
const houseTypes = ['palace', 'flat', 'house', 'bungalow', 'hotel'];


const createAnnouncement = function () {

  const latLocation = getRandomFractionNumber(35.65, 35.7, 5);
  const lngLocation = getRandomFractionNumber(139.7, 139.8, 5);
  const avatarNumber = getRandomNumber(1, 11);
  const roomQuantity = getRandomNumber(1, 3);
  const guestsQuantity = getRandomNumber(0, 2);
  const avatarImage = avatarNumber < 10 ? `img/avatars/user0${avatarNumber}.png`: `img/avatars/user${avatarNumber}.png`;
  const room =  roomQuantity < 2 ? `${roomQuantity}  комната`: `${roomQuantity} комнаты`;
  const guest = guestsQuantity < 2 ? `${guestsQuantity} гостя` : `${guestsQuantity} гостей`;

  return {
    author: {
      avatar: avatarImage,
    },
    offer: {
      title: 'чтонить напишем',
      address: `${latLocation}, ${lngLocation}`,
      price: getRandomNumber(0, 50000),
      type: getRandomItems(houseTypes, getRandomNumber(1, 1)),
      rooms: room,
      guests: guest,
      checkin: getRandomItems(checkinHours, getRandomNumber(1, 1)),
      checkout: getRandomItems(checkoutHours, getRandomNumber(1, 1)),
      features: getRandomItems(
        features,
        getRandomNumber(1, features.length)),
      description: 'тут тоже',
      photos: getRandomItems(
        photos,
        getRandomNumber(1, photos.length)),
    },
    location : {
      lat: latLocation,
      lng: lngLocation,
    },
  };
};

const createOffers = (count) => new Array(count).fill(null).map(() => createAnnouncement());

export {createOffers};
