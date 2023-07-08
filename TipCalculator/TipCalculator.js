let billAmount = document.getElementById("BillAmount");
let percentageTip = document.getElementById("PercentageTip");
let tipAmount = document.getElementById("TipAmount");
let total = document.getElementById("Total");
let calculate_Button = document.getElementById("calculate-button");
let errorMsg = document.getElementById("error-msg");
calculate_Button.addEventListener("click",function(){
    let bill = parseInt(billAmount.value);
    let tip = parseInt(percentageTip.value);
    if (billAmount!=="" && percentageTip.value!==""){
        let calculatedTip = (tip / 100) * bill;
        let totalBill = calculatedTip + bill;
        tipAmount.value = calculatedTip;
        total.value = totalBill;
    }
    else{
        errorMsg.classList.add("errorStyle");
        errorMsg.textContent = "Please enter valid input";
    }
});