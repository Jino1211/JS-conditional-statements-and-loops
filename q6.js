const david = 80;
const vinoth = 77;
const divya = 88;
const ishitha = 95;
const thomas = 68;
const average = ((david + vinoth + divya + ishitha + thomas)/5);
if (average<60) {
    console.log("F");
} 
if (average<70 && average>60){
    console.log("D");
} 
if (average<80 && average>70) {
    console.log("C");
}
if (average<90 && average>80) {
    console.log("B");
}
if (average<100 && average>90) {
    console.log("A");
}