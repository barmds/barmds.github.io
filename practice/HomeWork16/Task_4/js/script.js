function randomNumber(number){
    let myArr = new Array;
    for (let i = 0; i<number; i++){
        myArr[i] = Math.round(Math.random() * 100);
    }
return myArr;
}
let n = randomNumber(10);
console.log(n);

let isNumber = prompt("Enter number:");
if (n.indexOf(parseInt(isNumber)) != -1){
    let str = "Index of your number in array is " + n.indexOf(parseInt(isNumber));
    alert(str);
}
else{
    alert("Your number is not in the array");
}

