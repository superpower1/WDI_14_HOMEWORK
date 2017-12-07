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

let backAccount = {
  savingBalance: 0,
  checkingBalance: 0,
  withdrawFromSaving: (amount) => {
    if (true) {

    } else {

    }
  },
  withdrawFromChecking: () => {

  }
}

const init = () => {
  
}

savingWithdrawBtn.addEventListener('click', (e) => {
  let current = Number(savingBalanceSpan.textContent);
  let withdrawAmount = Number(savingInputBox.value);
  if (withdrawAmount) {
    if (withdrawAmount>0&&withdrawAmount<=current) {
      current -= withdrawAmount;
      savingBalanceSpan.textContent = current.toFixed(2);
    } else if (withdrawAmount>current) {
      alert("Insufficient Money");
    } else {
      alert("Please put a positive number to withdraw");
    }
  } else {

  }
  savingInputBox.value = "";
  checkAccountBalance();
});

savingDepositBtn.addEventListener('click', (e) => {
  let current = Number(savingBalanceSpan.textContent);
  let depositAmount = Number(savingInputBox.value);
  if (depositAmount) {
    if (depositAmount>0) {
      current += depositAmount;
      savingBalanceSpan.textContent = current.toFixed(2);
    } else {
      alert("Please put a positive number to deposit");
    }
  } else {

  }
  savingInputBox.value = "";
  checkAccountBalance()
});

const checkAccountBalance = () => {
  let savingCurrent = Number(savingBalanceSpan.textContent);
  let checkingCurrent = Number(checkingBalanceSpan.textContent);
  if (savingCurrent<=0) {
    savingBalanceSpan.setAttribute("style", "color: red");
  } else {
    savingBalanceSpan.setAttribute("style", "color: gray");
  }
  if (checkingCurrent<=0) {
    checkingBalanceSpan.setAttribute("style", "color: red");
  } else {
    checkingBalanceSpan.setAttribute("style", "color: gray");
  }
}

checkingWithdrawBtn.addEventListener('click', (e) => {
  let current = Number(checkingBalanceSpan.textContent);
  let withdrawAmount = Number(checkingInputBox.value);
  if (withdrawAmount) {
    if (withdrawAmount>0&&withdrawAmount<=current) {
      current -= withdrawAmount;
      checkingBalanceSpan.textContent = current.toFixed(2);
    } else if (withdrawAmount>current) {
      alert("Insufficient Money");
    } else {
      alert("Please put a positive number to withdraw");
    }
  } else {

  }
  checkingInputBox.value = "";
  checkAccountBalance();
});

checkingDepositBtn.addEventListener('click', (e) => {
  let current = Number(checkingBalanceSpan.textContent);
  let depositAmount = Number(checkingInputBox.value);
  if (depositAmount) {
    if (depositAmount>0) {
      current += depositAmount;
      checkingBalanceSpan.textContent = current.toFixed(2);
    } else {
      alert("Please put a positive number to deposit");
    }
  } else {

  }
  checkingInputBox.value = "";
  checkAccountBalance()
});

checkAccountBalance();
