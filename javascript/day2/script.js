let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;

console.log(sum(a,b,c,d));
// spread operator
function sum(...number){
    let sum = 0;
    for(let i of number)
    { 
        sum += i;
    }
    return sum;
}