const ANNOUNCEMENT_QUANTITY = 10;
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const hourCheckin = ['12:00','13:00','14:00'];
const hourCheckout = ['12:00','13:00','14:00'];
const houseType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const getRandomNumber = function (min, max) {
  if (min >= 0 && max > min) {
    const random = Math.random() * (max + 1 - min) + min;
    return Math.floor(random);
  }
  return Error('ошибка');
};

const getRandomFractionNumber = function (min, max, fix) {
  if (min >= 0 && max > min) {
    const newNumber = Math.random() * (max + 1 - min) + min;
    return Number(newNumber.toFixed(fix));
  }
  return Error('ошибка');
};

// Функция копирует, затем перемешивает массив в случайном порядке
const getShuffledItems = (items) => items.slice().sort(() => Math.random() - 0.5);

// Функция возвращает перемешенный массив до заданной длины массива
const getRandomItems = (items, count) => {
  const shuffledItems = getShuffledItems(items);
  return shuffledItems.slice(0, count);
};

const createAnnouncement = function () {

  const latLocation = getRandomFractionNumber(35.65, 35.7, 5);
  const lngLocation = getRandomFractionNumber(139.7, 139.8, 5);
  const randomHourIn = Math.floor(Math.random() * hourCheckin.length);
  const randomHourOut = Math.floor(Math.random() * hourCheckout.length);
  const randomHouseType = Math.floor(Math.random() * houseType.length);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 10)}.png`,
    },
    offer: {
      title: 'чтонить напишем',
      address: `${latLocation}, ${lngLocation}`,
      price: getRandomNumber(0, 50000),
      type: `${houseType[randomHouseType]}`,
      rooms: getRandomNumber(1, 3),
      guests: getRandomNumber(0, 2),
      checkin: `${hourCheckin[randomHourIn]}`,
      checkout: `${hourCheckout[randomHourOut]}`,
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

new Array(ANNOUNCEMENT_QUANTITY).fill(null).map(() => createAnnouncement());
