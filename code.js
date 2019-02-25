"use strict";

const formatBalance = (balance) => {
  let balance_format;
  if (balance % 10 == 1 && balance % 100 != 11) {
    balance_format = 'балл';
  } else if ((balance % 10 == 2 && balance % 100 != 12) || (balance % 10 == 3 && balance % 100 != 13) || (balance % 10 == 4 && balance % 100 != 14)) {
    balance_format = 'балла';
  } else {
    balance_format = 'баллов';
  }
  return `Ваш баланс: ${balance} ${balance_format}`;
}

console.log(formatBalance`523`);
console.log(formatBalance`6000`);
console.log(formatBalance`5001`);
console.log(formatBalance`5013`);
