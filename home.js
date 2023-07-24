class Account {
  constructor(accountNo, owner, balance, pin) {
    this._accountNo = accountNo;
    this._owner = owner;
    this._balance = balance;
    this._pin = pin;
  }

  get accountNo() {
    return this._accountNo;
  }

  get owner() {
    return this._owner;
  }

  get balance() {
    return this._balance;
  }

  deposit(pin, amount) {
    if (this._pin !== pin) {
      return false;
    }
    this._balance += amount;
    return true;
  }

  withdraw(pin, amount) {
    if (this._pin !== pin || this._balance < amount) {
      return false;
    }
    this._balance -= amount;
    return true;
  }

  transfer(pin, amount, account) {
    if (this._pin !== pin || this._balance < amount) {
      return false;
    }
    this._balance -= amount;
    account._balance += amount;
    return true;
  }
}

// Create user and user1 objects from the Account class
const user = new Account(8153901850, "John Smith",0 , 1234);
const user1 = new Account(9059108157, "Jane Doe", 0, 5678);

// DOM elements
const usernameElement = document.getElementById("fullName");
const emailElement = document.getElementById("email");
const depositElement = document.getElementById("deposit");
const withdrawElement = document.getElementById("withdraw");
const balanceElement = document.getElementById("balance");
const transferElement = document.getElementById("transfer");
const userAccountNoInput = document.getElementById("userAccountNo-input");
  const depositAmtInput = document.getElementById("deposit-amt-input");
  const depositPassword = document.getElementById("deposit-password");

  const fullName = document.getElementById('fullName').value;
function signUp() {
    // const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    const userData = {
        fullName,
        email,
        password,
        phone,

    };
  

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Signup successful! Please log in to continue.');
    switchForms();
   
    return false; // Prevent form submission

 
}


function login() {
    const loginPassword = document.getElementById('loginPassword').value;
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (!storedUserData || loginPassword !== storedUserData.password) {
        alert('Invalid login credentials.');
        return false;
    }
   
    document.getElementById('loggedInUserName').textContent = storedUserData.fullName;
    switchForms();
    // inputUsername();
    // inputEmail();
   // Remove the whole of the login and signup page
  //  document.getElementById('loggedInUserName').textContent = storedUserData.fullName;
  document.getElementById("loginForm").classList.add("d-none");
  document.getElementById("dashboard").classList.remove("d-none");

  
  
  document.getElementById('details').textContent = storedUserData.fullName;

    return false; // Prevent form submission
}

function switchForms() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    signupForm.style.display = 'none';
    loginForm.style.display = 'block';

}
//  const storedUserData = JSON.parse(localStorage.getItem('userData'));

  // document.getElementById('details').textContent = storedUserData.fullName;
  

// function inputUsername(){
//       const value = emial.value;
//       const emailvalue = email.innerText + value;
//       return email.innerText = emailvalue;
  
//   }
//   function inputEmail(){
//       const uservalue = fullName.value;
//       const fullNamevalue = fullName.innerText + uservalue;
//       return username.innerText = fullNamevalue;
//     }

  
// usernameElement.textContent = user?.owner;
// emailElement.textContent = user.owner;



// Event listener for the deposit button
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function() {
  
  const pin = parseInt(depositPassword.value);
  const accountNo = parseInt(userAccountNoInput.value);
  const amount = parseFloat(depositAmtInput.value);

  let selectedUser;
  if (accountNo === user.accountNo) {
    selectedUser = user;
  } else if (accountNo === user1.accountNo) {
    selectedUser = user1;
  } else {
    alert("Invalid account number!");
    return;
  }

  // Perform the deposit and update the balance
  const deposited = selectedUser.deposit(pin, amount);
  if (deposited) {
    balanceElement.textContent = selectedUser.balance.toFixed(2);
    depositElement.textContent = amount.toFixed(2);
    alert("Deposit successful!");
  } else {
    alert("Deposit failed - incorrect pin!");
  }
    // Reset the form inputs
    userAccountNoInput.value = "***********";
    depositAmtInput.value = "";
    depositPassword.value = "****";
  // Update the account balance on the HTML page
updateAccountBalance(user.balance);


});
// // Update the account balance on the HTML page
//  updateAccountBalance(user.balance);

// Event listener for the withdraw button
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function() {
  const userAccountNoInput = document.getElementById("withdraw-accountNo-input");
  const withdrawAmtInput = document.getElementById("withdraw-amt-input");
  const withdrawPassword = document.getElementById("withdraw-password");

  const pin = parseInt(withdrawPassword.value);
  const accountNo = parseInt(userAccountNoInput.value);
  const amount = parseFloat(withdrawAmtInput.value);

  let selectedUser;
  if (accountNo === user.accountNo) {
    selectedUser = user;
  } else if (accountNo === user1.accountNo) {
    selectedUser = user1;
  } else {
    alert("Invalid account number!");
    return;
  }

  // Perform the withdrawal and update the balance
  const withdrawn = selectedUser.withdraw(pin, amount);
  if (withdrawn) {
    balanceElement.textContent = selectedUser.balance.toFixed(2);
    withdrawElement.textContent = amount.toFixed(2);
    alert("Withdrawal successful!");
  } else {
    alert("Withdrawal failed - incorrect pin or insufficient funds!");
  }
//   // Update the account balance on the HTML page
// updateAccountBalance(user.balance);

   // Reset the form inputs
   userAccountNoInput.value = "***********";
   withdrawAmtInput.value = "";
   withdrawPassword.value = "";
});

