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
