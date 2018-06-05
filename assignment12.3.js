    Object.map=function(array1,number1){ //map function takes 2 parameters, first is array1 and second is a callback function that accepts single parameter number1.
    var result=[];
    Object.keys(array1).forEach(function(number2){ // foreach method calls the callback function one time for each element present in the array, in ascending order.
        result[number2]=number1.call(array1,array1[number2]);
    });
        return result; //invokes the given callback and captures the return value into new result array.
    }
/* map function takes 2 parameters, first is an array and second is a callback function that accepts single parameter num
map function would iterate on the array and invokes the given callback, captures the return value into new result array.
Upon complete of input array iteration map function would return the array that holds the result of applying callback function on every element in mapResult object*/
    mapResult=Object.map([2,4,6],function(num){ 
        return num * 2;
    });
