const loginArea = document.getElementById('login-area'),
    dashboard = document.getElementById('dashboard'),
    deposit = document.getElementById('deposit'),
    withdraw = document.getElementById('withdraw'),
    balance = document.getElementById('balance'),
    depositInput = document.getElementById('deposit-input'),
    withdrawInput = document.getElementById('withdraw-input'),
    depositBtn = document.getElementById('deposit-btn'),
    withdrawBtn = document.getElementById('withdraw-btn'),
    submitBtn = document.getElementById('submit-btn'),
    username = document.getElementById('username'),
    email = document.getElementById('email'),
    emialInput = document.getElementById('email-input'),
    usernameInput = document.getElementById('username-input');

submitBtn.addEventListener('click',() => {
    // const value = emialInput.value;
    // const emailvalue = email.innerText + value;
    // email.innerText = emailvalue;
    inputUsername();
    inputEmail();

    // const uservalue = usernameInput.value;
    // const usernamevalue = username.innerText + uservalue;
    // username.innerText = usernamevalue;
    // const value = usernameInput.value
    loginArea.style.display = 'none'; //to remove the login area section
    dashboard.classList.remove('d-none'); //to remove the classlist d-none from the dashboard

});
function inputUsername(){
    const value = emialInput.value;
    const emailvalue = email.innerText + value;
     return email.innerText = emailvalue;
}

function inputEmail(){
    const uservalue = usernameInput.value;
    const usernamevalue = username.innerText + uservalue;
   return username.innerText = usernamevalue;
}

depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const depositvalue = Number(deposit.innerText) + Number(value);
    const balancevalue = Number(balance.innerText) + Number(value);
    deposit.innerText = depositvalue;
    balance.innerText = balancevalue;
    depositInput.value = '';

})
withdrawBtn.addEventListener('click', () => {
    
    const value = withdrawInput.value;
    if (Number(value) === 0) {
        alert("You don't have any balance to withdraw");

    } else if (Number(value) > Number(balance.innerText)){
        alert("You don't have that much balance to withdraw")
    } else {
        const withdrawvalue = Number(withdraw.innerText) + Number(value);
        const balancevalue = Number(balance.innerText) - Number(value);
        withdraw.innerText = withdrawvalue;
        balance.innerText = balancevalue;
        withdrawInput.value = '';
    }
    

})