// Arrays Home work

//<<<<<<<<<<<<<<<<___________1
//Given an array of strings and numbers. Print the number of integers and the number of
//strings in the array.
// [1, ‘10’, ‘hi’, 2, 3]

arr = [1, '10', 'hi', 2, 3, 4, 'ok'];


    let str = 0;
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == "string") {
            str += 1;
        }else{
            num += 1;
        }
    }
    console.log("typr of strings is -" + str);
    console.log("typr of Integer is -" + num);


//<<<<<<<<<<<<<<<<<< ______________2
//Write a function which receives an array and a number as arguments and returns a new
//array from the elements of the given array which are larger than the given number.
//[10, 25, 16, -5, 30, 15, 24] , 16 -> [25, 30, 24]

let arr = [10, 25, 16, -5, 30, 15, 24];
let arr2 = [];
function arrMaxNums(arr,num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            arr2.push(arr[i]);
        }
    }
    if (arr2.length >= 1) {
        return arr2
    }else{
        console.log("Such values do not exist");
    }
}

//<<<<<<<<<<<<<<<<<< ______________3
//Given an array of numbers which is almost sorted in ascending order.
//Find the index where sorting, order is violated.
let arr = [-8,-3,15,7,18,20,24]
function fnMissIndex(arr) {
    //debugger
    let tmp = -Infinity;
    for (let i = 0; i < arr.length; i++) {  
        if (tmp < arr[i]) {
            tmp = arr[i]
        }else{
            return i;
        }
    }
}


//<<<<<<<<<<<<<<<<<< ______________4
/*Given an object. Invert it (keys become values and values become keys). If there
is more than key for that given value create an array.
*/
function chek(obj,val) {
    return obj.hasOwnProperty(val)
}
obj = {
    a: "1",
    b: "2",
    c: "2",
    d: "2"
}
function fn(obj) {
    //debugger
    let newObj = {};
    for (let key in obj) {
        if (chek(newObj,obj[key])) {
            if (typeof(newObj[obj[key]]) !== "object") {
                newObj[obj[key]] = [newObj[obj[key]]]
                newObj[obj[key]][newObj[obj[key]].length] = key;
            }else{
                newObj[obj[key]][newObj[obj[key]].length] = key;    
            }
        }else{
            newObj[obj[key]] = key;    
        }
    }
    return newObj;
}