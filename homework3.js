
//  ~~~~~~~~~ Mutq  for tveri gumary
let sum = 0;

for (let a = +prompt('write num') ; a > 0; a = Math.floor(a / 10)) {
    
    sum = sum + a % 10;
    
}
console.log(sum);

//  ~~~~~~~~~ Mutq  for tveri bazmapatiky
let sum = 1;

for (let a = +prompt('write num') ; a > 0; a = Math.floor(a / 10)) {
    
    sum = sum * (a % 10);
    
}
console.log(sum);






// ~~~~~~~~~~~~~~   while tveri gumry
debugger
let num = 1234;
let sum = 0;

while (num > 0) {
    
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
}
console.log(sum);


// ~~~~~~~~~~~~~~   while tveri Bazmapatiky
debugger
let num = 1234;
let sum = 1;

while (num > 0) {
    
    sum = sum * (num % 10);
    num = Math.floor(num / 10);
}
console.log(sum);