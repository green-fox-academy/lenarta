'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 },
];

function getNameAndBalance(accNumber: number) {
  let print: any[] = [];
  for (let i: number = 0; i < accounts.length; i++) {
    if (accNumber == accounts[i].accountNumber) {
      print.push(accounts[i].clientName, accounts[i].balance);
    }
  }
  console.log(print);
}
getNameAndBalance(11234543);

function transferAmount(
  list: any[],
  fromAc: number,
  toAc: number,
  amount: number
) {
  for (let i: number = 0; i < list.length; i++) {
    if (fromAc == list[i].accountNumber) {
      list[i].balance -= amount;
    }
    if (toAc == list[i].accountNumber) {
      list[i].balance += amount;
    }
  }
}
transferAmount(accounts, 43546731, 23456311, 500.0);
console.log(accounts);
