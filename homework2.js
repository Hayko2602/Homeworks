/*      ====================    1 homeWork   ============================== 
Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
years and more ). Also check that age in months is between 1 and 12.
*/

let ageDiscribe = prompt(" write mounth or Year");
let num = Number(prompt(" Please write age ?"));
let age = +num + " - " + ageDiscribe;


if(ageDiscribe === "mounth"){
    if(num >= 1 && num < 13){
        console.log(age + " Baby")
    }else{
        console.log("Incorrect input ...! above than 12 mounth write age ")
    }
}else if(ageDiscribe === "year"){
    if(num >= 1 && num < 3){
        console.log(age + " Toddler")
    }else if(num >= 3 && num < 13){
        console.log(age + "s old Child")
    }else if(num >= 13 && num < 18){
        console.log(age + "s old teenager")
    }else{
        console.log(age + "s old Adult")
    }
}else{
    console.log("Fill correctly!!!... Year or mounth in first request")
}


/*      ===================     2 homeWork   ===============
    Given three numbers. Sort them by the ascending order.


let num1 = 45
let num2 = 26
let num3 = 78
have no idea or enough knowlige resourses
*/
