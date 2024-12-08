/*
const body = document.querySelector("body");

body.style.backgroundColor = "black";

const button = document.getElementById("button");

const input = document.getElementById("input");

const inpValue = input.value;

const paintDiv = document.getElementById("divPleace");

button.addEventListener("click", function() {
    paintDiv.innerHTML = "";
   for (let i = 1; i <= Number(input.value); i++) {
    const newdiv = document.createElement("div");
    newdiv.classList.add("addedDiv");
    newdiv.append(i);
    paintDiv.append(newdiv);
   }
})
*/

const div1 = document.getElementById("in-1")
const div2 = document.getElementById("in-2")
const div3 = document.getElementById("in-3")
const div4 = document.getElementById("in-4")
const div5 = document.getElementById("in-5")
const div6 = document.getElementById("in-6")
const div7 = document.getElementById("in-7")
const div8 = document.getElementById("in-8")
const div9 = document.getElementById("in-9")
const wrap = document.getElementById("wrap")


wrap.addEventListener("click",function(e) {
    console.log(e.target.id);
    let divselect = document.getElementById(e.target.id);
    /*console.log(divId); */
    let divst = document.querySelector("#"+e.target.id);
    divst.style.opacity = 0.6;
    divselect.innerHTML = "Selected Target DIV by ID - "+e.target.id;

})