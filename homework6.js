obj = {
    a: "1",
    b: "2",
}
obj2 = {};
function objRevers(obj) {
    //debugger
    for (let key in obj) {
        let keys = "";
        let keysIn = "";
        //console.log(obj[key]); value
        //console.log(key); Key
        keys += key;
        keysIn += obj[key];
        obj2[keysIn] = keys;
    }
    return obj2;
    //giving a new object oposit keys and values
}