depositBtn.addEventListener('click', () => {
  const value = depositAmtInput.value;
  const depositvalue = Number(deposit.innerText) + Number(value);
  const balancevalue = Number(balance.innerText) + Number(value);
  deposit.innerText = depositvalue;
  balance.innerText = balancevalue;
  depositAmtInput.value = '';
})
withdrawBtn.addEventListener('click', () => {
      const value = withdrawAmtInput.value;
  if (Number(value) === 0) {
      alert("You don't have any balance to withdraw")
  } else if (Number(value) > Number(balance.innerText)){
      alert("You don't have that much balance to withdraw")
  } else {
      const withdrawvalue = Number(withdraw.innerText) + Number(value);
      const balancevalue = Number(balance.innerText) - Number(value);
      withdraw.innerText = withdrawvalue;
      balance.innerText = balancevalue;
      withdrawAmtInput.value = '';
  }
})


// Event listener for the transfer button
const transferBtn = document.getElementById("transfer-btn");
transferBtn.addEventListener("click", function() {
  const userAccountNoInput = document.getElementById("transfer-accountNo-input");
  const transferAmtInput = document.getElementById("transfer-amt-input");
  const transferPassword = document.getElementById("transfer-password");
  const recipentAccountNoInput = document.getElementById("recipent-accountNo-input");

  const pin = parseInt(transferPassword.value);
  const accountNo = parseInt(userAccountNoInput.value);
  const amount = parseFloat(transferAmtInput.value);
  const recipentAccountNo = parseInt(recipentAccountNoInput.value);

  let selectedUser;
  let recipentUser;
  if (accountNo === user.accountNo) {
    selectedUser = user;
  } else if (accountNo === user1.accountNo) {
    selectedUser = user1;
  } else {
    alert("Invalid account number!");
    return;
  }

  if (recipentAccountNo === user.accountNo) {
    recipentUser = user;
  } else if (recipentAccountNo === user1.accountNo) {
    recipentUser = user1;
  } else {
    alert("Invalid recipient account number!");
    return;
  }

  // Perform the transfer and update the balances
  const transferred = selectedUser.transfer(pin, amount, recipentUser);
  if (transferred) {
    balanceElement.textContent = selectedUser.balance.toFixed(2);
    transferElement.textContent = amount.toFixed(2);
    alert("Transfer successful!");
  } else {
    alert("Transfer failed - incorrect pin or insufficient funds in the source account!");
  }

  // Update the account balance on the HTML page
// updateAccountBalance(user.balance);
//   // Reset the form inputs
  userAccountNoInput.value = "***********";
  transferAmtInput.value = "";
  transferPassword.value = "";
  recipentAccountNoInput.value = "";
});

// Function to update the account balance on the HTML page
// function updateAccountBalance(balance) {
//   const personalBalance = document.getElementById("personal-balance");
//   personalBalance.textContent = `$${balance.toFixed(2)}`;
// }










// const loginArea = document.getElementById('login-area'),
//     dashboard = document.getElementById('dashboard'),
//     submitBtn = document.getElementById('submit-btn'),
//     username = document.getElementById('username'),
//     email = document.getElementById('email'),
//     emialInput = document.getElementById('email-input'),
//     usernameInput = document.getElementById('username-input');

// submitBtn.addEventListener('click',() => {
//     inputUsername();
//     inputEmail();
//     loginArea.style.display = 'none'; //to remove the login area section
//     dashboard.classList.remove('d-none'); //to remove the classlist d-none from the dashboard

// });
// function inputUsername(){
//     const value = emialInput.value;
//     const emailvalue = email.innerText + value;
//     return email.innerText = emailvalue;

// }
// function inputEmail(){
//     const uservalue = usernameInput.value;
//     const usernamevalue = username.innerText + uservalue;
//     return username.innerText = usernamevalue;
//   }
// depositBtn.addEventListener('click', () => {
//     const value = depositInput.value;
//     const depositvalue = Number(deposit.innerText) + Number(value);
//     const balancevalue = Number(balance.innerText) + Number(value);
//     deposit.innerText = depositvalue;
//     balance.innerText = balancevalue;
//     depositInput.value = '';
// })
// withdrawBtn.addEventListener('click', () => {
    //     const value = withdrawInput.value;
//     if (Number(value) === 0) {
//         alert("You don't have any balance to withdraw");
//     } else if (Number(value) > Number(balance.innerText)){
//         alert("You don't have that much balance to withdraw")
//     } else {
//         const withdrawvalue = Number(withdraw.innerText) + Number(value);
//         const balancevalue = Number(balance.innerText) - Number(value);
//         withdraw.innerText = withdrawvalue;
//         balance.innerText = balancevalue;
//         withdrawInput.value = '';
//     }
// })
// Show the dashboard and hide the login area
// const submitBtn = document.getElementById("submit-btn");
// submitBtn?.addEventListener("click", function() {
//   const usernameInput = document.getElementById("username-input");
//   const emailInput = document.getElementById("email-input");

//   usernameElement.textContent = "Account Name: " + usernameInput.value;
//   emailElement.textContent = "Email: " + emailInput.value;

//   document.getElementById("login-area").classList.add("d-none");
//   document.getElementById("dashboard").classList.remove("d-none");
// });
// Update user details in the dashboard

