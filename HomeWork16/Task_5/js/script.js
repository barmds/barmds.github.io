let str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quo aperiam officiis pariatur odio maxime nisi tempore quidem dignissimos molestiae?";
let arr = str.split(" ");
let max = 0;
let maxWorld = "";

arr.forEach(function(item, i){
    
    if (max < item.length){
        max = item.length;
        // maxWorld = item;
    }
})

arr.forEach(function(item, i){
    
    if (max == item.length){
        console.log(item);
    }
})

