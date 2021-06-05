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

getRandomNumber(0, 100);
getRandomFractionNumber(0, 100, 2);

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];
const AVATARS = ['img/avatars/user01.png','img/avatars/user02.png','img/avatars/user03.png','img/avatars/user04.png','img/avatars/user05.png','img/avatars/user06.png','img/avatars/user07.png','img/avatars/user08.png'];
const HOURS = ['12:00','13:00','14:00'];
const TYPE_HOUSE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const createAnnouncement = function () {

  const typeHouse = TYPE_HOUSE[3];
  const checkinHour = HOURS[0];
  const checkoutHour = HOURS[1];
  const titleOffer = 'чтонить напишем';
  const descriptionOffer = 'тут тоже';
  const randomPrice = getRandomNumber(0, 50000);
  const randomRooms = getRandomNumber(1, 3);
  const randomGuests = getRandomNumber(0, 2);
  const latLocation = getRandomFractionNumber(35.65, 35.7, 5);
  const lngLocation = getRandomFractionNumber(139.7, 139.8, 5);
  const userAvatar = AVATARS[(Math.floor(Math.random() * (AVATARS.length)))];


  const createArr = (source, maxLength) =>
    [...Array(1 + Math.random() * maxLength | 0)].map(() => source[Math.random() * source.length | 0]);
  const arrPhoto = [...Array(1)].map(() => createArr(PHOTOS, 3));

  return {
    author: {
      avatar: userAvatar,
    },
    offer: {
      title: titleOffer,
      address: '',
      price: randomPrice,
      type: typeHouse,
      rooms: randomRooms,
      guests: randomGuests,
      checkin: checkinHour,
      checkout: checkoutHour,
      features: [],
      description: descriptionOffer,
      photos: arrPhoto,
    },
    location : {
      lat: latLocation,
      lng: lngLocation,
    },
  };
};

const QUANITITY_ANNOUNCEMENT = 10;
const createAnnon = new Array(QUANITITY_ANNOUNCEMENT).fill(null).map(() => createAnnouncement());
