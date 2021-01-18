const num1 = 500;
const num2 = 250;
if (num1 === num2) {
    console.log("The greatest common divisor is "+ num1);
}
else {
    let maxDivisor = 1;
    for (let i = 2; i<=(Math.min(num1,num2)); i++ ) {
        if (num1%i === 0  && num2%i === 0) {
            maxDivisor = i;
        }
    }
    console.log("The greatest common divisor is "+ maxDivisor);
}