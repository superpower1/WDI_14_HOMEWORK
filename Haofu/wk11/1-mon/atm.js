class ATM {
  constructor(type) {
    this.money = 0;
    this.type = type;
    this.transactionHistory = [];
  }

  withdraw(money) {
    this.money -= money;
    this.transactionHistory.push({
      method: '-',
      amount: money
    })
  }

  deposit(money) {
    this.money += money;
    this.transactionHistory.push({
      method: '+',
      amount: money
    })
  }

  showBalance() {
    return this.money;
  }
}

module.exports = ATM;
