const num1 = 0;
const num2 = 0;
const num3 = -3;
if ((num1<=0 & num2<=0 & num3>0) || (num1>0 & num2<=0 & num3<=0) || (num1<=0 & num2>0 & num3<=0)) {
    console.log("The specified sign is +")
}
else { 
    if ((num1>=0 & num2>=0 & num3<0) || (num1>=0 & num2<0 & num3>=0) || (num1<0 & num2>=0 & num3>=0)) {
        console.log("The specified sign is -");
}
    else {
        console.log("There is no specified sign");
    }
}