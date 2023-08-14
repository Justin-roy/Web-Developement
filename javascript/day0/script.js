// sum of a + b

// let a;
// let b;
// a = window.prompt("Enter value of a: ");
// a = Number(a);
// b = window.prompt("Enter value of b: ");
// b = Number(b);

// console.log("Sum of a+b = ", a + b);
/***************************************************************************** */
// math formula

// let a = 12.22;

// // a = Math.ceil(a);//13
// // a = Math.floor(a); //12
// // a = Math.round(a); //12
// console.log(a);
/***************************************************************************** */

// find max min

// let a = 45;
// let b = 15;
// let c = 5;

// let max = Math.max(a, b);
// let min = Math.min(a, b, c);
// console.log(max);
// console.log(min);
/***************************************************************************** */

let a;
let b;
let c;
document.getElementById("submitbtn").onclick = function () {
  a = document.getElementById("atextBox").value;
  a = Number(a);
  b = document.getElementById("btextBox").value;
  b = Number(b);
  c = a + b;
  document.getElementById("clable").innerHTML = "Sum of A+b = " + c;
};
