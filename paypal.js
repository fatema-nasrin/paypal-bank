//login
document.getElementById('login-btn').addEventListener('click',function(){
    document.getElementById('login-area').style.display = 'none'
    document.getElementById('transaction-area').style.display = 'block';
})

//deposit
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(){
    const deposit =document.getElementById('depositAmount').value;
    const depositNumber =parseFloat(deposit)

    handleBalance('currentDeposit',depositNumber);
    handleBalance('currentBalance',depositNumber);
    document.getElementById('depositAmount').value="";
})

function handleBalance(contentId,depositNumber){
    const balance = document.getElementById(contentId).innerText;
    const balanceNumber = parseFloat(balance);
    const totalBalance =balanceNumber+depositNumber;
    document.getElementById(contentId).innerText=totalBalance;
}

//withdraw
document.getElementById('addWithdraw').addEventListener('click',function(){
    const withdraw = document.getElementById('WithdrawAmount').value;
    const withdrawNumber =parseFloat(withdraw)
    handleBalance('currentWithdraw',withdrawNumber)
    handleBalance('currentBalance',-1*withdrawNumber)
    document.getElementById('WithdrawAmount').value="";
})

