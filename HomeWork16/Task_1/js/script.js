let myArray = new Array;
do {
    b = prompt ('Input element of Array number ', i);
    if ( b!=null ) {
        myArray.push(b);
    }
} while (b!=null);
console.log(myArray);


let Arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let sum=0
for (let i=0; i < Arr.length; i++ ){
    for (let j=0; j < Arr[i].length; j++){
    sum=sum+Arr[i][j]}
}
console.log(sum);