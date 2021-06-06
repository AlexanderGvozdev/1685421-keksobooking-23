const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const hours = ['12:00','13:00','14:00'];
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

const createAnnouncement = function () {

  const typeOffer = typeHouse[3];
  const checkinHour = hours[0];
  const checkoutHour = hours[1];
  const titleOffer = 'чтонить напишем';
  const descriptionOffer = 'тут тоже';
  const randomPrice = getRandomNumber(0, 50000);
  const randomRooms = getRandomNumber(1, 3);
  const randomGuests = getRandomNumber(0, 2);
  const latLocation = getRandomFractionNumber(35.65, 35.7, 5);
  const lngLocation = getRandomFractionNumber(139.7, 139.8, 5);

  const createArrPhotos = (source, maxLength) =>
    [...Array(1 + Math.random() * maxLength | 0)].map(() => source[Math.random() * source.length | 0]);
  const arrPhoto = [...Array(1)].map(() => createArrPhotos(photos, 3));

  const createArrFeatures = (source, maxLength) =>
    [...Array(1 + Math.random() * maxLength | 0)].map(() => source[Math.random() * source.length | 0]);
  const arrFeatures = [...Array(1)].map(() => createArrFeatures(features, 5));

  return {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
    },
    offer: {
      title: titleOffer,
      address: `${latLocation}, ${lngLocation}`,
      price: randomPrice,
      type: typeOffer,
      rooms: randomRooms,
      guests: randomGuests,
      checkin: checkinHour,
      checkout: checkoutHour,
      features: arrFeatures,
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
