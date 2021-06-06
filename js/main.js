const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const checkinHours = ['12:00','13:00','14:00'];
const checkoutHours = ['12:00','13:00','14:00'];
const typeHouse = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

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

  const typeOffer = typeHouse[3];
  const checkinHour = checkinHours[0];
  const checkoutHour = checkoutHours[1];
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
      type: typeOffer,
      rooms: getRandomNumber(1, 3),
      guests: getRandomNumber(0, 2),
      checkin: checkinHour,
      checkout: checkoutHour,
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

const QUANITITY_ANNOUNCEMENT = 10;
const createAnnon = new Array(QUANITITY_ANNOUNCEMENT).fill(null).map(() => createAnnouncement());
