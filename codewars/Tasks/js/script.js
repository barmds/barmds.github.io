// Task 1 (Disemvowel Trolls)

function disemvowel(str) {
    let setStr = 'euioaEUIOA';
    let getStr = '';
   
    for (let i=0; i<str.length; i++){
      if (setStr.indexOf(str[i]) == -1){
        getStr+=str[i]
      }
    }
    return getStr;
  }
 console.log(disemvowel('This website is for losers LOL!'));

//   Task 2(Counting Duplicates)

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

// Task 3 (Find the next perfect square!)

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

// Task 16 (Stop gninnipS My sdroW!)

function spinWords(spinStr){
  spinStr = spinStr.split(" ");
  for (let i=0; i<spinStr.length; i++)
    if (spinStr[i].length>4)
      spinStr[i] = spinStr[i].split("").reverse().join("");
  return spinStr.join(" ");
}
console.log(spinWords("Hey fellow warriors"))

// Task 17 (Find the odd int)

function findOdd(A) {
  let check = 0;
  for (let i=0; i<A.length; i++){
    for (let j=0; j<A.length; j++)
      if(A[i] == A[j])
        check++;
    if ((check % 2) !=0){
      return A[i];
    }
  }
}
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

// Task 18 (Two to One)

function longest(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  s3 = [];
  for (let i=0; i<s1.length; i++)
    if (s3.indexOf(s1[i]) == -1)
      s3.push(s1[i]);
  for (let i=0; i<s2.length; i++)
  if (s3.indexOf(s2[i]) == -1)
      s3.push(s2[i]);
return s3.sort().join("");
}
console.log(longest("aretheyhere", "yestheyarehere"));

// Task 19 (Jaden Casing Strings)

// String.prototype.toJadenCase = function () {
//   let result = this;
//   if (this.length !== 0) {
//     result = this.split(" ").map(function(word) {
//       return word.substring(0, 1).toUpperCase() + word.substring(1);
//     }).join(" ");
//   }

//   return result;
// };

// Task 20 (Find the missing letter)

function findMissingLetter(array)
{
  for (let i=0; i<array.length-1; i++)
    if ((array[i+1].charCodeAt() - array[i].charCodeAt()) == 2)
      return  String.fromCharCode(array[i].charCodeAt()+1)
}
console.log (findMissingLetter(['O','Q','R','S']))

// Task 21 (Who likes it?)

function likes(names) {
  switch (names.length){
    case 0 : return "no one likes this";
    case 1 : return (names[0] + " likes this");
    case 2 : return (names[0] + " and " + names[1] + " like this");
    case 3 : return (names[0]+", "+names[1]+" and "+names[2]+" like this");
    default: {
      let n = names.length-2;
      let str = names[0]+", "+names[1]+" and "+ n +" others like this";
      return (str);
    }
  }
}
console.log(likes(['Alex', 'Jacob']))

// Task 22 (Who likes it?)

function deleteNth(arr,n){
  let getArr= [], cnt;
  
  for (let i=0; i<arr.length; i++){
    cnt = 0;
    for (let j=0; j<getArr.length; j++){
      if (arr[i] == getArr[j])
        cnt++;
    }
    if (cnt < n)
      getArr.push(arr[i]);
    
  }
  return getArr
}
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))

// Task 23 (Persistent Bugger.)

function persistence(num) {
  while (num.toString().length = 1){
    let pr=1;
    for (let i=0; i<num.toString().length; i++){
      pr*=num[i];
    }
  }
}