function calcPayments(){
    var rateAdjusted = 0.1499 / 12;
    var balance = 2500;
    var month = 0;
    var total = 0;
    var monthly;
    while (balance > 20){
        if (balance / 20 > 20){
            monthly = balance / 20;
        } else {
            monthly = 20;
        }
        total += monthly;
        balance -= monthly;
        balance *= (1 + rateAdjusted);
        month++;
    }
    total += balance;
    month++;
    console.log("It will take " + month + " months to pay off the debt, and you will have paid $" + total + " in total.");
}

