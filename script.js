document.getElementById("btn").addEventListener("click", function() {
    const title = document.getElementById("header");
    title.style.display = "block"
})

document.getElementById("btn2").addEventListener("click", function() {
    const title = document.getElementById("header");
    title.style.display = "none"
})

const btn = document.getElementById("btn3");
btn.addEventListener("click", function() {
    const withdraw = document.getElementById("withdraw");
    const withdrawValueStr = withdraw.value;
    const withdrawValue = parseInt(withdrawValueStr);

    const zero = document.getElementById("zero");
    const zeroValueStr = zero.innerText;
    const zeroValue = parseInt(zeroValueStr);

    const totalWithdrawAmount = withdrawValue + zeroValue;
    zero.innerText = totalWithdrawAmount;

    const taka = document.getElementById("taka");
    const takaStr = taka.innerText;
    const takapar = parseInt(takaStr);
    
    const newTaka = takapar - totalWithdrawAmount;
    taka.innerText = newTaka;

    withdraw.value = "";
})

const btn5 = document.getElementById("btn4");
btn5.addEventListener("click", function() {
    const deposit = document.getElementById("deposit");
    const depositValueStr = deposit.value;
    const depositValue = parseInt(depositValueStr);

    const zero2 = document.getElementById("zero2");
    const zero2ValueStr = zero2.innerText;
    const zero2Value = parseInt(zero2ValueStr);

    const totalDepositAmount =  depositValue + zero2Value;
    zero2.innerText = totalDepositAmount;

    const taka = document.getElementById("taka");
    const takaStr = taka.innerText;
    const takapar = parseInt(takaStr);

    const newTaka = takapar + totalDepositAmount;
    taka.innerText = newTaka;

    deposit.value = "";
})