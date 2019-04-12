function calcPayments(balance, rate){
    var rateAdjusted = rate / 12;
    var month = 0;
    var monthly;
    while (balance > 20){
        if (balance / 20 > 20){
            monthly = (balance/20)*(1 + rateAdjusted);
        } else {
            monthly = 20;
        }
        total += monthly;
        balance -= monthly;
    }
}