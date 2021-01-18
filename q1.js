const num1 = prompt("Input firs number");
const num2 = prompt("Input second number");
const max = Math.max(num1, num2);
if (num1 === num2) {
    console.log("The numbers is equals");
}
else {
    console.log("The larger number between "+ num1 +" and "+num2+" is " + max);
}
   