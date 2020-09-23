function isBiggerStr(str1,str2){
    if (str1>str2){
        return(str1);
    }
    else{
        return(str2);
    }
}
let s1 = prompt("Input first string:");
let s2 = prompt("Input first string:");
let result = "String \'"  + isBiggerStr(s1,s2) + "\' is bigger of entered";
alert(result);
