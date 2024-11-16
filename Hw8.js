
//                                              >>>>>>>>>>>>>_____1___________<<<<<<<<<<<<<<<<
//Given an array of numbers. Print frequency of each unique number. (Frequency is the
//count of particular element divided by the count of all elements) 

let arr = [1,2,2,1,3,4];
function partOfArr(arr) {
    //debugger
    let res = {};
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        if (!res.hasOwnProperty(String(arr[i]))) {
           for (let j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    res[String(arr[i])] = counter += (1/arr.length); 
                }
            }
        }
    }
    return res;
}


//                                              >>>>>>>>>>>>>_____1___________<<<<<<<<<<<<<<<<
/*Write a function, which receives an array as an argument which elements arrays of
numbers. Find biggest negative number of each array. Return product of that numbers.If
there is not any negative number in an array, ignore that one. Check that items of the
given array are arrays.*/


arr = [[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]
function negativMult(arr) {
    //debugger
    let res = 1;
    
    if (arr.length <= 1) {
        return "invalid argument";
    }
    for (let i = 0; i < arr.length; i++) {
        let tmp = -Infinity;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < 0) {
                if (tmp < arr[i][j]) {
                    tmp = arr[i][j];
                }
            }
        }
        if (tmp !== -Infinity) {
            res *= tmp;    
        }
        
    }
    return res;
}


//            >>>>>>>>>>>>>>>>>>___________ 3 _____________<<<<<<<<<<<<<<<<<<<<
/*Write a function, which receives two numbers as arguments and finds all numbers between
them such that each digit of the number is even. The numbers obtained should be printed in a
comma-separated sequence on a single line.*/

function individual(a,b) {
    //debugger
    if (a<b) {
        for (let i = a; i <= b; i++) {
            if (b < 100) {
                if ((Math.floor(i/10))%2 == 0) {
                    if ((i - (Math.floor(i/10) * 10)) % 2 == 0) {
                        console.log(i)
                    }
                }
            }else if (a > 100) {
                if (Math.floor(i / 100) % 2 == 0) {
                     if (Math.floor(i / 10) % 2 == 0) {
                        if ((i - (Math.floor(i/10)*10)) % 2 == 0) {
                            console.log(i)
                        }
                    }   
                }
            }else{
                if (i < 100) {
                    if ((Math.floor(i/10))%2 == 0) {
                        if ((i - (Math.floor(i/10) * 10)) % 2 == 0) {
                            console.log(i)
                        }
                    }
                }else{
                    if (Math.floor(i / 100) % 2 == 0) {
                        if (Math.floor(i / 10) % 2 == 0) {
                            if ((i - (Math.floor(i/10)*10)) % 2 == 0) {
                                console.log(i)
                            }
                        }   
                    }
                }
            }
        }
        //return "Such numbers does not exist.";
    }
    else {
        return "Incorect imput";
    }
}
