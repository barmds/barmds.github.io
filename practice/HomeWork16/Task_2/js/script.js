let str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quo aperiam officiis pariatur odio maxime nisi tempore quidem dignissimos molestiae?";
let myArr = str.split(" ");
for (let i=0; i<myArr.length; i++){
    if (myArr[i].length>=5){
        console.log(myArr[i]);
    }
}

