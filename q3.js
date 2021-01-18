const num1 = 2;
const num2 = 3;
const num3 = -3;
if (num1>num2 && num1>num3) {
    if (num2>num3) {
        alert (num1 +","+ num2 +","+ num3);
    }
    else {
        alert (num1 +","+ num3 +","+ num2);
    }
}
if (num2>num1 && num2>num3) {
    if (num1>num3) {
        alert (num2 +","+ num1 +","+num3);
    }
    else {
        alert (num2 +","+ num3 +","+num1);
    }
}
if (num3>num1 && num3>num2) {
    if (num1>num2) {
        alert (num3 +","+ num1 +","+ num2);
    }
    else {
        alert (num3 +","+ num2 +","+ num1);
    }
}