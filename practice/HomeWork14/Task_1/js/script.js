let result = prompt("Input your string","");
if (result == null){
    alert("Key Cancel was pressed");
}
else
{
    if (result == 0){
        alert("result is 0");
    }
    else if (result>0){
           alert("result is bigger then 0");
    }
    else {
        alert("result<0")
    }
}

var a = 1;
var n;
n = (a>0) ? true : false;
console.log(n);
