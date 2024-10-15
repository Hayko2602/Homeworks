

// ============== >> 1 << Verjin tvi texappoxutyuny skbic sksvac
function lastNumToFirst(a) {
    a = String(a);
    lstNum = a[a.length - 1];
    let res = "";
    //console.log(lstNum);
    if (lstNum == 0) {
        console.log(+a);
    }else{
        for (let i = 0; i < (a.length - 1); i++) {
            res += a[i];
            
        }
        console.log(lstNum + res);
    }
}

lastNumToFirst(1002);

// ============================= >> 2 << tvi haytnaberum tvanshanneri bazmutyan mej
function numCompare(a,b) {
    b = String(b);
    a = String(a);
    let msg;
    for (let i = 0; i < b.length; i++) {
        if (a == b[i]) { 
            msg = true;            
        }
    }
    if (msg == true) {
        console.log("yes");
    }else{
        console.log("No");
    }
}

numCompare(4,4545166);

// ======================== >> 3 <<  Mutqagrel tiv tpel hakarak hertakanutyamb

function reverseNum(a) {
    a = String(a);
    //console.log(a.length);
    let res = "";
    for (let i = (a.length - 1); i >= 0 ; i--) {
        res += a[i];
    }
    let result = res;
    console.log(result);
}

reverseNum(1234567);

// ======================  >> 4 <<

//chem hascrel lucel - anavart 


function maxMinNumDifferent(a) {
    let num = String(a);
    let res = "";
    for (let i = 0; i < num.length; i++) {
        let max = num[i] + ",";
        res += max;
    }
    
    //num = +res;
    //Math.max(num);
    num = res;
    console.log(num);
}



