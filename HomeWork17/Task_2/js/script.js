function calculator(var1, var2){
    this.sum = function(){
        return var1 + var2;
    }
    this.mul = function(){
        return var1 * var2;
    }
};
calculator1 = new calculator(5,6);
calculator2 = new calculator(2,3);

alert( calculator1.sum() ); 
alert( calculator2.mul() ); 