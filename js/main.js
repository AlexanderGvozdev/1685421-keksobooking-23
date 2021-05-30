const getRandom = function (min, max) {
  const error = 'ошибка';
  if (min >= 0 && max > min) {
    const random = Math.random() * (max + 1 - min) + min;
    return Math.floor(random);
  }
  else {
    return error;
  }
};

const getRandomFraction = function (min, max, fix) {
  const error = 'ошибка';
  if (min >= 0 && max > min) {
    const newNumber = Math.random() * (max + 1 - min) + min;
    return Number(newNumber.toFixed(fix));
  }
  else {
    return error;
  }
};

getRandom(0, 100);
getRandomFraction(0, 100, 2);
