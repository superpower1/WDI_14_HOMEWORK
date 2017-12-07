const savingBox = document.querySelector('.saving');
const checkingBox = document.querySelector('.checking');

const savingWithdrawBtn = savingBox.querySelectorAll('button')[0];
const savingDepositBtn = savingBox.querySelectorAll('button')[1];
const checkingWithdrawBtn = checkingBox.querySelectorAll('button')[0];
const checkingDepositBtn = checkingBox.querySelectorAll('button')[1];

const savingBalanceSpan = savingBox.querySelector('.balance').querySelector('span');
const checkingBalanceSpan = checkingBox.querySelector('.balance').querySelector('span');

const savingInputBox = savingBox.querySelector('input');
const checkingInputBox = checkingBox.querySelector('input');

let bankAccount = {
  savingBalance: 0,
  checkingBalance: 0,
  withdrawFromSaving: function(amount) {
    if (amount<=this.savingBalance) {
      this.savingBalance -= amount;
      return this.savingBalance;
    } else if (amount<=(this.savingBalance+this.checkingBalance)) {
      let exceed = amount-this.savingBalance;
      this.savingBalance = 0;
      this.withdrawFromChecking(exceed);
      return -1;
    } else {
      return 0;
    }
  },
  withdrawFromChecking: function(amount) {
    if (amount<=this.checkingBalance) {
      this.checkingBalance -= amount;
      return this.checkingBalance;
    } else {
      return 0;
    }
  },
  depositToSaving: function(amount) {
    this.savingBalance += amount;
    return this.savingBalance;
  },
  depositToChecking: function(amount) {
    this.checkingBalance += amount;
    return this.checkingBalance;
  }
}

savingWithdrawBtn.addEventListener('click', (e) => {
  let withdrawAmount = Number(savingInputBox.value);
  if (withdrawAmount && withdrawAmount>0) {
    if (bankAccount.withdrawFromSaving(withdrawAmount)) {
      updateBalance();
    } else {
      alert("Insufficient Money");
    }
  } else {
    alert("Please put a positive number to withdraw");
  }
  savingInputBox.value = "";
  checkBalance();
});

savingDepositBtn.addEventListener('click', (e) => {
  let depositAmount = Number(savingInputBox.value);
  if (depositAmount && depositAmount>0) {
    bankAccount.depositToSaving(depositAmount);
    updateBalance();
  } else {
    alert("Please put a positive number to deposit");
  }
  savingInputBox.value = "";
  checkBalance();
});

checkingWithdrawBtn.addEventListener('click', (e) => {
  let withdrawAmount = Number(checkingInputBox.value);
  if (withdrawAmount && withdrawAmount>0) {
    if (bankAccount.withdrawFromChecking(withdrawAmount)) {
      updateBalance();
    } else {
      alert("Insufficient Money");
    }
  } else {
    alert("Please put a positive number to withdraw");
  }
  checkingInputBox.value = "";
  checkBalance();
});

checkingDepositBtn.addEventListener('click', (e) => {
  let depositAmount = Number(checkingInputBox.value);
  if (depositAmount && depositAmount>0) {
    bankAccount.depositToChecking(depositAmount);
    updateBalance();
  } else {
    alert("Please put a positive number to deposit");
  }
  checkingInputBox.value = "";
  checkBalance();
});

const checkBalance = () => {
  let saving = bankAccount.savingBalance;
  let checking = bankAccount.checkingBalance;
  if (saving<=0) {
    savingBalanceSpan.setAttribute("style", "color: red");
  } else {
    savingBalanceSpan.setAttribute("style", "color: gray");
  }
  if (checking<=0) {
    checkingBalanceSpan.setAttribute("style", "color: red");
  } else {
    checkingBalanceSpan.setAttribute("style", "color: gray");
  }
}

const updateBalance = () => {
  savingBalanceSpan.textContent = bankAccount.savingBalance.toFixed(2);
  checkingBalanceSpan.textContent = bankAccount.checkingBalance.toFixed(2);
}

const init = () => {
  checkBalance();
}

init();
