document.getElementById('btn-withdraw').addEventListener('click',function(){
    // console.log('okay');

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    if(newWithdrawAmount > newBalanceTotal){
        alert("you have insufficient balance ");
        return;
    }

    balanceTotalElement.innerText = newBalanceTotal;


    withdrawField.value = '';
})