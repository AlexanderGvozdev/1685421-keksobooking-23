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

  return {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 10)}.png`,
    },
    offer: {
      title: 'чтонить напишем',
      address: `${latLocation}, ${lngLocation}`,
      price: getRandomNumber(0, 50000),
      type: getRandomItems(houseTypes, getRandomNumber(1, 1)),
      rooms: getRandomNumber(1, 3),
      guests: getRandomNumber(0, 2),
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

const moreAnnouncement = (count) => new Array(count).fill(null).map(() => createAnnouncement());

export {moreAnnouncement};
