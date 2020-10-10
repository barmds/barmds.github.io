function randomMinMax(min, max){
    return min + Math.random() * (max - min);
}
let b = Math.round(randomMinMax (50, 100));
if ((b % 2) == 0){
    console.log(b,"the number is even")
}
else{
    console.log(b,"the number is odd")
}
