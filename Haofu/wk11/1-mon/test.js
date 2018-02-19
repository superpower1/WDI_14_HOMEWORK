const ATM = require('./atm');

const atm = new ATM('checking');
atm.withdraw(100)
atm.deposit(1000)

console.log(atm.showBalance());
console.log(atm.money);
