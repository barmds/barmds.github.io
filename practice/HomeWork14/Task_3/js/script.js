
let a=0;
let b=0;
do {
    a = prompt ('Write a number A', '');
    if ( isNaN(a) ) {
    alert ('You need to write a number!');}
} while (isNaN(a));
do {
    b = prompt ('Write a number B', '');
    if ( isNaN(b) ) {
    alert ('You need to write a number!');}
} while (isNaN(b));
function GetBigger(number1,number2){
    if (parseFloat(number1) > parseFloat(number2)) {return number1;}
    else {return number2;}
 }
let c=GetBigger(a,b);
let result="Bigger of your number is:"+c;
alert(result);