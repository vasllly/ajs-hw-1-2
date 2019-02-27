"use strict";

const formatBalance = (strings, balance) => {
  let balance_format;
  if (balance % 10 == 1 && balance % 100 != 11) {
    balance_format = ' балл';
  } else if ((balance % 10 == 2 && balance % 100 != 12) || (balance % 10 == 3 && balance % 100 != 13) || (balance % 10 == 4 && balance % 100 != 14)) {
    balance_format = ' балла';
  } else {
    balance_format = ' баллов';
  }
  return `${strings[0]}${balance}${balance_format}`;
}

const balances = [523, 6000, 5001, 5013];

for (const balance of balances) {
  console.log(formatBalance`Ваш баланс: ${balance} `);
}
