let a=5;
let b=3;
if (a>b && a===b){
    console.log("a>b");
}
else {
    console.log("a<b");
}

console.log(true && 0 && ("a"<"Z"));
console.log((a>b) || true || ("2"==2) || (false == ""));
console.log((a<b) && (0 == false));
console.log(!(2==2) || (true && ""));