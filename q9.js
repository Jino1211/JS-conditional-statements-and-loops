for (let i = 100; i<1000; i++) {
    let hDigit = Math.floor(i/100);
    let tDigit = Math.floor((i%100)/10);
    let sDigits = i%10;
    if (Math.pow(hDigit, 3) + Math.pow(tDigit, 3) + Math.pow(sDigits, 3) === i) {
        console.log(i+" is Armstrong number");
    }
}
