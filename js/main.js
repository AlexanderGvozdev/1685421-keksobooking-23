const funcRandom1 = function (min, max) {
  const random = Math.random() * (max + 1 - min) + min;
  return Math.floor(random);
};

const funcRandom2 = function (min, max, fix) {
  const newNumber = Math.random() * (max + 1 - min) + min;
  return Number(newNumber.toFixed(fix));
};

funcRandom1(0, 100);
funcRandom2(0, 100, 2);
