// Task 1 (string without vowels)
function disemvowel(str) {
    let setStr = 'eyuioaEYUIOA';
    let getStr = '';
   
    for (let i=0; i<str.length; i++){
      if (setStr.indexOf(str[i]) == -1){
        getStr+=str[i]
      }
    }
    return getStr;
  }
 console.log(disemvowel('This website is for losers LOL!'));

//   Task 2(Count the number of Duplicates)
function duplicateCount(text){
    let fStr = ''; sStr = '';
    text = text.toLowerCase();
    for (let i=0; i<text.length; i++){
        if (fStr.indexOf(text[i]) == -1){
            fStr+=text[i]
        }else
            {
            if (sStr.indexOf(text[i]) == -1){
                sStr+=text[i]
                }
            }   
    }
    return (sStr.length)
}
console.log(duplicateCount('aaabbbbbatryertyetrsdfg'));

// Task 3 (You might know some pretty large perfect squares. But what about the NEXT one?)

function findNextSquare(sq) {
    let f=Math.sqrt(sq)
    if ((f ^ 0) === f) {
        return (f+1)*(f+1)
    }else{
        return -1;
    }
  }
console.log(findNextSquare(144));

// Task 4 (Convert string to camel case)

function toCamelCase(str){
  let getStr ="";
  for (let i=0; i<str.length; i++){
    if ((str[i]=="_")||(str[i]=="-")){
      i++;
      getStr+=str[i].toUpperCase();
    }
    else{
      getStr+=str[i];
    }
  }
return getStr;
}
console.log(toCamelCase("the-stealth_warrior"))

// Task 5 (Is this a triangle?)

function isTriangle(a,b,c){
  if(((a+b)>c)&&((a+c)>b)&&((b+c)>a)) return true
  else return false;
}
console.log(isTriangle(3,4,5));

// Task 6 (Replace With Alphabet Position)

function alphabetPosition(text) {
  let str = "abcdefghijklmnopqrstuvwxyz";
  text = text.toLowerCase();
  getStr = "";
  for (let i=0; i<text.length; i++){
    if (str.indexOf(text[i])!=-1){
      getStr+=(str.indexOf(text[i])+1+" ")
    }
  
  }
  return getStr.slice(0,-1);
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Task 7 (Duplicate Encoder)

function duplicateEncode(word){
  word = word.toLowerCase();
  let str = ""; let cnt;
  for (let i=0; i<word.length; i++){
    cnt =0;
    for (let j=0; j<word.length; j++){
      if (word[i] == word[j]) cnt++;
    }
    str+= (cnt == 1)?"(":")";
  }
  return str;
}
console.log(duplicateEncode("(( @"))

// Task 8 (Find The Parity Outlier)

function findOutlier(integers){
  let sign = "";
  cnt = 0;
  for (let i=0; i<3;i++){
    if ((integers[i]%2) == 0) cnt++;
  }
  sign = (cnt>1)?"even":"odd";
  switch (sign){
    case "even": for (let i=0; i<integers.length; i++) if ((integers[i]%2) != 0) return integers[i]
      break;
    case "odd": for (let i=0; i<integers.length; i++) if ((integers[i]%2) == 0) return integers[i]
      break;
  }
}
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))

// Task 9 (???)

var moveZeros = function (arr) {
  let j = 0;
  let getArr = []
  for (let i=0; i<arr.length; i++)
    if (arr[i] != 0)
      getArr[j++]=arr[i];
  for (let i=j; i<arr.length; i++)
    getArr[i]=0
return getArr
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))

// Task 10 (Create Phone Number)

function createPhoneNumber(numbers){
  let getStr = "("
  for (let i=0; i<3;i++) getStr+=numbers[i]
  getStr+=") "
  for (let i=3; i<6; i++) getStr+=numbers[i]
  getStr+="-"
  for (let i=6; i<10; i++) getStr+=numbers[i]
  return getStr;
}

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

// Task 11 (First non-repeating character)

function firstNonRepeatingLetter(s) {
  let result = ""
  for (let i=0; ((i<s.length)); i++){
    let cnt=0;
    for (let j=0; j<s.length; j++)
      if (s[i].toLowerCase()==s[j].toLowerCase())
        cnt++
    if (cnt == 1){
      result = s[i];
      break
    }
  }return result
}
console.log(firstNonRepeatingLetter("sTreSS"));

// Task 12 (Format a string of names like 'Bart, Lisa & Maggie'.)

function list(names){
  let getList = "";
  if (names.length == 1){
    getList =  names[0].name;
  }else if (names.length == 2) 
  {
    getList = names[0].name+" & "+names[1].name
  }else if (names.length > 2)
  {
    for (let i=0; i<names.length-2; i++)
      getList+=names[i].name+", ";
    getList+=names[names.length-2].name+" & "+names[names.length-1].name
  }
  return getList;
}

console.log(list([]))

// Task 13 (Unique In Order)

var uniqueInOrder=function(iterable){
  let getRes = [];
  if (iterable.length !=0){ 
    let j=0;
    for (let i=1;i<iterable.length; i++)
     if (iterable[i-1] != iterable[i])
        getRes[j++]=iterable[i-1];
        getRes[j]=iterable[iterable.length-1];
  }
  return getRes
}
console.log(uniqueInOrder([]))

// Task 14 (Product of consecutive Fib numbers)

function productFib(prod){
  let a=1,b=1,sum;
  do{
    sum=a+b;
    a=b;
    b=sum;
  }while (a*b<prod);
  if (a*b == prod)
    return [a,b,true];
  else 
  return [a,b,false]
}
console.log(productFib(84049690))

// Task 15 (Your order, please)

function order(words){
  let getwords=[];
  words=words.split(" ");
  console.log(words)
  for(let i=0; i<words.length; i++)
    for (let j=0; j<words[i].length; j++) 
      if (!isNaN(words[i][j]) == true)
        getwords[words[i][j]-1]=(words[i])
  return getwords.join(" ");
}
console.log(order("is2 Thi1s T4est 3a"))

// Task 16 (Snail)

snail = function(array) {
  let k=0, getArray = [];
  if (array.length>1){
    for (let i=0; i<((array.length/2)-1); i++){
      for (let j=i; j<array.length-i; j++)
        getArray[k++] = array[i][j];

     for (let j=i+1; j<(array.length-i-1); j++)
        getArray[k++] = array[j][array.length-i-1];

      for (let j=(array.length-i-1); j>=i; j--)
        getArray[k++] = array[array.length-i-1][j];

      for (let j=(array.length-i-2); j>i; j--)
        getArray[k++] = array[j][i];

    }
    if (array.length%2 != 0){
      let j= Math.floor(array.length/2);
      getArray[k]=array[j][j];
    }else{
      let y= array.length/2;
      getArray[k++]=array[y-1][y-1];
      getArray[k++]=array[y-1][y];
      getArray[k++]=array[y][y];
      getArray[k++]=array[y][y-1];
    }
    return getArray;
  }else if (array.length=1){
    return array[0];
  } else{
    return getArray;
  }
}
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

